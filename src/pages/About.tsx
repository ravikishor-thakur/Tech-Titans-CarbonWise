import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, BarChart3, Target, Users } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-white">
        <section className="container mx-auto px-4 py-12 lg:py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight">About CarbonWise</h1>
            <p className="mt-4 text-lg text-gray-600">
              CarbonWise helps you measure, understand, and reduce your carbon footprint.
              Track daily activities, set goals, and celebrate your progress with a clear,
              user-friendly dashboard.
            </p>
            <p className="mt-3 text-gray-600">
              This project features an activity-based carbon calculator, personalized dashboards,
              challenges to build sustainable habits, and a resources hub with videos, articles,
              and offsetting guidance. Built with React, TypeScript, Tailwind, and shadcn-ui.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <Leaf className="h-6 w-6 text-carbon-600" />
              <CardTitle>Sustainable Actions</CardTitle>
              <CardDescription>Discover habits that reduce emissions.</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <BarChart3 className="h-6 w-6 text-carbon-600" />
              <CardTitle>Clear Insights</CardTitle>
              <CardDescription>Visualize impact over time.</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Target className="h-6 w-6 text-carbon-600" />
              <CardTitle>Goals & Badges</CardTitle>
              <CardDescription>Stay motivated with milestones.</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-6 w-6 text-carbon-600" />
              <CardTitle>Community</CardTitle>
              <CardDescription>Compare and learn together.</CardDescription>
            </CardHeader>
          </Card>
        </section>

        <section className="container mx-auto px-4 py-12 grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>How it works</CardTitle>
              <CardDescription>Track, analyze, improve.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>1. Log activities like transport, energy, and food choices.</p>
              <p>2. We estimate emissions using transparent factors.</p>
              <p>3. See trends, set targets, and get suggestions to improve.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Methodology</CardTitle>
              <CardDescription>Reasonable defaults, adjustable over time.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>Our calculator uses widely referenced factors (e.g., transport fuel, grid intensity).</p>
              <p>Assumptions are simplified for usability and can be refined as data improves.</p>
              <p>Results are estimates intended for personal guidance, not certifications.</p>
            </CardContent>
          </Card>
        </section>

        <section className="container mx-auto px-4 py-12">
          <Card>
            <CardHeader>
              <CardTitle>FAQs</CardTitle>
              <CardDescription>Quick answers to common questions.</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <div>
                <p className="font-medium">Is my data saved?</p>
                <p>Basic profile is stored locally for the demo experience.</p>
              </div>
              <div>
                <p className="font-medium">Can I use this for teams?</p>
                <p>Team features can be added; the current build focuses on personal tracking.</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-carbon-50 border rounded-xl p-6">
            <div>
              <h2 className="text-2xl font-semibold">Ready to reduce your footprint?</h2>
              <p className="text-gray-600">Start with a quick estimate and actionable tips.</p>
            </div>
            <Button asChild className="bg-carbon-600 hover:bg-carbon-700">
              <a href="/calculator">Start calculating <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;


