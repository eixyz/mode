// Decap edits only these isolated service files. All other translations stay
// in the existing translation dictionaries, also serving as safe fallbacks.
import passportsEn from "../../content/pages/passports.en.json";
import passportsDe from "../../content/pages/passports.de.json";
import passportsPt from "../../content/pages/passports.pt.json";
import visasEn from "../../content/pages/visas.en.json";
import visasDe from "../../content/pages/visas.de.json";
import visasPt from "../../content/pages/visas.pt.json";

const serviceContent: Record<string, Record<string, Record<string, string>>> = {
  en: { passportsPage: passportsEn, visasPage: visasEn },
  de: { passportsPage: passportsDe, visasPage: visasDe },
  pt: { passportsPage: passportsPt, visasPage: visasPt },
};

export const getServiceText = (language: string, path: string): string | undefined => {
  const [section, key, extra] = path.split(".");
  if (!section || !key || extra) return undefined;
  const value = serviceContent[language]?.[section]?.[key];
  return typeof value === "string" && value.trim() ? value : undefined;
};