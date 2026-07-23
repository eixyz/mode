import { create } from "zustand";
import type { EmbassyEvent } from "./events";
import { embassyEvents as defaultEvents, sortEmbassyEvents } from "./events";

interface EventStore {
  events: EmbassyEvent[];
  addEvent: (item: Omit<EmbassyEvent, "id">) => void;
  updateEvent: (id: string, item: Partial<EmbassyEvent>) => void;
  deleteEvent: (id: string) => void;
  getEventById: (id: string) => EmbassyEvent | null;
}

const generateId = (title: string) =>
  `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}-${Date.now()}`;

const normalizeFeatured = (events: EmbassyEvent[]) => {
  const firstFeaturedId = events.find((item) => item.featured)?.id;
  if (!firstFeaturedId && events.length > 0) {
    return events.map((item, index) => ({ ...item, featured: index === 0 }));
  }
  return events.map((item) => ({ ...item, featured: item.id === firstFeaturedId }));
};

const sortAndNormalize = (events: EmbassyEvent[]) => normalizeFeatured(sortEmbassyEvents(events));

// Content is sourced from Markdown files (Decap CMS). No persistence — the
// admin store now only exists for legacy in-memory previewing.
export const useEventStore = create<EventStore>((set, get) => ({
  events: sortAndNormalize(defaultEvents),
  addEvent: (item) =>
    set((state) => ({
      events: sortAndNormalize([{ ...item, id: generateId(item.title) }, ...state.events]),
    })),
  updateEvent: (id, updatedItem) =>
    set((state) => ({
      events: sortAndNormalize(
        state.events.map((item) => (item.id === id ? { ...item, ...updatedItem } : item)),
      ),
    })),
  deleteEvent: (id) =>
    set((state) => ({
      events: sortAndNormalize(state.events.filter((item) => item.id !== id)),
    })),
  getEventById: (id) => get().events.find((event) => event.id === id) ?? null,
}));
