import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const bankDetails = {
  bank: "Deutsche Bank",
  iban: "DE58 1007 0000 0237 0088 01",
  bic: "DEUTDEBBXXX",
};

const AppointmentPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-4xl font-bold mb-4">Book an Appointment</h1>
              <p className="text-muted-foreground mb-6">
                To request an appointment for consular matters (visas, passports, PID), please follow the instructions below. Appointments are required for in-person services.
              </p>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>How to Book</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">1. Prepare required documents depending on the service (visa, passport, etc.).</p>
                  <p className="text-sm text-muted-foreground">2. Make the required bank transfer (details below) and keep the proof of payment.</p>
                  <p className="text-sm text-muted-foreground">3. Use the contact email <a href="mailto:consular@embassy-of-mozambique.de" className="text-primary">consular@embassy-of-mozambique.de</a> to request an appointment and attach the proof of payment and documents.</p>
                  <p className="text-sm text-muted-foreground">4. You will receive a confirmation email with the appointment date and any further instructions.</p>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Bank Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground"><strong>Bank:</strong> {bankDetails.bank}</p>
                    <p className="text-sm text-muted-foreground"><strong>IBAN:</strong> <span className="font-mono">{bankDetails.iban}</span></p>
                    <p className="text-sm text-muted-foreground"><strong>BIC (SWIFT):</strong> <span className="font-mono">{bankDetails.bic}</span></p>
                    <p className="text-sm text-muted-foreground pt-3 border-t">Payments must be made in Euros by bank transfer. After payment, include proof of transfer when requesting your appointment.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Fees by Service</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground"><strong>Visa processing:</strong> see fee schedule PDF on the Services page.</p>
                  <p className="text-sm text-muted-foreground"><strong>Passport issuance/renewal:</strong> follow passport fees instructions and transfer the corresponding amount.</p>
                  <p className="text-sm text-muted-foreground"><strong>PID / Identity documents:</strong> pay the indicated fee and attach proof to your appointment request.</p>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button asChild>
                  <a href="mailto:consular@embassy-of-mozambique.de">Request Appointment via Email</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AppointmentPage;
