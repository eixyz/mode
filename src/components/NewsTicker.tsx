import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Pause, Play } from "lucide-react";
import { useLanguage } from "@/lib/useLanguage";
import { useNewsStore } from "@/lib/newsStore";
import { useEventStore } from "@/lib/eventStore";
import { buildFeed, getHighlights, itemHref, itemTitle, type FeedItem } from "@/lib/feed";

const LOCALES = { en: "en-GB", de: "de-DE", pt: "pt-PT" } as const;
const MAX_ITEMS = 5;

// Scrolling "Latest" line in the red top bar: highlighted entries first, then the
// newest news and events. Pauses on hover/focus and with the pause button (WCAG
// 2.2.2); stands still for visitors who prefer reduced motion (see index.css).
export const NewsTicker = () => {
  const { t, language } = useLanguage();
  const { newsItems } = useNewsStore();
  const { events } = useEventStore();
  const [paused, setPaused] = useState(false);

  const items = useMemo(() => {
    const feed = buildFeed(newsItems, events);
    const ordered = [...getHighlights(feed), ...feed];
    return ordered.filter((item, index) => ordered.findIndex((other) => other.id === item.id) === index).slice(0, MAX_ITEMS);
  }, [newsItems, events]);

  if (items.length === 0) return null;

  const formatDay = (iso: string) => new Intl.DateTimeFormat(LOCALES[language], { day: "numeric", month: "short" }).format(new Date(iso));
  const label = (item: FeedItem) => (item.kind === "event" ? `${t("feed.event")} · ${formatDay(item.event.date)}` : t("feed.news"));
  // Roughly constant reading speed, whatever the number and length of titles.
  const duration = Math.max(20, items.reduce((sum, item) => sum + itemTitle(item).length, 0) * 0.22);

  const list = (copy: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={copy || undefined}>
      {items.map((item) => (
        <li key={item.id} className="flex items-center whitespace-nowrap pr-10">
          <span className="mr-2 text-[11px] font-semibold uppercase tracking-wider text-gold">{label(item)}</span>
          <Link to={itemHref(item)} tabIndex={copy ? -1 : undefined} className="hover:text-gold hover:underline underline-offset-2">
            {itemTitle(item)}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="ticker flex min-w-0 flex-1 items-center gap-2" data-paused={paused} role="region" aria-label={t("feed.ticker")}>
      <span className="shrink-0 rounded-full bg-gold px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-foreground">
        {t("feed.ticker")}
      </span>
      <div className="ticker-viewport min-w-0 flex-1 overflow-hidden">
        <div className="ticker-track flex w-max" style={{ "--ticker-duration": `${duration}s` } as React.CSSProperties}>
          {list(false)}
          {list(true)}
        </div>
      </div>
      <button
        type="button"
        onClick={() => setPaused((value) => !value)}
        aria-label={t(paused ? "feed.tickerPlay" : "feed.tickerPause")}
        aria-pressed={paused}
        className="ticker-toggle flex h-7 w-7 shrink-0 items-center justify-center rounded-full hover:bg-white/15"
      >
        {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
      </button>
    </div>
  );
};
