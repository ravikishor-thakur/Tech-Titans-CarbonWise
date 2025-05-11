
import React, { useState } from 'react';
import { useLocation, Route, Routes, Link } from 'react-router-dom';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, Video, ArrowRight } from 'lucide-react';
import ResourceVideos from "@/components/resources/ResourceVideos";
import ResourceArticles from "@/components/resources/ResourceArticles";
import ResourceCalculator from "@/components/resources/ResourceCalculator";
import ResourceOffsetting from "@/components/resources/ResourceOffsetting";
import ResourceFAQs from "@/components/resources/ResourceFAQs";

const ResourcesLayout = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const mainResources = [
    { 
      title: "Educational Videos", 
      description: "Learn about climate science, carbon footprints, and sustainable practices through our curated video collection.", 
      icon: Video, 
      path: "/resources/videos",
      color: "bg-blue-500"
    },
    { 
      title: "Eco-friendly Articles & Guides", 
      description: "Discover practical tips and in-depth guides on how to reduce your environmental impact.", 
      icon: BookOpen, 
      path: "/resources/articles",
      color: "bg-green-500"
    },
    { 
      title: "Carbon Calculator", 
      description: "Understand the methodology behind our carbon footprint calculator and how to interpret your results.", 
      icon: Search, 
      path: "/resources/calculator",
      color: "bg-amber-500"
    },
    { 
      title: "Carbon Offsetting", 
      description: "Learn about verified carbon offset projects and how to balance your unavoidable emissions.", 
      icon: ArrowRight, 
      path: "/resources/offsetting",
      color: "bg-purple-500"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold mb-2">Sustainability Resources</h1>
            <p className="text-gray-600">
              Explore our comprehensive collection of resources designed to help you better understand and reduce your carbon footprint.
            </p>
            
            <div className="max-w-md mt-6 relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input 
                className="pl-10" 
                placeholder="Search resources..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </motion.div>
          
          {location.pathname === "/resources" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {mainResources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-full ${resource.color} flex items-center justify-center mb-4`}>
                        <resource.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle>{resource.title}</CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link to={resource.path}>
                          Explore <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
          
          <Routes>
            <Route path="/" element={<ResourceFAQs />} />
            <Route path="/videos" element={<ResourceVideos searchTerm={searchTerm} />} />
            <Route path="/articles" element={<ResourceArticles searchTerm={searchTerm} />} />
            <Route path="/calculator" element={<ResourceCalculator />} />
            <Route path="/offsetting" element={<ResourceOffsetting />} />
            <Route path="/faqs" element={<ResourceFAQs />} />
          </Routes>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ResourcesLayout;
