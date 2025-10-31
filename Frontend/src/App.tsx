import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/ContactPage";
import B2CLaunchPad from "./pages/B2CLaunchPad";
import B2CGrowthEdge from "./pages/B2CGrowthEdge";
import B2CScaleX from "./pages/B2CScaleX";
import D2CDigiFuse from "./pages/D2CDigiFuse";
import D2CBrandElevate from "./pages/D2CBrandElevate";
import MarketplaceSEO from "./pages/MarketplaceSEO";
import MarketplaceSocialMedia from "./pages/MarketplaceSocialMedia";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/solutions/launchpad" element={<B2CLaunchPad />} />
          <Route path="/solutions/growthedge" element={<B2CGrowthEdge />} />
          <Route path="/solutions/scalex" element={<B2CScaleX />} />
          <Route path="/services/digifuse" element={<D2CDigiFuse />} />
          <Route path="/services/brandelevate" element={<D2CBrandElevate />} />
          <Route path="/marketplace/seo" element={<MarketplaceSEO />} />
          <Route path="/marketplace/social-media" element={<MarketplaceSocialMedia />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
