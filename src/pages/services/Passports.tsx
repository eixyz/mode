import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/useLanguage";

const PassportsPage = () => {
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
                {t("passportsPage.pageTitle")}
              </h1>
              <p className="text-muted-foreground text-base">
                {t("passportsPage.pageDesc")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card className="border-border h-full">
                  <CardHeader>
                    <CardTitle>{t("passportsPage.passportIssuance")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {t("passportsPage.passportIssuanceDesc")}
                    </p>
                    <Button className="w-full" variant="outline">{t("passportsPage.requestInfo")}</Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <Card className="border-border h-full">
                  <CardHeader>
                    <CardTitle>{t("passportsPage.civilRegistration")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {t("passportsPage.civilRegistrationDesc")}
                    </p>
                    <Button className="w-full" variant="outline">{t("passportsPage.requestInfo")}</Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <Card className="border-border h-full">
                  <CardHeader>
                    <CardTitle>{t("passportsPage.birthRegistration")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {t("passportsPage.birthRegistrationDesc")}
                    </p>
                    <Button className="w-full" variant="outline">{t("passportsPage.requestInfo")}</Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <Card className="border-border h-full">
                  <CardHeader>
                    <CardTitle>{t("passportsPage.deathRegistration")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {t("passportsPage.deathRegistrationDesc")}
                    </p>
                    <Button className="w-full" variant="outline">{t("passportsPage.requestInfo")}</Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
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
                    <a href="/contact" className="text-primary hover:underline">
                      {t("passportsPage.contactSchedule")}
                    </a>
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