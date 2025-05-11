import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TestimonialSection from "@/components/sections/TestimonialSection";
import { ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";
const Index = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        
        <section className="bg-gradient-to-b from-carbon-50 to-white py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div className="lg:w-1/2" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                  Measure & reduce <span className="text-carbon-600">your carbon footprint</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-md">
                  CarbonWise helps you track your daily emissions, set reduction
                  goals, and make sustainable choices. Join our community of eco-
                  conscious individuals making a positive impact on our planet.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Button asChild className="bg-carbon-500 hover:bg-carbon-600 flex items-center gap-2">
                    <Link to="/calculator">
                      Start calculating <ArrowRight size={16} />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/about">Learn more</Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div className="lg:w-1/2" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              duration: 0.8,
              delay: 0.3
            }}>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-carbon-50/50 to-carbon-100/50 rounded-xl"></div>
                  <div className="relative p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-carbon-600">8.4 tons</div>
                      <div className="mt-2 text-sm text-carbon-700">Average Annual CO₂ per person</div>
                      
                      <div className="mt-8 w-64 h-64 bg-carbon-500 rounded-full mx-auto flex items-center justify-center">
                        <div className="w-56 h-56 bg-carbon-600 rounded-full flex items-center justify-center">
                          <div className="text-white text-xl font-medium">
                            Your impact matters
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        
        <section className="bg-carbon-600 py-16 lg:hidden">
          <div className="container mx-auto px-4">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="text-center text-white">
              <h2 className="text-3xl font-bold mb-6">Ready to reduce your carbon footprint?</h2>
              <p className="mb-8 max-w-2xl mx-auto">
                Join thousands of individuals and businesses using CarbonWise to track, reduce, and offset 
                their carbon emissions.
              </p>
              <div className="mb-8">
                <div className="text-4xl font-bold">1.2M+</div>
                <div className="text-sm opacity-90">tons of CO₂ saved by our community</div>
              </div>
              <Button asChild size="lg" className="bg-white text-carbon-600 hover:bg-gray-100">
                <Link to="/signup">Get started for free</Link>
              </Button>
            </motion.div>
          </div>
        </section>
        
        
        <section className="hidden lg:block bg-carbon-600 py-16">
          <div className="container mx-auto px-4">
            <motion.div initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }} className="flex items-center">
              <div className="flex-1 text-white pr-12">
                <h2 className="text-4xl font-bold mb-6">Ready to reduce your carbon footprint?</h2>
                <p className="mb-6 text-lg">
                  Join thousands of individuals and businesses using CarbonWise to track, reduce, and offset 
                  their carbon emissions.
                </p>
                <div className="flex gap-4 mt-8">
                  <Button asChild size="lg" className="bg-white text-carbon-600 hover:bg-gray-100">
                    <Link to="/signup">Get started for free</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-white text-white hover:bg-carbon-700">
                    
                  </Button>
                </div>
              </div>
              <div className="text-white text-right">
                <div className="text-6xl font-bold">1.2M+</div>
                <div className="text-xl">tons of CO₂ saved by our community</div>
              </div>
            </motion.div>
          </div>
        </section>
        
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-12" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="text-3xl font-bold">Why Choose CarbonWise?</h2>
              <p className="mt-4 text-lg text-gray-600">
                Our platform offers everything you need to understand and reduce your carbon footprint
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[{
              title: "Accurate Tracking",
              description: "Track your carbon emissions across transportation, home energy, food, and more with our comprehensive calculator.",
              icon: "chart-bar"
            }, {
              title: "Personalized Insights",
              description: "Get AI-powered recommendations tailored to your lifestyle to help you reduce your carbon footprint effectively.",
              icon: "light-bulb"
            }, {
              title: "Community Challenges",
              description: "Join challenges with others to make a bigger impact together. Compete, learn, and celebrate sustainability wins.",
              icon: "users"
            }].map((feature, index) => <motion.div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }}>
                  <div className="bg-carbon-100 h-12 w-12 flex items-center justify-center rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-carbon-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>)}
            </div>
          </div>
        </section>
        
        
        <TestimonialSection />
        
        
        <section className="bg-carbon-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="text-3xl font-bold mb-4">Ready to Reduce Your Carbon Footprint?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of individuals and businesses taking action against climate change with CarbonWise
              </p>
              <Button asChild size="lg" className="bg-white text-carbon-600 hover:bg-gray-100">
                <Link to="/signup">Get Started Now</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default Index;