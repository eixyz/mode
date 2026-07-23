import { loadNews } from "./content";

export type NewsItem = {
  id: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  content?: string;
  image?: string;
};

// Source of truth: Markdown files under /content/news managed by Decap CMS.
export const newsItems: NewsItem[] = loadNews();

export function getNewsById(id: string) {
  return newsItems.find((n) => n.id === id) ?? null;
}
