import type { NewsItem } from "./news";
import type { EmbassyEvent } from "./events";
import { parse as parseYaml } from "yaml";

// Browser-safe frontmatter parser (avoids gray-matter's Buffer dep). Uses a real
// YAML parser because Decap wraps long values over several lines.
export function matter(raw: string): { data: Record<string, unknown>; content: string } {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!m) return { data: {}, content: raw };
  let data: Record<string, unknown> = {};
  try {
    const parsed = parseYaml(m[1]);
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) data = parsed as Record<string, unknown>;
  } catch {
    // Invalid frontmatter: show the entry with defaults rather than breaking the site.
    // tests/content.test.ts rejects such files before they are published.
  }
  return { data, content: m[2] };
}

// Vite: import raw markdown at build time. Decap CMS writes to these folders
// via GitHub; the next build picks them up.
const newsFiles = import.meta.glob("/content/news/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const eventFiles = import.meta.glob("/content/events/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const documentFiles = import.meta.glob("/content/documents/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const slugFromPath = (path: string) =>
  path.split("/").pop()!.replace(/\.md$/, "");

export type ContentLanguage = "en" | "de" | "pt";
const DEFAULT_LANGUAGE: ContentLanguage = "en";

const dateLocales: Record<ContentLanguage, string> = { en: "en-GB", de: "de-DE", pt: "pt-PT" };

const formatDisplayDate = (iso: string, language: ContentLanguage = DEFAULT_LANGUAGE) => {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat(dateLocales[language], {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(d);
};

type ParsedFile = { data: Record<string, unknown>; content: string };
type LocalizedEntry = Partial<Record<ContentLanguage, ParsedFile>>;

// Decap i18n ("multiple_files") stores one file per language: slug.en.md,
// slug.de.md, slug.pt.md. Files without a language suffix count as English.
const groupByEntry = (files: Record<string, string>) => {
  const entries = new Map<string, LocalizedEntry>();
  for (const [path, raw] of Object.entries(files)) {
    const name = slugFromPath(path);
    const match = /^(.*)\.(en|de|pt)$/.exec(name);
    const slug = match ? match[1] : name;
    const language = (match ? match[2] : DEFAULT_LANGUAGE) as ContentLanguage;
    const entry = entries.get(slug) ?? {};
    entry[language] = matter(raw);
    entries.set(slug, entry);
  }
  return entries;
};

const text = (value: unknown) =>
  typeof value === "string" ? value.trim() : typeof value === "number" ? String(value) : "";

/**
 * Returns the base file (shared fields such as date and image) and the file whose
 * text should be shown. A translation is used only if it has a title; otherwise
 * the English version is shown.
 */
const pickLanguage = (entry: LocalizedEntry, language: ContentLanguage) => {
  const base = entry[DEFAULT_LANGUAGE] ?? Object.values(entry)[0]!;
  const translated = entry[language];
  const useTranslation = Boolean(translated && text(translated.data.title));
  return { base, shown: useTranslation ? translated! : base, translated: useTranslation };
};

export const loadNews = (language: ContentLanguage = DEFAULT_LANGUAGE): NewsItem[] => {
  const items = [...groupByEntry(newsFiles)].map(([slug, entry]) => {
    const { base, shown, translated } = pickLanguage(entry, language);
    const body = shown.content.trim();
    const isoDate = String(base.data.date ?? "");
    const shownDisplayDate = text(shown.data.displayDate);
    return {
      item: {
        id: text(base.data.id) || slug,
        // An English "displayDate" is not shown on a German or Portuguese page.
        date:
          (translated || language === DEFAULT_LANGUAGE ? shownDisplayDate : "") ||
          formatDisplayDate(isoDate, language),
        category: text(base.data.category) || "Announcement",
        title: text(shown.data.title) || "Untitled",
        excerpt: text(shown.data.excerpt) || body.split("\n\n")[0] || "",
        content: body || undefined,
        image: text(base.data.image) || undefined,
      } satisfies NewsItem,
      sortKey: isoDate,
    };
  });

  items.sort((a, b) => b.sortKey.localeCompare(a.sortKey));
  return items.map(({ item }) => item);
};

export const loadEvents = (language: ContentLanguage = DEFAULT_LANGUAGE): EmbassyEvent[] =>
  [...groupByEntry(eventFiles)].map(([slug, entry]) => {
    const { base, shown } = pickLanguage(entry, language);
    const body = shown.content.trim();
    return {
      id: text(base.data.id) || slug,
      date: String(base.data.date ?? "").slice(0, 10),
      time: text(base.data.time),
      category: text(base.data.category) || "Public",
      title: text(shown.data.title) || "Untitled",
      summary: text(shown.data.summary) || body.split("\n\n")[0] || "",
      content: body || undefined,
      venue: text(shown.data.venue) || text(base.data.venue),
      image: text(base.data.image) || undefined,
      ctaLabel: text(shown.data.ctaLabel) || text(base.data.ctaLabel) || "Request information",
      featured: Boolean(base.data.featured),
    };
  });
export type DocumentItem = {
  id: string;
  title: string;
  date: string;
  isoDate: string;
  category: string;
  file: string;
  description?: string;
};

export const loadDocuments = (): DocumentItem[] => {
  const items: DocumentItem[] = Object.entries(documentFiles).map(([path, raw]) => {
    const { data, content } = matter(raw);
    return {
      id: slugFromPath(path),
      title: (data.title as string) || "Untitled",
      date: formatDisplayDate(String(data.date ?? "")),
      isoDate: String(data.date ?? "").slice(0, 10),
      category: (data.category as string) || "Other",
      file: (data.file as string) || "",
      description: (data.description as string) || content.trim() || undefined,
    };
  });
  items.sort((a, b) => b.isoDate.localeCompare(a.isoDate));
  return items.filter((item) => item.file);
};
