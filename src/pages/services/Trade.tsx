import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TradeInvestPage = () => {
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
                Trade & Investment
              </h1>
              <p className="text-muted-foreground text-base">
                Discover business opportunities and investment potential in Mozambique's growing economy.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card className="border-border h-full">
                  <CardHeader>
                    <CardTitle>Trade Opportunities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Explore trading partnerships and export-import opportunities between Mozambique and Germany.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 mb-4">
                      <li>• Bilateral trade agreements</li>
                      <li>• Export/import guidelines</li>
                      <li>• Trade facilitation programs</li>
                      <li>• Commercial information</li>
                    </ul>
                    <Button className="w-full" variant="outline">Learn More</Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <Card className="border-border h-full">
                  <CardHeader>
                    <CardTitle>Investment Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Detailed information on investment regulations, incentives, and opportunities in Mozambique.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 mb-4">
                      <li>• Investment regulations</li>
                      <li>• Tax incentives</li>
                      <li>• Sector opportunities</li>
                      <li>• Business resources</li>
                    </ul>
                    <Button className="w-full" variant="outline">Learn More</Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <Card className="border-border h-full">
                  <CardHeader>
                    <CardTitle>Business Relations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Facilitate business-to-business connections and support commercial partnerships.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 mb-4">
                      <li>• B2B networking events</li>
                      <li>• Business matchmaking</li>
                      <li>• Trade missions</li>
                      <li>• Commercial contacts</li>
                    </ul>
                    <Button className="w-full" variant="outline">Learn More</Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <Card className="border-border h-full">
                  <CardHeader>
                    <CardTitle>Economic Updates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Latest economic data, market trends, and business intelligence from Mozambique.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 mb-4">
                      <li>• Economic reports</li>
                      <li>• Market analysis</li>
                      <li>• Industry trends</li>
                      <li>• Business updates</li>
                    </ul>
                    <Button className="w-full" variant="outline">Learn More</Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Key Sectors in Mozambique</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p><strong>Priority Investment Sectors:</strong></p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Mining and mineral resources (natural gas, coal, heavy sands)</li>
                    <li>Agriculture and agro-processing</li>
                    <li>Energy and renewable resources</li>
                    <li>Tourism and hospitality</li>
                    <li>Manufacturing and industrial development</li>
                    <li>Telecommunications and technology</li>
                    <li>Infrastructure development</li>
                  </ul>
                  <div className="pt-4 border-t">
                    <a href="/contact" className="text-primary hover:underline">
                      Contact us for trade and investment inquiries →
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

export default TradeInvestPage;
