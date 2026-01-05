import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, Clock, FileText, AlertTriangle } from "lucide-react";

const visaTypes = [
  {
    title: "Tourism Visa",
    description: "For leisure and tourism purposes",
    requirements: [
      "Copy of flight itinerary",
      "Copy of hotel reservation",
    ],
    processing: "10 working days (normal), 3-4 working days (urgent), 2 working days (express)",
  },
  {
    title: "Business Visa",
    description: "For business-related travel",
    requirements: [
      "Letter from applicant's company",
      "Letter from inviting company in Mozambique",
    ],
    processing: "10 working days (normal), 3-4 working days (urgent), 2 working days (express)",
  },
  {
    title: "Visit Visa",
    description: "For visiting friends or family",
    requirements: [
      "Letter from the inviting party in Mozambique",
    ],
    processing: "10 working days (normal), 3-4 working days (urgent), 2 working days (express)",
  },
  {
    title: "Residence Visa",
    description: "For long-term residence in Mozambique",
    requirements: [
      "Copy of work contract in Mozambique",
      "Police clearance from place of residence",
    ],
    processing: "10 working days (normal), 3-4 working days (urgent), 2 working days (express)",
  },
  {
    title: "Student Visa",
    description: "For studying in Mozambique",
    requirements: [
      "Letter from applicant's school",
      "Police clearance",
      "Confirmation letter from Mozambican school",
    ],
    processing: "10 working days (normal), 3-4 working days (urgent), 2 working days (express)",
  },
  {
    title: "Transit Visa",
    description: "For transiting through Mozambique",
    requirements: [
      "Visa for final destination",
      "Exception: Not required if final destination is country of origin or residence",
    ],
    processing: "10 working days (normal), 3-4 working days (urgent), 2 working days (express)",
  },
];

const generalRequirements = [
  "Original passport valid for at least 6 months from date of entry, with at least 1 blank page",
  "Duly completed visa application form with all required information",
  "Two passport-size photographs (color, white background)",
  "Self-addressed envelope or pre-paid air bill with tracking number",
  "Payment in Euros by bank transfer (cash not accepted)",
  "If under 18: Parental travel consent letter",
  "If from Yellow Fever endemic country: Yellow Fever Certificate",
];

const visaExemptCountries = [
  "Botswana",
  "Malawi",
  "Mauritius",
  "South Africa",
  "Swaziland",
  "Tanzania",
  "Zambia",
  "Angola",
  "Zimbabwe",
];

const additionalVisaTypes = [
  {
    title: "Border Visa",
    description: "For people coming from countries without Mozambican consular representation",
    details: "Valid for 2 entries, allows stay up to 30 days (not extendable). Also available at border for tourism purposes with justified reasons.",
  },
  {
    title: "Investment Activity Visa",
    description: "For foreign citizen investors and company representatives",
    details: "For implementing investment projects of US$500,000 or more approved by competent authority.",
  },
];

const VisaPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-12 bg-gradient-to-b from-primary/8 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="gold-accent h-1 w-16 mx-auto mb-6 rounded-full" />
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Visa Information
              </h1>
              <p className="text-muted-foreground text-lg">
                Complete guide to visa requirements, types, and application process for Mozambique
              </p>
            </motion.div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-8 bg-amber-50 dark:bg-amber-950/20 border-y border-amber-200 dark:border-amber-900">
          <div className="container mx-auto px-4 max-w-4xl">
            <Alert className="bg-transparent border-amber-300 dark:border-amber-800">
              <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-500" />
              <AlertDescription className="text-amber-900 dark:text-amber-300 ml-2">
                <strong>Important:</strong> If you are not a Mozambican citizen, you MUST have a visa to enter Mozambique, unless you are a citizen of a visa-exempt country.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Visa Exempt Countries */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                Visa-Exempt Countries
              </h2>
              <p className="text-muted-foreground mb-6">
                Citizens of the following countries DO NOT require a visa to enter Mozambique:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {visaExemptCountries.map((country, index) => (
                  <div key={index} className="flex items-center gap-2 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{country}</span>
                  </div>
                ))}
              </div>
              <Alert className="mt-8 bg-primary/5 border-primary/20">
                <FileText className="h-4 w-4 text-primary" />
                <AlertDescription className="text-foreground ml-2">
                  <strong>Special Cases:</strong> Citizens of Brasil, Cabo Verde, Guiné-Bissau, Portugal, S.Tomé e Príncipe, India, People's Republic of China, and holders of official or diplomatic passports DO NOT require a visa.
                </AlertDescription>
              </Alert>
            </motion.div>
          </div>
        </section>

        {/* Visa Types Grid */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="gold-accent h-1 w-16 mx-auto mb-6 rounded-full" />
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Types of Visa
              </h2>
              <p className="text-muted-foreground">
                Choose the visa type that matches your travel purpose
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {visaTypes.map((visa, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <Card className="h-full border-border hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{visa.title}</CardTitle>
                      <CardDescription>{visa.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-2">Requirements:</p>
                        <ul className="space-y-1">
                          {visa.requirements.map((req, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-4 border-t border-border">
                        <div className="flex items-start gap-2">
                          <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-semibold text-muted-foreground">Processing Time</p>
                            <p className="text-sm text-foreground mt-1">{visa.processing}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Visas */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="gold-accent h-1 w-16 mb-6 rounded-full" />
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                Special Visa Categories
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalVisaTypes.map((visa, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle>{visa.title}</CardTitle>
                      <CardDescription>{visa.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{visa.details}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* General Requirements */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="gold-accent h-1 w-16 mb-6 rounded-full" />
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                General Requirements for All Visas
              </h2>

              <div className="space-y-4">
                {generalRequirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{req}</p>
                  </div>
                ))}
              </div>

              <Card className="mt-8 bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-base">Important Notes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    <strong>Invitations:</strong> Invitations by organizations in Mozambique must include a copy of their legal status. Invitations by non-citizens must include a copy of their "DIRE" (proof of residence).
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Group Applications:</strong> Groups of visitors invited by organizations require one invitation per visa application form.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Visa Validity:</strong> Visas can be Single Entry or Multiple Entry (multiple limited to 3 months maximum).
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Ready to Apply?
              </h2>
              <p className="text-muted-foreground mb-8">
                Download the visa application form and required documents from our Services page
              </p>
              <Button size="lg" className="bg-primary hover:bg-embassy-green-dark text-primary-foreground">
                View Visa Documents
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VisaPage;
