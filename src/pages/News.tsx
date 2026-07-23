import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useNewsStore } from "@/lib/newsStore";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

const PAGE_SIZE = 9;

const NewsPage = () => {
  const { newsItems } = useNewsStore();
  const featuredNews = newsItems[0];
  const sidebarNews = newsItems.slice(1, 3);
  const paginatedSource = useMemo(() => newsItems.slice(3), [newsItems]);
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(paginatedSource.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const remainingNews = paginatedSource.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto mb-6">
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </Link>
            </div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="max-w-3xl mx-auto text-center mb-10">
              <div className="gold-accent h-1 w-16 mx-auto mb-6 rounded-full" />
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">News & Announcements</h1>
              <p className="text-muted-foreground mt-3">All recent news and announcements from the Embassy.</p>
            </motion.div>

            {featuredNews && (
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1.12fr)_minmax(340px,0.88fr)] max-w-6xl mx-auto mb-10 lg:items-start">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                  <Link to={`/news/${featuredNews.id}`}>
                    <Card className="cursor-pointer hover:shadow-lg overflow-hidden border-border hover:border-primary/25 transition-colors">
                      {featuredNews.image && (
                        <img src={featuredNews.image} alt={featuredNews.title} className="w-full h-56 object-cover" />
                      )}
                      <CardHeader className="pb-4">
                        <CardDescription className="text-sm text-muted-foreground">{featuredNews.date} • {featuredNews.category}</CardDescription>
                        <CardTitle className="text-2xl [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">{featuredNews.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col">
                        <p className="text-sm md:text-base text-muted-foreground mb-6 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:5] overflow-hidden">{featuredNews.excerpt}</p>
                        <Button variant="outline">Read full article</Button>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>

                <div className="grid gap-4">
                  {sidebarNews.map((n, index) => (
                    <motion.div key={n.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.08 }}>
                      <Link to={`/news/${n.id}`}>
                        <Card className="cursor-pointer hover:shadow-lg overflow-hidden border-border hover:border-primary/25 transition-colors">
                          {n.image && (
                            <img src={n.image} alt={n.title} className="w-full h-32 object-cover" />
                          )}
                          <CardHeader className="pb-4">
                            <CardDescription className="text-sm text-muted-foreground">{n.date} • {n.category}</CardDescription>
                            <CardTitle className="text-lg [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">{n.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="flex flex-col">
                            <p className="text-sm text-muted-foreground mb-4 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">{n.excerpt}</p>
                            <Button variant="outline">Read full article</Button>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {remainingNews.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {remainingNews.map((n) => (
                  <motion.div key={n.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                    <Link to={`/news/${n.id}`}>
                      <Card className="cursor-pointer hover:shadow-lg overflow-hidden h-full border-border hover:border-primary/25 transition-colors">
                        {n.image && (
                          <img src={n.image} alt={n.title} className="w-full h-48 object-cover" />
                        )}
                        <CardHeader>
                          <CardDescription className="text-sm text-muted-foreground">{n.date} • {n.category}</CardDescription>
                          <CardTitle className="text-lg">{n.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4">{n.excerpt}</p>
                          <Button variant="outline">Read full article</Button>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NewsPage;
