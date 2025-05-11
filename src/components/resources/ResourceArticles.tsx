
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { BookOpen, ChevronRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "10 Simple Ways to Reduce Your Carbon Footprint at Home",
    description: "Easy and practical tips to make your home more eco-friendly while saving money on utility bills.",
    category: "Tips",
    readTime: 5,
    image: "https://images.unsplash.com/photo-1534705867302-2a41394d2a3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>Making Your Home More Eco-Friendly</h2>
      <p>Your home is where you have the most control over your environmental impact. Here are ten simple ways to reduce your carbon footprint at home:</p>
      
      <h3>1. Switch to LED Lighting</h3>
      <p>LED bulbs use up to 90% less energy than incandescent bulbs and last much longer. Replacing just five of your home's most frequently used light fixtures with ENERGY STAR-certified LEDs can save you $75 per year.</p>
      
      <h3>2. Adjust Your Thermostat</h3>
      <p>Lowering your thermostat by just 1°C can reduce your heating bill by up to 10%. Consider a programmable thermostat that automatically adjusts temperatures when you're sleeping or away.</p>
      
      <h3>3. Wash Clothes in Cold Water</h3>
      <p>About 90% of the energy used by washing machines goes toward heating the water. Using cold water can significantly reduce your carbon footprint and also keeps your clothes in better condition.</p>
      
      <h3>4. Air-Dry Your Clothes</h3>
      <p>Dryers are energy hogs. When weather permits, hang your clothes outside to dry. Indoor drying racks are a great alternative during colder months.</p>
      
      <h3>5. Seal Air Leaks</h3>
      <p>Check for drafts around windows, doors, and other openings. Sealing these leaks can improve your home's energy efficiency by up to 20%.</p>
      
      <h3>6. Use Water Efficiently</h3>
      <p>Install low-flow faucets and showerheads, fix leaky faucets promptly, and turn off the water when brushing your teeth or shaving. These simple actions can save thousands of gallons of water per year.</p>
      
      <h3>7. Compost Food Waste</h3>
      <p>Food waste in landfills produces methane, a potent greenhouse gas. Composting food scraps creates nutrient-rich soil for your garden instead.</p>
      
      <h3>8. Use Power Strips</h3>
      <p>Even when turned off, electronics plugged into outlets continue to draw power. Connect your devices to power strips that you can turn off when not in use.</p>
      
      <h3>9. Insulate Your Home</h3>
      <p>Proper insulation can reduce heating and cooling needs by up to 20%. Start with the attic, which is typically the easiest and most cost-effective area to insulate.</p>
      
      <h3>10. Choose Sustainable Products</h3>
      <p>When purchasing items for your home, look for products made from sustainable materials, with minimal packaging, and that are built to last.</p>
      
      <p>Implementing these changes may seem small, but collectively they can significantly reduce your home's carbon footprint while saving you money in the long run.</p>
    `
  },
  {
    id: 2,
    title: "Understanding Carbon Offsets: A Comprehensive Guide",
    description: "Learn how carbon offsets work, how to evaluate their effectiveness, and how to incorporate them into your sustainability strategy.",
    category: "Guide",
    readTime: 8,
    image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "The Environmental Impact of Food Choices",
    description: "How your diet affects greenhouse gas emissions and what food choices can help reduce your carbon footprint.",
    category: "Food",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Sustainable Transportation: Beyond Electric Cars",
    description: "Explore various eco-friendly transportation options and their impact on reducing carbon emissions.",
    category: "Transportation",
    readTime: 7,
    image: "https://images.unsplash.com/photo-1556122071-e404cb8f239b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Creating a Zero-Waste Home: Step by Step",
    description: "Practical tips for significantly reducing the waste your household produces without sacrificing convenience.",
    category: "Lifestyle",
    readTime: 10,
    image: "https://images.unsplash.com/photo-1526951521990-620dc14c214b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "The Science of Climate Change Explained",
    description: "A clear explanation of the science behind climate change, common misconceptions, and what the data really shows.",
    category: "Science",
    readTime: 12,
    image: "https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }
];

const ResourceArticles = ({ searchTerm }) => {
  const [activeArticle, setActiveArticle] = useState(null);
  
  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm?.toLowerCase() || '') || 
    article.description.toLowerCase().includes(searchTerm?.toLowerCase() || '') ||
    article.category.toLowerCase().includes(searchTerm?.toLowerCase() || '')
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Eco-friendly Articles & Guides</h2>
      
      {activeArticle && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-lg shadow-sm overflow-hidden"
        >
          <img 
            src={activeArticle.image} 
            alt={activeArticle.title} 
            className="w-full h-64 object-cover"
          />
          
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="bg-gray-100">
                    {activeArticle.category}
                  </Badge>
                  <span className="text-sm text-gray-500">{activeArticle.readTime} min read</span>
                </div>
                <h1 className="text-2xl font-bold">{activeArticle.title}</h1>
              </div>
              <Button variant="ghost" onClick={() => setActiveArticle(null)}>
                Back to articles
              </Button>
            </div>
            
            <div 
              className="prose max-w-none mt-6"
              dangerouslySetInnerHTML={{ __html: activeArticle.content || 'Full content for this article is not available yet.' }}
            />
          </div>
        </motion.div>
      )}
      
      {!activeArticle && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="bg-gray-100">
                      {article.category}
                    </Badge>
                    <span className="text-xs text-gray-500">{article.readTime} min read</span>
                  </div>
                  <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 line-clamp-2">{article.description}</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="ghost" 
                    className="w-full flex justify-between items-center"
                    onClick={() => setActiveArticle(article)}
                  >
                    <div className="flex items-center">
                      <BookOpen className="mr-2 h-4 w-4" />
                      <span>Read article</span>
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
          
          {filteredArticles.length === 0 && (
            <div className="col-span-full text-center py-10">
              <h3 className="text-xl font-medium text-gray-500">No articles match your search</h3>
              <p className="mt-2 text-gray-500">Try searching with different terms</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ResourceArticles;
