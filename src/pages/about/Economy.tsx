import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/lib/useLanguage";
import { TrendingUp, Factory, Leaf, Fuel, Ship, Building2 } from "lucide-react";
import economyImage from "@/assets/mozambique-economy.jpg";

const EconomyPage = () => {
  const { t } = useLanguage();

  const sectors = [
    { icon: Fuel, key: "energy" },
    { icon: Factory, key: "mining" },
    { icon: Leaf, key: "agriculture" },
    { icon: Ship, key: "ports" },
    { icon: Building2, key: "tourism" },
    { icon: TrendingUp, key: "manufacturing" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Image */}
        <section className="relative h-64 md:h-80 overflow-hidden">
          <img 
            src={economyImage} 
            alt={t("economy.pageTitle")} 
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
                  {t("economy.pageTitle")}
                </h1>
                <p className="text-muted-foreground text-base mt-2 max-w-2xl">
                  {t("economy.pageDesc")}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>{t("economy.overviewTitle")}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p>{t("economy.overviewText1")}</p>
                  <p>{t("economy.overviewText2")}</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Key Sectors */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
                {t("economy.sectorsTitle")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sectors.map((sector, index) => (
                  <motion.div
                    key={sector.key}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                  >
                    <Card className="border-border h-full hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                          <sector.icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">{t(`economy.${sector.key}Title`)}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{t(`economy.${sector.key}Text`)}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Investment Opportunities */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8"
            >
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>{t("economy.investmentTitle")}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p>{t("economy.investmentText")}</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>{t("economy.investment1")}</li>
                    <li>{t("economy.investment2")}</li>
                    <li>{t("economy.investment3")}</li>
                    <li>{t("economy.investment4")}</li>
                    <li>{t("economy.investment5")}</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Trade Relations */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="border-border bg-primary/5">
                <CardHeader>
                  <CardTitle>{t("economy.tradeTitle")}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p>{t("economy.tradeText")}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t("economy.exportsTitle")}</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>{t("economy.export1")}</li>
                        <li>{t("economy.export2")}</li>
                        <li>{t("economy.export3")}</li>
                        <li>{t("economy.export4")}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t("economy.partnersTitle")}</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>{t("economy.partner1")}</li>
                        <li>{t("economy.partner2")}</li>
                        <li>{t("economy.partner3")}</li>
                        <li>{t("economy.partner4")}</li>
                      </ul>
                    </div>
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

export default EconomyPage;
