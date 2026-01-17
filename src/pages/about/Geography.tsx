import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/lib/useLanguage";
import { MapPin, Globe, Users, Languages } from "lucide-react";
import geographyImage from "@/assets/mozambique-geography.jpg";

const GeographyPage = () => {
  const { t } = useLanguage();

  const facts = [
    { icon: MapPin, key: "capital" },
    { icon: Globe, key: "area" },
    { icon: Users, key: "population" },
    { icon: Languages, key: "languages" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Image */}
        <section className="relative h-64 md:h-80 overflow-hidden">
          <img 
            src={geographyImage} 
            alt={t("geography.pageTitle")} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="gold-accent h-1 w-16 mb-4 rounded-full" />
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  {t("geography.pageTitle")}
                </h1>
                <p className="text-muted-foreground text-base mt-2 max-w-2xl">
                  {t("geography.pageDesc")}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Interactive Maps - Mozambique with neighbors and provinces */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Card className="border-border overflow-hidden">
                <CardHeader>
                  <CardTitle>{t("geography.mapTitle")}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Map showing Mozambique and neighbors */}
                    <div className="aspect-video lg:aspect-square">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7665989.395361648!2d31.25!3d-18.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d4aca0de5d9f93%3A0x19f8f0e02a00cd7!2sMozambique!5e0!3m2!1sen!2sde!4v1700000000000!5m2!1sen!2sde"
                        width="100%"
                        height="100%"
                        style={{ border: 0, minHeight: "300px" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Mozambique Map"
                      />
                    </div>
                    {/* Provinces Map - Terrain view */}
                    <div className="aspect-video lg:aspect-square">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846879.7974692127!2d32.5!3d-19.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d4aca0de5d9f93%3A0x19f8f0e02a00cd7!2sMozambique!5e1!3m2!1sen!2sde!4v1700000000001!5m2!1sen!2sde"
                        width="100%"
                        height="100%"
                        style={{ border: 0, minHeight: "300px" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Mozambique Provinces Map"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Key Facts */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {facts.map((fact, index) => (
                  <motion.div
                    key={fact.key}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                  >
                    <Card className="border-border text-center">
                      <CardContent className="pt-6">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                          <fact.icon className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-xs text-muted-foreground">{t(`geography.${fact.key}`)}</p>
                        <p className="text-sm font-semibold text-foreground mt-1">{t(`geography.${fact.key}Value`)}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Location & Climate */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
                transition={{ duration: 0.5, delay: 0.25 }}
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
            </div>

            {/* Borders */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8"
            >
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>{t("geography.bordersTitle")}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p className="mb-4">{t("geography.bordersText")}</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>{t("geography.border1")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>{t("geography.border2")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>{t("geography.border3")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>{t("geography.border4")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>{t("geography.border5")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>{t("geography.border6")}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Languages Section */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mb-8"
            >
              <Card className="border-border bg-primary/5">
                <CardHeader>
                  <CardTitle>{t("geography.languagesTitle")}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p>{t("geography.languagesText")}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t("geography.officialLanguage")}</h4>
                      <p>{t("geography.officialLanguageText")}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t("geography.bantuLanguages")}</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Emakhuwa (26%)</li>
                        <li>Xichangana (11%)</li>
                        <li>Elomwe (8%)</li>
                        <li>Cisena (7%)</li>
                        <li>Echuwabo (6%)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold text-foreground mb-2">{t("geography.influentialLanguages")}</h4>
                    <p>{t("geography.influentialLanguagesText")}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Provinces */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>{t("geography.provincesTitle")}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p className="mb-4">{t("geography.provincesText")}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      "Maputo City", "Maputo Province", "Gaza", "Inhambane",
                      "Sofala", "Manica", "Tete", "Zambézia",
                      "Nampula", "Cabo Delgado", "Niassa"
                    ].map((province) => (
                      <div key={province} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span>{province}</span>
                      </div>
                    ))}
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

export default GeographyPage;
