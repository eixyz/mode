import { useMemo } from "react";
import { FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { DOCUMENT_CATEGORIES, loadDocuments } from "@/lib/content";
import { useLanguage } from "@/lib/useLanguage";

// Downloads managed in /admin (Documents & Public Notices), grouped by category.
const GROUP_KEYS: Record<(typeof DOCUMENT_CATEGORIES)[number], string> = {
  "Public Notice": "documents.publicNotice",
  Form: "documents.form",
  "Visa Information": "documents.visaInformation",
  "Fees & Payment": "documents.feesPayment",
  Other: "documents.other",
};

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export const DocumentList = ({ headingLevel: Heading = "h2" }: { headingLevel?: "h2" | "h3" }) => {
  const { language, t } = useLanguage();
  const documents = useMemo(() => loadDocuments(language), [language]);

  if (documents.length === 0) {
    return <p className="text-center text-muted-foreground">{t("documents.empty")}</p>;
  }

  const groups = DOCUMENT_CATEGORIES.map((category) => ({
    category,
    items: documents.filter((doc) => doc.category === category),
  })).filter((group) => group.items.length > 0);

  return (
    <div className="space-y-10">
      {groups.map((group) => (
        <section key={group.category} aria-labelledby={`documents-${slugify(group.category)}`}>
          <Heading id={`documents-${slugify(group.category)}`} className="font-serif text-2xl font-semibold text-foreground mb-4">
            {t(GROUP_KEYS[group.category])}
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {group.items.map((doc) => (
              <a
                key={doc.id}
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Card className="h-full flex flex-col border-border transition-all group-hover:border-primary group-hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-base flex items-start gap-2">
                      <FileText className="w-4 h-4 mt-0.5 text-primary shrink-0" aria-hidden="true" />
                      {doc.title}
                    </CardTitle>
                    {doc.description && <CardDescription>{doc.description}</CardDescription>}
                    {doc.isoDate && (
                      <p className="text-xs text-muted-foreground">
                        {t("documents.updated")}: <time dateTime={doc.isoDate}>{doc.date}</time>
                      </p>
                    )}
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <span className={buttonVariants({ variant: "outline", size: "sm", className: "w-full" })}>
                      {t("services.downloadPdf")}
                    </span>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};
