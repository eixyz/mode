import { useEffect, useId, useState } from "react";
import { Link } from "react-router-dom";
import { Send } from "lucide-react";
import { useLanguage } from "@/lib/useLanguage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// The contact form, used on the Contact page and in the "Request information"
// pop-up (InfoRequestDialog). It posts to the existing /api/contact handler with
// the same fields as before, so the email handler is unchanged.
type Props = {
  /** Pre-filled subject, e.g. the event or service the visitor asks about. */
  defaultSubject?: string;
  /** Show the "Send message" heading (the Contact page does; the pop-up has its own title). */
  showHeading?: boolean;
  className?: string;
};

const emptyForm = { title: "", firstName: "", lastName: "", email: "", subject: "", message: "" };

export const ContactForm = ({ defaultSubject = "", showHeading = true, className = "" }: Props) => {
  const { t } = useLanguage();
  // Unique ids: the form can appear twice on a page (page form + pop-up).
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;
  const [formData, setFormData] = useState({ ...emptyForm, subject: defaultSubject });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    if (defaultSubject) setFormData((prev) => ({ ...prev, subject: defaultSubject }));
  }, [defaultSubject]);

  const update = (field: keyof typeof emptyForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      setStatus({ type: "error", text: t("contact.form.agreeRequired") });
      return;
    }
    setIsSubmitting(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, agreedToTerms }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) throw new Error(data?.error || "Failed to send message");
      const reference = /Reference:\s*(\S+)/.exec(String(data?.message ?? ""))?.[1];
      setStatus({ type: "success", text: `${t("contact.form.successMessage")}${reference ? ` (${reference})` : ""}` });
      setFormData({ ...emptyForm, subject: defaultSubject });
      setAgreedToTerms(false);
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", text: t("contact.form.errorMessage") });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      {showHeading && (
        <h3 className="font-serif text-xl font-semibold text-foreground mb-6">{t("contact.form.sendButton")}</h3>
      )}
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor={id("title")}>{t("contact.form.titleLabel")}</Label>
            <Select value={formData.title} onValueChange={(value) => setFormData((prev) => ({ ...prev, title: value }))}>
              <SelectTrigger id={id("title")}>
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
            <Label htmlFor={id("firstName")}>{t("contact.form.firstNameLabel")}</Label>
            <Input id={id("firstName")} autoComplete="given-name" placeholder={t("contact.form.firstNamePlaceholder")} value={formData.firstName} onChange={update("firstName")} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor={id("lastName")}>{t("contact.form.lastNameLabel")}</Label>
            <Input id={id("lastName")} autoComplete="family-name" placeholder={t("contact.form.lastNamePlaceholder")} value={formData.lastName} onChange={update("lastName")} required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor={id("email")}>{t("contact.form.emailLabel")}</Label>
          <Input id={id("email")} type="email" autoComplete="email" placeholder={t("contact.form.emailPlaceholder")} value={formData.email} onChange={update("email")} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor={id("subject")}>{t("contact.form.subjectLabel")}</Label>
          <Input id={id("subject")} placeholder={t("contact.form.subjectPlaceholder")} value={formData.subject} onChange={update("subject")} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor={id("message")}>{t("contact.form.messageLabel")}</Label>
          <Textarea id={id("message")} placeholder={t("contact.form.messagePlaceholder")} rows={5} value={formData.message} onChange={update("message")} required />
        </div>
        <div className="flex items-start gap-3">
          <Checkbox id={id("terms")} checked={agreedToTerms} onCheckedChange={(checked) => setAgreedToTerms(checked === true)} />
          <label htmlFor={id("terms")} className="text-sm text-muted-foreground leading-tight cursor-pointer">
            {t("contact.form.consentBefore")}{" "}
            <Link to="/terms" className="text-primary hover:underline">{t("footer.termsOfService")}</Link>
            {" "}{t("contact.form.consentMiddle")}{" "}
            <Link to="/privacy" className="text-primary hover:underline">{t("footer.privacyPolicy")}</Link>
            {t("contact.form.consentAfter")}
          </label>
        </div>
        {status && (
          <p
            role={status.type === "error" ? "alert" : "status"}
            className={`rounded-lg px-4 py-3 text-sm ${status.type === "success" ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"}`}
          >
            {status.text}
          </p>
        )}
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
  );
};
