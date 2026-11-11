import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { parse } from "yaml";
import { getServiceText } from "../src/lib/serviceContent";
import en from "../src/lib/translations/en.json";
import de from "../src/lib/translations/de.json";
import pt from "../src/lib/translations/pt.json";

describe("Decap service content", () => {
  // Staff edit these texts in /admin, so they may differ from the translation
  // files (which are only the fallback). Check that every text still exists and
  // is non-empty, not that it is unchanged; otherwise every CMS edit would fail CI.
  test("every service text exists and is non-empty in EN, DE, PT", () => {
    for (const [language, dictionary] of Object.entries({ en, de, pt })) {
      for (const section of ["passportsPage", "visasPage"] as const) {
        for (const key of Object.keys(dictionary[section])) {
          const value = getServiceText(language, `${section}.${key}`);
          if (!value) throw new Error(`content/pages: ${language} ${section}.${key} is missing or empty`);
        }
      }
    }
  });
  test("CMS exposes exactly six isolated service files with every field required", () => {
    const config = parse(readFileSync("public/admin/config.yml", "utf8"));
    const collection = config.collections.find((item: { name: string }) => item.name === "service_pages");
    expect(collection.files).toHaveLength(6);
    for (const file of collection.files) {
      expect(file.file.startsWith("content/pages/")).toBe(true);
      const content = JSON.parse(readFileSync(file.file, "utf8"));
      expect(file.fields.map((field: { name: string }) => field.name).sort()).toEqual(Object.keys(content).sort());
      expect(file.fields.every((field: { required: boolean }) => field.required === true)).toBe(true);
    }
    expect(config.backend.repo).toBe("eixyz/mode");
    expect(config.publish_mode).toBe("editorial_workflow");
  });
  test("missing CMS text leaves fallback possible", () => {
    expect(getServiceText("en", "passportsPage.missing")).toBeUndefined();
    expect(getServiceText("unknown", "visasPage.pageTitle")).toBeUndefined();
  });
});