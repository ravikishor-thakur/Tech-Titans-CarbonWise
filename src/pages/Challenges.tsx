
import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DailyChallenge from "@/components/challenges/DailyChallenge";

const Challenges = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Sustainability Challenges</h1>
          <p className="text-gray-600 mb-8">
            Join these challenges to reduce your carbon footprint and earn rewards. 
            Complete challenges to gain points and badges while making a real environmental impact.
          </p>
          <DailyChallenge />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Challenges;
