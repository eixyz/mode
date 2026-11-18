// One feed for the homepage: news and events together.
//
// Order: newest publication first, whatever the type, so a newly published
// event appears above older news and the other way round.
//
// Highlights (the slider at the top of the homepage):
//   - events marked "Highlight on homepage", until the event day has passed
//     (soonest first: what is about to happen is shown first);
//   - news marked "Highlight on homepage" (newest first).
//   If nothing is highlighted, the newest entry is shown so the slider is never empty.
import type { NewsItem } from "./news";
import type { EmbassyEvent } from "./events";
import { isUpcoming, todayIso } from "./dates";

export type FeedItem =
  | { kind: "news"; id: string; sortDate: string; news: NewsItem }
  | { kind: "event"; id: string; sortDate: string; event: EmbassyEvent };

export const buildFeed = (news: NewsItem[], events: EmbassyEvent[]): FeedItem[] =>
  [
    ...news.map((item): FeedItem => ({ kind: "news", id: `news-${item.id}`, sortDate: item.isoDate, news: item })),
    ...events.map((item): FeedItem => ({ kind: "event", id: `event-${item.id}`, sortDate: item.published || item.date, event: item })),
  ].sort((a, b) => b.sortDate.localeCompare(a.sortDate));

export const getHighlights = (feed: FeedItem[], today = todayIso(), max = 5): FeedItem[] => {
  const events = feed
    .filter((item): item is Extract<FeedItem, { kind: "event" }> => item.kind === "event")
    .filter((item) => item.event.featured && isUpcoming(item.event, today))
    .sort((a, b) => a.event.date.localeCompare(b.event.date));
  const news = feed.filter((item) => item.kind === "news" && item.news.featured);
  const highlights = [...events, ...news].slice(0, max);
  return highlights.length ? highlights : feed.slice(0, 1);
};

export const itemHref = (item: FeedItem) => (item.kind === "news" ? `/news/${item.news.id}` : `/events/${item.event.id}`);
export const itemTitle = (item: FeedItem) => (item.kind === "news" ? item.news.title : item.event.title);
export const itemText = (item: FeedItem) => (item.kind === "news" ? item.news.excerpt : item.event.summary);
export const itemImage = (item: FeedItem) => (item.kind === "news" ? item.news.image : item.event.image);
export const itemCategory = (item: FeedItem) => (item.kind === "news" ? item.news.category : item.event.category);
