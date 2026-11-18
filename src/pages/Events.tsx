import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { InfoRequestDialog } from "@/components/InfoRequestDialog";
import { PosterImage } from "@/components/PosterImage";
import { splitEvents, type EmbassyEvent } from "@/lib/events";
import { categoryLabel } from "@/lib/categories";
import { useLanguage } from "@/lib/useLanguage";
import { useEventStore } from "@/lib/eventStore";

const LOCALES = { en: "en-GB", de: "de-DE", pt: "pt-PT" } as const;

const EventsPage = () => {
  const { language, t } = useLanguage();
  const { events } = useEventStore();
  const { upcoming, past } = splitEvents(events);
  // The highlighted upcoming event leads; otherwise the next one.
  const featuredEvent = upcoming.find((item) => item.featured) ?? upcoming[0];
  const otherUpcoming = upcoming.filter((item) => item.id !== featuredEvent?.id);
  const locale = LOCALES[language];

  const formatDate = (date: string) =>
    new Intl.DateTimeFormat(locale, { weekday: "short", day: "2-digit", month: "long", year: "numeric" }).format(new Date(date));
  const formatMonth = (date: string) => new Intl.DateTimeFormat(locale, { month: "short" }).format(new Date(date));
  const formatDay = (date: string) => new Intl.DateTimeFormat(locale, { day: "2-digit" }).format(new Date(date));

  const EventCard = ({ event, index }: { event: EmbassyEvent; index: number }) => (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:border-primary/30 hover:shadow-lg focus-within:ring-2 focus-within:ring-primary"
    >
      {event.image ? (
        <img src={event.image} alt="" loading="lazy" decoding="async" className="h-44 w-full object-cover" />
      ) : (
        <div className="h-2 gold-accent" />
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/15">{categoryLabel(t, event.category)}</Badge>
          <span className="text-xs text-muted-foreground">{formatDate(event.date)}</span>
        </div>
        <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          <Link to={`/events/${event.id}`} className="focus:outline-none after:absolute after:inset-0 after:content-['']">
            {event.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4] overflow-hidden">{event.summary}</p>
        <div className="mt-5 space-y-2 text-sm text-muted-foreground">
          {event.time && <div className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-primary" aria-hidden="true" />{event.time}</div>}
          {event.venue && <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" aria-hidden="true" />{event.venue}</div>}
        </div>
        <span aria-hidden="true" className="mt-auto pt-6 inline-flex items-center text-sm font-medium text-primary group-hover:underline">
          {t("events.viewDetails")}
          <ArrowRight className="ml-1 h-4 w-4" />
        </span>
      </div>
    </motion.article>
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto mb-6">
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                {t("common.backToHome")}
              </Link>
            </div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="max-w-3xl mx-auto text-center mb-10">
              <div className="gold-accent h-1 w-16 mx-auto mb-6 rounded-full" />
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">{t("events.title")}</h1>
              <p className="text-muted-foreground mt-3">{t("events.pageDesc")}</p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              {featuredEvent ? (
                <motion.article
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="grid overflow-hidden rounded-3xl border border-primary/10 bg-card shadow-sm lg:grid-cols-[1.1fr_1fr]"
                >
                  <div className="relative min-h-56 sm:min-h-72 bg-muted">
                    {featuredEvent.image ? (
                      <PosterImage src={featuredEvent.image} />
                    ) : (
                      <div className="absolute inset-0 hero-gradient" />
                    )}
                    <div className="absolute left-4 top-4 rounded-2xl bg-background/90 px-4 py-3 text-center shadow-md backdrop-blur">
                      <div className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{formatMonth(featuredEvent.date)}</div>
                      <div className="mt-0.5 font-serif text-3xl font-bold leading-none text-primary">{formatDay(featuredEvent.date)}</div>
                    </div>
                  </div>
                  <div className="hero-gradient p-6 sm:p-8 text-primary-foreground flex flex-col gap-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge className="bg-gold text-foreground hover:bg-gold">{t("events.featured")}</Badge>
                      <Badge className="bg-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/20">{categoryLabel(t, featuredEvent.category)}</Badge>
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-semibold leading-tight">{featuredEvent.title}</h2>
                    <p className="text-sm md:text-base leading-6 text-primary-foreground/85">{featuredEvent.summary}</p>
                    <div className="grid gap-2.5 text-sm text-primary-foreground/90 sm:grid-cols-2">
                      <div className="flex items-center gap-2.5 rounded-xl bg-primary-foreground/10 px-3.5 py-2.5">
                        <CalendarDays className="h-4 w-4 text-gold shrink-0" aria-hidden="true" />
                        <span>{formatDate(featuredEvent.date)}</span>
                      </div>
                      {featuredEvent.time && (
                        <div className="flex items-center gap-2.5 rounded-xl bg-primary-foreground/10 px-3.5 py-2.5">
                          <Clock3 className="h-4 w-4 text-gold shrink-0" aria-hidden="true" />
                          <span>{featuredEvent.time}</span>
                        </div>
                      )}
                      {featuredEvent.venue && (
                        <div className="flex items-center gap-2.5 rounded-xl bg-primary-foreground/10 px-3.5 py-2.5 sm:col-span-2">
                          <MapPin className="h-4 w-4 text-gold shrink-0" aria-hidden="true" />
                          <span>{featuredEvent.venue}</span>
                        </div>
                      )}
                    </div>
                    <div className="mt-auto pt-2 flex flex-wrap gap-3">
                      <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                        <Link to={`/events/${featuredEvent.id}`}>{t("events.viewDetails")}</Link>
                      </Button>
                      <InfoRequestDialog subject={`${t("events.requestInfo")}: ${featuredEvent.title}`}>
                        <Button size="lg" className="bg-gold text-foreground hover:bg-gold-light">
                          {featuredEvent.ctaLabel || t("events.requestInfo")}
                          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                        </Button>
                      </InfoRequestDialog>
                    </div>
                  </div>
                </motion.article>
              ) : (
                <div className="max-w-3xl mx-auto rounded-2xl border border-dashed border-primary/20 bg-card/80 p-8 text-left sm:text-center">
                  <p className="text-base leading-7 text-muted-foreground">{t("events.empty")}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{t("events.emptyDesc")}</p>
                </div>
              )}

              {otherUpcoming.length > 0 && (
                <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {otherUpcoming.map((event, index) => <EventCard key={event.id} event={event} index={index} />)}
                </div>
              )}

              {past.length > 0 && (
                <>
                  <h2 className="mt-16 mb-6 font-serif text-2xl font-semibold text-foreground">{t("events.past")}</h2>
                  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {past.map((event, index) => <EventCard key={event.id} event={event} index={index} />)}
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EventsPage;
