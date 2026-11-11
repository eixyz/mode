import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/useLanguage";
import { Shield, Users, Handshake, Globe, Building, FileText } from "lucide-react";
import ambassadorImage from "@/assets/ambassador-office.jpg";

const AmbassadorPage = () => {
  const { t } = useLanguage();

  const responsibilities = [
    { icon: Shield, key: "diplomatic" },
    { icon: Handshake, key: "bilateral" },
    { icon: Users, key: "citizens" },
    { icon: Globe, key: "international" },
    { icon: Building, key: "embassy" },
    { icon: FileText, key: "policy" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="gold-accent h-1 w-16 mb-4 rounded-full" />
              <h1 className="font-serif text-3xl font-bold mb-2">{t("ambassador.pageTitle")}</h1>
              <p className="text-muted-foreground mb-6">{t("ambassador.pageDesc")}</p>

              {/* Ambassador Profile with Image */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="md:col-span-1"
                >
                  <Card className="border-border overflow-hidden">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img 
                        src={ambassadorImage} 
                        alt={t("ambassador.profileTitle")} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="md:col-span-2"
                >
                  <Card className="border-border h-full">
                    <CardHeader>
                      <CardTitle>{t("ambassador.profileTitle")}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 text-sm text-muted-foreground">
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
                        <div>
                          <p className="font-semibold text-foreground">{t("ambassador.accreditation")}</p>
                          <p>{t("ambassador.accreditationValue")}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Role Overview */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-8"
              >
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>{t("ambassador.roleOverviewTitle")}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3">
                    <p>{t("ambassador.roleOverviewText1")}</p>
                    <p>{t("ambassador.roleOverviewText2")}</p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Key Responsibilities */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-8"
              >
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  {t("ambassador.responsibilitiesTitle")}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {responsibilities.map((resp, index) => (
                    <motion.div
                      key={resp.key}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                    >
                      <Card className="border-border h-full hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                            <resp.icon className="w-5 h-5 text-primary" />
                          </div>
                          <CardTitle className="text-base">{t(`ambassador.resp${resp.key}Title`)}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{t(`ambassador.resp${resp.key}Text`)}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Traditional Roles */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Card className="border-border bg-primary/5">
                  <CardHeader>
                    <CardTitle>{t("ambassador.traditionalTitle")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
                      <li>{t("ambassador.traditional1")}</li>
                      <li>{t("ambassador.traditional2")}</li>
                      <li>{t("ambassador.traditional3")}</li>
                      <li>{t("ambassador.traditional4")}</li>
                      <li>{t("ambassador.traditional5")}</li>
                      <li>{t("ambassador.traditional6")}</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AmbassadorPage;
