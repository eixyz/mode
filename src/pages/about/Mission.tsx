import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const MissionPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="font-serif text-3xl font-bold mb-2">Our Mission</h1>
              <p className="text-muted-foreground mb-4">The Embassy of Mozambique in Berlin works to represent Mozambique's interests and strengthen relationships between our nation and Germany.</p>

              <div className="grid grid-cols-1 gap-4 mb-6">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>Mission Statement</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>
                      To represent the interests of the Republic of Mozambique in Germany and accredited countries, facilitate diplomatic relations, promote bilateral trade and investment opportunities, and provide efficient consular services to Mozambican citizens and visitors.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>Core Objectives</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-2">
                      <li>Strengthen diplomatic ties with Germany</li>
                      <li>Facilitate bilateral trade and investment</li>
                      <li>Provide consular services to citizens</li>
                      <li>Promote Mozambique's culture and values</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>Areas of Focus</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-2">
                      <li>Economic cooperation and trade</li>
                      <li>Educational and cultural exchange</li>
                      <li>Consular assistance and support</li>
                      <li>Bilateral diplomatic cooperation</li>
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

export default MissionPage;
