import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/useLanguage";

const ConsulsPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="font-serif text-3xl font-bold mb-2">{t("consuls.pageTitle")}</h1>
              <p className="text-muted-foreground mb-6">{t("consuls.pageDesc")}</p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{t("consuls.munich")}</span>
                      <span className="text-xs font-normal text-muted-foreground">{t("consuls.bavaria")}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <div>
                      <p className="font-semibold text-foreground">Hon. Siegfried Lingel</p>
                      <p>Bayerstr. 33<br/>80335 München</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{t("consuls.hamburg")}</span>
                      <span className="text-xs font-normal text-muted-foreground">{t("consuls.northernGermany")}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <div>
                      <p className="font-semibold text-foreground">Hon. Dietrich Scheder-Bieschin</p>
                      <p>Große Elbstr. 138<br/>22767 Hamburg</p>
                      <p className="pt-2"><strong>{t("consuls.tel")}:</strong> +49 40 37673131</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{t("consuls.stuttgart")}</span>
                      <span className="text-xs font-normal text-muted-foreground">{t("consuls.badenWurttemberg")}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <div>
                      <p className="font-semibold text-foreground">Hon. Marcus Lingel</p>
                      <p>Königstr. 41<br/>70173 Stuttgart</p>
                      <p className="pt-2"><strong>{t("consuls.tel")}:</strong> +49 711 87030922</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{t("consuls.vienna")}</span>
                      <span className="text-xs font-normal text-muted-foreground">{t("consuls.austria")}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <div>
                      <p className="font-semibold text-foreground">Hon. Karl Hans Polzhofer IV</p>
                      <p>{t("consuls.vienna")}, {t("consuls.austria")}</p>
                    </div>
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

export default ConsulsPage;
