import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const ConsulsPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="font-serif text-3xl font-bold mb-2">Honorary Consuls</h1>
              <p className="text-muted-foreground mb-6">Honorary Consuls represent Mozambique's interests in key regions of Germany and neighboring countries. They provide consular assistance and promote bilateral relations in their respective areas.</p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Munich</span>
                      <span className="text-xs font-normal text-muted-foreground">Bavaria</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <div>
                      <p className="font-semibold text-foreground">Hon. Siegfried Lingel</p>
                      <p>Bayerstr. 33<br/>80335 München</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Hamburg</span>
                      <span className="text-xs font-normal text-muted-foreground">Northern Germany</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <div>
                      <p className="font-semibold text-foreground">Hon. Dietrich Scheder-Bieschin</p>
                      <p>Große Elbstr. 138<br/>22767 Hamburg</p>
                      <p className="pt-2"><strong>Tel:</strong> +49 40 37673131</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Stuttgart</span>
                      <span className="text-xs font-normal text-muted-foreground">Baden-Württemberg</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <div>
                      <p className="font-semibold text-foreground">Hon. Marcus Lingel</p>
                      <p>Königstr. 41<br/>70173 Stuttgart</p>
                      <p className="pt-2"><strong>Tel:</strong> +49 711 87030922</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Vienna</span>
                      <span className="text-xs font-normal text-muted-foreground">Austria</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <div>
                      <p className="font-semibold text-foreground">Hon. Karl Hans Polzhofer IV</p>
                      <p>Vienna, Austria</p>
                    </div>
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

export default ConsulsPage;
