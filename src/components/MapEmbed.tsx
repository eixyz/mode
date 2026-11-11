import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/useLanguage";
import { contactDetails } from "@/lib/siteSettings";

// Two-click map: nothing is requested from Google until the visitor clicks
// "Show map". The choice is deliberately not stored (see privacy policy, section 6).
// The address comes from Embassy Settings, so the map follows CMS changes.
export const MapEmbed = () => {
  const { t, language } = useLanguage();
  const [loaded, setLoaded] = useState(false);
  const query = encodeURIComponent(`${contactDetails.street}, ${contactDetails.postalCode} Berlin`);
  const embedUrl = `https://www.google.com/maps?q=${query}&hl=${language}&output=embed`;
  const externalUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;

  if (loaded) {
    return (
      <div className="bg-card rounded-xl border border-border overflow-hidden h-64">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          title={t("contact.map.title")}
        />
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl border border-border h-64 flex flex-col items-center justify-center gap-3 p-6 text-center">
      <MapPin className="w-8 h-8 text-primary" aria-hidden="true" />
      <p className="text-sm text-muted-foreground max-w-sm">
        {t("contact.map.notice")}{" "}
        <Link to="/privacy" className="text-primary hover:underline">{t("footer.privacyPolicy")}</Link>
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button type="button" onClick={() => setLoaded(true)}>{t("contact.map.show")}</Button>
        <a href={externalUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
          {t("contact.map.open")}
        </a>
      </div>
    </div>
  );
};
