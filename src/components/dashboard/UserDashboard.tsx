
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, ArrowDownRight, ArrowUpRight, Calendar, Award } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Dummy data for the carbon emissions chart
const emissionsData = [
  { name: 'Jan', emissions: 450 },
  { name: 'Feb', emissions: 420 },
  { name: 'Mar', emissions: 410 },
  { name: 'Apr', emissions: 390 },
  { name: 'May', emissions: 380 },
  { name: 'Jun', emissions: 350 },
  { name: 'Jul', emissions: 330 },
];

export default function UserDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Carbon Footprint Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Carbon Footprint</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,450 kg CO₂e</div>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <ArrowDownRight className="h-4 w-4 text-green-500" />
              <span className="text-green-500">-12%</span>
              <span>from last month</span>
            </div>
            <div className="mt-4">
              <Progress value={68} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">68% of yearly target</p>
            </div>
          </CardContent>
        </Card>

        {/* Transportation Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Transportation</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">980 kg CO₂e</div>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <ArrowUpRight className="h-4 w-4 text-destructive" />
              <span className="text-destructive">+3%</span>
              <span>from last month</span>
            </div>
            <div className="mt-4">
              <Progress value={40} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">40% of your total emissions</p>
            </div>
          </CardContent>
        </Card>

        {/* Electricity Usage Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Electricity Usage</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">720 kg CO₂e</div>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <ArrowDownRight className="h-4 w-4 text-green-500" />
              <span className="text-green-500">-8%</span>
              <span>from last month</span>
            </div>
            <div className="mt-4">
              <Progress value={30} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">30% of your total emissions</p>
            </div>
          </CardContent>
        </Card>

        {/* Challenges Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Challenges Completed</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12 challenges</div>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Current streak: 5 days</span>
            </div>
            <div className="mt-4">
              <Progress value={60} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">60% to next badge</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Emissions Over Time Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Carbon Emissions Over Time</CardTitle>
          <CardDescription>Your monthly carbon footprint in kg CO₂e</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={emissionsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="emissions" 
                  stroke="#34d399" 
                  activeDot={{ r: 8 }} 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Recommendations Section */}
      <Card>
        <CardHeader>
          <CardTitle>Personalized Recommendations</CardTitle>
          <CardDescription>Based on your usage patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 bg-carbon-50 rounded-md">
              <div className="bg-carbon-100 p-2 rounded-full">
                <Calendar className="h-5 w-5 text-carbon-600" />
              </div>
              <div>
                <h4 className="font-medium">Try carpooling to work</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Carpooling twice a week could reduce your transportation emissions by up to 20%.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 bg-carbon-50 rounded-md">
              <div className="bg-carbon-100 p-2 rounded-full">
                <Calendar className="h-5 w-5 text-carbon-600" />
              </div>
              <div>
                <h4 className="font-medium">Switch to LED bulbs</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Replacing your five most used light bulbs with energy-efficient LEDs can save about 150 kg of CO₂e annually.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
