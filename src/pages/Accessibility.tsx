import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AccessibilityPage = () => {
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
                Accessibility
              </h1>
              <p className="text-muted-foreground text-base">
                Our commitment to making our website accessible to everyone
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
                  <CardTitle>Accessibility Commitment</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p>
                    The Embassy of Mozambique is committed to ensuring that our website is accessible to all users, including those with disabilities. We strive to meet or exceed the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Card className="border-border mb-6">
                <CardHeader>
                  <CardTitle>Accessibility Features</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p><strong>Our website includes the following accessibility features:</strong></p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Semantic HTML structure for better screen reader compatibility</li>
                    <li>Alt text for all images and visual content</li>
                    <li>Keyboard navigation support</li>
                    <li>Clear and readable fonts with sufficient contrast</li>
                    <li>Resizable text and responsive design</li>
                    <li>Skip navigation links for easier page navigation</li>
                    <li>Form labels and validation messages</li>
                    <li>ARIA labels for enhanced accessibility</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Card className="border-border mb-6">
                <CardHeader>
                  <CardTitle>Assistive Technologies</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p>
                    Our website is compatible with various assistive technologies, including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
                    <li>Browser zoom and text sizing tools</li>
                    <li>Speech recognition software</li>
                    <li>Magnification software</li>
                    <li>Voice control systems</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Card className="border-border mb-6">
                <CardHeader>
                  <CardTitle>Browser Compatibility</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p>
                    Our website is designed to work with modern web browsers including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Chrome (latest version)</li>
                    <li>Firefox (latest version)</li>
                    <li>Safari (latest version)</li>
                    <li>Edge (latest version)</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <Card className="border-border mb-6">
                <CardHeader>
                  <CardTitle>Keyboard Navigation</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p><strong>Keyboard shortcuts available on this website:</strong></p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Tab:</strong> Move to next interactive element</li>
                    <li><strong>Shift + Tab:</strong> Move to previous interactive element</li>
                    <li><strong>Enter:</strong> Activate links and buttons</li>
                    <li><strong>Esc:</strong> Close modals and dropdowns</li>
                    <li><strong>Arrow Keys:</strong> Navigate through menu items</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Accessibility Issues or Feedback</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p>
                    If you encounter any accessibility issues while using our website, please contact us. We are committed to resolving accessibility barriers and appreciate your feedback.
                  </p>
                  <p className="pt-4">
                    <strong>Contact Us:</strong><br />
                    Email: info@embassy-of-mozambique.de<br />
                    Phone: +49 30 3987 6500<br />
                    <br />
                    Please include details about the issue and your browser/assistive technology for faster resolution.
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

export default AccessibilityPage;
