import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Users, Plane, DollarSign, Building2 } from "lucide-react";
import { useLanguage } from "@/lib/useLanguage";

const ServicesPage = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Users,
      title: t("services.passportTitle"),
      description: t("services.passportDesc"),
      href: "/services/passports",
      details: [
        t("services.passportDetail1"),
        t("services.passportDetail2"),
        t("services.passportDetail3"),
        t("services.passportDetail4"),
      ],
    },
    {
      icon: Plane,
      title: t("services.visasTitle"),
      description: t("services.visasDesc"),
      href: "/services/visas",
      details: [
        t("services.visasDetail1"),
        t("services.visasDetail2"),
        t("services.visasDetail3"),
        t("services.visasDetail4"),
      ],
    },
    {
      icon: Building2,
      title: t("services.advisoryTitle"),
      description: t("services.advisoryDesc"),
      href: "/services/advisory",
      details: [
        t("services.advisoryDetail1"),
        t("services.advisoryDetail2"),
        t("services.advisoryDetail3"),
      ],
    },
    {
      icon: DollarSign,
      title: t("services.tradeTitle"),
      description: t("services.tradeDesc"),
      href: "/services/trade",
      details: [
        t("services.tradeDetail1"),
        t("services.tradeDetail2"),
        t("services.tradeDetail3"),
        t("services.tradeDetail4"),
      ],
    },
  ];

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
    iban: "DE58 1007 0000 0237 0088 01",
    bic: "DEUTDEBBXXX",
    bank: "Deutsche Bank",
  };
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-12 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="gold-accent h-1 w-16 mx-auto mb-6 rounded-full" />
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                {t("services.pageTitle")}
              </h1>
              <p className="text-muted-foreground text-lg">
                {t("services.pageDesc")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <a href={service.href} className="block h-full">
                    <Card className="h-full border-border hover:shadow-lg transition-shadow cursor-pointer">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 mb-4">
                          {service.details.map((detail, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                        <Button variant="outline" size="sm" className="w-full">
                          {t("services.learnMore")}
                        </Button>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <div className="gold-accent h-1 w-16 mx-auto mb-6 rounded-full" />
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("services.formsTitle")}
              </h2>
              <p className="text-muted-foreground">
                {t("services.formsDesc")}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {documents.map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <a
                    href={doc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card className="h-full border-border hover:border-primary hover:shadow-lg transition-all cursor-pointer">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-base flex items-center gap-2">
                              <FileText className="w-4 h-4 text-primary" />
                              {doc.title}
                            </CardTitle>
                            <CardDescription className="mt-2">
                              {doc.description}
                            </CardDescription>
                          </div>
                        </div>
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
          </div>
        </section>

        {/* Bank Details Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">{t("services.bankTitle")}</CardTitle>
                  <CardDescription>
                    {t("services.bankDesc")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
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

export default ServicesPage;