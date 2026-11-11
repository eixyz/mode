import { loadEvents, type ContentLanguage } from "./content";

export type EmbassyEvent = {
  id: string;
  date: string;
  time: string;
  category: string;
  title: string;
  summary: string;
  content?: string;
  venue: string;
  image?: string;
  ctaLabel: string;
  featured?: boolean;
};

export const sortEmbassyEvents = (events: EmbassyEvent[]) =>
  [...events].sort(
    (left, right) => new Date(left.date).getTime() - new Date(right.date).getTime(),
  );

// Exactly one event is featured: the first one marked "featured", otherwise the earliest.
const normalizeFeatured = (events: EmbassyEvent[]) => {
  const firstFeaturedId = events.find((item) => item.featured)?.id;
  if (!firstFeaturedId && events.length > 0) {
    return events.map((item, index) => ({ ...item, featured: index === 0 }));
  }
  return events.map((item) => ({ ...item, featured: item.id === firstFeaturedId }));
};

// Source of truth: Markdown files under /content/events managed by Decap CMS,
// one file per language (slug.en.md, slug.de.md, slug.pt.md).
const prepare = (language: ContentLanguage) => normalizeFeatured(sortEmbassyEvents(loadEvents(language)));

const eventsByLanguage: Record<ContentLanguage, EmbassyEvent[]> = {
  en: prepare("en"),
  de: prepare("de"),
  pt: prepare("pt"),
};

export const getEvents = (language: ContentLanguage) => eventsByLanguage[language] ?? eventsByLanguage.en;

export const getUpcomingEvents = (language: ContentLanguage = "en") => getEvents(language);

export const getEventContactSubject = (event: EmbassyEvent) => `Information request: ${event.title}`;

export const getEventContactLink = (event: EmbassyEvent) =>
  `/contact?subject=${encodeURIComponent(getEventContactSubject(event))}`;
