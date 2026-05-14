import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useNewsStore } from "@/lib/newsStore";

export const News = () => {
  const { newsItems } = useNewsStore();
  const featuredNews = newsItems[0];
  const sidebarNews = newsItems.slice(1, 3);

  if (!featuredNews) {
    return null;
  }

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

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.12fr)_minmax(340px,0.88fr)] max-w-6xl mx-auto lg:items-start">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
          >
            {featuredNews.image && (
              <img src={featuredNews.image} alt={featuredNews.title} className="w-full h-52 md:h-56 lg:h-56 object-cover" />
            )}
            <div className="h-2 gold-accent" />
            <div className="p-6 md:p-7 flex flex-col">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                  {featuredNews.category}
                </Badge>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {featuredNews.date}
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
                {featuredNews.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 max-w-2xl [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:5] overflow-hidden">
                {featuredNews.excerpt}
              </p>
              <Link to={`/news/${featuredNews.id}`} className="mt-auto inline-flex items-center text-sm text-primary font-medium group-hover:underline">
                Read more
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.article>

          <div className="grid gap-4">
            {sidebarNews.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
              >
                {item.image && (
                  <img src={item.image} alt={item.title} className="w-full h-32 object-cover" />
                )}
                <div className="p-5 flex flex-col">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {item.category}
                    </Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
                    {item.excerpt}
                  </p>
                  <Link to={`/news/${item.id}`} className="mt-auto inline-flex items-center text-sm text-primary font-medium group-hover:underline">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link to="/news">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All News
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
