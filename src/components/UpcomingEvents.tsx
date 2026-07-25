import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Clock3, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getEventContactLink } from "@/lib/events";
import { useEventStore } from "@/lib/eventStore";
import { sortEmbassyEvents } from "@/lib/events";
import { useLanguage } from "@/lib/useLanguage";

const localeMap = {
  en: "en-GB",
  de: "de-DE",
  pt: "pt-PT",
} as const;

export const UpcomingEvents = () => {
  const { language, t } = useLanguage();
  const { events } = useEventStore();
  const upcomingEvents = sortEmbassyEvents(events);
  const featuredEvent = upcomingEvents.find((item) => item.featured) ?? upcomingEvents[0];
  const secondaryEvents = featuredEvent
    ? upcomingEvents.filter((item) => item.id !== featuredEvent.id).slice(0, 2)
    : [];
  const locale = localeMap[language];

  if (!featuredEvent) {
    return (
      <section
        id="events"
        aria-labelledby="upcoming-events-title"
        className="relative overflow-hidden bg-muted/40 py-24"
      >
        <div className="absolute inset-0 pattern-mozambique opacity-60" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="gold-accent mx-auto mb-6 h-1 w-16 rounded-full" />
            <h2
              id="upcoming-events-title"
              className="font-serif text-3xl font-bold text-foreground md:text-4xl"
            >
              {t("events.title")}
            </h2>
            <div className="mt-8 rounded-2xl border border-dashed border-primary/20 bg-card/80 p-8 text-left sm:text-center">
              <p className="text-base leading-7 text-muted-foreground">
                {t("events.empty")}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {t("events.emptyDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }


  const formatMonth = (date: string) =>
    new Intl.DateTimeFormat(locale, { month: "short" }).format(new Date(date));

  const formatDay = (date: string) =>
    new Intl.DateTimeFormat(locale, { day: "2-digit" }).format(new Date(date));

  const formatDate = (date: string) =>
    new Intl.DateTimeFormat(locale, {
      weekday: "short",
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(new Date(date));

  return (
    <section id="events" className="relative overflow-hidden bg-muted/40 py-24">
      <div className="absolute inset-0 pattern-mozambique opacity-60" />
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <div className="gold-accent mx-auto mb-6 h-1 w-16 rounded-full" />
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            {t("events.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("events.description")}
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-stretch max-w-6xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-3xl border border-primary/10 bg-card shadow-sm"
          >
            <div className="hero-gradient p-6 sm:p-7 md:p-8 text-primary-foreground h-full flex flex-col">
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <Badge className="bg-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/20">
                  {t("events.featured")}
                </Badge>
                <Badge className="bg-gold/20 text-primary-foreground hover:bg-gold/30">
                  {featuredEvent.category}
                </Badge>
              </div>

              <div className="flex flex-col flex-1 min-h-0 gap-5">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 px-4 py-3 text-center">
                    <div className="text-[11px] uppercase tracking-[0.24em] text-primary-foreground/70">
                      {formatMonth(featuredEvent.date)}
                    </div>
                    <div className="mt-0.5 font-serif text-3xl font-bold text-gold leading-none">
                      {formatDay(featuredEvent.date)}
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold leading-tight [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
                    {featuredEvent.title}
                  </h3>
                </div>

                <p className="text-sm md:text-base leading-6 text-primary-foreground/85 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4] overflow-hidden">
                  {featuredEvent.summary}
                </p>

                <div className="grid gap-2.5 text-sm text-primary-foreground/90 sm:grid-cols-2">
                  <div className="flex items-center gap-2.5 rounded-xl bg-primary-foreground/10 px-3.5 py-2.5">
                    <CalendarDays className="h-4 w-4 text-gold shrink-0" />
                    <span className="truncate">{formatDate(featuredEvent.date)}</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl bg-primary-foreground/10 px-3.5 py-2.5">
                    <Clock3 className="h-4 w-4 text-gold shrink-0" />
                    <span className="truncate">{featuredEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl bg-primary-foreground/10 px-3.5 py-2.5 sm:col-span-2">
                    <MapPin className="h-4 w-4 text-gold shrink-0" />
                    <span className="truncate">{featuredEvent.venue}</span>
                  </div>
                </div>

                <div className="mt-auto pt-2 flex flex-wrap gap-3">
                  <Link to={`/events/${featuredEvent.id}`} className="flex-1 sm:flex-none">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground/30 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10">
                      {t("events.viewDetails")}
                    </Button>
                  </Link>
                  <Link to={getEventContactLink(featuredEvent)} className="flex-1 sm:flex-none">
                    <Button size="lg" className="w-full sm:w-auto bg-gold text-foreground hover:bg-gold-light">
                      {featuredEvent.ctaLabel}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>

          <div className="grid gap-4 sm:auto-rows-fr">
            {secondaryEvents.map((event, index) => (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-md"
              >
                <div className="flex gap-4 h-full">
                  <div className="self-start flex w-14 shrink-0 flex-col items-center rounded-xl bg-muted px-2 py-2 text-center">
                    <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      {formatMonth(event.date)}
                    </span>
                    <span className="font-serif text-xl font-semibold text-foreground leading-none mt-0.5">
                      {formatDay(event.date)}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1 flex flex-col">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/15">
                        {event.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{event.time}</span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4] overflow-hidden">
                      {event.summary}
                    </p>
                    <div className="mt-auto pt-4 flex items-center justify-between gap-4">
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary" />
                        {event.venue}
                      </span>
                      <Link
                        to={`/events/${event.id}`}
                        className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                      >
                        {t("events.viewDetails")}
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}

          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 rounded-2xl border border-dashed border-primary/20 bg-card/80 p-5 max-w-6xl mx-auto"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm leading-6 text-muted-foreground max-w-3xl">
              {t("events.browseIntro")}
            </p>
            <Link to="/events" className="inline-flex items-center text-sm font-medium text-primary hover:underline shrink-0">
              {t("events.browseAll")}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};