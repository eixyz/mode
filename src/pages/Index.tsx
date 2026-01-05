import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { VisaSection } from "@/components/VisaSection";
import { About } from "@/components/About";
import { News } from "@/components/News";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
            <Hero />
            {/* Recent News only on home page */}
            <News />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
