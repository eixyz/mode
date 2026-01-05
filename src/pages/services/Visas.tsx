import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const VisasServicePage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
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
                Mozambique Visas
              </h1>
              <p className="text-muted-foreground text-base">
                Information and assistance for Mozambique visa applications, including tourist, business, and residence permits.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Visa Types */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card className="border-border h-full">
                  <CardHeader>
                    <CardTitle>Tourist Visa</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Travel to Mozambique for tourism purposes. Valid for tourism activities and leisure travel.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 mb-4">
                      <li>• Typical validity: 30-90 days</li>
                      <li>• Multiple entry options available</li>
                      <li>• Processing time: 5-10 working days</li>
                    </ul>
                    <Button className="w-full" variant="outline">Apply Now</Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <Card className="border-border h-full">
                  <CardHeader>
                    <CardTitle>Business Visa</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Conduct business activities in Mozambique including meetings, conferences, and trade activities.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 mb-4">
                      <li>• Typical validity: 30-90 days</li>
                      <li>• Required: Business invitation letter</li>
                      <li>• Processing time: 5-10 working days</li>
                    </ul>
                    <Button className="w-full" variant="outline">Apply Now</Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <Card className="border-border h-full">
                  <CardHeader>
                    <CardTitle>Residence Permit</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Extended stay in Mozambique for work, study, or permanent residence purposes.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 mb-4">
                      <li>• Validity: 1 year renewable</li>
                      <li>• Required: Employment or study contract</li>
                      <li>• Processing time: 10-15 working days</li>
                    </ul>
                    <Button className="w-full" variant="outline">Apply Now</Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <Card className="border-border h-full">
                  <CardHeader>
                    <CardTitle>Visa Extension</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Extend your current visa if you need to stay longer in Mozambique than originally planned.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 mb-4">
                      <li>• Can be done in-country</li>
                      <li>• Application required before expiry</li>
                      <li>• Processing time: 5-7 working days</li>
                    </ul>
                    <Button className="w-full" variant="outline">Apply Now</Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Visa Requirements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p><strong>General Requirements:</strong></p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Valid passport (minimum 6 months validity)</li>
                    <li>Completed visa application form</li>
                    <li>Passport-size photograph (4x4 cm)</li>
                    <li>Proof of travel arrangements</li>
                    <li>Proof of accommodation in Mozambique</li>
                    <li>Proof of financial means</li>
                    <li>Yellow fever vaccination certificate (recommended)</li>
                  </ul>
                  <div className="pt-4 border-t">
                    <a href="/contact" className="text-primary hover:underline">
                      Contact us for specific visa requirements →
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VisasServicePage;
