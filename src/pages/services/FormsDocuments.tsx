import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, CreditCard } from "lucide-react";
import { useLanguage } from "@/lib/useLanguage";

const FormsDocumentsPage = () => {
  const { t } = useLanguage();

  const documents = [
    {
      title: t("services.visaFormTitle"),
      description: t("services.visaFormDesc"),
      link: "http://embassy-of-mozambique.de/images/FORMULARIO-PEDIDO-DE-VISTO.pdf",
    },
    {
      title: t("services.visaInfoGermanTitle"),
      description: t("services.visaInfoGermanDesc"),
      link: "http://embassy-of-mozambique.de/images/Pedido.pdf",
    },
    {
      title: t("services.visaInfoPortugueseTitle"),
      description: t("services.visaInfoPortugueseDesc"),
      link: "http://embassy-of-mozambique.de/images/Pedido-de-visto-Portugues.pdf",
    },
    {
      title: t("services.feeGermanTitle"),
      description: t("services.feeGermanDesc"),
      link: "http://embassy-of-mozambique.de/images/Tabelle_der_Gebuehren.pdf",
    },
    {
      title: t("services.feePortugueseTitle"),
      description: t("services.feePortugueseDesc"),
      link: "http://embassy-of-mozambique.de/images/Tabela_de_Emolumentos.pdf",
    },
    {
      title: t("services.paymentGermanTitle"),
      description: t("services.paymentGermanDesc"),
      link: "http://embassy-of-mozambique.de/images/Informa%C3%A7ao_001_Barra_2017_Alemao.pdf",
    },
    {
      title: t("services.paymentPortugueseTitle"),
      description: t("services.paymentPortugueseDesc"),
      link: "http://embassy-of-mozambique.de/images/Informa%C3%A7ao_001_Barra_2017_Port.pdf",
    },
  ];

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {documents.map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <a href={doc.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <Card className="h-full border-border hover:border-primary hover:shadow-lg transition-all cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2">
                          <FileText className="w-4 h-4 text-primary shrink-0" />
                          {doc.title}
                        </CardTitle>
                        <CardDescription>{doc.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" size="sm" className="w-full">
                          {t("services.downloadPdf")}
                        </Button>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              ))}
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
