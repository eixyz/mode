import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AdvisoryPage = () => {
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
                Advisory Services
              </h1>
              <p className="text-muted-foreground text-base">
                Comprehensive support and assistance for Mozambican citizens in Germany and accredited countries.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card className="border-border h-full">
                  <CardHeader>
                    <CardTitle>Legal Assistance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Legal guidance and assistance for Mozambican nationals facing legal matters in Germany or accredited countries.
                    </p>
                    <Button className="w-full" variant="outline">Request Assistance</Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <Card className="border-border h-full">
                  <CardHeader>
                    <CardTitle>Administrative Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Guidance and documentation support for administrative procedures and official matters.
                    </p>
                    <Button className="w-full" variant="outline">Request Assistance</Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <Card className="border-border h-full">
                  <CardHeader>
                    <CardTitle>Citizen Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Support for Mozambican citizens including emergency assistance, repatriation, and welfare services.
                    </p>
                    <Button className="w-full" variant="outline">Request Assistance</Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <Card className="border-border h-full">
                  <CardHeader>
                    <CardTitle>Multi-Country Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Services and support extended to accredited countries as per diplomatic arrangements.
                    </p>
                    <Button className="w-full" variant="outline">Request Assistance</Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>How to Get Assistance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>1. Contact the Embassy with details of your situation</p>
                  <p>2. Provide relevant documentation and information</p>
                  <p>3. Our advisory team will assess your needs</p>
                  <p>4. We will provide guidance and next steps</p>
                  <p>5. Follow-up support and assistance as needed</p>
                  <div className="pt-4 border-t">
                    <a href="/contact" className="text-primary hover:underline">
                      Contact us for advisory services →
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

export default AdvisoryPage;
