
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

type EmissionCategory = {
  name: string;
  value: number;
  color: string;
};

export default function CarbonCalculator() {
  const [result, setResult] = useState<EmissionCategory[]>([
    { name: 'Transportation', value: 0, color: '#34d399' },
    { name: 'Home Energy', value: 0, color: '#10b981' },
    { name: 'Food', value: 0, color: '#059669' },
    { name: 'Consumption', value: 0, color: '#047857' },
  ]);
  
  const [totalEmissions, setTotalEmissions] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const [transportation, setTransportation] = useState({
    carDistance: 0,
    carEfficiency: 'medium', 
    publicTransport: 0,
    flights: 0,
  });

  const [homeEnergy, setHomeEnergy] = useState({
    electricityUsage: 0,
    gasUsage: 0,
    renewablePercentage: 0,
  });

  const [food, setFood] = useState({
    dietType: 'mixed', 
    localFoodPercentage: 50,
    wastePercentage: 20,
  });


  const calculateEmissions = () => {
   
    
    const carEmissions = transportation.carDistance * 
                        (transportation.carEfficiency === 'low' ? 0.3 : 
                         transportation.carEfficiency === 'medium' ? 0.2 : 0.1);
    const publicTransportEmissions = transportation.publicTransport * 0.1;
    const flightEmissions = transportation.flights * 200; 
    
    const totalTransportation = carEmissions + publicTransportEmissions + flightEmissions;
    
  
    const electricityEmissions = homeEnergy.electricityUsage * 0.5 * (1 - (homeEnergy.renewablePercentage / 100));
    const gasEmissions = homeEnergy.gasUsage * 0.2;
    
    const totalHomeEnergy = electricityEmissions + gasEmissions;
    
    
    const dietFactor = food.dietType === 'vegan' ? 1.5 : 
                      food.dietType === 'vegetarian' ? 2.5 : 
                      food.dietType === 'mixed' ? 3.5 : 5;
    
    const localFoodReduction = food.localFoodPercentage / 100 * 0.5;
    const wasteFactor = food.wastePercentage / 100 * 0.8;
    
    const totalFood = dietFactor * (1 - localFoodReduction) * (1 + wasteFactor);

    const totalConsumption = 500;

    setResult([
      { name: 'Transportation', value: Math.round(totalTransportation), color: '#34d399' },
      { name: 'Home Energy', value: Math.round(totalHomeEnergy), color: '#10b981' },
      { name: 'Food', value: Math.round(totalFood), color: '#059669' },
      { name: 'Consumption', value: Math.round(totalConsumption), color: '#047857' },
    ]);
    
    setTotalEmissions(Math.round(totalTransportation + totalHomeEnergy + totalFood + totalConsumption));
    setShowResults(true);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Carbon Footprint Calculator</CardTitle>
          <CardDescription>
            Calculate your estimated annual carbon emissions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="transportation">
            <TabsList className="grid grid-cols-4">
              <TabsTrigger value="transportation">Transportation</TabsTrigger>
              <TabsTrigger value="energy">Home Energy</TabsTrigger>
              <TabsTrigger value="food">Food</TabsTrigger>
              <TabsTrigger value="results">Results</TabsTrigger>
            </TabsList>
            
            <TabsContent value="transportation" className="space-y-6 py-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="carDistance">Car - Weekly Distance (km)</Label>
                  <Input 
                    id="carDistance" 
                    type="number" 
                    placeholder="0" 
                    min="0"
                    value={transportation.carDistance || ''}
                    onChange={e => setTransportation({...transportation, carDistance: Number(e.target.value)})}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="carEfficiency">Car Fuel Efficiency</Label>
                  <Select 
                    value={transportation.carEfficiency} 
                    onValueChange={value => setTransportation({...transportation, carEfficiency: value})}
                  >
                    <SelectTrigger id="carEfficiency" className="mt-1">
                      <SelectValue placeholder="Select efficiency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low (SUV, Old Vehicle)</SelectItem>
                      <SelectItem value="medium">Medium (Average Car)</SelectItem>
                      <SelectItem value="high">High (Hybrid, Electric)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="publicTransport">Public Transport - Weekly Distance (km)</Label>
                  <Input 
                    id="publicTransport" 
                    type="number" 
                    placeholder="0" 
                    min="0"
                    value={transportation.publicTransport || ''}
                    onChange={e => setTransportation({...transportation, publicTransport: Number(e.target.value)})}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="flights">Number of Flights per Year</Label>
                  <Input 
                    id="flights" 
                    type="number" 
                    placeholder="0" 
                    min="0"
                    value={transportation.flights || ''}
                    onChange={e => setTransportation({...transportation, flights: Number(e.target.value)})}
                    className="mt-1"
                  />
                </div>
                
                <Button onClick={() => document.getElementById('energy-tab')?.click()} className="w-full mt-4 bg-carbon-500 hover:bg-carbon-600">
                  Next: Home Energy
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="energy" className="space-y-6 py-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="electricity">Monthly Electricity Usage (kWh)</Label>
                  <Input 
                    id="electricity" 
                    type="number" 
                    placeholder="0" 
                    min="0"
                    value={homeEnergy.electricityUsage || ''}
                    onChange={e => setHomeEnergy({...homeEnergy, electricityUsage: Number(e.target.value)})}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="gas">Monthly Gas Usage (m³)</Label>
                  <Input 
                    id="gas" 
                    type="number" 
                    placeholder="0" 
                    min="0"
                    value={homeEnergy.gasUsage || ''}
                    onChange={e => setHomeEnergy({...homeEnergy, gasUsage: Number(e.target.value)})}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="renewable">Renewable Energy Percentage: {homeEnergy.renewablePercentage}%</Label>
                  <Slider
                    id="renewable"
                    min={0}
                    max={100}
                    step={1}
                    value={[homeEnergy.renewablePercentage]}
                    onValueChange={([value]) => setHomeEnergy({...homeEnergy, renewablePercentage: value})}
                    className="mt-2"
                  />
                </div>
                
                <div className="flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={() => document.getElementById('transportation-tab')?.click()}
                    className="mt-4"
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={() => document.getElementById('food-tab')?.click()} 
                    className="mt-4 bg-carbon-500 hover:bg-carbon-600"
                  >
                    Next: Food
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="food" className="space-y-6 py-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="dietType">Diet Type</Label>
                  <Select 
                    value={food.dietType} 
                    onValueChange={value => setFood({...food, dietType: value})}
                  >
                    <SelectTrigger id="dietType" className="mt-1">
                      <SelectValue placeholder="Select diet type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vegan">Vegan</SelectItem>
                      <SelectItem value="vegetarian">Vegetarian</SelectItem>
                      <SelectItem value="mixed">Mixed / Flexitarian</SelectItem>
                      <SelectItem value="high-meat">High Meat Consumption</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="localFood">Local Food Percentage: {food.localFoodPercentage}%</Label>
                  <Slider
                    id="localFood"
                    min={0}
                    max={100}
                    step={5}
                    value={[food.localFoodPercentage]}
                    onValueChange={([value]) => setFood({...food, localFoodPercentage: value})}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="foodWaste">Food Waste Percentage: {food.wastePercentage}%</Label>
                  <Slider
                    id="foodWaste"
                    min={0}
                    max={50}
                    step={5}
                    value={[food.wastePercentage]}
                    onValueChange={([value]) => setFood({...food, wastePercentage: value})}
                    className="mt-2"
                  />
                </div>
                
                <div className="flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={() => document.getElementById('energy-tab')?.click()}
                    className="mt-4"
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={() => {
                      calculateEmissions();
                      document.getElementById('results-tab')?.click();
                    }} 
                    className="mt-4 bg-carbon-500 hover:bg-carbon-600"
                  >
                    Calculate Results
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="results" className="py-4">
              {showResults ? (
                <div>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-semibold">Your Estimated Carbon Footprint</h3>
                    <p className="text-4xl font-bold text-carbon-600 mt-2">{totalEmissions} kg CO₂e</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      The global average is approximately 4,000 kg CO₂e per person per year
                    </p>
                  </div>
                  
                  <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={result}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {result.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => `${value} kg CO₂e`} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="mt-8 bg-carbon-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Next Steps to Reduce Your Carbon Footprint</h4>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Consider reducing car travel by carpooling or using public transport</li>
                      <li>Switch to renewable energy for your home electricity needs</li>
                      <li>Try incorporating more plant-based meals into your diet</li>
                      <li>Reduce food waste by planning meals and composting</li>
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <Button 
                      onClick={() => document.getElementById('transportation-tab')?.click()}
                      variant="outline"
                      className="w-full"
                    >
                      Recalculate
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-10">
                  <p className="text-muted-foreground">
                    Please fill in the previous sections to calculate your carbon footprint
                  </p>
                  <Button 
                    onClick={() => document.getElementById('transportation-tab')?.click()}
                    variant="outline"
                    className="mt-4"
                  >
                    Start Calculation
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
