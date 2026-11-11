import { useMemo } from "react";
import { useLanguage } from "./useLanguage";
import { getEvents } from "./events";

// Events come from the Decap Markdown files, in the visitor's language with
// English as fallback. Edits happen in /admin; the next build publishes them.
export const useEventStore = () => {
  const { language } = useLanguage();
  return useMemo(() => {
    const events = getEvents(language);
    return {
      events,
      getEventById: (id: string) => events.find((event) => event.id === id) ?? null,
    };
  }, [language]);
};
