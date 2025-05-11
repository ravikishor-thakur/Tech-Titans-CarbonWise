import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
export default function Footer() {
  const year = new Date().getFullYear();
  return <footer className="bg-carbon-50 border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-carbon-600 mr-2"></div>
              <span className="text-carbon-600 text-xl font-bold">CarbonWise</span>
            </Link>
            <p className="mt-4 text-gray-600 max-w-md">
              Helping individuals and small businesses measure, monitor, and reduce their carbon footprint with actionable insights and real-time tracking.
            </p>
            <div className="mt-6 flex items-center space-x-4">
              <a href="#" className="text-gray-500 hover:text-carbon-600 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-carbon-600 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-carbon-600 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-carbon-600 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-carbon-600 transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/resources/eco-friendly-tips" className="text-gray-600 hover:text-carbon-500 transition-colors">Eco-friendly Tips</Link></li>
              <li><Link to="/resources/guides" className="text-gray-600 hover:text-carbon-500 transition-colors">Eco-friendly Guides</Link></li>
              <li><Link to="/calculator" className="text-gray-600 hover:text-carbon-500 transition-colors">Carbon Calculator</Link></li>
              <li><Link to="/resources/offsetting" className="text-gray-600 hover:text-carbon-500 transition-colors">Carbon Offsetting</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-carbon-500 transition-colors">FAQs</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Community</h3>
            <ul className="space-y-2">
              <li><Link to="/challenges" className="text-gray-600 hover:text-carbon-500 transition-colors">Challenges</Link></li>
              <li><Link to="/leaderboard" className="text-gray-600 hover:text-carbon-500 transition-colors">Leaderboard</Link></li>
              <li><Link to="/events" className="text-gray-600 hover:text-carbon-500 transition-colors">Events</Link></li>
              <li><Link to="/forum" className="text-gray-600 hover:text-carbon-500 transition-colors">Discussion Forum</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-carbon-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-carbon-500 transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-carbon-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-carbon-500 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">© {year} CarbonWise. All rights reserved.</p>
          
        </div>
      </div>
    </footer>;
}