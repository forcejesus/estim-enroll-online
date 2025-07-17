
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppSidebar } from "./components/AppSidebar";
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
            <div className="flex-1 flex flex-col">
              <header className="h-12 flex items-center border-b bg-white/80 backdrop-blur-sm">
                <SidebarTrigger className="ml-4" />
                <div className="ml-4 text-sm text-gray-600">
                  École Supérieure de Technologie ESTIM
                </div>
              </header>
              <main className="flex-1">
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
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
