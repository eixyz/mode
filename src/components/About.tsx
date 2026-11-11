import { motion } from "framer-motion";
import { MapPin, Users, Handshake, Award, Globe, Music, TrendingUp, Palmtree, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/useLanguage";
import { Link } from "react-router-dom";

const highlights = [
  { icon: MapPin, titleKey: "about.highlight1Title", descKey: "about.highlight1Desc" },
  { icon: Users, titleKey: "about.highlight2Title", descKey: "about.highlight2Desc" },
  { icon: Handshake, titleKey: "about.highlight3Title", descKey: "about.highlight3Desc" },
  { icon: Award, titleKey: "about.highlight4Title", descKey: "about.highlight4Desc" },
];

const discoverLinks = [
  { icon: Globe, href: "/about/geography", titleKey: "header.geography" },
  { icon: Music, href: "/about/culture", titleKey: "header.culture" },
  { icon: TrendingUp, href: "/about/economy", titleKey: "header.economy" },
  { icon: Palmtree, href: "/about/tourism", titleKey: "header.tourism" },
];

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="gold-accent h-1 w-16 mb-6 rounded-full" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t("about.sectionTitle")}
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              {t("about.sectionText1")}
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {t("about.sectionText2")}
            </p>

            {/* Discover Mozambique Links */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                {t("header.discoverMozambique")}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {discoverLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <link.icon className="w-4 h-4 text-primary" />
                    <span>{t(link.titleKey)}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {t(item.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t(item.descKey)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
