import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/lib/useLanguage";
import { Calendar, Flag, Info } from "lucide-react";

const HolidaysPage = () => {
  const { t } = useLanguage();

  const mozambiqueHolidays = [
    { date: "01.01", key: "newYear" },
    { date: "03.02", key: "heroesDay" },
    { date: "07.04", key: "womenDay" },
    { date: "01.05", key: "laborDay" },
    { date: "25.06", key: "independenceDay" },
    { date: "07.09", key: "victoryDay" },
    { date: "25.09", key: "armedForcesDay" },
    { date: "04.10", key: "peaceDay" },
    { date: "25.12", key: "familyDay" },
  ];

  const germanHolidays = [
    { date: "01.01", key: "newYearDE" },
    { date: "variable", key: "goodFriday" },
    { date: "variable", key: "easterMonday" },
    { date: "01.05", key: "laborDayDE" },
    { date: "variable", key: "ascension" },
    { date: "variable", key: "whitMonday" },
    { date: "03.10", key: "germanUnity" },
    { date: "25.12", key: "christmas1" },
    { date: "26.12", key: "christmas2" },
  ];

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
                {t("holidays.pageTitle")}
              </h1>
              <p className="text-muted-foreground text-base">
                {t("holidays.pageDesc")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Notice */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      {t("holidays.notice")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Mozambique Holidays */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <Card className="border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Flag className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle>{t("holidays.mozambiqueTitle")}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {mozambiqueHolidays.map((holiday, index) => (
                      <motion.div
                        key={holiday.key}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 + index * 0.03 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-foreground">{t(`holidays.${holiday.key}`)}</p>
                          <p className="text-xs text-muted-foreground">{holiday.date}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* German Holidays */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Flag className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle>{t("holidays.germanTitle")}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {germanHolidays.map((holiday, index) => (
                      <motion.div
                        key={holiday.key}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 + index * 0.03 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-foreground">{t(`holidays.${holiday.key}`)}</p>
                          <p className="text-xs text-muted-foreground">
                            {holiday.date === "variable" ? t("holidays.variable") : holiday.date}
                          </p>
                        </div>
                      </motion.div>
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

export default HolidaysPage;
