
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";

// Layouts
import AppLayout from "@/components/layout/AppLayout";

// Pages
import Dashboard from "@/pages/Dashboard";
import Employees from "@/pages/Employees";
import InternetLines from "@/pages/InternetLines";
import Support from "@/pages/Support";
import Login from "@/pages/Login";
import Unauthorized from "@/pages/Unauthorized";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            
            {/* Protected routes for all authenticated users */}
            <Route element={<AppLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/internet-lines" element={<InternetLines />} />
              <Route path="/support" element={<Support />} />
            </Route>
            
            {/* Admin-only routes */}
            <Route element={<AppLayout requiredRoles={['admin']} />}>
              <Route path="/settings" element={<div className="p-4">Settings Page (Admin Only)</div>} />
            </Route>
            
            {/* Redirect from index to dashboard or login */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
