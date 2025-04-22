import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";
import KnowledgeBase from "./pages/KnowledgeBase";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Audit from "./pages/Audit";
import NotFound from "./pages/NotFound";
import Inventory from "./pages/Inventory";
import AssetRepairList from "@/components/inventory/AssetRepairList";
import DisposalList from "@/components/inventory/DisposalList";
import Connector from "./pages/Connector";
import ServiceNowConnector from "./pages/ServiceNowConnector";
import IntuneConnector from "./pages/IntuneConnector";
import ManualUpload from "./pages/ManualUpload";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout><Dashboard /></MainLayout>} />
          <Route path="/tickets" element={<MainLayout><Tickets /></MainLayout>} />
          <Route path="/knowledge" element={<MainLayout><KnowledgeBase /></MainLayout>} />
          <Route path="/users" element={<MainLayout><Users /></MainLayout>} />
          <Route path="/connector" element={<MainLayout><Connector /></MainLayout>} />
          <Route path="/connector/servicenow" element={<MainLayout><ServiceNowConnector /></MainLayout>} />
          <Route path="/connector/intune" element={<MainLayout><IntuneConnector /></MainLayout>} />
          <Route path="/connector/manual-upload" element={<MainLayout><ManualUpload /></MainLayout>} />
          <Route path="/settings" element={<MainLayout><Settings /></MainLayout>} />
          <Route path="/audit" element={<MainLayout><Audit /></MainLayout>} />
          <Route path="/inventory" element={<MainLayout><Inventory /></MainLayout>} />
          <Route path="/tracking" element={<MainLayout><div className="text-xl">Asset Tracking Page</div></MainLayout>} />
          <Route path="/wipe" element={<MainLayout><div className="text-xl">Device Wipe Page</div></MainLayout>} />
          <Route path="/lease-return" element={<MainLayout><div className="text-xl">Lease Return Page</div></MainLayout>} />
          <Route path="/disposal" element={<MainLayout><DisposalList /></MainLayout>} />
          <Route path="/procurement" element={<MainLayout><div className="text-xl">Procurement Page</div></MainLayout>} />
          <Route path="/repair" element={<MainLayout><AssetRepairList /></MainLayout>} />
          <Route path="/forecast" element={<MainLayout><div className="text-xl">Future Forecast Page</div></MainLayout>} />
          <Route path="/refresh" element={<MainLayout><div className="text-xl">Asset Refresh Page</div></MainLayout>} />
          <Route path="/lifecycle" element={<MainLayout><div className="text-xl">Device Lifecycle Page</div></MainLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
