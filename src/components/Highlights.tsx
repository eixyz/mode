import { motion } from "framer-motion";
import { BookOpen, Plane, CalendarCheck, MessageSquare, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/useLanguage";

export const Highlights = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: BookOpen,
      title: t("highlights.passportsTitle"),
      description: t("highlights.passportsDesc"),
      to: "/services/passports",
    },
    {
      icon: Plane,
      title: t("highlights.visasTitle"),
      description: t("highlights.visasDesc"),
      to: "/services/visas",
    },
    {
      icon: CalendarCheck,
      title: t("highlights.appointmentTitle"),
      description: t("highlights.appointmentDesc"),
      to: "/appointment",
    },
    {
      icon: MessageSquare,
      title: t("highlights.contactTitle"),
      description: t("highlights.contactDesc"),
      to: "/contact",
    },
  ];

  return (
    <section
      id="highlights"
      aria-labelledby="highlights-title"
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="gold-accent h-1 w-16 mx-auto mb-6 rounded-full" />
          <h2 id="highlights-title" className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("highlights.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("highlights.description")}
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {highlights.map((item, index) => (
            <motion.div
              key={item.to}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <Link
                to={item.to}
                className="group h-full flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label={item.title}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary">
                  <item.icon className="w-6 h-6 text-primary transition-colors group-hover:text-primary-foreground" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground flex-1">
                  {item.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                  {t("highlights.learnMore")}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
