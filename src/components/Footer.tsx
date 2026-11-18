import { Link } from "react-router-dom";
import { ExternalLink, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/lib/useLanguage";
import { contactDetails, getAddressLines, getOpeningHours, phoneHref } from "@/lib/siteSettings";

export const Footer = () => {
  const { t, language } = useLanguage();
  const hours = getOpeningHours(language);

  const quickLinks = [
    { label: t("footer.visaServices"), href: "/services/visas" },
    { label: t("footer.passportServices"), href: "/services/passports" },
    { label: t("footer.tradeInvest"), href: "/services/trade" },
    { label: t("footer.aboutUs"), href: "/about" },
  ];

  const usefulLinks = [
    { label: t("footer.mozambiqueGov"), href: "https://www.portaldogoverno.gov.mz", external: true },
    { label: t("footer.tourismMoz"), href: "https://www.visitmozambique.net", external: true },
    { label: t("footer.foreignAffairs"), href: "https://www.minec.gov.mz/", external: true },
  ];

  return (
    <footer className="bg-embassy-green-dark text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/brand/coat-of-arms.svg" alt="" width="52" height="56" className="h-14 w-auto shrink-0" />
              <div>
                <h3 className="font-serif text-lg font-semibold">{t("footer.embassy")}</h3>
                <p className="text-sm text-primary-foreground/70">{t("footer.location")}</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">{t("footer.quickLinksTitle")}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">{t("footer.usefulLinksTitle")}</h4>
            <ul className="space-y-3">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-primary-foreground/80 hover:text-gold transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">{t("footer.contactInfoTitle")}</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <div className="text-sm text-primary-foreground/80">
                  {getAddressLines(language).map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href={phoneHref(contactDetails.phone)} className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">{contactDetails.phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href={`mailto:${contactDetails.email}`} className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">{contactDetails.email}</a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <div className="text-sm text-primary-foreground/80">
                  <p>{hours.summaryLine1 ?? t("footer.hoursLine1")}</p>
                  <p>{hours.summaryLine2 ?? t("footer.hoursLine2")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency - Commented out for now */}
          {/*
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">{t("footer.emergencyContactTitle")}</h4>
            <div className="bg-embassy-red/20 rounded-lg p-4 border border-embassy-red/30">
              <p className="text-sm text-primary-foreground/80 mb-2">
                {t("footer.emergencyHours")}
              </p>
              <p className="text-lg font-semibold text-gold">+49 000 000 0000</p>
              <p className="text-xs text-primary-foreground/60 mt-2">
                {t("footer.emergencyAvailable")}
              </p>
            </div>
          </div>
          */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>{t("footer.copyright")}</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-gold transition-colors">{t("footer.privacyPolicy")}</Link>
              <Link to="/terms" className="hover:text-gold transition-colors">{t("footer.termsOfService")}</Link>
              <Link to="/accessibility" className="hover:text-gold transition-colors">{t("footer.accessibility")}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
