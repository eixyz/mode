import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Visa", href: "#visa" },
  { label: "About", href: "#about" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<"de" | "en">("de");

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+493039876500" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">+49 30 3987 6500</span>
            </a>
            <a href="mailto:info@embassy-of-mozambique.de" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">info@embassy-of-mozambique.de</span>
            </a>
          </div>
          <button
            onClick={() => setLanguage(language === "de" ? "en" : "de")}
            className="flex items-center gap-2 hover:text-gold transition-colors"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{language === "de" ? "Deutsch" : "English"}</span>
          </button>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-card/95 backdrop-blur-md sticky top-0 z-50 border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center overflow-hidden">
                <img src="/mozambique-icone.png" alt="MZ" className="w-full h-full object-cover" />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-serif text-lg font-semibold text-foreground leading-tight">
                  Embassy of Mozambique
                </h1>
                <p className="text-xs text-muted-foreground">Berlin, Germany</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold group-hover:w-4/5 transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button className="bg-primary hover:bg-embassy-green-dark text-primary-foreground">
                Book Appointment
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border"
            >
              <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <Button className="mt-4 bg-primary hover:bg-embassy-green-dark text-primary-foreground">
                  Book Appointment
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
