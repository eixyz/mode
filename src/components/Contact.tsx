import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: ["Stromstraße 47", "10551 Berlin", "Germany"],
  },
  {
    icon: Phone,
    title: "Phone",
    content: ["+49 30 2060 7720", "+49 30 2060 7721 (Fax)"],
  },
  {
    icon: Mail,
    title: "Email",
    content: ["info@embassy-of-mozambique.de", "consular@embassy-of-mozambique.de"],
  },
  {
    icon: Clock,
    title: "Opening Hours",
    content: ["Monday - Friday: 9:00 - 13:00", "Afternoon by appointment only"],
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="gold-accent h-1 w-16 mx-auto mb-6 rounded-full" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions? Get in touch with us and we'll be happy to assist you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-5 border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  {item.content.map((line, i) => (
                    <p key={i} className="text-sm text-muted-foreground">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-card rounded-xl border border-border overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.0!2d13.3435!3d52.5320!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDMxJzU1LjIiTiAxM8KwMjAnMzYuNiJF!5e0!3m2!1sen!2sde!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Embassy Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="bg-card rounded-xl p-8 border border-border">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                Send us a Message
              </h3>
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-embassy-green-dark text-primary-foreground"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
