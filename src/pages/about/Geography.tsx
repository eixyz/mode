import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/lib/useLanguage";
import { MapPin, Globe, Users, Languages } from "lucide-react";

const GeographyPage = () => {
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
                {t("geography.pageTitle")}
              </h1>
              <p className="text-muted-foreground text-base">
                {t("geography.pageDesc")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Card className="border-border overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    {t("geography.mapTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-video w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7669045.665548652!2d31.5!3d-18.665695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d4aa0a6de49d33%3A0x35e14f0e3da2eb89!2sMozambique!5e0!3m2!1sen!2sde!4v1704067200000!5m2!1sen!2sde"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Map of Mozambique"
                      className="w-full h-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Key Facts Grid */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
            >
              <Card className="border-border text-center">
                <CardContent className="pt-6">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground">{t("geography.capital")}</h4>
                  <p className="text-muted-foreground">{t("geography.capitalValue")}</p>
                </CardContent>
              </Card>
              <Card className="border-border text-center">
                <CardContent className="pt-6">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground">{t("geography.area")}</h4>
                  <p className="text-muted-foreground">{t("geography.areaValue")}</p>
                </CardContent>
              </Card>
              <Card className="border-border text-center">
                <CardContent className="pt-6">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground">{t("geography.population")}</h4>
                  <p className="text-muted-foreground">{t("geography.populationValue")}</p>
                </CardContent>
              </Card>
              <Card className="border-border text-center">
                <CardContent className="pt-6">
                  <Languages className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground">{t("geography.languages")}</h4>
                  <p className="text-muted-foreground">{t("geography.languagesValue")}</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Detailed Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="border-border h-full">
                  <CardHeader>
                    <CardTitle>{t("geography.locationTitle")}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3">
                    <p>{t("geography.locationText1")}</p>
                    <p>{t("geography.locationText2")}</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="border-border h-full">
                  <CardHeader>
                    <CardTitle>{t("geography.climateTitle")}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3">
                    <p>{t("geography.climateText1")}</p>
                    <p>{t("geography.climateText2")}</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="border-border h-full">
                  <CardHeader>
                    <CardTitle>{t("geography.bordersTitle")}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>{t("geography.border1")}</li>
                      <li>{t("geography.border2")}</li>
                      <li>{t("geography.border3")}</li>
                      <li>{t("geography.border4")}</li>
                      <li>{t("geography.border5")}</li>
                      <li>{t("geography.border6")}</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Card className="border-border h-full">
                  <CardHeader>
                    <CardTitle>{t("geography.provincesTitle")}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p className="mb-3">{t("geography.provincesText")}</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <span>• Maputo City</span>
                      <span>• Maputo Province</span>
                      <span>• Gaza</span>
                      <span>• Inhambane</span>
                      <span>• Sofala</span>
                      <span>• Manica</span>
                      <span>• Tete</span>
                      <span>• Zambézia</span>
                      <span>• Nampula</span>
                      <span>• Niassa</span>
                      <span>• Cabo Delgado</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GeographyPage;