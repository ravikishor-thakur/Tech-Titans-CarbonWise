
import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import UserDashboard from "@/components/dashboard/UserDashboard";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Your Carbon Dashboard</h1>
          <UserDashboard />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
