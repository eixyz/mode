import type { ReactElement } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";
import { useLanguage } from "@/lib/useLanguage";

// "Request information" / "Contact us about this": opens the contact form in a
// pop-up on the current page, with the subject already filled in, instead of
// sending the visitor to the Contact page.
type Props = {
  /** Pre-filled subject, e.g. the event title or the service name. */
  subject: string;
  /** The button that opens the pop-up. */
  children: ReactElement;
};

export const InfoRequestDialog = ({ subject, children }: Props) => {
  const { t } = useLanguage();
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">{t("infoRequest.title")}</DialogTitle>
          <DialogDescription>{t("infoRequest.description")}</DialogDescription>
        </DialogHeader>
        <ContactForm defaultSubject={subject} showHeading={false} />
      </DialogContent>
    </Dialog>
  );
};
