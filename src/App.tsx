import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/lib/LanguageContext";
import { Seo } from "@/components/Seo";

const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const Visa = lazy(() => import("./pages/Visa"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Appointment = lazy(() => import("./pages/Appointment"));
const News = lazy(() => import("./pages/News"));
const NewsDetail = lazy(() => import("./pages/NewsDetail"));
const Events = lazy(() => import("./pages/Events"));
const EventDetail = lazy(() => import("./pages/EventDetail"));
const Ambassador = lazy(() => import("./pages/about/Ambassador"));
const Mission = lazy(() => import("./pages/about/Mission"));
const Consuls = lazy(() => import("./pages/about/Consuls"));
const Holidays = lazy(() => import("./pages/about/Holidays"));
const Mozambique = lazy(() => import("./pages/about/Mozambique"));
const Geography = lazy(() => import("./pages/about/Geography"));
const Culture = lazy(() => import("./pages/about/Culture"));
const Economy = lazy(() => import("./pages/about/Economy"));
const Tourism = lazy(() => import("./pages/about/Tourism"));
const UsefulLinks = lazy(() => import("./pages/about/UsefulLinks"));
const Passports = lazy(() => import("./pages/services/Passports"));
const VisasService = lazy(() => import("./pages/services/Visas"));
const Advisory = lazy(() => import("./pages/services/Advisory"));
const Trade = lazy(() => import("./pages/services/Trade"));
const FormsDocuments = lazy(() => import("./pages/services/FormsDocuments"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const Accessibility = lazy(() => import("./pages/Accessibility"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const CmsRedirect = () => {
  useEffect(() => { window.location.replace("/admin/"); }, []);
  return null;
};

const RouteFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background text-muted-foreground">
    Loading...
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Seo />
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/passports" element={<Passports />} />
              <Route path="/services/visas" element={<VisasService />} />
              <Route path="/services/advisory" element={<Advisory />} />
              <Route path="/services/trade" element={<Trade />} />
              <Route path="/services/forms" element={<FormsDocuments />} />
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
              <Route path="/news/admin" element={<CmsRedirect />} />
              <Route path="/news/:id" element={<NewsDetail />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/admin" element={<CmsRedirect />} />
              <Route path="/events/:id" element={<EventDetail />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
      </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
