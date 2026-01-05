import { Facebook, Twitter, Instagram, Linkedin, ExternalLink } from "lucide-react";

const quickLinks = [
  { label: "Visa Services", href: "/visa" },
  { label: "Passport Services", href: "/passports" },
  { label: "Trade & Investment", href: "/trade" },
  { label: "About Us", href: "/about" },
];

const usefulLinks = [
  { label: "Government of Mozambique", href: "https://www.portaldogoverno.gov.mz", external: true },
  { label: "Tourism Mozambique", href: "https://www.visitmozambique.net", external: true },
  { label: "Ministry of Foreign Affairs", href: "https://www.minec.gov.mz/", external: true },
  // { label: "Invest Mozambique", href: "#", external: true },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export const Footer = () => {
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
                <h3 className="font-serif text-lg font-semibold">Embassy of Mozambique</h3>
                <p className="text-sm text-primary-foreground/70">Berlin, Germany</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-6 leading-relaxed">
              Serving the Mozambican community in Germany and fostering diplomatic 
              relations between our nations.
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
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
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
            <h4 className="font-serif text-lg font-semibold mb-6">Useful Links</h4>
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
            <h4 className="font-serif text-lg font-semibold mb-6">Emergency Contact</h4>
            <div className="bg-embassy-red/20 rounded-lg p-4 border border-embassy-red/30">
              <p className="text-sm text-primary-foreground/80 mb-2">
                For emergencies outside office hours:
              </p>
              <p className="text-lg font-semibold text-gold">+49 000 000 0000</p>
              <p className="text-xs text-primary-foreground/60 mt-2">
                Available 24/7 for Mozambican citizens
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2025 Embassy of the Republic of Mozambique in Berlin. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-gold transition-colors">Terms of Service</a>
              <a href="/accessibility" className="hover:text-gold transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
