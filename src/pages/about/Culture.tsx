import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/lib/useLanguage";
import { Music, Palette, BookOpen, Users, Landmark } from "lucide-react";
import cultureImage from "@/assets/mozambique-culture.jpg";

const CulturePage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Image */}
        <section className="relative h-64 md:h-80 overflow-hidden">
          <img 
            src={cultureImage} 
            alt={t("culture.pageTitle")} 
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
                  {t("culture.pageTitle")}
                </h1>
                <p className="text-muted-foreground text-base mt-2 max-w-2xl">
                  {t("culture.pageDesc")}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Card className="border-border">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {t("culture.introText")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Culture Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="border-border h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Music className="w-5 h-5 text-primary" />
                      {t("culture.musicTitle")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3">
                    <p>{t("culture.musicText")}</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Marrabenta:</strong> {t("culture.music1")}</li>
                      <li><strong>Timbila:</strong> {t("culture.music2")}</li>
                      <li><strong>Pandza:</strong> {t("culture.music3")}</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="border-border h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Palette className="w-5 h-5 text-primary" />
                      {t("culture.artTitle")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3">
                    <p>{t("culture.artText")}</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>{t("culture.art1")}</li>
                      <li>{t("culture.art2")}</li>
                      <li>{t("culture.art3")}</li>
                      <li>{t("culture.art4")}</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="border-border h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-primary" />
                      {t("culture.literatureTitle")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3">
                    <p>{t("culture.literatureText")}</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Mia Couto:</strong> {t("culture.author1")}</li>
                      <li><strong>José Craveirinha:</strong> {t("culture.author2")}</li>
                      <li><strong>Paulina Chiziane:</strong> {t("culture.author3")}</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="border-border h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      {t("culture.traditionsTitle")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3">
                    <p>{t("culture.traditionsText")}</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>{t("culture.tradition1")}</li>
                      <li>{t("culture.tradition2")}</li>
                      <li>{t("culture.tradition3")}</li>
                      <li>{t("culture.tradition4")}</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* UNESCO Heritage */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="border-border bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Landmark className="w-5 h-5 text-primary" />
                    {t("culture.heritageTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p>{t("culture.heritageText")}</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>{t("culture.heritage1Title")}:</strong> {t("culture.heritage1Text")}</li>
                    <li><strong>{t("culture.heritage2Title")}:</strong> {t("culture.heritage2Text")}</li>
                  </ul>
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

export default CulturePage;
