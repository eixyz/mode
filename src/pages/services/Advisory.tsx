import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/useLanguage";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AdvisoryPage = () => {
  const { t } = useLanguage();

  const services = [
    { key: "legalAssistance", subject: "Legal Assistance" },
    { key: "adminSupport", subject: "Administrative Support" },
    { key: "citizenSupport", subject: "Citizen Support" },
    { key: "multiCountrySupport", subject: "Multi-Country Support" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
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
                {t("advisoryPage.pageTitle")}
              </h1>
              <p className="text-muted-foreground text-base">
                {t("advisoryPage.pageDesc")}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {services.map((svc, index) => (
                <motion.div key={svc.key} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <Card className="border-border h-full flex flex-col">
                    <CardHeader>
                      <CardTitle>{t(`advisoryPage.${svc.key}`)}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-sm text-muted-foreground mb-4 flex-1">
                        {t(`advisoryPage.${svc.key}Desc`)}
                      </p>
                      <Link to={`/contact?subject=${encodeURIComponent(svc.subject)}`}>
                        <Button className="w-full" variant="outline">
                          {t("advisoryPage.requestAssistance")}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>{t("advisoryPage.howToGetAssistance")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>{t("advisoryPage.assistStep1")}</p>
                  <p>{t("advisoryPage.assistStep2")}</p>
                  <p>{t("advisoryPage.assistStep3")}</p>
                  <p>{t("advisoryPage.assistStep4")}</p>
                  <p>{t("advisoryPage.assistStep5")}</p>
                  <div className="pt-4 border-t">
                    <Link to="/contact" className="text-primary hover:underline">
                      {t("advisoryPage.contactAdvisory")}
                    </Link>
                  </div>
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

export default AdvisoryPage;
