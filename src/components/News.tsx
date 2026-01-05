import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const newsItems = [
  {
    date: "January 3, 2025",
    category: "Announcement",
    title: "Embassy Opening Hours During Holiday Season",
    excerpt: "Please note the modified opening hours during the holiday period. The embassy will operate with reduced hours from December 23 to January 3.",
  },
  {
    date: "December 15, 2024",
    category: "Trade",
    title: "Mozambique-Germany Trade Forum 2025",
    excerpt: "Join us for the annual trade forum highlighting investment opportunities in energy, agriculture, and tourism sectors.",
  },
  {
    date: "December 1, 2024",
    category: "Culture",
    title: "Mozambican Independence Day Celebration",
    excerpt: "The Embassy cordially invites you to celebrate the 49th anniversary of Mozambican Independence on June 25th.",
  },
];

export const News = () => {
  return (
    <section id="news" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="gold-accent h-1 w-16 mx-auto mb-6 rounded-full" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            News & Announcements
          </h2>
          <p className="text-muted-foreground text-lg">
            Stay updated with the latest news, events, and announcements from the Embassy.
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {newsItems.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300 group cursor-pointer"
            >
              <div className="h-2 gold-accent" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                    {item.category}
                  </Badge>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                <span className="inline-flex items-center text-sm text-primary font-medium group-hover:underline">
                  Read more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All News
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
