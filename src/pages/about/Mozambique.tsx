import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/useLanguage";
import { Link } from "react-router-dom";
import { Globe, Music, TrendingUp, Palmtree, ArrowRight } from "lucide-react";

const subpageLinks = [
  { icon: Globe, href: "/about/mozambique/geography", titleKey: "header.geography", descKey: "mozambique.geographyLinkDesc" },
  { icon: Music, href: "/about/mozambique/culture", titleKey: "header.culture", descKey: "mozambique.cultureLinkDesc" },
  { icon: TrendingUp, href: "/about/mozambique/economy", titleKey: "header.economy", descKey: "mozambique.economyLinkDesc" },
  { icon: Palmtree, href: "/about/mozambique/tourism", titleKey: "header.tourism", descKey: "mozambique.tourismLinkDesc" },
];

const MozambiquePage = () => {
  const { t } = useLanguage();

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
                {t("mozambique.pageTitle")}
              </h1>
              <p className="text-muted-foreground text-base">
                {t("mozambique.pageDesc")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Subpage Navigation Links */}
        {/* <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {subpageLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                >
                  <Link to={link.href} className="block group">
                    <Card className="border-border hover:border-primary/40 hover:shadow-md transition-all h-full">
                      <CardContent className="flex items-center gap-4 py-5">
                        <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <link.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground text-sm">{t(link.titleKey)}</h3>
                          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{t(link.descKey)}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Content */}
        <section className="pb-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card className="border-border mb-6">
                <CardHeader>
                  <CardTitle>{t("mozambique.geographyTitle")}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p>{t("mozambique.geographyText")}</p>
                  <p>
                    <strong>{t("mozambique.capital")}:</strong> {t("mozambique.capitalValue")}<br />
                    <strong>{t("mozambique.region")}:</strong> {t("mozambique.regionValue")}<br />
                    <strong>{t("mozambique.population")}:</strong> {t("mozambique.populationValue")}<br />
                    <strong>{t("mozambique.languages")}:</strong> {t("mozambique.languagesValue")}
                  </p>
                  <Link to="/about/mozambique/geography">
                    <Button variant="outline" size="sm" className="mt-2 gap-1">
                      {t("services.learnMore")} <ArrowRight className="w-3 h-3" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Card className="border-border mb-6">
                <CardHeader>
                  <CardTitle>{t("mozambique.cultureTitle")}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p>{t("mozambique.cultureText")}</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>{t("mozambique.culture1")}</li>
                    <li>{t("mozambique.culture2")}</li>
                    <li>{t("mozambique.culture3")}</li>
                    <li>{t("mozambique.culture4")}</li>
                  </ul>
                  <Link to="/about/mozambique/culture">
                    <Button variant="outline" size="sm" className="mt-2 gap-1">
                      {t("services.learnMore")} <ArrowRight className="w-3 h-3" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Card className="border-border mb-6">
                <CardHeader>
                  <CardTitle>{t("mozambique.economyTitle")}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p>{t("mozambique.economyText")}</p>
                  <p><strong>{t("mozambique.economySectors")}:</strong></p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>{t("mozambique.economy1")}</li>
                    <li>{t("mozambique.economy2")}</li>
                    <li>{t("mozambique.economy3")}</li>
                    <li>{t("mozambique.economy4")}</li>
                    <li>{t("mozambique.economy5")}</li>
                    <li>{t("mozambique.economy6")}</li>
                  </ul>
                  <Link to="/about/mozambique/economy">
                    <Button variant="outline" size="sm" className="mt-2 gap-1">
                      {t("services.learnMore")} <ArrowRight className="w-3 h-3" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>{t("mozambique.tourismTitle")}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p>{t("mozambique.tourismText")}</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>{t("mozambique.tourism1")}</li>
                    <li>{t("mozambique.tourism2")}</li>
                    <li>{t("mozambique.tourism3")}</li>
                    <li>{t("mozambique.tourism4")}</li>
                    <li>{t("mozambique.tourism5")}</li>
                    <li>{t("mozambique.tourism6")}</li>
                  </ul>
                  <Link to="/about/mozambique/tourism">
                    <Button variant="outline" size="sm" className="mt-2 gap-1">
                      {t("services.learnMore")} <ArrowRight className="w-3 h-3" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MozambiquePage;
