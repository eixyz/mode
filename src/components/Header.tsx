import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Phone, Mail, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
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
  const closeMobileMenu = () => setIsOpen(false);

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
            <Link to="/news" className="hover:text-gold transition-colors hidden sm:inline">
              {t("header.news")}
            </Link>
            {/* Contact link in top bar */}
            <Link to="/contact" className="hover:text-gold transition-colors hidden sm:inline">
              {t("header.contact")}
            </Link>
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
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center overflow-hidden">
                <img src="/mozambique-icone.png" alt="MZ" className="w-full h-full object-cover" />
              </div>
              <div className="block">
                <h1 className="font-serif text-sm sm:text-lg font-semibold text-foreground leading-tight">
                  {t("header.embassy")}
                </h1>
                <p className="text-xs text-muted-foreground hidden sm:block">{t("header.location")}</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                to="/"
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
              >
                {t("header.home")}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold group-hover:w-4/5 transition-all duration-300" />
              </Link>

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
                    <Link to="/about/ambassador" className="w-full block">{t("header.ambassador")}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/about/mission" className="w-full block">{t("header.mission")}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/about/consuls" className="w-full block">{t("header.honoraryConsuls")}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/about/holidays" className="w-full block">{t("header.holidays")}</Link>
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
                    <Link to="/services" className="w-full block">{t("header.allServices")}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/services/passports" className="w-full block">{t("header.passportsIds")}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/services/visas" className="w-full block">{t("header.visas")}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/services/advisory" className="w-full block">{t("header.advisory")}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/services/trade" className="w-full block">{t("header.tradeInvest")}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/services/forms" className="w-full block">{t("header.formsDocuments")}</Link>
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
                    <Link to="/about/mozambique" className="w-full block">{t("header.discoverMozambique")}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/about/mozambique/geography" className="w-full block">{t("header.geography")}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/about/mozambique/culture" className="w-full block">{t("header.culture")}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/about/mozambique/economy" className="w-full block">{t("header.economy")}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/about/mozambique/tourism" className="w-full block">{t("header.tourism")}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/about/useful-links" className="w-full block">{t("header.usefulLinks")}</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/appointment">
                <Button className="bg-primary hover:bg-embassy-green-dark text-primary-foreground">
                  {t("header.bookAppointment")}
                </Button>
              </Link>
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
                  <Link
                    to="/"
                    onClick={closeMobileMenu}
                    className="px-4 py-3 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors block"
                  >
                    {t("header.home")}
                  </Link>
                </div>

                {/* The Embassy (mobile) */}
                <div>
                  <div className="flex items-center justify-between">
                    <Link
                      to="/about"
                      onClick={closeMobileMenu}
                      className="px-4 py-3 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors block"
                    >
                      {t("header.theEmbassy")}
                    </Link>
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
                      <Link to="/about/ambassador" onClick={closeMobileMenu} className="block px-4 py-2 text-sm text-foreground hover:text-primary">{t("header.ambassador")}</Link>
                      <Link to="/about/mission" onClick={closeMobileMenu} className="block px-4 py-2 text-sm text-foreground hover:text-primary">{t("header.mission")}</Link>
                      <Link to="/about/consuls" onClick={closeMobileMenu} className="block px-4 py-2 text-sm text-foreground hover:text-primary">{t("header.honoraryConsuls")}</Link>
                      <Link to="/about/holidays" onClick={closeMobileMenu} className="block px-4 py-2 text-sm text-foreground hover:text-primary">{t("header.holidays")}</Link>
                    </div>
                  )}
                </div>

                {/* Consular Section (mobile) */}
                <div>
                  <div className="flex items-center justify-between">
                    <Link
                      to="/services"
                      onClick={closeMobileMenu}
                      className="px-4 py-3 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors block"
                    >
                      {t("header.consularServices")}
                    </Link>
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
                      <Link to="/services" onClick={closeMobileMenu} className="block px-4 py-2 text-sm text-foreground hover:text-primary">{t("header.allServices")}</Link>
                      <Link to="/services/passports" onClick={closeMobileMenu} className="block px-4 py-2 text-sm text-foreground hover:text-primary">{t("header.passportsIds")}</Link>
                      <Link to="/services/visas" onClick={closeMobileMenu} className="block px-4 py-2 text-sm text-foreground hover:text-primary">{t("header.visas")}</Link>
                      <Link to="/services/advisory" onClick={closeMobileMenu} className="block px-4 py-2 text-sm text-foreground hover:text-primary">{t("header.advisory")}</Link>
                      <Link to="/services/trade" onClick={closeMobileMenu} className="block px-4 py-2 text-sm text-foreground hover:text-primary">{t("header.tradeInvest")}</Link>
                      <Link to="/services/forms" onClick={closeMobileMenu} className="block px-4 py-2 text-sm text-foreground hover:text-primary">{t("header.formsDocuments")}</Link>
                    </div>
                  )}
                </div>

                {/* About Mozambique (mobile) */}
                <div>
                  <div className="flex items-center justify-between">
                    <Link
                      to="/about/mozambique"
                      onClick={closeMobileMenu}
                      className="px-4 py-3 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors block"
                    >
                      {t("header.aboutMozambique")}
                    </Link>
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
                      <Link to="/about/mozambique" onClick={closeMobileMenu} className="block px-4 py-2 text-sm text-foreground hover:text-primary">{t("header.discoverMozambique")}</Link>
                      <Link to="/about/mozambique/geography" onClick={closeMobileMenu} className="block px-4 py-2 text-sm text-foreground hover:text-primary">{t("header.geography")}</Link>
                      <Link to="/about/mozambique/culture" onClick={closeMobileMenu} className="block px-4 py-2 text-sm text-foreground hover:text-primary">{t("header.culture")}</Link>
                      <Link to="/about/mozambique/economy" onClick={closeMobileMenu} className="block px-4 py-2 text-sm text-foreground hover:text-primary">{t("header.economy")}</Link>
                      <Link to="/about/mozambique/tourism" onClick={closeMobileMenu} className="block px-4 py-2 text-sm text-foreground hover:text-primary">{t("header.tourism")}</Link>
                      <Link to="/about/useful-links" onClick={closeMobileMenu} className="block px-4 py-2 text-sm text-foreground hover:text-primary">{t("header.usefulLinks")}</Link>
                    </div>
                  )}
                </div>

                {/* News (mobile) */}
                <div>
                  <Link
                    to="/news"
                    onClick={closeMobileMenu}
                    className="px-4 py-3 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors block"
                  >
                    {t("header.news")}
                  </Link>
                </div>

                {/* Contact (mobile) */}
                <div>
                  <Link
                    to="/contact"
                    onClick={closeMobileMenu}
                    className="px-4 py-3 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors block"
                  >
                    {t("header.contact")}
                  </Link>
                </div>

                <Link to="/appointment" onClick={closeMobileMenu}>
                  <Button className="mt-4 bg-primary hover:bg-embassy-green-dark text-primary-foreground w-full">
                    {t("header.bookAppointment")}
                  </Button>
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
