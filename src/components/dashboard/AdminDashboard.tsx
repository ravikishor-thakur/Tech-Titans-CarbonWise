
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, TrendingDown, Award } from 'lucide-react';


const userData = [
  { name: 'Jan', activeUsers: 400, newUsers: 240 },
  { name: 'Feb', activeUsers: 300, newUsers: 138 },
  { name: 'Mar', activeUsers: 520, newUsers: 250 },
  { name: 'Apr', activeUsers: 480, newUsers: 180 },
  { name: 'May', activeUsers: 550, newUsers: 210 },
  { name: 'Jun', activeUsers: 590, newUsers: 220 },
];

const users = [
  { id: 1, name: 'Alex Johnson', email: 'alex@example.com', status: 'Active', emissions: '1,250 kg', joined: '2023-01-15' },
  { id: 2, name: 'Samantha Lee', email: 'samantha@example.com', status: 'Active', emissions: '980 kg', joined: '2023-02-28' },
  { id: 3, name: 'Michael Brown', email: 'michael@example.com', status: 'Inactive', emissions: '2,100 kg', joined: '2023-03-10' },
  { id: 4, name: 'Emma Wilson', email: 'emma@example.com', status: 'Active', emissions: '1,540 kg', joined: '2023-04-05' },
  { id: 5, name: 'James Davis', email: 'james@example.com', status: 'Active', emissions: '1,820 kg', joined: '2023-05-12' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span className="text-green-500">+16%</span>
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

      <Card>
        <CardHeader>
          <CardTitle>User Statistics</CardTitle>
          <CardDescription>Monthly active and new users</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
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
          <CardTitle>Recent Users</CardTitle>
          <CardDescription>Latest registered users and their emissions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Total Emissions</TableHead>
                <TableHead>Joined</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.emissions}</TableCell>
                  <TableCell>{user.joined}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
