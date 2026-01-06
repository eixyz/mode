import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/lib/useLanguage";

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

        {/* Content */}
        <section className="py-12">
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
