import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { VisaSection } from "@/components/VisaSection";
import { About } from "@/components/About";
import { News } from "@/components/News";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <VisaSection />
        <About />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
