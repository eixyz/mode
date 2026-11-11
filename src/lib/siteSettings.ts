// Staff-editable embassy settings (Decap "Embassy Settings" collection).
// Contact details are language-neutral; opening hours exist once per language.
// Empty CMS values fall back to the translation dictionaries.
import contact from "../../content/settings/contact.json";
import closures from "../../content/settings/closures.json";
import hoursEn from "../../content/settings/hours.en.json";
import hoursDe from "../../content/settings/hours.de.json";
import hoursPt from "../../content/settings/hours.pt.json";

export type SiteLanguage = "en" | "de" | "pt";

export type OpeningHours = {
  summaryLine1: string;
  summaryLine2: string;
  lines: string[];
};

const clean = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export const contactDetails = {
  phone: clean(contact.phone) || "+49 30 3987 6500",
  fax: clean(contact.fax),
  email: clean(contact.email) || "info@mozambique-embassy.de",
  street: clean(contact.street) || "Stromstraße 47",
  postalCode: clean(contact.postalCode) || "10551",
};

/** "tel:" link target, e.g. "+49 30 3987 6500" -> "tel:+493039876500". */
export const phoneHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

const placeNames: Record<SiteLanguage, { city: string; country: string }> = {
  en: { city: "Berlin", country: "Germany" },
  de: { city: "Berlin", country: "Deutschland" },
  pt: { city: "Berlim", country: "Alemanha" },
};

export const getAddressLines = (language: SiteLanguage) => {
  const place = placeNames[language] ?? placeNames.en;
  return [contactDetails.street, `${contactDetails.postalCode} ${place.city}`, place.country];
};

export const getAddressText = (language: SiteLanguage) => getAddressLines(language).join(", ");

const hoursByLanguage: Record<SiteLanguage, Partial<OpeningHours>> = {
  en: hoursEn,
  de: hoursDe,
  pt: hoursPt,
};

/** Opening hours for a language, or undefined fields when staff left them empty. */
export const getOpeningHours = (language: SiteLanguage): Partial<OpeningHours> => {
  const hours = hoursByLanguage[language] ?? {};
  const lines = Array.isArray(hours.lines) ? hours.lines.map(clean).filter(Boolean) : [];
  return {
    summaryLine1: clean(hours.summaryLine1) || undefined,
    summaryLine2: clean(hours.summaryLine2) || undefined,
    lines: lines.length ? lines : undefined,
  };
};

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

/** Days on which the embassy is closed and no appointments can be booked (YYYY-MM-DD). */
export const closureDates: string[] = (Array.isArray(closures.dates) ? closures.dates : [])
  .map((entry: { date?: unknown }) => clean(entry?.date).slice(0, 10))
  .filter((date) => ISO_DATE.test(date));
