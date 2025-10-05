
import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CarbonCalculator from "@/components/calculator/CarbonCalculator";
import { useParams, Link } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Calculator = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">Carbon Footprint Calculator</h1>
          <TypeSwitcher />
          <CarbonCalculator type={useParams().type as any} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Calculator;

const TypeSwitcher: React.FC = () => {
  const { type } = useParams();
  const current = type || 'personal';
  return (
    <div className="mb-6 flex justify-center">
      <Tabs defaultValue={current} className="w-full max-w-xl">
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="personal" asChild>
            <Link to="/calculator/personal">Personal</Link>
          </TabsTrigger>
          <TabsTrigger value="household" asChild>
            <Link to="/calculator/household">Household</Link>
          </TabsTrigger>
          <TabsTrigger value="business" asChild>
            <Link to="/calculator/business">Business</Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
