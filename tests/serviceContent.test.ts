import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { parse } from "yaml";
import { getServiceText } from "../src/lib/serviceContent";
import en from "../src/lib/translations/en.json";
import de from "../src/lib/translations/de.json";
import pt from "../src/lib/translations/pt.json";

describe("Decap service content", () => {
  test("all existing service values are preserved across EN, DE, PT", () => {
    for (const [language, dictionary] of Object.entries({ en, de, pt })) {
      for (const section of ["passportsPage", "visasPage"] as const) {
        for (const [key, value] of Object.entries(dictionary[section])) {
          expect(getServiceText(language, `${section}.${key}`)).toBe(value);
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