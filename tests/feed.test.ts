import { describe, expect, test } from "bun:test";
import { buildFeed, getHighlights, getTickerItems } from "../src/lib/feed";
import { addDays, isUpcoming } from "../src/lib/dates";
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

describe("top-bar ticker", () => {
  const feed = buildFeed(
    [news("launch", "2026-07-22"), news("fresh", "2026-11-10"), news("two-weeks-old", "2026-11-04"), news("too-old", "2026-11-03")],
    [event("meeting", "2026-11-21", "2026-11-17"), event("past", "2026-11-01", "2026-10-20")],
  );

  test("upcoming events until their date, then news from the last 14 days", () => {
    expect(getTickerItems(feed, "2026-11-18").map((item) => item.id)).toEqual(["event-meeting", "news-fresh", "news-two-weeks-old"]);
  });

  test("old news and past events drop out by themselves", () => {
    // 22 Nov: the meeting has passed; news from 10 Nov is still within 14 days.
    expect(getTickerItems(feed, "2026-11-22").map((item) => item.id)).toEqual(["news-fresh"]);
    // 25 Nov: nothing current left, so the ticker is hidden.
    expect(getTickerItems(feed, "2026-11-25").map((item) => item.id)).toEqual([]);
    expect(getTickerItems(buildFeed([news("launch", "2026-07-22")], []), "2026-11-18")).toEqual([]);
  });
});

describe("event dates", () => {
  test("an event is upcoming on its day and past the day after", () => {
    expect(isUpcoming({ date: "2026-11-21" }, "2026-11-21")).toBe(true);
    expect(isUpcoming({ date: "2026-11-21" }, "2026-11-22")).toBe(false);
  });

  test("date arithmetic crosses month ends", () => {
    expect(addDays("2026-11-18", -14)).toBe("2026-11-04");
    expect(addDays("2026-03-01", -1)).toBe("2026-02-28");
  });
});
