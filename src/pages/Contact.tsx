import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useLanguage } from "@/lib/useLanguage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactPage = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact.info.address.title"),
      content: t("contact.info.address.lines") as unknown as string[],
    },
    {
      icon: Phone,
      title: t("contact.info.phone.title"),
      content: t("contact.info.phone.lines") as unknown as string[],
    },
    {
      icon: Mail,
      title: t("contact.info.email.title"),
      content: t("contact.info.email.lines") as unknown as string[],
    },
    {
      icon: Clock,
      title: t("contact.info.hours.title"),
      content: t("contact.info.hours.lines") as unknown as string[],
    },
  ];

  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const subjectParam = searchParams.get("subject");
    if (subjectParam) {
      setFormData((prev) => ({ ...prev, subject: subjectParam }));
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, title: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert(t("contact.form.agreeRequired"));
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, agreedToTerms }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) {
        throw new Error(data?.error || "Failed to send message");
      }
      alert(data?.message || t("contact.form.successMessage"));
      setFormData({ title: "", firstName: "", lastName: "", email: "", subject: "", message: "" });
      setAgreedToTerms(false);
    } catch (err) {
      console.error(err);
      alert(err instanceof Error ? err.message : t("contact.form.errorMessage"));
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <div className="bg-card rounded-xl border border-border overflow-hidden h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.0!2d13.3435!3d52.5320!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDMxJzU1LjIiTiAxM8KwMjAnMzYuNiJF!5e0!3m2!1sen!2sde!4v1234567890"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" title="Embassy Location"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <form className="bg-card rounded-xl p-6 sm:p-8 border border-border" onSubmit={handleSubmit}>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                    {t("contact.form.sendButton")}
                  </h3>
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">{t("contact.form.titleLabel")}</Label>
                        <Select value={formData.title} onValueChange={handleSelectChange}>
                          <SelectTrigger id="title">
                            <SelectValue placeholder={t("contact.form.selectPlaceholder")} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Mr">{t("contact.form.selectMr")}</SelectItem>
                            <SelectItem value="Ms">{t("contact.form.selectMs")}</SelectItem>
                            <SelectItem value="Mrs">{t("contact.form.selectMrs")}</SelectItem>
                            <SelectItem value="Dr">{t("contact.form.selectDr")}</SelectItem>
                            <SelectItem value="Prof">{t("contact.form.selectProf")}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="firstName">{t("contact.form.firstNameLabel")}</Label>
                        <Input id="firstName" placeholder={t("contact.form.firstNamePlaceholder")} value={formData.firstName} onChange={handleInputChange} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">{t("contact.form.lastNameLabel")}</Label>
                        <Input id="lastName" placeholder={t("contact.form.lastNamePlaceholder")} value={formData.lastName} onChange={handleInputChange} required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("contact.form.emailLabel")}</Label>
                      <Input id="email" type="email" placeholder={t("contact.form.emailPlaceholder")} value={formData.email} onChange={handleInputChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">{t("contact.form.subjectLabel")}</Label>
                      <Input id="subject" placeholder={t("contact.form.subjectPlaceholder")} value={formData.subject} onChange={handleInputChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">{t("contact.form.messageLabel")}</Label>
                      <Textarea id="message" placeholder={t("contact.form.messagePlaceholder")} rows={5} value={formData.message} onChange={handleInputChange} required />
                    </div>
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="terms"
                        checked={agreedToTerms}
                        onCheckedChange={(checked) => setAgreedToTerms(checked === true)}
                      />
                      <label htmlFor="terms" className="text-sm text-muted-foreground leading-tight cursor-pointer">
                        {t("contact.form.agreeTerms")}{" "}
                        <Link to="/terms" className="text-primary hover:underline">{t("footer.termsOfService")}</Link>
                        {" & "}
                        <Link to="/privacy" className="text-primary hover:underline">{t("footer.privacyPolicy")}</Link>
                      </label>
                    </div>
                    <Button
                      type="submit"
                      disabled={!agreedToTerms || isSubmitting}
                      className="w-full bg-primary hover:bg-embassy-green-dark text-primary-foreground"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {isSubmitting ? t("contact.form.sending") : t("contact.form.sendButton")}
                    </Button>
                  </div>
                </form>
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
