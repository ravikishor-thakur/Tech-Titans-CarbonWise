
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const ResourceCalculator = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Understanding Our Carbon Calculator</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Carbon Footprint Calculation Methodology</CardTitle>
              <CardDescription>How we calculate your carbon footprint and the science behind it</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p>
                  Our carbon footprint calculator uses scientifically validated methodologies to estimate your greenhouse gas emissions. We follow standards set by organizations like the Greenhouse Gas Protocol and the Intergovernmental Panel on Climate Change (IPCC).
                </p>
                
                <h3 className="text-xl font-semibold">Calculation Framework</h3>
                <p>
                  The calculation framework is based on the consumption-based accounting approach, which considers both direct emissions (e.g., from your car) and indirect emissions (e.g., from the production of goods you consume).
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Transportation Emissions</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">For personal vehicles, we use the formula:</p>
                      <p className="font-medium mb-2">CO₂e = Distance × Fuel Efficiency × Emission Factor</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Distance: Miles or kilometers traveled</li>
                        <li>Fuel Efficiency: Gallons per mile or liters per kilometer</li>
                        <li>Emission Factor: CO₂e per gallon or liter of fuel type</li>
                      </ul>
                      <p className="mt-2">For public transportation and flights, we use average emissions per passenger-mile/kilometer based on published data from transportation agencies and the airline industry.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Home Energy Emissions</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">For electricity usage:</p>
                      <p className="font-medium mb-2">CO₂e = kWh × Grid Emission Factor</p>
                      <p className="mb-2">The Grid Emission Factor varies by location based on the local energy mix (renewable vs. fossil fuels).</p>
                      
                      <p className="mb-2">For natural gas, heating oil, and other fuels:</p>
                      <p className="font-medium mb-2">CO₂e = Fuel Volume × Fuel-Specific Emission Factor</p>
                      <p>We adjust for household size and regional climate differences to provide more accurate estimates.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Food and Diet Emissions</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">Food emissions are calculated based on dietary choices and consumption patterns:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Meat-intensive diets: ~3.3 tons CO₂e per person annually</li>
                        <li>Average omnivorous diet: ~2.5 tons CO₂e per person annually</li>
                        <li>Vegetarian diet: ~1.7 tons CO₂e per person annually</li>
                        <li>Vegan diet: ~1.5 tons CO₂e per person annually</li>
                      </ul>
                      <p className="mt-2">
                        These estimates include emissions from production, processing, transportation, and waste. Food waste adjustments are applied based on reported behavior.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Goods and Services</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">For goods and services, we use an Economic Input-Output Life Cycle Assessment (EIO-LCA) approach:</p>
                      <p className="font-medium mb-2">CO₂e = Expenditure × Emission Factor per Dollar/Euro</p>
                      <p className="mb-2">Different categories of goods and services have different emission intensities:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Clothing and footwear: ~0.5 kg CO₂e per dollar</li>
                        <li>Electronics: ~0.7 kg CO₂e per dollar</li>
                        <li>Healthcare: ~0.3 kg CO₂e per dollar</li>
                        <li>Recreation and culture: ~0.4 kg CO₂e per dollar</li>
                      </ul>
                      <p className="mt-2">
                        These factors are regularly updated based on the latest research and economic data.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <h3 className="text-xl font-semibold mt-8">Data Sources</h3>
                <p>
                  Our calculator uses emissions factors and data from reputable sources including:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 mt-2">
                  <li>EPA Emission Factors Hub</li>
                  <li>IPCC Assessment Reports</li>
                  <li>UK Department for Environment, Food and Rural Affairs (DEFRA)</li>
                  <li>Ecoinvent Database</li>
                  <li>Peer-reviewed academic research</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-8">Uncertainty and Limitations</h3>
                <p>
                  While we strive for accuracy, carbon footprint calculations involve inherent uncertainties:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 mt-2">
                  <li>Self-reported behavior may differ from actual behavior</li>
                  <li>Emissions factors are averages and may not perfectly represent your specific situation</li>
                  <li>Some emissions sources may be omitted due to data limitations</li>
                  <li>Regional variations in emissions intensities may affect accuracy</li>
                </ul>
                <p className="mt-2">
                  We continuously work to improve our methodology and incorporate the latest research to provide the most accurate estimates possible.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Interpreting Your Results</CardTitle>
              <CardDescription>Understanding what your carbon footprint score means</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">What is a good score?</h3>
                <p className="text-gray-600">
                  The global average carbon footprint is approximately 4-5 tons CO₂e per person annually. However, to avoid the worst effects of climate change, scientists recommend that by 2050, we need to reduce this to less than 2 tons per person.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Common Benchmarks</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <div>
                      <p className="font-medium">Less than 2 tons</p>
                      <p className="text-sm text-gray-600">Sustainable level</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div>
                      <p className="font-medium">2-5 tons</p>
                      <p className="text-sm text-gray-600">Below global average</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
                    <div>
                      <p className="font-medium">5-10 tons</p>
                      <p className="text-sm text-gray-600">Above global average</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div>
                      <p className="font-medium">More than 10 tons</p>
                      <p className="text-sm text-gray-600">High carbon footprint</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Next Steps</h3>
                <p className="text-gray-600 mb-3">
                  After calculating your footprint, we recommend:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Identifying your highest emission categories</li>
                  <li>Setting specific reduction targets</li>
                  <li>Following our personalized recommendations</li>
                  <li>Tracking your progress over time</li>
                  <li>Considering carbon offsets for emissions you can't eliminate</li>
                </ul>
              </div>
              
              <div className="bg-carbon-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Regular Updates</h3>
                <p className="text-gray-600">
                  We recommend recalculating your footprint every 3-6 months to track your progress and adjust your reduction strategies.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ResourceCalculator;
