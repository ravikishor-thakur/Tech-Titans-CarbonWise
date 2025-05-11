
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Check, Clock, TrendingUp, Users } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

// Dummy data for challenges
const activeChallenges = [
  {
    id: 1,
    title: "Meatless Monday",
    description: "Skip meat for an entire day to reduce your carbon footprint",
    impact: "Save ~8 kg CO₂e",
    participants: 1248,
    progress: 0,
    type: "daily",
    deadline: "Today",
    complete: false
  },
  {
    id: 2,
    title: "Public Transport Week",
    description: "Use public transport instead of a car for 5 days",
    impact: "Save ~30 kg CO₂e",
    participants: 856,
    progress: 40,
    type: "weekly",
    deadline: "5 days left",
    complete: false
  },
  {
    id: 3,
    title: "Energy Saving Month",
    description: "Reduce your electricity usage by 20% for the month",
    impact: "Save ~50 kg CO₂e",
    participants: 1532,
    progress: 60,
    type: "monthly",
    deadline: "2 weeks left",
    complete: false
  }
];

const completedChallenges = [
  {
    id: 4,
    title: "No Food Waste Week",
    description: "Minimize food waste through meal planning and composting",
    impact: "Saved ~12 kg CO₂e",
    participants: 986,
    type: "weekly",
    completedOn: "Last week"
  },
  {
    id: 5,
    title: "Plastic-Free Shopping",
    description: "Shop without buying any plastic packaging for a week",
    impact: "Saved ~5 kg CO₂e",
    participants: 1102,
    type: "weekly",
    completedOn: "2 weeks ago"
  }
];

export default function DailyChallenge() {
  const [challenges, setChallenges] = useState(activeChallenges);
  const { toast } = useToast();

  const completeChallenge = (id: number) => {
    setChallenges(challenges.map(challenge => 
      challenge.id === id 
        ? {...challenge, complete: true, progress: 100} 
        : challenge
    ));
    
    toast({
      title: "Challenge completed!",
      description: "You've earned points and reduced your carbon footprint!",
    });
  };

  return (
    <div>
      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid grid-cols-2 w-full md:w-[400px] mb-6">
          <TabsTrigger value="active">Active Challenges</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        
        <TabsContent value="active">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((challenge) => (
              <Card key={challenge.id} className={challenge.complete ? "border-carbon-500" : ""}>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <Badge className="bg-carbon-600 hover:bg-carbon-700">{challenge.type}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {challenge.deadline}
                    </div>
                  </div>
                  <CardTitle className="mt-3">{challenge.title}</CardTitle>
                  <CardDescription>{challenge.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="flex items-center justify-between text-sm mb-3">
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1 text-carbon-500" />
                      <span className="font-medium text-carbon-700">{challenge.impact}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{challenge.participants} participants</span>
                    </div>
                  </div>
                  {challenge.progress > 0 && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Progress</span>
                        <span>{challenge.progress}%</span>
                      </div>
                      <Progress value={challenge.progress} className="h-2" />
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  {challenge.complete ? (
                    <Button className="w-full" variant="outline" disabled>
                      <Check className="mr-2 h-4 w-4" />
                      Completed
                    </Button>
                  ) : (
                    <Button className="w-full bg-carbon-500 hover:bg-carbon-600" onClick={() => completeChallenge(challenge.id)}>
                      <Award className="mr-2 h-4 w-4" />
                      Mark as Complete
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="completed">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {completedChallenges.map((challenge) => (
              <Card key={challenge.id} className="border-carbon-200">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="border-carbon-200 text-carbon-700">{challenge.type}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Check className="h-4 w-4 mr-1 text-carbon-500" />
                      {challenge.completedOn}
                    </div>
                  </div>
                  <CardTitle className="mt-3">{challenge.title}</CardTitle>
                  <CardDescription>{challenge.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1 text-carbon-500" />
                      <span className="font-medium text-carbon-700">{challenge.impact}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{challenge.participants} participants</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline" disabled>
                    <Award className="mr-2 h-4 w-4" />
                    Challenge Completed
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
