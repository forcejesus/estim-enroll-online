
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppSidebar } from "./components/AppSidebar";
import TracksPage from "./pages/Tracks";
import ContactPage from "./pages/Contact";
import AdmissionPage from "./pages/Admission";
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
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <AppSidebar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/tracks" element={<TracksPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/admission" element={<AdmissionPage />} />
                  <Route path="/pre-registration" element={<PreRegistration />} />
                  <Route path="/pre-registration-preview" element={<PreRegistrationPreview />} />
                  <Route path="/complete-registration" element={<CompleteRegistration />} />
                  <Route path="/complete-registration-preview" element={<CompleteRegistrationPreview />} />
                  <Route path="/track/:trackName" element={<TrackDetails />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
