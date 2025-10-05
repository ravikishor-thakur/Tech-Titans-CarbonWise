import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Twitter, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-white py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Contact</h1>
          <Card>
            <CardHeader>
              <CardTitle>Get in touch</CardTitle>
              <CardDescription>We'd love to hear from you.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-carbon-600" />
                <a href="mailto:ravikishor022@gmail.com" className="text-carbon-700 hover:underline">ravikishor022@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Twitter className="h-5 w-5 text-blue-500" />
                <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="hover:underline">Twitter</a>
              </div>
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5" />
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-blue-700" />
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;


