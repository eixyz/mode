import { loadEvents, type ContentLanguage } from "./content";
import { isUpcoming, todayIso } from "./dates";

export type EventDetailRow = { label: string; value: string };

export type EmbassyEvent = {
  id: string;
  /** Event date, YYYY-MM-DD. */
  date: string;
  /** Publish date, YYYY-MM-DD; orders events together with news on the homepage. */
  published: string;
  time: string;
  category: string;
  title: string;
  summary: string;
  content?: string;
  venue: string;
  image?: string;
  /** Empty: pages show the translated "Request information". */
  ctaLabel: string;
  /** "Highlight on homepage" in /admin; only applies until the event date has passed. */
  featured?: boolean;
  /** Programme / key details, e.g. { label: "15:00", value: "Meeting with community leaders" }. */
  details: EventDetailRow[];
};

export { isUpcoming, todayIso };

export const sortEmbassyEvents = (events: EmbassyEvent[]) =>
  [...events].sort((left, right) => left.date.localeCompare(right.date));

/** Upcoming events, soonest first, then past events, most recent first. */
export const splitEvents = (events: EmbassyEvent[], today = todayIso()) => ({
  upcoming: sortEmbassyEvents(events.filter((event) => isUpcoming(event, today))),
  past: sortEmbassyEvents(events.filter((event) => !isUpcoming(event, today))).reverse(),
});

// Source of truth: Markdown files under /content/events managed by Decap CMS,
// one file per language (slug.en.md, slug.de.md, slug.pt.md).
const eventsByLanguage: Record<ContentLanguage, EmbassyEvent[]> = {
  en: sortEmbassyEvents(loadEvents("en")),
  de: sortEmbassyEvents(loadEvents("de")),
  pt: sortEmbassyEvents(loadEvents("pt")),
};

export const getEvents = (language: ContentLanguage) => eventsByLanguage[language] ?? eventsByLanguage.en;
