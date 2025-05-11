
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Check, Info } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: "Amazon Rainforest Conservation",
    description: "Protecting over 35,000 hectares of pristine Amazon rainforest from deforestation while supporting indigenous communities.",
    location: "Brazil",
    impact: "Prevents 10 million tons of CO₂ emissions over 10 years",
    certifications: ["Gold Standard", "VCS"],
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    price: 15,
    category: "Conservation"
  },
  {
    id: 2,
    name: "Wind Energy Project",
    description: "Large-scale wind farm providing clean electricity to over 100,000 households and displacing fossil fuel-based energy production.",
    location: "India",
    impact: "Reduces 250,000 tons of CO₂ emissions annually",
    certifications: ["VCS", "ICROA"],
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    price: 12,
    category: "Renewable Energy"
  },
  {
    id: 3,
    name: "Reforestation Initiative",
    description: "Restoring degraded land through the planting of native tree species and sustainable forestry practices.",
    location: "Kenya",
    impact: "Sequesters 5,000 tons of CO₂ annually while supporting 200 local jobs",
    certifications: ["Plan Vivo", "FSC"],
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    price: 18,
    category: "Reforestation"
  },
  {
    id: 4,
    name: "Clean Cookstoves Program",
    description: "Distributing fuel-efficient cookstoves to replace traditional cooking methods, reducing indoor air pollution and deforestation.",
    location: "Uganda",
    impact: "Reduces 30,000 tons of CO₂ annually while improving health outcomes for 5,000 families",
    certifications: ["Gold Standard"],
    image: "https://images.unsplash.com/photo-1542601600647-3a722a90378e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    price: 10,
    category: "Community"
  },
  {
    id: 5,
    name: "Methane Capture",
    description: "Capturing methane emissions from landfills and using it to generate clean electricity instead of allowing it to enter the atmosphere.",
    location: "United States",
    impact: "Prevents 75,000 tons of CO₂-equivalent emissions annually",
    certifications: ["VCS", "CAR"],
    image: "https://images.unsplash.com/photo-1611273174871-d89a6b35105f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    price: 14,
    category: "Waste Management"
  },
  {
    id: 6,
    name: "Ocean Blue Carbon Project",
    description: "Restoring and protecting coastal mangrove ecosystems that sequester carbon at rates much higher than terrestrial forests.",
    location: "Indonesia",
    impact: "Sequesters 20,000 tons of CO₂ annually while protecting marine biodiversity",
    certifications: ["Blue Carbon Standard", "VCS"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    price: 20,
    category: "Conservation"
  }
];

const ResourceOffsetting = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Carbon Offsetting</h2>
      
      <Tabs defaultValue="about">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="about">What Are Carbon Offsets?</TabsTrigger>
          <TabsTrigger value="projects">Offset Projects</TabsTrigger>
          <TabsTrigger value="guide">How To Choose</TabsTrigger>
        </TabsList>
        
        <TabsContent value="about">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <Card>
              <CardHeader>
                <CardTitle>Understanding Carbon Offsets</CardTitle>
                <CardDescription>What they are and how they work</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Carbon offsets represent a reduction or removal of greenhouse gases (GHGs) from the atmosphere to compensate for emissions made elsewhere. They are measured in metric tons of carbon dioxide equivalent (CO₂e).
                </p>
                <p className="text-gray-600">
                  When you purchase carbon offsets, you're funding projects that either:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Remove carbon from the atmosphere (like reforestation)</li>
                  <li>Prevent emissions from occurring (like renewable energy)</li>
                  <li>Capture emissions before they enter the atmosphere (like methane capture)</li>
                </ul>
                <p className="text-gray-600">
                  Carbon offsets are certified by independent organizations to verify that the claimed reductions are real, permanent, and additional (wouldn't have happened without the offset funding).
                </p>
                
                <div className="bg-carbon-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-2">The Carbon Offset Process</h3>
                  <ol className="list-decimal list-inside space-y-1 text-gray-600">
                    <li>Project developers implement carbon reduction initiatives</li>
                    <li>Independent bodies verify and certify the emission reductions</li>
                    <li>Offsets are registered and sold on the voluntary carbon market</li>
                    <li>Buyers purchase offsets to compensate for their emissions</li>
                    <li>Offset registry retires credits to prevent double-counting</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Types of Carbon Offset Projects</CardTitle>
                <CardDescription>Different approaches to reducing emissions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Renewable Energy</h3>
                  <p className="text-gray-600">
                    Projects that generate electricity from renewable sources like wind, solar, and hydropower, displacing fossil fuel-based energy production.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Forest Conservation (REDD+)</h3>
                  <p className="text-gray-600">
                    Reducing Emissions from Deforestation and forest Degradation (REDD+) projects that protect existing forests that would otherwise be cleared.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Reforestation & Afforestation</h3>
                  <p className="text-gray-600">
                    Projects that plant new trees or restore degraded forests, sequestering carbon as the trees grow.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Methane Capture</h3>
                  <p className="text-gray-600">
                    Projects that capture methane from landfills, livestock operations, or coal mines, preventing this potent greenhouse gas from entering the atmosphere.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Energy Efficiency</h3>
                  <p className="text-gray-600">
                    Projects that reduce energy consumption through more efficient technologies or practices, like distributing efficient cookstoves or upgrading industrial equipment.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Carbon Capture & Storage (CCS)</h3>
                  <p className="text-gray-600">
                    Emerging technologies that capture CO₂ directly from the atmosphere or point sources and store it permanently underground or in stable forms.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="projects">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col">
                    <div className="relative h-48">
                      <img 
                        src={project.image} 
                        alt={project.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="outline" className="bg-white bg-opacity-90">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{project.name}</CardTitle>
                      <CardDescription>{project.location}</CardDescription>
                    </CardHeader>
                    <CardContent className="py-2 flex-grow">
                      <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                      <div className="text-xs text-gray-500 flex items-center mb-2">
                        <Check className="h-3 w-3 mr-1 text-green-500" />
                        <span>{project.impact}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {project.certifications.map((cert) => (
                          <Badge key={cert} variant="outline" className="text-xs">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                      <div>
                        <span className="font-bold text-lg">${project.price}</span>
                        <span className="text-gray-500 text-sm"> / ton CO₂e</span>
                      </div>
                      <Button size="sm">Offset Now</Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="guide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>How to Choose Quality Carbon Offsets</CardTitle>
                <CardDescription>A guide to making informed offset purchases</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-medium mb-3 flex items-center">
                      <Info className="h-5 w-5 mr-2 text-carbon-600" />
                      Key Criteria
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold">1. Additionality</h4>
                        <p className="text-gray-600">
                          The project should only exist because of carbon offset funding. Ask: Would this emission reduction have happened anyway?
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold">2. Permanence</h4>
                        <p className="text-gray-600">
                          The carbon reductions should be permanent. For example, forests could be cut down later or burn in wildfires.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold">3. Verification</h4>
                        <p className="text-gray-600">
                          Projects should be validated by reputable third-party standards bodies like Gold Standard, Verified Carbon Standard (VCS), or Climate Action Reserve.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold">4. Leakage Prevention</h4>
                        <p className="text-gray-600">
                          Projects should ensure that emissions aren't simply moved elsewhere. For example, protecting one forest shouldn't lead to deforestation in another area.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold">5. Co-benefits</h4>
                        <p className="text-gray-600">
                          The best projects offer additional social and environmental benefits beyond carbon reduction, such as biodiversity protection or community development.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-3">Trusted Certification Standards</h3>
                    
                    <div className="space-y-4">
                      <div className="p-3 border rounded-lg">
                        <h4 className="font-semibold">Gold Standard</h4>
                        <p className="text-sm text-gray-600">
                          Founded by WWF and other NGOs, Gold Standard certifies projects that contribute to sustainable development alongside reducing emissions.
                        </p>
                      </div>
                      
                      <div className="p-3 border rounded-lg">
                        <h4 className="font-semibold">Verified Carbon Standard (VCS)</h4>
                        <p className="text-sm text-gray-600">
                          The world's most widely used voluntary carbon program, managed by Verra, with rigorous methodology and verification requirements.
                        </p>
                      </div>
                      
                      <div className="p-3 border rounded-lg">
                        <h4 className="font-semibold">Climate Action Reserve (CAR)</h4>
                        <p className="text-sm text-gray-600">
                          A North American-focused program that emphasizes conservative accounting and scientific rigor.
                        </p>
                      </div>
                      
                      <div className="p-3 border rounded-lg">
                        <h4 className="font-semibold">American Carbon Registry (ACR)</h4>
                        <p className="text-sm text-gray-600">
                          One of the first private voluntary carbon registries in the world, with a focus on innovation in markets.
                        </p>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-medium mb-3 mt-6">Red Flags to Watch For</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Projects without third-party verification</li>
                      <li>Unusually low prices (under $5 per ton)</li>
                      <li>Vague descriptions of emission reductions</li>
                      <li>No clear information on how offsets are calculated</li>
                      <li>Lack of transparency about project implementation</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-carbon-50 p-6 rounded-lg mt-6">
                  <h3 className="text-xl font-medium mb-3">Our Recommendation</h3>
                  <p className="text-gray-600 mb-4">
                    Remember that offsetting should be the last step in your carbon reduction journey, not the first. Follow this hierarchy:
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-gray-600 mb-4">
                    <li className="font-semibold">Measure your carbon footprint accurately</li>
                    <li className="font-semibold">Reduce emissions wherever possible first</li>
                    <li className="font-semibold">Offset only what you cannot reduce</li>
                  </ol>
                  <p className="text-gray-600">
                    We recommend choosing a portfolio of offset projects across different categories and regions for the greatest impact and risk diversification.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResourceOffsetting;
