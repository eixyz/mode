import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useEventStore } from "@/lib/eventStore";
import { getEventContactLink } from "@/lib/events";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock3, MapPin } from "lucide-react";

const EventDetail = () => {
  const { id } = useParams();
  const { getEventById } = useEventStore();
  const item = id ? getEventById(id) : null;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [id]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            {item ? (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                {item.image && (
                  <img src={item.image} alt={item.title} className="w-full h-72 object-cover rounded-2xl mb-8" />
                )}
                <div className="gold-accent h-1 w-16 mb-6 rounded-full" />
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">{item.category}</Badge>
                  {item.featured && <Badge className="bg-gold/15 text-foreground hover:bg-gold/20">Featured</Badge>}
                </div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">{item.title}</h1>
                <p className="text-lg text-muted-foreground leading-8 mb-8">{item.summary}</p>

                <div className="grid gap-4 sm:grid-cols-3 mb-10">
                  <div className="rounded-2xl border border-border bg-card p-4 flex items-center gap-3">
                    <CalendarDays className="h-5 w-5 text-primary" />
                    <span className="text-sm text-foreground">{new Date(item.date).toLocaleDateString("en-GB", { weekday: "short", day: "2-digit", month: "long", year: "numeric" })}</span>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-4 flex items-center gap-3">
                    <Clock3 className="h-5 w-5 text-primary" />
                    <span className="text-sm text-foreground">{item.time}</span>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-4 flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-sm text-foreground">{item.venue}</span>
                  </div>
                </div>

                <article className="prose max-w-none text-foreground">
                  <p>{item.content ?? item.summary}</p>
                </article>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to={getEventContactLink(item)}><Button>{item.ctaLabel}</Button></Link>
                  <Link to="/events"><Button variant="outline">Back to events</Button></Link>
                </div>
              </motion.div>
            ) : (
              <div className="text-center py-24">
                <h2 className="text-2xl font-semibold">Event not found</h2>
                <p className="text-muted-foreground mt-4">The requested event could not be located.</p>
                <div className="mt-6"><Link to="/events"><Button variant="outline">View all events</Button></Link></div>
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