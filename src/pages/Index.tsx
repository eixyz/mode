import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { News } from "@/components/News";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <UpcomingEvents />
        {/* Recent News only on home page */}
        <News />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
