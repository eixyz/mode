import { Facebook, Twitter, Instagram, Linkedin, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/useLanguage";

export const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t("footer.visaServices"), href: "/visa" },
    { label: t("footer.passportServices"), href: "/passports" },
    { label: t("footer.tradeInvest"), href: "/trade" },
    { label: t("footer.aboutUs"), href: "/about" },
  ];

  const usefulLinks = [
    { label: t("footer.mozambiqueGov"), href: "https://www.portaldogoverno.gov.mz", external: true },
    { label: t("footer.tourismMoz"), href: "https://www.visitmozambique.net", external: true },
    { label: t("footer.foreignAffairs"), href: "https://www.minec.gov.mz/", external: true },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];
  return (
    <footer className="bg-embassy-green-dark text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center overflow-hidden">
                <img src="/emblem_mz.svg" alt="MZ" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold">{t("footer.embassy")}</h3>
                <p className="text-sm text-primary-foreground/70">{t("footer.location")}</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-6 leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
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

          {/* Emergency */}
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
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>{t("footer.copyright")}</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-gold transition-colors">{t("footer.privacyPolicy")}</a>
              <a href="/terms" className="hover:text-gold transition-colors">{t("footer.termsOfService")}</a>
              <a href="/accessibility" className="hover:text-gold transition-colors">{t("footer.accessibility")}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
