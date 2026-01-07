import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe, Plane, Building2, Heart, GraduationCap, Newspaper } from "lucide-react";
import { useLanguage } from "@/lib/useLanguage";

const UsefulLinksPage = () => {
  const { t } = useLanguage();

  const linkCategories = [
    {
      icon: Building2,
      title: t("usefulLinks.government"),
      links: [
        { name: t("usefulLinks.govMozambique"), url: "https://www.portaldogoverno.gov.mz/" },
        { name: t("usefulLinks.foreignAffairs"), url: "https://www.minec.gov.mz/" },
        { name: t("usefulLinks.immigration"), url: "https://www.mint.gov.mz/" },
        { name: t("usefulLinks.parliament"), url: "https://www.parlamento.mz/" },
      ],
    },
    {
      icon: Plane,
      title: t("usefulLinks.travel"),
      links: [
        { name: t("usefulLinks.tourismMoz"), url: "https://www.visitmozambique.net/" },
        { name: t("usefulLinks.lamAirlines"), url: "https://www.lam.co.mz/" },
        { name: t("usefulLinks.airports"), url: "https://www.aeroportos.co.mz/" },
      ],
    },
    {
      icon: Globe,
      title: t("usefulLinks.businessTrade"),
      links: [
        { name: t("usefulLinks.investmentAgency"), url: "https://www.apiex.gov.mz/" },
        { name: t("usefulLinks.chamberCommerce"), url: "https://www.ccm.org.mz/" },
        { name: t("usefulLinks.bankMozambique"), url: "https://www.bancomoc.mz/" },
        { name: t("usefulLinks.stockExchange"), url: "https://www.bvm.co.mz/" },
      ],
    },
    {
      icon: Newspaper,
      title: t("usefulLinks.media"),
      links: [
        { name: t("usefulLinks.tvm"), url: "https://www.tvm.co.mz/" },
        { name: t("usefulLinks.radioMoz"), url: "https://www.rm.co.mz/" },
        { name: t("usefulLinks.noticiasOnline"), url: "https://www.jornalnoticias.co.mz/" },
        { name: t("usefulLinks.opaís"), url: "https://www.opais.co.mz/" },
      ],
    },
    {
      icon: GraduationCap,
      title: t("usefulLinks.education"),
      links: [
        { name: t("usefulLinks.eduMinistry"), url: "https://www.mined.gov.mz/" },
        { name: t("usefulLinks.uem"), url: "https://www.uem.mz/" },
        { name: t("usefulLinks.up"), url: "https://www.up.ac.mz/" },
      ],
    },
    {
      icon: Heart,
      title: t("usefulLinks.health"),
      links: [
        { name: t("usefulLinks.healthMinistry"), url: "https://www.misau.gov.mz/" },
        { name: t("usefulLinks.who"), url: "https://www.afro.who.int/countries/mozambique" },
      ],
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
                {t("usefulLinks.pageTitle")}
              </h1>
              <p className="text-muted-foreground text-base">
                {t("usefulLinks.pageDesc")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Links Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {linkCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-border hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <category.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {category.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              <ExternalLink className="w-4 h-4 flex-shrink-0" />
                              <span>{link.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm text-muted-foreground">
                {t("usefulLinks.disclaimer")}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UsefulLinksPage;
