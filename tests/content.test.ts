// Checks the files that Embassy staff edit in Decap (/admin). These run on every
// pull request (see .github/workflows/ci.yml), so a broken edit is caught
// before it is published.
import { describe, expect, test } from "bun:test";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { parse } from "yaml";

const ISO_DATE = /^\d{4}-\d{2}-\d{2}/;
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const FILE_NAME = /^\d{4}-\d{2}-\d{2}-[a-z0-9-]+(?:\.(en|de|pt))?\.md$/;

const readFrontmatter = (path: string) => {
  const raw = readFileSync(path, "utf8");
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) throw new Error(`${path}: missing frontmatter block (--- ... ---)`);
  const data = parse(match[1]);
  if (!data || typeof data !== "object") throw new Error(`${path}: frontmatter is not a set of fields`);
  return { data: data as Record<string, unknown>, body: match[2] };
};

const markdownFiles = (folder: string) =>
  existsSync(folder) ? readdirSync(folder).filter((name) => name.endsWith(".md")) : [];

/** "/uploads/x.jpg" must exist as "public/uploads/x.jpg". External links are allowed. */
const expectPublicFile = (value: unknown, where: string) => {
  if (typeof value !== "string" || !value.trim()) return;
  if (/^https?:\/\//.test(value)) return;
  const path = `public/${value.replace(/^\//, "")}`;
  if (!existsSync(decodeURI(path))) throw new Error(`${where}: file "${value}" was not found in public/`);
};

for (const folder of ["content/news", "content/events"]) {
  describe(folder, () => {
    const files = markdownFiles(folder);
    const entries = new Map<string, string[]>();
    for (const name of files) {
      const slug = name.replace(/\.(en|de|pt)\.md$|\.md$/, "");
      entries.set(slug, [...(entries.get(slug) ?? []), name]);
    }

    test("file names follow YYYY-MM-DD-title(.language).md", () => {
      for (const name of files) expect(name).toMatch(FILE_NAME);
    });

    test("every entry has an English version with title, date and valid ID", () => {
      const ids = new Set<string>();
      for (const [slug, names] of entries) {
        const english = names.find((n) => n.endsWith(".en.md")) ?? names.find((n) => !/\.(de|pt)\.md$/.test(n));
        if (!english) throw new Error(`${folder}/${slug}: the English version is missing`);
        const { data } = readFrontmatter(`${folder}/${english}`);
        const where = `${folder}/${english}`;
        if (!String(data.title ?? "").trim()) throw new Error(`${where}: the English title is empty`);
        if (!ISO_DATE.test(String(data.date ?? ""))) throw new Error(`${where}: date must look like 2026-07-22`);
        const id = String(data.id ?? slug);
        if (!SLUG.test(id)) throw new Error(`${where}: ID "${id}" may only contain lowercase letters, numbers and hyphens`);
        if (ids.has(id)) throw new Error(`${where}: ID "${id}" is already used by another entry`);
        ids.add(id);
        expectPublicFile(data.image, where);
      }
    });

    test("translations parse correctly", () => {
      for (const name of files) readFrontmatter(`${folder}/${name}`);
    });
  });
}

describe("content/documents", () => {
  test("every document has a title, date and an existing file", () => {
    for (const name of markdownFiles("content/documents")) {
      const where = `content/documents/${name}`;
      const { data } = readFrontmatter(where);
      if (!String(data.title ?? "").trim()) throw new Error(`${where}: title is empty`);
      if (!ISO_DATE.test(String(data.date ?? ""))) throw new Error(`${where}: date must look like 2026-07-22`);
      if (!String(data.file ?? "").trim()) throw new Error(`${where}: no PDF file attached`);
      expectPublicFile(data.file, where);
    }
  });
});

describe("content/settings", () => {
  const read = (name: string) => JSON.parse(readFileSync(`content/settings/${name}`, "utf8"));

  test("contact details are valid", () => {
    const contact = read("contact.json");
    expect(contact.email).toMatch(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
    expect(contact.phone).toMatch(/^\+[\d\s]+$/);
    expect(contact.postalCode).toMatch(/^\d{5}$/);
    expect(String(contact.street).trim()).not.toBe("");
  });

  test("closure days are valid, unique dates", () => {
    const dates = read("closures.json").dates.map((entry: { date: string }) => String(entry.date).slice(0, 10));
    for (const date of dates) expect(date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(new Set(dates).size).toBe(dates.length);
  });

  test("opening hours exist in every language", () => {
    for (const language of ["en", "de", "pt"]) {
      const hours = read(`hours.${language}.json`);
      expect(String(hours.summaryLine1).trim()).not.toBe("");
      expect(String(hours.summaryLine2).trim()).not.toBe("");
      expect(Array.isArray(hours.lines) && hours.lines.length > 0).toBe(true);
    }
  });

  test("the CMS edits exactly these settings files and fields", () => {
    const config = parse(readFileSync("public/admin/config.yml", "utf8"));
    const collection = config.collections.find((item: { name: string }) => item.name === "site_settings");
    for (const file of collection.files) {
      const content = JSON.parse(readFileSync(file.file, "utf8"));
      expect(file.fields.map((field: { name: string }) => field.name).sort()).toEqual(Object.keys(content).sort());
    }
  });
});
