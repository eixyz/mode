import { describe, expect, test } from "bun:test";
import { legalContent } from "../src/lib/legal";

const documents = ["privacy", "terms", "accessibility"] as const;
const languages = ["de", "pt"] as const;

describe("legal texts", () => {
  for (const doc of documents) {
    test(`${doc}: German and Portuguese match the English structure`, () => {
      const english = legalContent.en[doc];
      for (const language of languages) {
        const other = legalContent[language][doc];
        expect(other.updatedIso).toBe(english.updatedIso);
        expect(other.sections.length).toBe(english.sections.length);
        english.sections.forEach((section, i) => {
          const counterpart = other.sections[i];
          // Same numbering ("3." in every language), same number of paragraphs and bullets.
          expect(counterpart.title.match(/^\d+\./)?.[0]).toBe(section.title.match(/^\d+\./)?.[0]);
          expect(counterpart.paragraphs?.length ?? 0).toBe(section.paragraphs?.length ?? 0);
          expect(counterpart.bullets?.length ?? 0).toBe(section.bullets?.length ?? 0);
        });
      }
    });
  }

  test("links are HTTPS and every language cites the same ones", () => {
    const linksOf = (language: "en" | "de" | "pt") =>
      JSON.stringify(legalContent[language]).match(/https?:\/\/[^\s",]+/g)?.sort() ?? [];
    for (const link of linksOf("en")) expect(link.startsWith("https://")).toBe(true);
    for (const language of languages) expect(linksOf(language)).toEqual(linksOf("en"));
  });

  test("ISO dates are valid", () => {
    for (const doc of documents) expect(legalContent.en[doc].updatedIso).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});
