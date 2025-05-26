
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PreRegistration from "./pages/PreRegistration";
import PreRegistrationPreview from "./pages/PreRegistrationPreview";
import CompleteRegistration from "./pages/CompleteRegistration";
import CompleteRegistrationPreview from "./pages/CompleteRegistrationPreview";
import TrackDetails from "./pages/TrackDetails";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pre-registration" element={<PreRegistration />} />
          <Route path="/pre-registration-preview" element={<PreRegistrationPreview />} />
          <Route path="/complete-registration" element={<CompleteRegistration />} />
          <Route path="/complete-registration-preview" element={<CompleteRegistrationPreview />} />
          <Route path="/track/:trackName" element={<TrackDetails />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
