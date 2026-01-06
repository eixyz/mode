import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/useLanguage";

const VisasServicePage = () => {
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
                {t("visasPage.pageTitle")}
              </h1>
              <p className="text-muted-foreground text-base">
                {t("visasPage.pageDesc")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Visa Types */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card className="border-border h-full">
                  <CardHeader>
                    <CardTitle>{t("visasPage.touristVisa")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {t("visasPage.touristVisaDesc")}
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 mb-4">
                      <li>• {t("visasPage.typicalValidity")}</li>
                      <li>• {t("visasPage.multipleEntry")}</li>
                      <li>• {t("visasPage.processingTime")}</li>
                    </ul>
                    <Button className="w-full" variant="outline">{t("visasPage.applyNow")}</Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <Card className="border-border h-full">
                  <CardHeader>
                    <CardTitle>{t("visasPage.businessVisa")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {t("visasPage.businessVisaDesc")}
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 mb-4">
                      <li>• {t("visasPage.typicalValidity")}</li>
                      <li>• {t("visasPage.businessRequired")}</li>
                      <li>• {t("visasPage.processingTime")}</li>
                    </ul>
                    <Button className="w-full" variant="outline">{t("visasPage.applyNow")}</Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <Card className="border-border h-full">
                  <CardHeader>
                    <CardTitle>{t("visasPage.residencePermit")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {t("visasPage.residencePermitDesc")}
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 mb-4">
                      <li>• {t("visasPage.residenceValidity")}</li>
                      <li>• {t("visasPage.residenceRequired")}</li>
                      <li>• {t("visasPage.residenceProcessing")}</li>
                    </ul>
                    <Button className="w-full" variant="outline">{t("visasPage.applyNow")}</Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <Card className="border-border h-full">
                  <CardHeader>
                    <CardTitle>{t("visasPage.visaExtension")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {t("visasPage.visaExtensionDesc")}
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 mb-4">
                      <li>• {t("visasPage.extensionInCountry")}</li>
                      <li>• {t("visasPage.extensionBeforeExpiry")}</li>
                      <li>• {t("visasPage.extensionProcessing")}</li>
                    </ul>
                    <Button className="w-full" variant="outline">{t("visasPage.applyNow")}</Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>{t("visasPage.visaRequirements")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p><strong>{t("visasPage.generalRequirements")}</strong></p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>{t("visasPage.req1")}</li>
                    <li>{t("visasPage.req2")}</li>
                    <li>{t("visasPage.req3")}</li>
                    <li>{t("visasPage.req4")}</li>
                    <li>{t("visasPage.req5")}</li>
                    <li>{t("visasPage.req6")}</li>
                    <li>{t("visasPage.req7")}</li>
                  </ul>
                  <div className="pt-4 border-t">
                    <a href="/contact" className="text-primary hover:underline">
                      {t("visasPage.contactRequirements")}
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

export default VisasServicePage;