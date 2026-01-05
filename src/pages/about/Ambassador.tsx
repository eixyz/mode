import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const AmbassadorPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="font-serif text-3xl font-bold mb-2">Ambassador</h1>
              <p className="text-muted-foreground mb-4">Official representative of the Republic of Mozambique in Germany.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>Ambassador Profile</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div>
                        <p className="font-semibold text-foreground">Name</p>
                        <p>[Ambassador Name - To be Updated]</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Position</p>
                        <p>Ambassador Extraordinary and Plenipotentiary</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Appointed</p>
                        <p>[Year of appointment]</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>Role & Responsibilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
                      <li>Represent Mozambique's government in Germany</li>
                      <li>Foster diplomatic and trade relations</li>
                      <li>Support Mozambican citizens abroad</li>
                      <li>Promote cultural and educational exchange</li>
                      <li>Oversee Embassy operations and consular services</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AmbassadorPage;
