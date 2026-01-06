import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/useLanguage";

const AmbassadorPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="font-serif text-3xl font-bold mb-2">{t("ambassador.pageTitle")}</h1>
              <p className="text-muted-foreground mb-4">{t("ambassador.pageDesc")}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>{t("ambassador.profileTitle")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div>
                        <p className="font-semibold text-foreground">{t("ambassador.name")}</p>
                        <p>{t("ambassador.nameValue")}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{t("ambassador.position")}</p>
                        <p>{t("ambassador.positionValue")}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{t("ambassador.appointed")}</p>
                        <p>{t("ambassador.appointedValue")}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>{t("ambassador.roleTitle")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
                      <li>{t("ambassador.role1")}</li>
                      <li>{t("ambassador.role2")}</li>
                      <li>{t("ambassador.role3")}</li>
                      <li>{t("ambassador.role4")}</li>
                      <li>{t("ambassador.role5")}</li>
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

export default AmbassadorPage;
