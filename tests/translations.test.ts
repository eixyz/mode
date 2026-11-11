import { describe, expect, test } from "bun:test";
import en from "../src/lib/translations/en.json";
import de from "../src/lib/translations/de.json";
import pt from "../src/lib/translations/pt.json";
import passportsPt from "../content/pages/passports.pt.json";
import visasPt from "../content/pages/visas.pt.json";

/** All key paths ("contact.form.sendButton"), so a missing translation shows up by name. */
const paths = (value: unknown, prefix = ""): string[] =>
  value && typeof value === "object" && !Array.isArray(value)
    ? Object.entries(value).flatMap(([key, child]) => paths(child, prefix ? `${prefix}.${key}` : key))
    : [prefix];

describe("website translations", () => {
  test("German and Portuguese have exactly the English keys", () => {
    const english = paths(en).sort();
    expect(paths(de).sort()).toEqual(english);
    expect(paths(pt).sort()).toEqual(english);
  });

  test("Portuguese uses European Portuguese forms", () => {
    // Brazilian forms that slipped in before; Mozambique follows the European norm.
    // Covers the website strings and the passport/visa texts staff edit in /admin
    // (content/pages/*.pt.json, which take priority on the site).
    const brazilian = /\b(você|contato|registro|equipe|baixar|salvar|excluir|gerenciar|sobrenome|esportes?|planej\w*)\b|patrimônio|econômic/i;
    const sources = { pt, passportsPt, visasPt };
    const offenders = Object.entries(sources).flatMap(([name, source]) =>
      paths(source)
        .map((path) => [`${name}:${path}`, path.split(".").reduce<unknown>((node, key) => (node as Record<string, unknown>)[key], source)] as const)
        .filter(([, value]) => typeof value === "string" && brazilian.test(value)),
    );
    expect(offenders).toEqual([]);
  });
});
