
import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CarbonCalculator from "@/components/calculator/CarbonCalculator";

const Calculator = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">Carbon Footprint Calculator</h1>
          <CarbonCalculator />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Calculator;
