import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/lib/useLanguage";
import { Palmtree, Fish, Camera, Mountain, Compass, Anchor } from "lucide-react";
import tourismImage from "@/assets/mozambique-tourism.jpg";

const TourismPage = () => {
  const { t } = useLanguage();

  const attractions = [
    { icon: Palmtree, key: "beaches" },
    { icon: Fish, key: "marine" },
    { icon: Mountain, key: "parks" },
    { icon: Camera, key: "heritage" },
    { icon: Compass, key: "adventure" },
    { icon: Anchor, key: "islands" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Image */}
        <section className="relative h-64 md:h-80 overflow-hidden">
          <img 
            src={tourismImage} 
            alt={t("tourism.pageTitle")} 
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
                  {t("tourism.pageTitle")}
                </h1>
                <p className="text-muted-foreground text-base mt-2 max-w-2xl">
                  {t("tourism.pageDesc")}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Tourism Maps - Bazaruto & Gorongosa */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Card className="border-border overflow-hidden">
                <CardHeader>
                  <CardTitle>{t("tourism.mapTitle")}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Bazaruto Archipelago */}
                    <div className="aspect-video">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462875.6!2d35.0!3d-21.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee7c0ef8de67b17%3A0x9b5d4db5d4d71f35!2sBazaruto%20Archipelago!5e0!3m2!1sen!2sde!4v1700000000002!5m2!1sen!2sde"
                        width="100%"
                        height="100%"
                        style={{ border: 0, minHeight: "250px" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Bazaruto Archipelago"
                      />
                    </div>
                    {/* Gorongosa National Park */}
                    <div className="aspect-video">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d491584.7!2d34.3!3d-18.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18de7af73b0c9b27%3A0x2c4b8d5a6c8e9f3a!2sGorongosa%20National%20Park!5e0!3m2!1sen!2sde!4v1700000000003!5m2!1sen!2sde"
                        width="100%"
                        height="100%"
                        style={{ border: 0, minHeight: "250px" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Gorongosa National Park"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <Card className="border-border">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {t("tourism.introText")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Attractions Grid */}
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
              {t("tourism.attractionsTitle")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {attractions.map((attraction, index) => (
                <motion.div
                  key={attraction.key}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                >
                  <Card className="border-border h-full hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                        <attraction.icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-base">{t(`tourism.${attraction.key}Title`)}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{t(`tourism.${attraction.key}Text`)}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Top Destinations */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-8"
            >
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>{t("tourism.destinationsTitle")}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t("tourism.bazarutoTitle")}</h4>
                      <p>{t("tourism.bazarutoText")}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t("tourism.gorongosaTitle")}</h4>
                      <p>{t("tourism.gorongosaText")}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t("tourism.ilhaTitle")}</h4>
                      <p>{t("tourism.ilhaText")}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t("tourism.tofoTitle")}</h4>
                      <p>{t("tourism.tofoText")}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Travel Tips */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="border-border bg-primary/5">
                <CardHeader>
                  <CardTitle>{t("tourism.tipsTitle")}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>{t("tourism.tip1")}</li>
                    <li>{t("tourism.tip2")}</li>
                    <li>{t("tourism.tip3")}</li>
                    <li>{t("tourism.tip4")}</li>
                    <li>{t("tourism.tip5")}</li>
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

export default TourismPage;
