import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Handshake, Heart, Calendar } from "lucide-react";
import { useLanguage } from "@/lib/useLanguage";

const AboutPage = () => {
  const { t } = useLanguage();

  const aboutItems = [
    {
      icon: Users,
      title: t("about.items.ambassador.title"),
      description: t("about.items.ambassador.description"),
      href: t("about.items.ambassador.href"),
    },
    {
      icon: Handshake,
      title: t("about.items.mission.title"),
      description: t("about.items.mission.description"),
      href: t("about.items.mission.href"),
    },
    {
      icon: Heart,
      title: t("about.items.consuls.title"),
      description: t("about.items.consuls.description"),
      href: t("about.items.consuls.href"),
    },
    {
      icon: Calendar,
      title: t("about.items.holidays.title"),
      description: t("about.items.holidays.description"),
      href: t("about.items.holidays.href"),
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="py-12 bg-gradient-to-b from-primary/8 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="gold-accent h-1 w-16 mx-auto mb-4 rounded-full" />
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                {t("about.pageTitle")}
              </h1>
              <p className="text-muted-foreground text-base">
                {t("about.pageDesc")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Items Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {aboutItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a href={item.href} className="block h-full">
                    <Card className="h-full border-border hover:shadow-lg transition-shadow cursor-pointer">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" size="sm" className="w-full">
                          {t("services.learnMore")}
                        </Button>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
