import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight, Clock3, MapPin, Pause, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { InfoRequestDialog } from "@/components/InfoRequestDialog";
import { PosterImage } from "@/components/PosterImage";
import { useLanguage } from "@/lib/useLanguage";
import { useNewsStore } from "@/lib/newsStore";
import { useEventStore } from "@/lib/eventStore";
import { categoryLabel } from "@/lib/categories";
import { buildFeed, getHighlights, itemCategory, itemHref, itemImage, itemText, itemTitle, type FeedItem } from "@/lib/feed";

const LOCALES = { en: "en-GB", de: "de-DE", pt: "pt-PT" } as const;
const AUTOPLAY_MS = 7000;
const LATEST_COUNT = 6;

const useFormatters = () => {
  const { language } = useLanguage();
  const locale = LOCALES[language];
  return useMemo(
    () => ({
      long: (iso: string) =>
        new Intl.DateTimeFormat(locale, { weekday: "short", day: "2-digit", month: "long", year: "numeric" }).format(new Date(iso)),
      month: (iso: string) => new Intl.DateTimeFormat(locale, { month: "short" }).format(new Date(iso)),
      day: (iso: string) => new Intl.DateTimeFormat(locale, { day: "2-digit" }).format(new Date(iso)),
    }),
    [locale],
  );
};

/** "News" / "Event" badge plus the translated category. */
const TypeBadges = ({ item, onDark = false }: { item: FeedItem; onDark?: boolean }) => {
  const { t } = useLanguage();
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge className={onDark ? "bg-gold text-foreground hover:bg-gold" : item.kind === "event" ? "bg-gold/20 text-foreground hover:bg-gold/30" : "bg-primary text-primary-foreground hover:bg-primary"}>
        {t(item.kind === "event" ? "feed.event" : "feed.news")}
      </Badge>
      <Badge variant="secondary" className={onDark ? "bg-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/20" : "bg-primary/10 text-primary hover:bg-primary/20"}>
        {categoryLabel(t, itemCategory(item))}
      </Badge>
    </div>
  );
};

/** One slide of the highlights slider. */
const HighlightSlide = ({ item }: { item: FeedItem }) => {
  const { t } = useLanguage();
  const format = useFormatters();
  const image = itemImage(item);
  const event = item.kind === "event" ? item.event : null;

  return (
    <article className="grid overflow-hidden rounded-3xl border border-primary/10 bg-card shadow-sm lg:grid-cols-[1.1fr_1fr] h-full">
      <div className="relative min-h-56 sm:min-h-72 lg:min-h-[26rem] bg-muted">
        {image ? (
          <PosterImage src={image} />
        ) : (
          <div className="absolute inset-0 hero-gradient" />
        )}
        {event && (
          <div className="absolute left-4 top-4 rounded-2xl bg-background/90 px-4 py-3 text-center shadow-md backdrop-blur">
            <div className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{format.month(event.date)}</div>
            <div className="mt-0.5 font-serif text-3xl font-bold leading-none text-primary">{format.day(event.date)}</div>
          </div>
        )}
      </div>
      <div className="hero-gradient flex flex-col gap-5 p-6 text-primary-foreground sm:p-8">
        <TypeBadges item={item} onDark />
        <h3 className="font-serif text-2xl font-semibold leading-tight md:text-3xl [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4] overflow-hidden">
          {itemTitle(item)}
        </h3>
        <p className="text-sm leading-6 text-primary-foreground/85 md:text-base [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4] overflow-hidden">
          {itemText(item)}
        </p>
        {event ? (
          <div className="grid gap-2.5 text-sm text-primary-foreground/90 sm:grid-cols-2">
            <div className="flex items-center gap-2.5 rounded-xl bg-primary-foreground/10 px-3.5 py-2.5">
              <CalendarDays className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span>{format.long(event.date)}</span>
            </div>
            {event.time && (
              <div className="flex items-center gap-2.5 rounded-xl bg-primary-foreground/10 px-3.5 py-2.5">
                <Clock3 className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>{event.time}</span>
              </div>
            )}
            {event.venue && (
              <div className="flex items-center gap-2.5 rounded-xl bg-primary-foreground/10 px-3.5 py-2.5 sm:col-span-2">
                <MapPin className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>{event.venue}</span>
              </div>
            )}
          </div>
        ) : (
          item.kind === "news" && (
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <CalendarDays className="h-4 w-4 text-gold" aria-hidden="true" />
              {item.news.date}
            </div>
          )
        )}
        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <Link to={itemHref(item)}>{t(event ? "events.viewDetails" : "news.readFullArticle")}</Link>
          </Button>
          {event && (
            <InfoRequestDialog subject={`${t("events.requestInfo")}: ${event.title}`}>
              <Button size="lg" className="bg-gold text-foreground hover:bg-gold-light">
                {event.ctaLabel || t("events.requestInfo")}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </InfoRequestDialog>
          )}
        </div>
      </div>
    </article>
  );
};

/** A card in the "Latest" grid; the title link covers the whole card. */
const FeedCard = ({ item }: { item: FeedItem }) => {
  const { t } = useLanguage();
  const format = useFormatters();
  const image = itemImage(item);
  const date = item.kind === "news" ? item.news.date : format.long(item.event.date);
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg focus-within:ring-2 focus-within:ring-primary">
      {image ? (
        <img src={image} alt="" loading="lazy" decoding="async" className="h-40 w-full object-cover" />
      ) : (
        <div className="h-2 gold-accent" />
      )}
      <div className="flex flex-1 flex-col p-5">
        <TypeBadges item={item} />
        <span className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
          <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
          {date}
          {item.kind === "event" && item.event.time ? ` · ${item.event.time}` : ""}
        </span>
        <h3 className="mt-2 font-serif text-xl font-semibold text-foreground transition-colors group-hover:text-primary [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
          <Link to={itemHref(item)} className="focus:outline-none after:absolute after:inset-0 after:content-['']">
            {itemTitle(item)}
          </Link>
        </h3>
        <p className="mt-2 mb-4 text-sm leading-relaxed text-muted-foreground [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
          {itemText(item)}
        </p>
        <span aria-hidden="true" className="mt-auto inline-flex items-center text-sm font-medium text-primary group-hover:underline">
          {t(item.kind === "event" ? "events.viewDetails" : "news.readMore")}
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
};

/** Slider of highlighted news and events; moves on by itself, can be paused. */
const HighlightsSlider = ({ items }: { items: FeedItem[] }) => {
  const { t } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [paused, setPaused] = useState(false); // while hovered or focused
  const multiple = items.length > 1;

  useEffect(() => {
    // Respect "reduce motion": no automatic sliding.
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
  }, []);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api || !multiple || !playing || paused) return;
    const timer = window.setInterval(() => api.scrollNext(), AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [api, multiple, playing, paused]);

  const goTo = useCallback((index: number) => api?.scrollTo(index), [api]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <Carousel setApi={setApi} opts={{ loop: multiple }} aria-label={t("feed.highlights")}>
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem
              key={item.id}
              aria-label={`${index + 1} / ${items.length}`}
            >
              <HighlightSlide item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {multiple && (
        <div className="mt-4 flex items-center justify-center gap-3">
          <Button type="button" size="icon" variant="outline" className="h-11 w-11 rounded-full" onClick={() => api?.scrollPrev()} aria-label={t("feed.previous")}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center">
            {items.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`${t("feed.goTo")} ${index + 1}`}
                aria-current={index === selected ? "true" : undefined}
                className="flex h-11 w-8 items-center justify-center"
              >
                <span className={`block h-2.5 rounded-full transition-all ${index === selected ? "w-6 bg-primary" : "w-2.5 bg-primary/30"}`} />
              </button>
            ))}
          </div>
          <Button type="button" size="icon" variant="outline" className="h-11 w-11 rounded-full" onClick={() => api?.scrollNext()} aria-label={t("feed.next")}>
            <ChevronRight className="h-5 w-5" />
          </Button>
          <Button type="button" size="icon" variant="ghost" className="h-11 w-11 rounded-full" onClick={() => setPlaying((value) => !value)} aria-label={t(playing ? "feed.pause" : "feed.play")}>
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
        </div>
      )}
    </div>
  );
};

/** Homepage "News & Events": highlights slider, then the latest entries of both kinds, newest first. */
export const LatestUpdates = () => {
  const { t } = useLanguage();
  const { newsItems } = useNewsStore();
  const { events } = useEventStore();
  const feed = useMemo(() => buildFeed(newsItems, events), [newsItems, events]);
  const highlights = useMemo(() => getHighlights(feed), [feed]);
  const latest = useMemo(() => {
    const shown = new Set(highlights.map((item) => item.id));
    return feed.filter((item) => !shown.has(item.id)).slice(0, LATEST_COUNT);
  }, [feed, highlights]);

  if (feed.length === 0) return null;

  return (
    <section id="news" aria-labelledby="latest-updates-title" className="relative overflow-hidden bg-muted/30 py-16 md:py-24">
      <div className="absolute inset-0 pattern-mozambique opacity-50" aria-hidden="true" />
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <div className="gold-accent mx-auto mb-6 h-1 w-16 rounded-full" />
          <h2 id="latest-updates-title" className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            {t("feed.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("feed.description")}</p>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <HighlightsSlider items={highlights} />

          {latest.length > 0 && (
            <>
              <h3 className="mt-14 mb-6 font-serif text-2xl font-semibold text-foreground">{t("feed.latest")}</h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {latest.map((item) => (
                  <FeedCard key={item.id} item={item} />
                ))}
              </div>
            </>
          )}

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild variant="outline" size="lg">
              <Link to="/news">{t("feed.allNews")}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/events">{t("feed.allEvents")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
