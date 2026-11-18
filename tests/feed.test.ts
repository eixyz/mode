import { describe, expect, test } from "bun:test";
import { buildFeed, getHighlights } from "../src/lib/feed";
import type { NewsItem } from "../src/lib/news";
import type { EmbassyEvent } from "../src/lib/events";

const news = (id: string, isoDate: string, featured = false): NewsItem => ({
  id, isoDate, featured, date: isoDate, category: "Announcement", title: id, excerpt: "",
});
const event = (id: string, date: string, published: string, featured = true): EmbassyEvent => ({
  id, date, published, featured, time: "", category: "Public", title: id, summary: "", venue: "", ctaLabel: "", details: [],
});

describe("homepage feed", () => {
  test("news and events alternate by publish date, newest first", () => {
    const feed = buildFeed(
      [news("old-news", "2026-07-22"), news("new-news", "2026-11-18")],
      [event("meeting", "2026-11-21", "2026-11-17")],
    );
    expect(feed.map((item) => item.id)).toEqual(["news-new-news", "event-meeting", "news-old-news"]);
  });

  test("a highlighted event stays in the slider until its day has passed", () => {
    const feed = buildFeed([news("later-news", "2026-11-20")], [event("meeting", "2026-11-21", "2026-11-17")]);
    expect(getHighlights(feed, "2026-11-18").map((item) => item.id)).toEqual(["event-meeting"]);
    expect(getHighlights(feed, "2026-11-21").map((item) => item.id)).toEqual(["event-meeting"]);
    // The day after: no highlight left, so the newest entry is shown instead.
    expect(getHighlights(feed, "2026-11-22").map((item) => item.id)).toEqual(["news-later-news"]);
  });

  test("upcoming events come first (soonest first), then highlighted news", () => {
    const feed = buildFeed(
      [news("featured-news", "2026-11-10", true), news("plain-news", "2026-11-12")],
      [event("later", "2026-12-05", "2026-11-01"), event("sooner", "2026-11-25", "2026-11-02"), event("not-highlighted", "2026-11-30", "2026-11-03", false)],
    );
    expect(getHighlights(feed, "2026-11-18").map((item) => item.id)).toEqual(["event-sooner", "event-later", "news-featured-news"]);
  });

  test("without any highlight, the newest entry is shown", () => {
    const feed = buildFeed([news("a", "2026-11-01"), news("b", "2026-11-05")], []);
    expect(getHighlights(feed, "2026-11-18").map((item) => item.id)).toEqual(["news-b"]);
  });
});
