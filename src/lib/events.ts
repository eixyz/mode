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

export const embassyEvents: EmbassyEvent[] = [];

export const sortEmbassyEvents = (events: EmbassyEvent[]) =>
  [...events].sort(
    (left, right) => new Date(left.date).getTime() - new Date(right.date).getTime(),
  );

export const getUpcomingEvents = () => sortEmbassyEvents(embassyEvents);

export const getEventContactSubject = (event: EmbassyEvent) => `Information request: ${event.title}`;

export const getEventContactLink = (event: EmbassyEvent) =>
  `/contact?subject=${encodeURIComponent(getEventContactSubject(event))}`;
