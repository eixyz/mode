import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { NewsItem } from './news';
import { newsItems as defaultNewsItems } from './news';

interface NewsStore {
  newsItems: NewsItem[];
  addNews: (item: Omit<NewsItem, 'id'>) => void;
  updateNews: (id: string, item: Partial<NewsItem>) => void;
  deleteNews: (id: string) => void;
  getNewsById: (id: string) => NewsItem | null;
}

const generateId = (title: string) => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '-' + Date.now();
};

export const useNewsStore = create<NewsStore>()(
  persist(
    (set, get) => ({
      newsItems: defaultNewsItems,
      addNews: (item) => set((state) => ({
        newsItems: [{ ...item, id: generateId(item.title) }, ...state.newsItems]
      })),
      updateNews: (id, updatedItem) => set((state) => ({
        newsItems: state.newsItems.map((item) =>
          item.id === id ? { ...item, ...updatedItem } : item
        )
      })),
      deleteNews: (id) => set((state) => ({
        newsItems: state.newsItems.filter((item) => item.id !== id)
      })),
      getNewsById: (id) => get().newsItems.find((n) => n.id === id) ?? null,
    }),
    {
      name: 'embassy-news-storage-v2',
    }
  )
);