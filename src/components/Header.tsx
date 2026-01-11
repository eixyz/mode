import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Phone, Mail, ChevronDown, ChevronUp } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/useLanguage";

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const languageOptions: { code: "en" | "de" | "pt"; label: string }[] = [
    { code: "en", label: "English" },
    { code: "de", label: "Deutsch" },
    { code: "pt", label: "Português" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+493039876500" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t("header.phone")}</span>
            </a>
            <a href="mailto:info@embassy-of-mozambique.de" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t("header.email")}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            {/* News link in top bar */}
            <a href="/news" className="hover:text-gold transition-colors hidden sm:inline">
              {t("header.news")}
            </a>
            {/* Contact link in top bar */}
            <a href="/contact" className="hover:text-gold transition-colors hidden sm:inline">
              {t("header.contact")}
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 hover:text-gold transition-colors">
                  <Globe className="w-3.5 h-3.5" />
                  <span>{t("header.language")}</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languageOptions.map((opt) => (
                  <DropdownMenuItem key={opt.code} onClick={() => setLanguage(opt.code)}>
                    {opt.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-card/95 backdrop-blur-md sticky top-0 z-50 border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center overflow-hidden">
                <img src="/mozambique-icone.png" alt="MZ" className="w-full h-full object-cover" />
              </div>
              <div className="block">
                <h1 className="font-serif text-sm sm:text-lg font-semibold text-foreground leading-tight">
                  {t("header.embassy")}
                </h1>
                <p className="text-xs text-muted-foreground hidden sm:block">{t("header.location")}</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <a
                href="/"
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
              >
                {t("header.home")}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold group-hover:w-4/5 transition-all duration-300" />
              </a>

              {/* The Embassy dropdown (formerly About Us) */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors relative group">
                    {t("header.theEmbassy")}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold group-hover:w-4/5 transition-all duration-300" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent sideOffset={6} className="w-48">
                  <DropdownMenuItem>
                    <a href="/about/ambassador" className="w-full block">{t("header.ambassador")}</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/about/mission" className="w-full block">{t("header.mission")}</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/about/consuls" className="w-full block">{t("header.honoraryConsuls")}</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Consular Services dropdown (formerly Consular Section) */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors relative group">
                    {t("header.consularServices")}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold group-hover:w-4/5 transition-all duration-300" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent sideOffset={6} className="w-48">
                  <DropdownMenuItem>
                    <a href="/services" className="w-full block">{t("header.allServices")}</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/services/passports" className="w-full block">{t("header.passports")}</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/services/visas" className="w-full block">{t("header.visas")}</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/services/advisory" className="w-full block">{t("header.advisory")}</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/services/trade" className="w-full block">{t("header.tradeInvest")}</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* About Mozambique dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors relative group">
                    {t("header.aboutMozambique")}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold group-hover:w-4/5 transition-all duration-300" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent sideOffset={6} className="w-56">
                  <DropdownMenuItem>
                    <a href="/about/mozambique" className="w-full block">{t("header.discoverMozambique")}</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/about/mozambique/geography" className="w-full block">{t("header.geography")}</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/about/mozambique/culture" className="w-full block">{t("header.culture")}</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/about/mozambique/economy" className="w-full block">{t("header.economy")}</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/about/mozambique/tourism" className="w-full block">{t("header.tourism")}</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/about/useful-links" className="w-full block">{t("header.usefulLinks")}</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a href="/appointment">
                <Button className="bg-primary hover:bg-embassy-green-dark text-primary-foreground">
                  {t("header.bookAppointment")}
                </Button>
              </a>
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
                <div>
                  <a
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors block"
                  >
                    {t("header.home")}
                  </a>
                </div>

                {/* The Embassy (mobile) */}
                <div>
                  <div className="flex items-center justify-between">
                    <a
                      href="/about"
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-3 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors block"
                    >
                      {t("header.theEmbassy")}
                    </a>
                    <button
                      aria-expanded={openSubmenu === "embassy"}
                      onClick={() => setOpenSubmenu(openSubmenu === "embassy" ? null : "embassy")}
                      className="p-2 mr-2 text-foreground hover:text-primary"
                    >
                      {openSubmenu === "embassy" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                  {openSubmenu === "embassy" && (
                    <div className="pl-4">
                      <a href="/about/ambassador" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-foreground hover:text-primary">{t("header.ambassador")}</a>
                      <a href="/about/mission" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-foreground hover:text-primary">{t("header.mission")}</a>
                      <a href="/about/consuls" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-foreground hover:text-primary">{t("header.honoraryConsuls")}</a>
                    </div>
                  )}
                </div>

                {/* Consular Section (mobile) */}
                <div>
                  <div className="flex items-center justify-between">
                    <a
                      href="/services"
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-3 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors block"
                    >
                      {t("header.consularServices")}
                    </a>
                    <button
                      aria-expanded={openSubmenu === "services"}
                      onClick={() => setOpenSubmenu(openSubmenu === "services" ? null : "services")}
                      className="p-2 mr-2 text-foreground hover:text-primary"
                    >
                      {openSubmenu === "services" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                  {openSubmenu === "services" && (
                    <div className="pl-4">
                      <a href="/services" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-foreground hover:text-primary">{t("header.allServices")}</a>
                      <a href="/services/passports" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-foreground hover:text-primary">{t("header.passports")}</a>
                      <a href="/services/visas" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-foreground hover:text-primary">{t("header.visas")}</a>
                      <a href="/services/advisory" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-foreground hover:text-primary">{t("header.advisory")}</a>
                      <a href="/services/trade" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-foreground hover:text-primary">{t("header.tradeInvest")}</a>
                    </div>
                  )}
                </div>

                {/* About Mozambique (mobile) */}
                <div>
                  <div className="flex items-center justify-between">
                    <a
                      href="/about/mozambique"
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-3 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors block"
                    >
                      {t("header.aboutMozambique")}
                    </a>
                    <button
                      aria-expanded={openSubmenu === "mozambique"}
                      onClick={() => setOpenSubmenu(openSubmenu === "mozambique" ? null : "mozambique")}
                      className="p-2 mr-2 text-foreground hover:text-primary"
                    >
                      {openSubmenu === "mozambique" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                  {openSubmenu === "mozambique" && (
                    <div className="pl-4">
                      <a href="/about/mozambique" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-foreground hover:text-primary">{t("header.discoverMozambique")}</a>
                      <a href="/about/mozambique/geography" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-foreground hover:text-primary">{t("header.geography")}</a>
                      <a href="/about/mozambique/culture" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-foreground hover:text-primary">{t("header.culture")}</a>
                      <a href="/about/mozambique/economy" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-foreground hover:text-primary">{t("header.economy")}</a>
                      <a href="/about/mozambique/tourism" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-foreground hover:text-primary">{t("header.tourism")}</a>
                      <a href="/about/useful-links" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-foreground hover:text-primary">{t("header.usefulLinks")}</a>
                    </div>
                  )}
                </div>

                {/* News (mobile) */}
                <div>
                  <a
                    href="/news"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors block"
                  >
                    {t("header.news")}
                  </a>
                </div>

                {/* Contact (mobile) */}
                <div>
                  <a
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors block"
                  >
                    {t("header.contact")}
                  </a>
                </div>

                <a href="/appointment">
                  <Button className="mt-4 bg-primary hover:bg-embassy-green-dark text-primary-foreground w-full">
                    {t("header.bookAppointment")}
                  </Button>
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
