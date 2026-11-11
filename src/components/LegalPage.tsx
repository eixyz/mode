import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/lib/useLanguage";
import { Fragment, type ReactNode } from "react";
import { legalContent, type LegalContent } from "@/lib/legal";

// Turns URLs and email addresses in legal text into links. Trailing
// punctuation stays outside the link.
const LINK_PATTERN = /(https?:\/\/[^\s]+?|[\w.+-]+@[\w-]+\.[\w.-]+?)(?=[.,;:)]?(?:\s|$))/g;

const linkify = (text: string): ReactNode =>
  text.split(LINK_PATTERN).map((part, i) => {
    if (i % 2 === 0) return <Fragment key={i}>{part}</Fragment>;
    const isEmail = !part.startsWith("http");
    return (
      <a
        key={i}
        href={isEmail ? `mailto:${part}` : part}
        className="text-primary underline-offset-2 hover:underline break-words"
        {...(isEmail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      >
        {part}
      </a>
    );
  });

type LegalPageProps = {
  doc: keyof LegalContent;
};

export const LegalPage = ({ doc }: LegalPageProps) => {
  const { language } = useLanguage();
  const content = (legalContent[language] ?? legalContent.en)[doc];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-12 bg-gradient-to-b from-primary/8 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="gold-accent h-1 w-16 mx-auto mb-4 rounded-full" />
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                {content.title}
              </h1>
              <p className="text-muted-foreground text-base">{content.subtitle}</p>
              <p className="text-xs text-muted-foreground/80 mt-3">
                <time dateTime={content.updatedIso}>{content.updated}</time>
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {content.sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
              >
                <Card className="border-border mb-6">
                  <CardHeader>
                    <CardTitle className="text-base md:text-lg">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3 leading-relaxed">
                    {section.paragraphs?.map((paragraph, i) => (
                      <p key={i}>{linkify(paragraph)}</p>
                    ))}
                    {section.bullets && (
                      <ul className="list-disc pl-5 space-y-2">
                        {section.bullets.map((bullet, i) => (
                          <li key={i}>{linkify(bullet)}</li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LegalPage;
