import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, Clock, FileText, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/useLanguage";

const visaTypes = [
  {
    titleKey: "visasPage.tourism",
    descKey: "visasPage.tourismDesc",
    requirements: ["visasPage.tourismReq1", "visasPage.tourismReq2"],
    processingKey: "visasPage.processingStandard",
  },
  {
    titleKey: "visasPage.business",
    descKey: "visasPage.businessDesc",
    requirements: ["visasPage.businessReq1", "visasPage.businessReq2"],
    processingKey: "visasPage.processingStandard",
  },
  {
    titleKey: "visasPage.visit",
    descKey: "visasPage.visitDesc",
    requirements: ["visasPage.visitReq1"],
    processingKey: "visasPage.processingStandard",
  },
  {
    titleKey: "visasPage.residence",
    descKey: "visasPage.residenceDesc",
    requirements: ["visasPage.residenceReq1", "visasPage.residenceReq2"],
    processingKey: "visasPage.processingStandard",
  },
  {
    titleKey: "visasPage.student",
    descKey: "visasPage.studentDesc",
    requirements: ["visasPage.studentReq1", "visasPage.studentReq2", "visasPage.studentReq3"],
    processingKey: "visasPage.processingStandard",
  },
  {
    titleKey: "visasPage.transit",
    descKey: "visasPage.transitDesc",
    requirements: ["visasPage.transitReq1", "visasPage.transitReq2"],
    processingKey: "visasPage.processingStandard",
  },
];

const VisasServicePage = () => {
  const { t } = useLanguage();

  const visaExemptCountries = [
    "Botswana", "Malawi", "Mauritius", "South Africa", "Swaziland", 
    "Tanzania", "Zambia", "Angola", "Zimbabwe"
  ];

  const generalRequirements = [
    t("visasPage.req1"),
    t("visasPage.req2"),
    t("visasPage.req3"),
    t("visasPage.req4"),
    t("visasPage.req5"),
    t("visasPage.req6"),
    t("visasPage.req7"),
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="py-12 bg-gradient-to-b from-primary/8 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="gold-accent h-1 w-16 mx-auto mb-6 rounded-full" />
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                {t("visasPage.pageTitle")}
              </h1>
              <p className="text-muted-foreground text-lg">
                {t("visasPage.pageDesc")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-8 bg-amber-50 dark:bg-amber-950/20 border-y border-amber-200 dark:border-amber-900">
          <div className="container mx-auto px-4 max-w-4xl">
            <Alert className="bg-transparent border-amber-300 dark:border-amber-800">
              <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-500" />
              <AlertDescription className="text-amber-900 dark:text-amber-300 ml-2">
                <strong>{t("visasPage.importantNotice")}</strong>
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Visa Exempt Countries */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                {t("visasPage.exemptTitle")}
              </h2>
              <p className="text-muted-foreground mb-6">
                {t("visasPage.exemptDesc")}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {visaExemptCountries.map((country, index) => (
                  <div key={index} className="flex items-center gap-2 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{country}</span>
                  </div>
                ))}
              </div>
              <Alert className="mt-8 bg-primary/5 border-primary/20">
                <FileText className="h-4 w-4 text-primary" />
                <AlertDescription className="text-foreground ml-2">
                  <strong>{t("visasPage.specialCases")}</strong>
                </AlertDescription>
              </Alert>
            </motion.div>
          </div>
        </section>

        {/* Visa Types Grid */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="gold-accent h-1 w-16 mx-auto mb-6 rounded-full" />
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                {t("visasPage.typesTitle")}
              </h2>
              <p className="text-muted-foreground">
                {t("visasPage.typesDesc")}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {visaTypes.map((visa, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <Card className="h-full border-border hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{t(visa.titleKey)}</CardTitle>
                      <CardDescription>{t(visa.descKey)}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-2">{t("visasPage.requirements")}:</p>
                        <ul className="space-y-1">
                          {visa.requirements.map((req, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span>{t(req)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-4 border-t border-border">
                        <div className="flex items-start gap-2">
                          <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-semibold text-muted-foreground">{t("visasPage.processingTimeLabel")}</p>
                            <p className="text-sm text-foreground mt-1">{t(visa.processingKey)}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Visas */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="gold-accent h-1 w-16 mb-6 rounded-full" />
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                {t("visasPage.specialTitle")}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>{t("visasPage.borderVisa")}</CardTitle>
                    <CardDescription>{t("visasPage.borderVisaDesc")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{t("visasPage.borderVisaDetails")}</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>{t("visasPage.investmentVisa")}</CardTitle>
                    <CardDescription>{t("visasPage.investmentVisaDesc")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{t("visasPage.investmentVisaDetails")}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* General Requirements */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="gold-accent h-1 w-16 mb-6 rounded-full" />
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                {t("visasPage.generalRequirements")}
              </h2>

              <div className="space-y-4">
                {generalRequirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{req}</p>
                  </div>
                ))}
              </div>

              <Card className="mt-8 bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-base">{t("visasPage.importantNotes")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{t("visasPage.note1")}</p>
                  <p className="text-sm text-muted-foreground">{t("visasPage.note2")}</p>
                  <p className="text-sm text-muted-foreground">{t("visasPage.note3")}</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                {t("visasPage.readyToApply")}
              </h2>
              <p className="text-muted-foreground mb-8">
                {t("visasPage.downloadForms")}
              </p>
              <Link to="/services">
                <Button size="lg" className="bg-primary hover:bg-embassy-green-dark text-primary-foreground">
                  {t("visasPage.viewDocuments")}
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VisasServicePage;