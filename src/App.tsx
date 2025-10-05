
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Calculator from "./pages/Calculator";
import Challenges from "./pages/Challenges";
import Login from "./pages/Login";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Leaderboard from "./pages/Leaderboard";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute, AdminRoute } from "./components/auth/ProtectedRoute";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Navigate to="/login#register" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/resources/*" element={<Resources />} />
            
            
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/calculator/:type" element={<Calculator />} />
              <Route path="/challenges" element={<Challenges />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
            </Route>
            
            
            <Route element={<AdminRoute />}>
              <Route path="/admin" element={<Admin />} />
            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Routes>
          
          
          <Toaster />
          <Sonner />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
