import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RevenueDetails from "./pages/RevenueDetails";
import EngagementDetails from "./pages/EngagementDetails";
import ConversionsDetails from "./pages/ConversionsDetails";
import CampaignDetails from "./pages/CampaignDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/revenue" element={<RevenueDetails />} />
          <Route path="/engagement" element={<EngagementDetails />} />
          <Route path="/conversions" element={<ConversionsDetails />} />
          <Route path="/campaigns" element={<CampaignDetails />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
