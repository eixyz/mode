import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LatestUpdates } from "@/components/LatestUpdates";
import { Highlights } from "@/components/Highlights";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content">
        <Hero />
        <LatestUpdates />
        <Highlights />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
