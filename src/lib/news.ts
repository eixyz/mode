import { loadNews, type ContentLanguage } from "./content";

export type NewsItem = {
  id: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  content?: string;
  image?: string;
  /** Publish date, YYYY-MM-DD (orders the homepage feed). */
  isoDate: string;
  /** "Highlight on homepage" in /admin. */
  featured: boolean;
};

// Source of truth: Markdown files under /content/news managed by Decap CMS,
// one file per language (slug.en.md, slug.de.md, slug.pt.md).
const newsByLanguage: Record<ContentLanguage, NewsItem[]> = {
  en: loadNews("en"),
  de: loadNews("de"),
  pt: loadNews("pt"),
};

export const getNewsItems = (language: ContentLanguage) => newsByLanguage[language] ?? newsByLanguage.en;

export function getNewsById(id: string, language: ContentLanguage = "en") {
  return getNewsItems(language).find((n) => n.id === id) ?? null;
}
