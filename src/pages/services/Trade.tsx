import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/useLanguage";

const TradeInvestPage = () => {
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
                {t("tradePage.pageTitle")}
              </h1>
              <p className="text-muted-foreground text-base">
                {t("tradePage.pageDesc")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card className="border-border h-full">
                  <CardHeader>
                    <CardTitle>{t("tradePage.tradeOpportunities")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {t("tradePage.tradeOpportunitiesDesc")}
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 mb-4">
                      <li>• {t("tradePage.bilateralAgreements")}</li>
                      <li>• {t("tradePage.exportImportGuidelines")}</li>
                      <li>• {t("tradePage.tradeFacilitation")}</li>
                      <li>• {t("tradePage.commercialInfo")}</li>
                    </ul>
                    <Button className="w-full" variant="outline">{t("tradePage.learnMore")}</Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <Card className="border-border h-full">
                  <CardHeader>
                    <CardTitle>{t("tradePage.investmentInfo")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {t("tradePage.investmentInfoDesc")}
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 mb-4">
                      <li>• {t("tradePage.investmentRegulations")}</li>
                      <li>• {t("tradePage.taxIncentives")}</li>
                      <li>• {t("tradePage.sectorOpportunities")}</li>
                      <li>• {t("tradePage.businessResources")}</li>
                    </ul>
                    <Button className="w-full" variant="outline">{t("tradePage.learnMore")}</Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <Card className="border-border h-full">
                  <CardHeader>
                    <CardTitle>{t("tradePage.businessRelations")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {t("tradePage.businessRelationsDesc")}
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 mb-4">
                      <li>• {t("tradePage.b2bEvents")}</li>
                      <li>• {t("tradePage.businessMatchmaking")}</li>
                      <li>• {t("tradePage.tradeMissions")}</li>
                      <li>• {t("tradePage.commercialContacts")}</li>
                    </ul>
                    <Button className="w-full" variant="outline">{t("tradePage.learnMore")}</Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <Card className="border-border h-full">
                  <CardHeader>
                    <CardTitle>{t("tradePage.economicUpdates")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {t("tradePage.economicUpdatesDesc")}
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 mb-4">
                      <li>• {t("tradePage.economicReports")}</li>
                      <li>• {t("tradePage.marketAnalysis")}</li>
                      <li>• {t("tradePage.industryTrends")}</li>
                      <li>• {t("tradePage.businessUpdates")}</li>
                    </ul>
                    <Button className="w-full" variant="outline">{t("tradePage.learnMore")}</Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>{t("tradePage.keySectors")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p><strong>{t("tradePage.prioritySectors")}</strong></p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>{t("tradePage.sector1")}</li>
                    <li>{t("tradePage.sector2")}</li>
                    <li>{t("tradePage.sector3")}</li>
                    <li>{t("tradePage.sector4")}</li>
                    <li>{t("tradePage.sector5")}</li>
                    <li>{t("tradePage.sector6")}</li>
                    <li>{t("tradePage.sector7")}</li>
                  </ul>
                  <div className="pt-4 border-t">
                      <Link to="/contact" className="text-primary hover:underline">
                      {t("tradePage.contactTrade")}
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

export default TradeInvestPage;