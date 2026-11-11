import { useMemo } from "react";
import { useLanguage } from "./useLanguage";
import { getNewsItems } from "./news";

// News comes from the Decap Markdown files, in the visitor's language with
// English as fallback. Edits happen in /admin; the next build publishes them.
export const useNewsStore = () => {
  const { language } = useLanguage();
  return useMemo(() => {
    const newsItems = getNewsItems(language);
    return {
      newsItems,
      getNewsById: (id: string) => newsItems.find((n) => n.id === id) ?? null,
    };
  }, [language]);
};
