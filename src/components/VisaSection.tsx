import { motion } from "framer-motion";
import { Check, ArrowRight, Clock, FileCheck, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const visaTypes = [
  {
    type: "Tourist Visa",
    duration: "Up to 30 days",
    price: "€60",
    processing: "5-7 business days",
    features: ["Single/Multiple entry", "Beach resorts access", "Safari parks"],
  },
  {
    type: "Business Visa",
    duration: "Up to 90 days",
    price: "€120",
    processing: "3-5 business days",
    features: ["Multiple entry", "Business meetings", "Investment visits"],
    highlighted: true,
  },
  {
    type: "Transit Visa",
    duration: "Up to 7 days",
    price: "€30",
    processing: "2-3 business days",
    features: ["Single entry", "Airport transit", "Connecting flights"],
  },
];

export const VisaSection = () => {
  return (
    <section id="visa" className="py-24 bg-background">
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
            Visa Applications
          </h2>
          <p className="text-muted-foreground text-lg">
            Plan your journey to Mozambique. Choose the visa type that best suits your travel needs.
          </p>
        </motion.div>

        {/* Visa Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {visaTypes.map((visa, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-6 ${
                visa.highlighted
                  ? "bg-primary text-primary-foreground shadow-2xl scale-105 z-10"
                  : "bg-card border border-border"
              }`}
            >
              {visa.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-foreground text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className={`font-serif text-xl font-semibold mb-2 ${
                  visa.highlighted ? "text-primary-foreground" : "text-foreground"
                }`}>
                  {visa.type}
                </h3>
                <div className={`text-3xl font-bold ${
                  visa.highlighted ? "text-gold" : "text-primary"
                }`}>
                  {visa.price}
                </div>
              </div>

              <div className={`space-y-3 mb-6 text-sm ${
                visa.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
              }`}>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{visa.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4" />
                  <span>{visa.processing}</span>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {visa.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <Check className={`w-4 h-4 ${
                      visa.highlighted ? "text-gold" : "text-primary"
                    }`} />
                    <span className={visa.highlighted ? "text-primary-foreground" : "text-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full group ${
                  visa.highlighted
                    ? "bg-gold hover:bg-gold-light text-foreground"
                    : "bg-primary hover:bg-embassy-green-dark text-primary-foreground"
                }`}
              >
                Apply Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Need help choosing the right visa? Our team is here to assist you.
          </p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <CreditCard className="w-4 h-4 mr-2" />
            View All Requirements
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
