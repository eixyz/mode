import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard } from "lucide-react";
import { useLanguage } from "@/lib/useLanguage";
import { DocumentList } from "@/components/DocumentList";

const FormsDocumentsPage = () => {
  const { t } = useLanguage();

  const bankDetails = {
    holder: "Botschaft der Republik Mosambik",
    iban: "DE58 1007 0000 0237 0088 01",
    bic: "DEUTDEBBXXX",
    bank: "Deutsche Bank",
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
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
                {t("services.formsTitle")}
              </h1>
              <p className="text-muted-foreground text-base">
                {t("services.formsDesc")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Documents Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Managed by staff in /admin: Documents & Public Notices. */}
            <div className="mb-12">
              <DocumentList />
            </div>

            {/* Bank Details */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{t("services.bankTitle")}</CardTitle>
                      <CardDescription>{t("services.bankDesc")}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-muted-foreground">{t("services.accountHolder")}</label>
                    <p className="text-foreground mt-1">{bankDetails.holder}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-muted-foreground">{t("services.bankLabel")}</label>
                    <p className="text-foreground mt-1">{bankDetails.bank}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-muted-foreground">IBAN</label>
                    <p className="text-foreground font-mono mt-1">{bankDetails.iban}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-muted-foreground">{t("services.bicLabel")}</label>
                    <p className="text-foreground font-mono mt-1">{bankDetails.bic}</p>
                  </div>
                  <p className="text-sm text-muted-foreground pt-4 border-t">
                    <strong>{t("services.noteLabel")}</strong> {t("services.noteText")}
                  </p>
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

export default FormsDocumentsPage;
