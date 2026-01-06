import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/useLanguage";

const MissionPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="font-serif text-3xl font-bold mb-2">{t("mission.pageTitle")}</h1>
              <p className="text-muted-foreground mb-4">{t("mission.pageDesc")}</p>

              <div className="grid grid-cols-1 gap-4 mb-6">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>{t("mission.statementTitle")}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>{t("mission.statementText")}</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>{t("mission.objectivesTitle")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-2">
                      <li>{t("mission.objective1")}</li>
                      <li>{t("mission.objective2")}</li>
                      <li>{t("mission.objective3")}</li>
                      <li>{t("mission.objective4")}</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>{t("mission.focusTitle")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-2">
                      <li>{t("mission.focus1")}</li>
                      <li>{t("mission.focus2")}</li>
                      <li>{t("mission.focus3")}</li>
                      <li>{t("mission.focus4")}</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MissionPage;
