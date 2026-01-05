import { motion } from "framer-motion";
import { FileText, Plane, Building2, Users, Briefcase, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: FileText,
    title: "Visa Services",
    description: "Tourist, business, and transit visa applications for travel to Mozambique.",
    link: "#visa",
  },
  {
    icon: Plane,
    title: "Passport Services",
    description: "New passport applications, renewals, and emergency travel documents.",
    link: "#",
  },
  {
    icon: Building2,
    title: "Notarial Services",
    description: "Document authentication, legalization, and notarial certificates.",
    link: "#",
  },
  {
    icon: Users,
    title: "Civil Registry",
    description: "Birth, marriage, and death certificates for Mozambican citizens.",
    link: "#",
  },
  {
    icon: Briefcase,
    title: "Trade & Investment",
    description: "Business opportunities, trade relations, and investment guidance.",
    link: "#",
  },
  {
    icon: Heart,
    title: "Citizen Assistance",
    description: "Support for Mozambican nationals residing in Germany.",
    link: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/50 pattern-mozambique">
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
            Our Consular Services
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a comprehensive range of consular and diplomatic services to 
            serve both Mozambican citizens and those interested in visiting our country.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-card hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30 group cursor-pointer">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
