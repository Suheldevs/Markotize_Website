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
import MarketplaceSocialMedia from "./pages/MarketplaceSocialMedia";
import MarketplaceDetail from "./pages/MarketplaceDetail";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Marketplace from "./pages/Marketplace";
import D2CSolutionDetail from "./pages/D2CSolutionDetail";
import B2CSolutionDetail from "./pages/B2CSolutionDetail";
import ScrollToTop from './components/ScrollToTop'
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop/>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/solutions/launchpad" element={<B2CLaunchPad />} />
          <Route path="/solutions/growthedge" element={<B2CGrowthEdge />} />
          <Route path="/solutions/scalex" element={<B2CScaleX />} />
          <Route path="/services/digifuse" element={<D2CDigiFuse />} />
          <Route path="/services/brandelevate" element={<D2CBrandElevate />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/marketplace/:slug" element={<MarketplaceDetail />} />
          <Route path="/solutions/b2c/:slug" element={<B2CSolutionDetail />} />
          <Route path="/solutions/:slug" element={<D2CSolutionDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
