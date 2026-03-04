import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/useLanguage";

type Service = "passport" | "visa" | "ids" | "advisory" | "trade";

interface AppointmentFormData {
  service: Service | "";
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  time?: string;
  passportValidity?: string;
  idValidity?: string;
  birthDate?: string;
  visaType?: string;
  idsType?: string;
  additionalInfo?: string;
}

const AppointmentPage = () => {
  const { t } = useLanguage();
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services: { value: Service; label: string }[] = [
    { value: "passport", label: t("appointment.passportService") },
    { value: "visa", label: t("appointment.visaService") },
    { value: "ids", label: t("appointment.idsService") },
    { value: "advisory", label: t("appointment.advisoryService") },
    { value: "trade", label: t("appointment.tradeService") },
  ];
  const [step, setStep] = useState<"service" | "form" | "calendar">("service");
  const [currentMonth, setCurrentMonth] = useState(() => {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1);
  });
  
  const formatDate = (date: Date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };
  
  const parseDateLocal = (iso: string) => {
    const [y, m, d] = iso.split("-").map(Number);
    return new Date(y, m - 1, d);
  };

  const [formData, setFormData] = useState<AppointmentFormData>({
    service: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
  });

  const getAvailableDates = () => {
    const today = new Date();
    const availableDates = [];
    const days = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    for (let i = 1; i <= days; i++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
      const ds = formatDate(date);
      if (ds >= formatDate(today) && date.getDay() !== 0 && date.getDay() !== 6) {
        availableDates.push(ds);
      }
    }
    return availableDates;
  };

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  const availableDates = getAvailableDates();
  const availableSet = new Set(availableDates);

  const getTimeSlotsForDate = (_date: Date) => {
    const slots: string[] = [];
    for (let hour = 9; hour <= 16; hour++) {
      slots.push(`${String(hour).padStart(2, "0")}:00`);
      slots.push(`${String(hour).padStart(2, "0")}:30`);
    }
    return slots;
  };

  const handleServiceSelect = (service: Service) => {
    setFormData({ ...formData, service });
    setStep("form");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleProceedToCalendar = () => {
    if (formData.firstName && formData.lastName && formData.email && formData.phone) {
      setStep("calendar");
    } else {
      alert(t("appointment.fillRequired"));
    }
  };

  const handleDateSelect = (date: Date) => {
    const dateStr = formatDate(date);
    setFormData({ ...formData, date: dateStr, time: undefined });
  };

  const handleTimeSelect = (time: string) => {
    setFormData({ ...formData, time });
  };

  const handleSubmit = async () => {
    if (!formData.date || !formData.time) {
      alert(t("appointment.selectDateTimeRequired"));
      return;
    }
    if (!agreedToTerms) {
      alert(t("contact.form.agreeRequired"));
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to book appointment");
      alert(t("appointment.successMessage"));
      setFormData({ service: "", firstName: "", lastName: "", email: "", phone: "", date: "" });
      setAgreedToTerms(false);
      setStep("service");
    } catch (err) {
      console.error(err);
      alert(t("appointment.errorMessage"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderServiceForm = () => {
    switch (formData.service) {
      case "passport":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="birthDate">{t("appointment.birthDateLabel")}</Label>
              <Input id="birthDate" name="birthDate" type="date" value={formData.birthDate || ""} onChange={handleInputChange} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="passportValidity">{t("appointment.passportValidityLabel")}</Label>
              <Select value={formData.passportValidity || ""} onValueChange={(v) => handleSelectChange("passportValidity", v)}>
                <SelectTrigger id="passportValidity"><SelectValue placeholder={t("appointment.selectValidity")} /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="valid">{t("appointment.validMoreYear")}</SelectItem>
                  <SelectItem value="expires-soon">{t("appointment.expiresSoon")}</SelectItem>
                  <SelectItem value="expired">{t("appointment.expired")}</SelectItem>
                  <SelectItem value="none">{t("appointment.noPassport")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="idValidity">{t("appointment.idValidityLabel")}</Label>
              <Select value={formData.idValidity || ""} onValueChange={(v) => handleSelectChange("idValidity", v)}>
                <SelectTrigger id="idValidity"><SelectValue placeholder={t("appointment.selectIdValidity")} /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="valid">{t("appointment.valid")}</SelectItem>
                  <SelectItem value="expires-soon">{t("appointment.expiresSoon")}</SelectItem>
                  <SelectItem value="expired">{t("appointment.expired")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );
      case "visa":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="birthDate">{t("appointment.birthDateLabel")}</Label>
              <Input id="birthDate" name="birthDate" type="date" value={formData.birthDate || ""} onChange={handleInputChange} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="visaType">{t("appointment.visaTypeLabel")}</Label>
              <Select value={formData.visaType || ""} onValueChange={(v) => handleSelectChange("visaType", v)}>
                <SelectTrigger id="visaType"><SelectValue placeholder={t("appointment.selectVisaType")} /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="tourist">{t("appointment.touristVisa")}</SelectItem>
                  <SelectItem value="business">{t("appointment.businessVisa")}</SelectItem>
                  <SelectItem value="residence">{t("appointment.residencePermit")}</SelectItem>
                  <SelectItem value="extension">{t("appointment.visaExtension")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );
      case "ids":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="birthDate">{t("appointment.birthDateLabel")}</Label>
              <Input id="birthDate" name="birthDate" type="date" value={formData.birthDate || ""} onChange={handleInputChange} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="idsType">{t("appointment.idCardTypeLabel")}</Label>
              <Select value={formData.idsType || ""} onValueChange={(v) => handleSelectChange("idsType", v)}>
                <SelectTrigger id="idsType"><SelectValue placeholder={t("appointment.selectIdType")} /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="national">{t("appointment.nationalId")}</SelectItem>
                  <SelectItem value="birth">{t("appointment.birthCertificate")}</SelectItem>
                  <SelectItem value="marriage">{t("appointment.marriageCertificate")}</SelectItem>
                  <SelectItem value="renewal">{t("appointment.idRenewal")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="idValidity">{t("appointment.idValidityLabel")}</Label>
              <Select value={formData.idValidity || ""} onValueChange={(v) => handleSelectChange("idValidity", v)}>
                <SelectTrigger id="idValidity"><SelectValue placeholder={t("appointment.selectIdValidity")} /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="valid">{t("appointment.valid")}</SelectItem>
                  <SelectItem value="expires-soon">{t("appointment.expiresSoon")}</SelectItem>
                  <SelectItem value="expired">{t("appointment.expired")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-3">{t("appointment.pageTitle")}</h1>
            <p className="text-muted-foreground text-sm sm:text-base mb-8">{t("appointment.pageDesc")}</p>

            {/* Step Indicator */}
            <div className="mb-8 flex items-center justify-between gap-1">
              <div className={`flex items-center gap-1.5 ${step === "service" ? "text-primary font-semibold" : "text-muted-foreground"}`}>
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm shrink-0 ${step === "service" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>1</div>
                <span className="text-xs sm:text-sm hidden sm:inline">{t("appointment.stepSelectService")}</span>
              </div>
              <div className="flex-1 h-0.5 mx-1 sm:mx-3 bg-muted" />
              <div className={`flex items-center gap-1.5 ${step === "form" ? "text-primary font-semibold" : "text-muted-foreground"}`}>
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm shrink-0 ${step === "form" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>2</div>
                <span className="text-xs sm:text-sm hidden sm:inline">{t("appointment.stepYourDetails")}</span>
              </div>
              <div className="flex-1 h-0.5 mx-1 sm:mx-3 bg-muted" />
              <div className={`flex items-center gap-1.5 ${step === "calendar" ? "text-primary font-semibold" : "text-muted-foreground"}`}>
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm shrink-0 ${step === "calendar" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>3</div>
                <span className="text-xs sm:text-sm hidden sm:inline">{t("appointment.stepChooseDate")}</span>
              </div>
            </div>

            {/* Step 1 */}
            {step === "service" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                <p className="text-sm text-muted-foreground mb-4">{t("appointment.selectServicePrompt")}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((svc) => (
                    <button key={svc.value} onClick={() => handleServiceSelect(svc.value)}
                      className="p-4 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-left">
                      <h3 className="font-semibold text-foreground text-sm sm:text-base">{svc.label}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{t("appointment.selectToContinue")}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2 */}
            {step === "form" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-base sm:text-lg">{t("appointment.serviceLabel")}: {services.find((s) => s.value === formData.service)?.label}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">{t("appointment.firstNameLabel")} *</Label>
                        <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder={t("appointment.firstNamePlaceholder")} className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">{t("appointment.lastNameLabel")} *</Label>
                        <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder={t("appointment.lastNamePlaceholder")} className="mt-1" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">{t("appointment.emailLabel")} *</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">{t("appointment.phoneLabel")} *</Label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="+49 30 1234 5678" className="mt-1" />
                    </div>
                    {renderServiceForm()}
                    <div>
                      <Label htmlFor="additionalInfo">{t("appointment.additionalInfoLabel")}</Label>
                      <Input id="additionalInfo" name="additionalInfo" value={formData.additionalInfo} onChange={handleInputChange} placeholder={t("appointment.additionalInfoPlaceholder")} className="mt-1" />
                    </div>
                  </CardContent>
                </Card>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" onClick={() => setStep("service")} className="sm:flex-1">{t("appointment.backButton")}</Button>
                  <Button onClick={handleProceedToCalendar} className="sm:flex-1 bg-primary hover:bg-primary/90">{t("appointment.continueToDate")}</Button>
                </div>
              </motion.div>
            )}

            {/* Step 3 */}
            {step === "calendar" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-base sm:text-lg">{t("appointment.selectDateTitle")}</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">{t("appointment.availableDates")} {currentMonth.toLocaleString(undefined, { month: "long", year: "numeric" })}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))} className="p-2 hover:bg-muted rounded">
                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                      <h3 className="font-semibold text-sm sm:text-base">{currentMonth.toLocaleString(undefined, { month: "long", year: "numeric" })}</h3>
                      <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))} className="p-2 hover:bg-muted rounded">
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-4">
                      {[t("calendar.sun"), t("calendar.mon"), t("calendar.tue"), t("calendar.wed"), t("calendar.thu"), t("calendar.fri"), t("calendar.sat")].map((day) => (
                        <div key={day} className="text-center text-[10px] sm:text-xs font-semibold text-muted-foreground p-1 sm:p-2">{day}</div>
                      ))}
                      {Array.from({ length: firstDay }).map((_, i) => (<div key={`empty-${i}`} className="p-1 sm:p-2" />))}
                      {Array.from({ length: daysInMonth }).map((_, i) => {
                        const day = i + 1;
                        const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                        const iso = formatDate(date);
                        const isAvailable = availableSet.has(iso);
                        const isSelected = formData.date === iso;
                        return (
                          <button key={day} onClick={() => isAvailable && handleDateSelect(date)} disabled={!isAvailable}
                            className={`p-1.5 sm:p-2 rounded text-xs sm:text-sm font-medium transition-colors ${isSelected ? "bg-primary text-primary-foreground" : isAvailable ? "bg-muted hover:bg-primary/20 cursor-pointer" : "text-muted-foreground opacity-50 cursor-not-allowed"}`}>
                            {day}
                          </button>
                        );
                      })}
                    </div>

                    {formData.date && (
                      <div className="p-3 sm:p-4 bg-primary/10 rounded-lg border border-primary/20 mb-4">
                        <p className="text-xs sm:text-sm">
                          <strong>{t("appointment.selectedDateLabel")}</strong> {parseDateLocal(formData.date).toLocaleDateString(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                        </p>
                        <div className="mt-3">
                          <p className="text-xs sm:text-sm mb-2">{t("appointment.selectTimePrompt")}</p>
                          <div className="grid grid-cols-3 sm:grid-cols-4 gap-1.5 sm:gap-2">
                            {getTimeSlotsForDate(parseDateLocal(formData.date)).map((slot) => (
                              <button key={slot} onClick={() => handleTimeSelect(slot)}
                                className={`p-1.5 sm:p-2 rounded text-xs sm:text-sm transition-colors ${formData.time === slot ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-primary/10"}`}>
                                {slot}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* T&C Checkbox */}
                <div className="flex items-start gap-3 px-1">
                  <Checkbox id="terms" checked={agreedToTerms} onCheckedChange={(checked) => setAgreedToTerms(checked === true)} />
                  <label htmlFor="terms" className="text-sm text-muted-foreground leading-tight cursor-pointer">
                    {t("contact.form.agreeTerms")}{" "}
                    <a href="/terms" className="text-primary hover:underline">{t("footer.termsOfService")}</a>
                    {" & "}
                    <a href="/privacy" className="text-primary hover:underline">{t("footer.privacyPolicy")}</a>
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" onClick={() => setStep("form")} className="sm:flex-1">{t("appointment.backButton")}</Button>
                  <Button onClick={handleSubmit} disabled={!formData.date || !formData.time || !agreedToTerms || isSubmitting} className="sm:flex-1 bg-primary hover:bg-primary/90">
                    {isSubmitting ? t("contact.form.sending") : t("appointment.confirmButton")}
                  </Button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AppointmentPage;
