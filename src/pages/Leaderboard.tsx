import React, { useState, useEffect } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from "framer-motion";
import { useAuth } from '@/context/AuthContext';
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";
import { Database } from "@/integrations/supabase/types";


const leaderboardData = [
  { id: 1, name: "Sarah Johnson", rank: 1, emissions: 320, location: "Portland, OR", streak: 42, badges: ["gold", "achiever", "innovator"] },
  { id: 2, name: "Michael Chang", rank: 2, emissions: 410, location: "San Francisco, CA", streak: 36, badges: ["silver", "consistent"] },
  { id: 3, name: "Emily Rodriguez", rank: 3, emissions: 450, location: "Austin, TX", streak: 28, badges: ["bronze", "starter"] },
  { id: 4, name: "David Kim", rank: 4, emissions: 520, location: "Seattle, WA", streak: 21, badges: ["bronze"] },
  { id: 5, name: "Anita Patel", rank: 5, emissions: 540, location: "Chicago, IL", streak: 14, badges: ["bronze", "newcomer"] },
  { id: 6, name: "James Wilson", rank: 6, emissions: 580, location: "Boston, MA", streak: 30, badges: ["silver"] },
  { id: 7, name: "Sophia Martinez", rank: 7, emissions: 620, location: "Miami, FL", streak: 7, badges: ["newcomer"] },
  { id: 8, name: "Daniel Lee", rank: 8, emissions: 650, location: "Denver, CO", streak: 10, badges: ["bronze"] },
  { id: 9, name: "Olivia Brown", rank: 9, emissions: 680, location: "Atlanta, GA", streak: 5, badges: ["newcomer"] },
  { id: 10, name: "William Taylor", rank: 10, emissions: 710, location: "Phoenix, AZ", streak: 3, badges: ["newcomer"] },
];

const globalRankingData = [
  { country: "United States", emissions: 14.7, color: "#34d399" },
  { country: "Australia", emissions: 15.4, color: "#10b981" },
  { country: "Canada", emissions: 15.5, color: "#059669" },
  { country: "Russia", emissions: 11.4, color: "#047857" },
  { country: "Japan", emissions: 8.7, color: "#065f46" },
  { country: "China", emissions: 7.4, color: "#064e3b" },
  { country: "UK", emissions: 5.6, color: "#022c22" },
  { country: "France", emissions: 5.0, color: "#3b82f6" },
  { country: "India", emissions: 1.9, color: "#2563eb" },
  { country: "Kenya", emissions: 0.3, color: "#1d4ed8" },
];


const badgeColors = {
  gold: "bg-yellow-400 text-yellow-800",
  silver: "bg-gray-300 text-gray-800",
  bronze: "bg-amber-600 text-amber-100",
  achiever: "bg-purple-400 text-purple-800",
  consistent: "bg-blue-400 text-blue-800",
  starter: "bg-green-400 text-green-800",
  innovator: "bg-pink-400 text-pink-800",
  newcomer: "bg-teal-400 text-teal-800",
};

type Streak = Database['public']['Tables']['streaks']['Row'];

const Leaderboard = () => {
  const [radius, setRadius] = useState('5');
  const [searchTerm, setSearchTerm] = useState('');
  const { user } = useAuth();
  
  
  const { data: userStreak } = useQuery({
    queryKey: ['user-streak', user?.id],
    queryFn: async () => {
      if (!user?.id) return null;
      
      try {
        const { data, error } = await supabase
          .from('streaks')
          .select('*')
          .eq('user_id', user.id)
          .single();
          
        if (error) throw error;
        return data;
      } catch (error) {
        console.error('Error fetching streak:', error);
        return null;
      }
    },
    enabled: !!user?.id
  });
  
  
  const filteredData = leaderboardData.filter(entry => 
    entry.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    entry.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  const currentUserRank = leaderboardData.find(entry => entry.name === "Sarah Johnson");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold mb-2">Carbon Footprint Leaderboard</h1>
            <p className="text-gray-600 mb-8">
              See how your carbon reduction efforts compare to others in your area and across the globe.
            </p>
          </motion.div>
          
          <Tabs defaultValue="local">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="local">Local Ranking</TabsTrigger>
              <TabsTrigger value="national">National Ranking</TabsTrigger>
              <TabsTrigger value="global">Global Stats</TabsTrigger>
            </TabsList>
            
            
            <TabsContent value="local">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle>Local Rankings</CardTitle>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                          <span className="text-sm text-gray-500">Within</span>
                        </div>
                        <Select value={radius} onValueChange={setRadius}>
                          <SelectTrigger className="w-[90px]">
                            <SelectValue placeholder="5 km" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2">2 km</SelectItem>
                            <SelectItem value="5">5 km</SelectItem>
                            <SelectItem value="10">10 km</SelectItem>
                            <SelectItem value="25">25 km</SelectItem>
                            <SelectItem value="50">50 km</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex mb-4 relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                        <Input 
                          placeholder="Search by name or location..." 
                          className="pl-8" 
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                      
                      <div className="rounded-md border">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Rank</TableHead>
                              <TableHead>User</TableHead>
                              <TableHead>Location</TableHead>
                              <TableHead>Carbon (kg)</TableHead>
                              <TableHead>Streak</TableHead>
                              <TableHead>Badges</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {filteredData.length > 0 ? (
                              filteredData.map((entry) => (
                                <TableRow key={entry.id} className={entry.name === "Sarah Johnson" ? "bg-green-50" : ""}>
                                  <TableCell className="font-medium">#{entry.rank}</TableCell>
                                  <TableCell>
                                    <div className="flex items-center space-x-2">
                                      <Avatar className="h-8 w-8">
                                        <AvatarFallback>{entry.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                      </Avatar>
                                      <span>{entry.name}</span>
                                      {entry.name === "Sarah Johnson" && (
                                        <Badge className="bg-carbon-100 text-carbon-800 ml-2">You</Badge>
                                      )}
                                    </div>
                                  </TableCell>
                                  <TableCell>{entry.location}</TableCell>
                                  <TableCell>{entry.emissions} kg</TableCell>
                                  <TableCell>
                                    <div className="flex items-center">
                                      <span className="font-medium mr-1">{entry.streak}</span> days
                                    </div>
                                  </TableCell>
                                  <TableCell>
                                    <div className="flex gap-1 flex-wrap">
                                      {entry.badges.map((badge, i) => (
                                        <Badge key={i} className={badgeColors[badge] || "bg-gray-200"}>
                                          {badge}
                                        </Badge>
                                      ))}
                                    </div>
                                  </TableCell>
                                </TableRow>
                              ))
                            ) : (
                              <TableRow>
                                <TableCell colSpan={6} className="text-center py-4">
                                  No results found
                                </TableCell>
                              </TableRow>
                            )}
                          </TableBody>
                        </Table>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Ranking</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {currentUserRank && (
                        <div className="space-y-6">
                          <div className="flex items-center">
                            <Avatar className="h-16 w-16 mr-4">
                              <AvatarFallback className="text-xl">SJ</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-semibold text-lg">{currentUserRank.name}</div>
                              <div className="text-gray-500">{currentUserRank.location}</div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-carbon-50 p-4 rounded-lg text-center">
                              <div className="text-4xl font-bold text-carbon-600">#{currentUserRank.rank}</div>
                              <div className="text-sm text-gray-600">Local Rank</div>
                            </div>
                            <div className="bg-carbon-50 p-4 rounded-lg text-center">
                              <div className="text-4xl font-bold text-carbon-600">{currentUserRank.emissions}</div>
                              <div className="text-sm text-gray-600">kg CO₂</div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="font-medium mb-2">Current Streak</div>
                            <div className="bg-gradient-to-r from-carbon-600 to-carbon-400 text-white rounded-lg p-4 flex items-center justify-between">
                              <div>
                                <div className="text-3xl font-bold">{currentUserRank.streak}</div>
                                <div className="text-carbon-50">days</div>
                              </div>
                              <div className="text-5xl">🔥</div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="font-medium mb-2">Badges Earned</div>
                            <div className="flex flex-wrap gap-2">
                              {currentUserRank.badges.map((badge, index) => (
                                <motion.div 
                                  key={index}
                                  className={`px-3 py-2 rounded-full font-medium ${badgeColors[badge] || "bg-gray-200"}`}
                                  whileHover={{ scale: 1.05 }}
                                >
                                  {badge}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                          
                          <Button className="w-full bg-carbon-500 hover:bg-carbon-600">
                            Share Your Progress
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            
            <TabsContent value="national">
              <Card>
                <CardHeader>
                  <CardTitle>National Rankings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-96 mb-6">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart 
                        layout="vertical" 
                        data={[
                          { state: "Vermont", emissions: 8.2 },
                          { state: "California", emissions: 9.0 },
                          { state: "New York", emissions: 9.3 },
                          { state: "Oregon", emissions: 10.2 },
                          { state: "Washington", emissions: 10.8 },
                          { state: "Massachusetts", emissions: 11.1 },
                          { state: "Colorado", emissions: 12.3 },
                          { state: "Florida", emissions: 12.8 },
                          { state: "Texas", emissions: 14.9 },
                          { state: "Wyoming", emissions: 18.5 },
                        ]} 
                        margin={{ top: 20, right: 30, left: 90, bottom: 10 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <YAxis dataKey="state" type="category" tick={{ fontSize: 14 }} />
                        <XAxis type="number" domain={[0, 20]} tick={{ fontSize: 12 }} />
                        <Tooltip formatter={(value) => [`${value} tons CO₂e`, 'Emissions']} />
                        <Bar dataKey="emissions" fill="#10b981" radius={[0, 4, 4, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {["Transportation", "Housing", "Food"].map((category, idx) => (
                      <Card key={idx}>
                        <CardHeader className="py-4">
                          <CardTitle className="text-base">{category} Emissions</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-2xl font-bold">
                                {idx === 0 ? "5.4" : idx === 1 ? "3.7" : "2.1"} tons CO₂e
                              </div>
                              <div className="text-sm text-gray-500">National average</div>
                            </div>
                            <div className="text-sm font-medium flex items-center gap-1">
                              <div className={idx === 0 ? "text-red-500" : "text-green-500"}>
                                {idx === 0 ? "+12%" : "-8%"}
                              </div>
                              <div>vs. last year</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            
            <TabsContent value="global">
              <div className="grid grid-cols-1 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Global Carbon Emissions</CardTitle>
                      <p className="text-sm text-gray-500">Per capita emissions (tons CO₂e)</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-96">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          layout="vertical"
                          data={globalRankingData}
                          margin={{ top: 20, right: 30, left: 90, bottom: 10 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <YAxis dataKey="country" type="category" tick={{ fontSize: 14 }} />
                          <XAxis type="number" domain={[0, 20]} tick={{ fontSize: 12 }} />
                          <Tooltip formatter={(value) => [`${value} tons CO₂e`, 'Emissions']} />
                          <Bar dataKey="emissions" radius={[0, 4, 4, 0]}>
                            {globalRankingData.map((entry, index) => (
                              <rect key={`rect-${index}`} fill={entry.color} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    
                    <div className="mt-8">
                      <h3 className="text-lg font-semibold mb-4">Emissions Trends Over Time</h3>
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={[
                              { year: '2000', china: 3.1, us: 20.2, india: 0.9, eu: 8.5 },
                              { year: '2005', china: 5.2, us: 19.8, india: 1.1, eu: 8.4 },
                              { year: '2010', china: 6.6, us: 17.5, india: 1.4, eu: 7.9 },
                              { year: '2015', china: 7.0, us: 16.0, india: 1.7, eu: 6.7 },
                              { year: '2020', china: 7.4, us: 14.7, india: 1.9, eu: 5.9 },
                            ]}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="china" name="China" fill="#10b981" />
                            <Bar dataKey="us" name="United States" fill="#3b82f6" />
                            <Bar dataKey="india" name="India" fill="#f97316" />
                            <Bar dataKey="eu" name="European Union" fill="#8b5cf6" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Leaderboard;
