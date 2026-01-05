import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MozambiquePage = () => {
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
                About Mozambique
              </h1>
              <p className="text-muted-foreground text-base">
                Discover Mozambique's geography, culture, and economic opportunities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card className="border-border mb-6">
                <CardHeader>
                  <CardTitle>Geography & Location</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p>
                    The Republic of Mozambique is a Southeast African nation located on the Indian Ocean coast. With a strategic geographic position, Mozambique serves as a gateway to Southern Africa and plays a vital role in regional trade and commerce.
                  </p>
                  <p>
                    <strong>Capital:</strong> Maputo<br />
                    <strong>Region:</strong> Southern Africa<br />
                    <strong>Population:</strong> Approximately 33 million<br />
                    <strong>Official Languages:</strong> Portuguese, Bantu languages
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Card className="border-border mb-6">
                <CardHeader>
                  <CardTitle>Culture & Heritage</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p>
                    Mozambique possesses a rich cultural heritage shaped by centuries of history, diverse ethnic groups, and vibrant traditions. The nation's culture reflects African heritage combined with Portuguese and Arab influences.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Traditional music and dance (Marrabenta, Timbila)</li>
                    <li>Vibrant local arts and crafts</li>
                    <li>Historical sites and monuments</li>
                    <li>Diverse ethnic traditions and customs</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Card className="border-border mb-6">
                <CardHeader>
                  <CardTitle>Economy & Development</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p>
                    Mozambique is experiencing significant economic growth with vast natural resources and emerging business opportunities. The country is attracting international investment across multiple sectors.
                  </p>
                  <p><strong>Key Economic Sectors:</strong></p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Mining and natural resources (natural gas, coal, mineral sands)</li>
                    <li>Agriculture and agro-processing</li>
                    <li>Energy and renewable resources</li>
                    <li>Tourism and hospitality</li>
                    <li>Port and logistics services</li>
                    <li>Manufacturing and light industries</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Tourism & Natural Attractions</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p>
                    Mozambique offers stunning natural attractions and diverse tourism experiences, from pristine beaches to wildlife reserves and historical sites.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Beautiful Indian Ocean coastline and beaches</li>
                    <li>Gorongosa National Park for wildlife viewing</li>
                    <li>Bazaruto Archipelago for marine biodiversity</li>
                    <li>Colonial architecture and historical cities</li>
                    <li>Water sports and diving opportunities</li>
                    <li>Safari and wildlife experiences</li>
                  </ul>
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

export default MozambiquePage;
