import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicyPage = () => {
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
                Privacy Policy
              </h1>
              <p className="text-muted-foreground text-base">
                How we collect, use, and protect your personal information
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
                  <CardTitle>1. Introduction</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p>
                    The Embassy of Mozambique in Berlin (hereinafter "we" or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                  </p>
                  <p>
                    Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our website.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Card className="border-border mb-6">
                <CardHeader>
                  <CardTitle>2. Information We Collect</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p><strong>Personal Information:</strong></p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Name and contact information (email, phone)</li>
                    <li>Information provided through contact forms</li>
                    <li>Information related to visa or consular services</li>
                  </ul>
                  <p className="pt-3"><strong>Automatically Collected Information:</strong></p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Browser type and operating system</li>
                    <li>IP address and device information</li>
                    <li>Pages visited and time spent on site</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Card className="border-border mb-6">
                <CardHeader>
                  <CardTitle>3. How We Use Your Information</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Provide and improve our services</li>
                    <li>Process visa and passport applications</li>
                    <li>Respond to your inquiries and requests</li>
                    <li>Send administrative and promotional communications</li>
                    <li>Analyze website usage and trends</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Card className="border-border mb-6">
                <CardHeader>
                  <CardTitle>4. Information Sharing</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p>
                    We do not sell, trade, or rent your personal information to third parties. We may share information only when:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Required by law or government requests</li>
                    <li>Necessary to provide the services you requested</li>
                    <li>With trusted service providers who assist in our operations</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <Card className="border-border mb-6">
                <CardHeader>
                  <CardTitle>5. Data Security</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>6. Contact Us</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p>
                    If you have questions about this Privacy Policy or our privacy practices, please contact us at:
                  </p>
                  <p>
                    <strong>Embassy of Mozambique</strong><br />
                    Berlin, Germany<br />
                    Email: info@embassy-of-mozambique.de<br />
                    Phone: +49 30 3987 6500
                  </p>
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

export default PrivacyPolicyPage;
