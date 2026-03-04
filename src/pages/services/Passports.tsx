import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/useLanguage";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PassportsPage = () => {
  const { t } = useLanguage();

  const services = [
    {
      key: "passportIssuance",
      subject: "Passport Issuance & Renewal",
      details: [
        t("passportsPage.passportDetail1"),
        t("passportsPage.passportDetail2"),
        t("passportsPage.passportDetail3"),
        t("passportsPage.passportDetail4"),
      ],
    },
    {
      key: "civilRegistration",
      subject: "Civil Registration",
      details: [
        t("passportsPage.civilDetail1"),
        t("passportsPage.civilDetail2"),
        t("passportsPage.civilDetail3"),
      ],
    },
    {
      key: "birthRegistration",
      subject: "Birth Registration",
      details: [
        t("passportsPage.birthDetail1"),
        t("passportsPage.birthDetail2"),
        t("passportsPage.birthDetail3"),
      ],
    },
    {
      key: "deathRegistration",
      subject: "Death Registration",
      details: [
        t("passportsPage.deathDetail1"),
        t("passportsPage.deathDetail2"),
        t("passportsPage.deathDetail3"),
      ],
    },
    {
      key: "idRenewal",
      subject: "National ID Renewal",
      details: [
        t("passportsPage.idDetail1"),
        t("passportsPage.idDetail2"),
        t("passportsPage.idDetail3"),
      ],
    },
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
                {t("passportsPage.pageTitle")}
              </h1>
              <p className="text-muted-foreground text-base">
                {t("passportsPage.pageDesc")}
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
                      <CardTitle>{t(`passportsPage.${svc.key}`)}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-sm text-muted-foreground mb-3">
                        {t(`passportsPage.${svc.key}Desc`)}
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1.5 mb-4 flex-1">
                        {svc.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to={`/contact?subject=${encodeURIComponent(svc.subject)}`}>
                        <Button className="w-full" variant="outline">
                          {t("passportsPage.contactAbout")}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>{t("passportsPage.howToApply")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>{t("passportsPage.step1")}</p>
                  <p>{t("passportsPage.step2")}</p>
                  <p>{t("passportsPage.step3")}</p>
                  <p>{t("passportsPage.step4")}</p>
                  <p>{t("passportsPage.step5")}</p>
                  <div className="pt-4 border-t">
                    <Link to="/contact" className="text-primary hover:underline">
                      {t("passportsPage.contactSchedule")}
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

export default PassportsPage;
