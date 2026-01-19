import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/lib/LanguageContext";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Visa from "./pages/Visa";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import NewsAdmin from "./pages/NewsAdmin";
import Ambassador from "./pages/about/Ambassador";
import Mission from "./pages/about/Mission";
import Consuls from "./pages/about/Consuls";
import Holidays from "./pages/about/Holidays";
import Mozambique from "./pages/about/Mozambique";
import Geography from "./pages/about/Geography";
import Culture from "./pages/about/Culture";
import Economy from "./pages/about/Economy";
import Tourism from "./pages/about/Tourism";
import UsefulLinks from "./pages/about/UsefulLinks";
import Passports from "./pages/services/Passports";
import VisasService from "./pages/services/Visas";
import Advisory from "./pages/services/Advisory";
import Trade from "./pages/services/Trade";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Accessibility from "./pages/Accessibility";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/passports" element={<Passports />} />
          <Route path="/services/visas" element={<VisasService />} />
          <Route path="/services/advisory" element={<Advisory />} />
          <Route path="/services/trade" element={<Trade />} />
          <Route path="/visa" element={<Visa />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/mozambique" element={<Mozambique />} />
          <Route path="/about/mozambique/geography" element={<Geography />} />
          <Route path="/about/mozambique/culture" element={<Culture />} />
          <Route path="/about/mozambique/economy" element={<Economy />} />
          <Route path="/about/mozambique/tourism" element={<Tourism />} />
          <Route path="/about/ambassador" element={<Ambassador />} />
          <Route path="/about/mission" element={<Mission />} />
          <Route path="/about/consuls" element={<Consuls />} />
          <Route path="/about/holidays" element={<Holidays />} />
          <Route path="/about/useful-links" element={<UsefulLinks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/admin" element={<NewsAdmin />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/accessibility" element={<Accessibility />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
