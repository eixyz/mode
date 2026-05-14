import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, Lock, MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getEventContactLink, sortEmbassyEvents } from "@/lib/events";
import { useLanguage } from "@/lib/useLanguage";
import { Link } from "react-router-dom";
import { useEventStore } from "@/lib/eventStore";

const localeMap = {
  en: "en-GB",
  de: "de-DE",
  pt: "pt-PT",
} as const;

const EventsPage = () => {
  const { language } = useLanguage();
  const { events } = useEventStore();
  const sortedEvents = sortEmbassyEvents(events);
  const featuredEvent = sortedEvents.find((item) => item.featured) ?? sortedEvents[0];
  const sidebarEvents = sortedEvents.filter((item) => item.id !== featuredEvent.id).slice(0, 2);
  const remainingEvents = sortedEvents.filter((item) => item.id !== featuredEvent.id).slice(2);
  const locale = localeMap[language];

  if (!featuredEvent) {
    return null;
  }

  const formatDate = (date: string) =>
    new Intl.DateTimeFormat(locale, {
      weekday: "short",
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(new Date(date));

  const formatMonth = (date: string) =>
    new Intl.DateTimeFormat(locale, { month: "short" }).format(new Date(date));

  const formatDay = (date: string) =>
    new Intl.DateTimeFormat(locale, { day: "2-digit" }).format(new Date(date));

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto mb-6">
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl mx-auto text-center mb-10"
            >
              <div className="gold-accent h-1 w-16 mx-auto mb-6 rounded-full" />
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Upcoming Events</h1>
              <p className="text-muted-foreground mt-3">
                Embassy briefings, cultural gatherings, and public-facing events in one place.
              </p>
              <div className="mt-6 flex justify-center">
                <Link to="/events/admin" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                  <Lock className="h-4 w-4" />
                  Staff access
                </Link>
              </div>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] max-w-6xl mx-auto lg:items-stretch">
              <motion.article
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="overflow-hidden rounded-3xl border border-primary/10 bg-card shadow-sm"
              >
                <div className="hero-gradient p-7 md:p-8 text-primary-foreground h-full flex flex-col">
                  <div className="mb-6 flex flex-wrap items-center gap-3">
                    <Badge className="bg-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/20">Featured event</Badge>
                    <Badge className="bg-gold/20 text-primary-foreground hover:bg-gold/30">{featuredEvent.category}</Badge>
                  </div>

                  <div className="grid gap-6 md:grid-cols-[auto_minmax(0,1fr)] md:items-start flex-1 min-h-0">
                    <div className="w-fit rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 px-5 py-4 text-center">
                      <div className="text-xs uppercase tracking-[0.28em] text-primary-foreground/70">{formatMonth(featuredEvent.date)}</div>
                      <div className="mt-1 font-serif text-4xl font-bold text-gold">{formatDay(featuredEvent.date)}</div>
                    </div>

                    <div className="flex flex-col h-full min-h-0">
                      <h2 className="font-serif text-2xl md:text-3xl font-semibold leading-tight [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">{featuredEvent.title}</h2>
                      <p className="mt-3 text-sm md:text-base leading-6 text-primary-foreground/85 max-w-2xl [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:5] overflow-hidden">{featuredEvent.summary}</p>

                      <div className="mt-6 grid gap-3 text-sm text-primary-foreground/85 sm:grid-cols-2">
                        <div className="flex items-center gap-3 rounded-2xl bg-primary-foreground/10 px-4 py-3">
                          <CalendarDays className="h-4 w-4 text-gold" />
                          <span>{formatDate(featuredEvent.date)}</span>
                        </div>
                        <div className="flex items-center gap-3 rounded-2xl bg-primary-foreground/10 px-4 py-3">
                          <Clock3 className="h-4 w-4 text-gold" />
                          <span>{featuredEvent.time}</span>
                        </div>
                        <div className="flex items-center gap-3 rounded-2xl bg-primary-foreground/10 px-4 py-3 sm:col-span-2">
                          <MapPin className="h-4 w-4 text-gold" />
                          <span>{featuredEvent.venue}</span>
                        </div>
                      </div>

                      <div className="mt-auto pt-6 flex flex-wrap gap-3">
                        <Link to={`/events/${featuredEvent.id}`}>
                          <Button size="lg" variant="outline" className="border-primary-foreground/30 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10">
                            View event details
                          </Button>
                        </Link>
                        <Link to={getEventContactLink(featuredEvent)}>
                          <Button size="lg" className="bg-gold text-foreground hover:bg-gold-light">
                            {featuredEvent.ctaLabel}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>

              <div className="grid gap-4 sm:auto-rows-fr">
                {sidebarEvents.map((event, index) => (
                  <motion.article
                    key={event.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="rounded-2xl border border-border bg-card p-5 shadow-sm"
                  >
                    <div className="flex gap-4 h-full">
                      <div className="flex w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-muted px-2 py-3 text-center">
                        <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{formatMonth(event.date)}</span>
                        <span className="font-serif text-2xl font-semibold text-foreground">{formatDay(event.date)}</span>
                      </div>
                      <div className="min-w-0 flex-1 flex flex-col">
                        <div className="mb-3 flex flex-wrap items-center gap-2">
                          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/15">{event.category}</Badge>
                          <span className="text-xs text-muted-foreground">{event.time}</span>
                        </div>
                        <h3 className="font-serif text-xl font-semibold text-foreground [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">{event.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4] overflow-hidden">{event.summary}</p>
                        <div className="mt-auto pt-4 flex items-center justify-between gap-4">
                          <span className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 text-primary" />
                            {event.venue}
                          </span>
                          <Link to={`/events/${event.id}`} className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                            View details
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {remainingEvents.length > 0 && (
                <div className="lg:col-span-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {remainingEvents.map((event, index) => (
                    <motion.article
                      key={event.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.06 }}
                      className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                    >
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/15">{event.category}</Badge>
                        <span className="text-xs text-muted-foreground">{formatDate(event.date)}</span>
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-foreground">{event.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">{event.summary}</p>
                      <div className="mt-5 space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-primary" />{event.time}</div>
                        <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />{event.venue}</div>
                      </div>
                      <Link to={`/events/${event.id}`} className="mt-6 inline-flex items-center text-sm font-medium text-primary hover:underline">
                        View details
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </motion.article>
                  ))}
                </div>
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