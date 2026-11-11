import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { News } from "@/components/News";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import { Highlights } from "@/components/Highlights";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content">
        <Hero />
        <News />
        <UpcomingEvents />
        <Highlights />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
