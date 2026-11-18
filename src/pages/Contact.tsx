import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/lib/useLanguage";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MapEmbed } from "@/components/MapEmbed";
import { useSearchParams } from "react-router-dom";
import { contactDetails, getAddressLines, getOpeningHours } from "@/lib/siteSettings";
import { ContactForm } from "@/components/ContactForm";

const ContactPage = () => {
  const { t, language } = useLanguage();
  const [searchParams] = useSearchParams();

  // Contact details and opening hours are edited by staff in Decap (Embassy Settings).
  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact.info.address.title"),
      content: getAddressLines(language),
    },
    {
      icon: Phone,
      title: t("contact.info.phone.title"),
      content: [contactDetails.phone, ...(contactDetails.fax ? [`${contactDetails.fax} (Fax)`] : [])],
    },
    {
      icon: Mail,
      title: t("contact.info.email.title"),
      content: [contactDetails.email],
    },
    {
      icon: Clock,
      title: t("contact.info.hours.title"),
      content: getOpeningHours(language).lines ?? (t("contact.info.hours.lines") as unknown as string[]),
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <div className="gold-accent h-1 w-16 mx-auto mb-6 rounded-full" />
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                {t("contact.pageTitle")}
              </h1>
              <p className="text-muted-foreground text-lg">
                {t("contact.pageDesc")}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="bg-card rounded-xl p-5 border border-border">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      {Array.isArray(item.content) ? (
                        item.content.map((line, i) => (
                          <p key={i} className="text-sm text-muted-foreground">{line}</p>
                        ))
                      ) : (
                        <p className="text-sm text-muted-foreground">{item.content}</p>
                      )}
                    </div>
                  ))}
                </div>
                <MapEmbed />
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ContactForm
                  defaultSubject={searchParams.get("subject") ?? ""}
                  className="bg-card rounded-xl p-6 sm:p-8 border border-border"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
