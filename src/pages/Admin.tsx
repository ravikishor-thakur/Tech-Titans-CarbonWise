
import React, { useState } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart3, TrendingUp, TrendingDown, Award, Search, Download, Users, UserCheck } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";
import { Database } from "@/integrations/supabase/types";

type Profile = Database['public']['Tables']['profiles']['Row'];
type CarbonEntry = Database['public']['Tables']['carbon_entries']['Row'];

const Admin = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("overview");

  
  const { data: users, isLoading: usersLoading } = useQuery({
    queryKey: ['admin-users'],
    queryFn: async () => {
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) throw error;
        return data || [];
      } catch (error) {
        console.error('Error fetching users:', error);
        return [];
      }
    }
  });

  
  const { data: emissions, isLoading: emissionsLoading } = useQuery({
    queryKey: ['admin-emissions'],
    queryFn: async () => {
      try {
        const { data, error } = await supabase
          .from('carbon_entries')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) throw error;
        return data || [];
      } catch (error) {
        console.error('Error fetching emissions:', error);
        return [];
      }
    }
  });

  
  const userData = [
    { name: 'Jan', activeUsers: 400, newUsers: 240 },
    { name: 'Feb', activeUsers: 300, newUsers: 138 },
    { name: 'Mar', activeUsers: 520, newUsers: 250 },
    { name: 'Apr', activeUsers: 480, newUsers: 180 },
    { name: 'May', activeUsers: 550, newUsers: 210 },
    { name: 'Jun', activeUsers: 590, newUsers: 220 },
  ];

  const emissionData = [
    { name: 'Jan', transportation: 2400, housing: 1400, food: 1000, total: 4800 },
    { name: 'Feb', transportation: 1398, housing: 1200, food: 900, total: 3498 },
    { name: 'Mar', transportation: 2400, housing: 1400, food: 1100, total: 4900 },
    { name: 'Apr', transportation: 2780, housing: 1500, food: 1300, total: 5580 },
    { name: 'May', transportation: 1890, housing: 1300, food: 800, total: 3990 },
    { name: 'Jun', transportation: 2390, housing: 1400, food: 1000, total: 4790 },
  ];

  
  const filteredUsers = users?.filter(user => 
    user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email?.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
          <p className="text-gray-600 mb-8">Manage users, view analytics, and monitor platform activity.</p>
          
          <Tabs defaultValue="overview" className="space-y-6" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 md:grid-cols-4 lg:w-[600px]">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="emissions">Emissions</TabsTrigger>
              <TabsTrigger value="challenges">Challenges</TabsTrigger>
            </TabsList>
            
            
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{users?.length || 0}</div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="text-green-500">+16%</span>
                      <span>from last month</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                    <UserCheck className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{Math.round((users?.length || 0) * 0.8)}</div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="text-green-500">+8%</span>
                      <span>from last month</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Avg. Emissions</CardTitle>
                    <TrendingDown className="h-4 w-4 text-green-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,650 kg CO₂e</div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <TrendingDown className="h-4 w-4 text-green-500" />
                      <span className="text-green-500">-8%</span>
                      <span>from last month</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Challenge Participation</CardTitle>
                    <Award className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">65%</div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="text-green-500">+12%</span>
                      <span>from last month</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>User Growth</CardTitle>
                    <CardDescription>Monthly active and new users</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={userData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="activeUsers" fill="#34d399" name="Active Users" />
                          <Bar dataKey="newUsers" fill="#10b981" name="New Users" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Carbon Emissions</CardTitle>
                    <CardDescription>Monthly emissions by category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={emissionData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="total" stroke="#10b981" activeDot={{ r: 8 }} />
                          <Line type="monotone" dataKey="transportation" stroke="#3b82f6" />
                          <Line type="monotone" dataKey="housing" stroke="#f97316" />
                          <Line type="monotone" dataKey="food" stroke="#8b5cf6" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            
            <TabsContent value="users" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                    <div>
                      <CardTitle>User Management</CardTitle>
                      <CardDescription>Manage and monitor user accounts</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                        <Input 
                          placeholder="Search users..." 
                          className="pl-8 w-full md:w-[250px]" 
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" /> Export
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {usersLoading ? (
                    <div className="flex justify-center items-center h-40">Loading users...</div>
                  ) : (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Admin</TableHead>
                          <TableHead>Joined</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredUsers.length > 0 ? (
                          filteredUsers.map((user) => (
                            <TableRow key={user.id}>
                              <TableCell className="font-medium">{user.name || 'N/A'}</TableCell>
                              <TableCell>{user.email || 'N/A'}</TableCell>
                              <TableCell>
                                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                  Active
                                </Badge>
                              </TableCell>
                              <TableCell>{user.is_admin ? 'Yes' : 'No'}</TableCell>
                              <TableCell>{new Date(user.created_at).toLocaleDateString()}</TableCell>
                              <TableCell>
                                <Button variant="ghost" size="sm">Edit</Button>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={6} className="text-center">
                              {searchTerm ? 'No users match your search' : 'No users found'}
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            
            <TabsContent value="emissions" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                    <div>
                      <CardTitle>Emissions Data</CardTitle>
                      <CardDescription>Monitor carbon emissions across users</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" /> Export CSV
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-96">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={emissionData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="total" stroke="#10b981" strokeWidth={2} name="Total Emissions" />
                        <Line type="monotone" dataKey="transportation" stroke="#3b82f6" name="Transportation" />
                        <Line type="monotone" dataKey="housing" stroke="#f97316" name="Housing" />
                        <Line type="monotone" dataKey="food" stroke="#8b5cf6" name="Food" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Recent Emissions Entries</h3>
                    {emissionsLoading ? (
                      <div className="flex justify-center items-center h-40">Loading emissions data...</div>
                    ) : (
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>User</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Transportation</TableHead>
                            <TableHead>Home</TableHead>
                            <TableHead>Food</TableHead>
                            <TableHead>Total</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {emissions && emissions.length > 0 ? (
                            emissions.slice(0, 5).map((entry) => (
                              <TableRow key={entry.id}>
                                <TableCell>{entry.user_id.substring(0, 8)}</TableCell>
                                <TableCell>{new Date(entry.entry_date).toLocaleDateString()}</TableCell>
                                <TableCell>{entry.transportation_emissions.toFixed(2)} kg</TableCell>
                                <TableCell>{entry.home_emissions.toFixed(2)} kg</TableCell>
                                <TableCell>{entry.food_emissions.toFixed(2)} kg</TableCell>
                                <TableCell className="font-semibold">{entry.total_emissions.toFixed(2)} kg</TableCell>
                              </TableRow>
                            ))
                          ) : (
                            <TableRow>
                              <TableCell colSpan={6} className="text-center">No emission entries found</TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            
            <TabsContent value="challenges" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Challenge Management</CardTitle>
                  <CardDescription>Create and manage sustainability challenges</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Active Challenges</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Challenge Name</TableHead>
                          <TableHead>Participants</TableHead>
                          <TableHead>Start Date</TableHead>
                          <TableHead>End Date</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">30-Day Carbon Diet</TableCell>
                          <TableCell>245</TableCell>
                          <TableCell>May 1, 2023</TableCell>
                          <TableCell>May 31, 2023</TableCell>
                          <TableCell>
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">Edit</Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Meatless Monday Challenge</TableCell>
                          <TableCell>189</TableCell>
                          <TableCell>Apr 15, 2023</TableCell>
                          <TableCell>Jul 15, 2023</TableCell>
                          <TableCell>
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">Edit</Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Zero Waste Week</TableCell>
                          <TableCell>124</TableCell>
                          <TableCell>Jun 1, 2023</TableCell>
                          <TableCell>Jun 7, 2023</TableCell>
                          <TableCell>
                            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Upcoming</Badge>
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">Edit</Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Challenge Completion Statistics</h3>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={[
                          { name: 'Jan', completed: 65, abandoned: 35 },
                          { name: 'Feb', completed: 70, abandoned: 30 },
                          { name: 'Mar', completed: 68, abandoned: 32 },
                          { name: 'Apr', completed: 75, abandoned: 25 },
                          { name: 'May', completed: 78, abandoned: 22 },
                        ]} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="completed" fill="#34d399" name="Completed" />
                          <Bar dataKey="abandoned" fill="#f87171" name="Abandoned" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;
