import { loadEvents } from "./content";

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

// Source of truth: Markdown files under /content/events managed by Decap CMS.
export const embassyEvents: EmbassyEvent[] = loadEvents();

export const sortEmbassyEvents = (events: EmbassyEvent[]) =>
  [...events].sort(
    (left, right) => new Date(left.date).getTime() - new Date(right.date).getTime(),
  );

export const getUpcomingEvents = () => sortEmbassyEvents(embassyEvents);

export const getEventContactSubject = (event: EmbassyEvent) => `Information request: ${event.title}`;

export const getEventContactLink = (event: EmbassyEvent) =>
  `/contact?subject=${encodeURIComponent(getEventContactSubject(event))}`;
