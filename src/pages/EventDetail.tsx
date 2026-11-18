import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useEventStore } from "@/lib/eventStore";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Markdown } from "@/components/Markdown";
import { InfoRequestDialog } from "@/components/InfoRequestDialog";
import { categoryLabel } from "@/lib/categories";
import { useLanguage } from "@/lib/useLanguage";
import { CalendarDays, Clock3, MapPin } from "lucide-react";

const LOCALES = { en: "en-GB", de: "de-DE", pt: "pt-PT" } as const;

const EventDetail = () => {
  const { id } = useParams();
  const { getEventById } = useEventStore();
  const { language, t } = useLanguage();
  const item = id ? getEventById(id) : null;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [id]);

  const formattedDate = item
    ? new Intl.DateTimeFormat(LOCALES[language], { weekday: "long", day: "2-digit", month: "long", year: "numeric" }).format(new Date(item.date))
    : "";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            {item ? (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                {item.image && (
                  <img src={item.image} alt="" className="w-full max-h-[28rem] object-cover rounded-2xl mb-8" />
                )}
                <div className="gold-accent h-1 w-16 mb-6 rounded-full" />
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">{categoryLabel(t, item.category)}</Badge>
                </div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">{item.title}</h1>

                <div className="grid gap-4 sm:grid-cols-3 mb-10">
                  <div className="rounded-2xl border border-border bg-card p-4 flex items-center gap-3">
                    <CalendarDays className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-sm text-foreground">{formattedDate}</span>
                  </div>
                  {item.time && (
                    <div className="rounded-2xl border border-border bg-card p-4 flex items-center gap-3">
                      <Clock3 className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                      <span className="text-sm text-foreground">{item.time}</span>
                    </div>
                  )}
                  {item.venue && (
                    <div className="rounded-2xl border border-border bg-card p-4 flex items-center gap-3">
                      <MapPin className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                      <span className="text-sm text-foreground">{item.venue}</span>
                    </div>
                  )}
                </div>

                {item.details.length > 0 && (
                  <section aria-labelledby="event-programme" className="mb-10 rounded-2xl border border-border bg-card p-6">
                    <h2 id="event-programme" className="font-serif text-xl font-semibold text-foreground mb-4">{t("events.programme")}</h2>
                    <dl className="divide-y divide-border">
                      {item.details.map((row, index) => (
                        <div key={index} className="grid gap-1 py-3 sm:grid-cols-[10rem_1fr] sm:gap-4">
                          <dt className="font-semibold text-foreground">{row.label}</dt>
                          <dd className="text-muted-foreground">{row.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </section>
                )}

                <article>
                    <Markdown>{item.content ?? item.summary}</Markdown>
                  </article>
                <div className="mt-8 flex flex-wrap gap-3">
                  <InfoRequestDialog subject={`${t("events.requestInfo")}: ${item.title}`}>
                    <Button>{item.ctaLabel || t("events.requestInfo")}</Button>
                  </InfoRequestDialog>
                  <Button asChild variant="outline">
                    <Link to="/events">{t("events.backToEvents")}</Link>
                  </Button>
                </div>
              </motion.div>
            ) : (
              <div className="text-center py-24">
                <h2 className="text-2xl font-semibold">{t("events.notFound")}</h2>
                <p className="text-muted-foreground mt-4">{t("events.notFoundDesc")}</p>
                <div className="mt-6">
                  <Button asChild variant="outline">
                    <Link to="/events">{t("events.viewAll")}</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EventDetail;
