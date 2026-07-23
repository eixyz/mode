import { create } from 'zustand';
import type { NewsItem } from './news';
import { newsItems as defaultNewsItems } from './news';

interface NewsStore {
  newsItems: NewsItem[];
  addNews: (item: Omit<NewsItem, 'id'>) => void;
  updateNews: (id: string, item: Partial<NewsItem>) => void;
  deleteNews: (id: string) => void;
  getNewsById: (id: string) => NewsItem | null;
}

const generateId = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '-' + Date.now();

// Content is sourced from Markdown files (Decap CMS). The store is kept for
// legacy admin UI compatibility but is no longer persisted — Decap writes to
// GitHub and the next build re-reads the files.
export const useNewsStore = create<NewsStore>((set, get) => ({
  newsItems: defaultNewsItems,
  addNews: (item) => set((state) => ({
    newsItems: [{ ...item, id: generateId(item.title) }, ...state.newsItems],
  })),
  updateNews: (id, updatedItem) => set((state) => ({
    newsItems: state.newsItems.map((item) =>
      item.id === id ? { ...item, ...updatedItem } : item
    ),
  })),
  deleteNews: (id) => set((state) => ({
    newsItems: state.newsItems.filter((item) => item.id !== id),
  })),
  getNewsById: (id) => get().newsItems.find((n) => n.id === id) ?? null,
}));
