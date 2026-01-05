import { motion } from "framer-motion";
import { MapPin, Users, Handshake, Award } from "lucide-react";

const highlights = [
  {
    icon: MapPin,
    title: "Strategic Location",
    description: "Located in the heart of Berlin, easily accessible by public transport.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Our experienced staff is committed to providing excellent service.",
  },
  {
    icon: Handshake,
    title: "Diplomatic Relations",
    description: "Fostering strong ties between Mozambique and Germany since 1975.",
  },
  {
    icon: Award,
    title: "Excellence in Service",
    description: "Committed to efficiency, transparency, and professionalism.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="gold-accent h-1 w-16 mb-6 rounded-full" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              About the Embassy
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              The Embassy of the Republic of Mozambique in Berlin serves as the diplomatic 
              representation of Mozambique in the Federal Republic of Germany. We work to 
              strengthen bilateral relations, promote trade and investment, and provide 
              consular services to Mozambican citizens and visitors.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Mozambique, located on the southeastern coast of Africa, is a country rich 
              in natural beauty, cultural heritage, and economic opportunities. From the 
              pristine beaches of the Bazaruto Archipelago to the vibrant capital of Maputo, 
              our nation welcomes visitors from around the world.
            </p>

            {/* Ambassador Info */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                Ambassador
              </h3>
              <p className="text-primary font-medium">H.E. Ambassador of Mozambique</p>
              <p className="text-muted-foreground text-sm mt-1">
                Extraordinary and Plenipotentiary to the Federal Republic of Germany
              </p>
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
