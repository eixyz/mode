import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useNewsStore } from "@/lib/newsStore";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const NewsDetail = () => {
  const { id } = useParams();
  const { getNewsById } = useNewsStore();
  const item = id ? getNewsById(id) : null;

  useEffect(() => {
    // Ensure the page is scrolled to the top when navigating to a news detail
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [id]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-3xl">
            {item ? (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                {item.image && (
                  <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded-lg mb-8" />
                )}
                <div className="gold-accent h-1 w-16 mb-6 rounded-full" />
                <h1 className="font-serif text-3xl font-bold text-foreground mb-2">{item.title}</h1>
                <div className="text-sm text-muted-foreground mb-6">{item.date} • {item.category}</div>
                <article className="prose max-w-none text-foreground">
                  <p>{item.content ?? item.excerpt}</p>
                </article>
                <div className="mt-8">
                  <Link to="/news"><Button variant="outline">Back to news</Button></Link>
                </div>
              </motion.div>
            ) : (
              <div className="text-center py-24">
                <h2 className="text-2xl font-semibold">Article not found</h2>
                <p className="text-muted-foreground mt-4">The requested news article could not be located.</p>
                <div className="mt-6"><Link to="/news"><Button variant="outline">View all news</Button></Link></div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NewsDetail;
