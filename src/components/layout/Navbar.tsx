
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { BarChart3, Home, Calculator, Award, User, Menu, X, ChevronDown } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from 'framer-motion';
import { Image } from '@radix-ui/react-avatar';

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, user, logout, isAdmin } = useAuth();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
     
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const navItems = [
    { name: 'Calculate', path: '/calculator', icon: Calculator, dropdown: true, items: [
      { name: 'Personal Footprint', path: '/calculator/personal' },
      { name: 'Household Footprint', path: '/calculator/household' },
      { name: 'Business Footprint', path: '/calculator/business' }
    ]},
    { name: 'Dashboard', path: '/dashboard', icon: BarChart3, protected: true },
    { name: 'Challenges', path: '/challenges', icon: Award, protected: true },
    { name: 'Resources', path: '/resources', icon: Home },
  ];
  
  if (isAdmin) {
    navItems.push({ name: 'Admin', path: '/admin', icon: User, protected: true });
  }
  
  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const handleLogout = async () => {
    await logout();
  };

  const getInitials = (name) => {
    if (!name) return '?';
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-carbon-600 mr-2"></div>
              <span className="text-carbon-600 text-xl font-bold">CarbonWise</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 items-center">
            {navItems.map((item) => (
              !item.protected || (item.protected && isAuthenticated) ? (
                item.dropdown ? (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="ghost" 
                        className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                          isActive(item.path) 
                            ? 'text-carbon-600 font-medium' 
                            : 'text-gray-600 hover:text-carbon-500'
                        }`}
                      >
                        <item.icon size={16} />
                        <span>{item.name}</span>
                        <ChevronDown size={14} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      {item.items?.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} asChild>
                          <Link to={subItem.path} className="w-full cursor-pointer">
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link 
                    key={item.name} 
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                      isActive(item.path) 
                        ? 'text-carbon-600 font-medium' 
                        : 'text-gray-600 hover:text-carbon-500'
                    }`}
                  >
                    <item.icon size={16} />
                    <span>{item.name}</span>
                  </Link>
                )
              ) : null
            ))}
            
            {isAuthenticated ? (
              <div className="ml-4 flex items-center space-x-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative rounded-full h-8 w-8 p-0">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user?.photoURL} alt={user?.name} />
                        <AvatarFallback>{user?.name ? getInitials(user.name) : '?'}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="flex items-center gap-2 cursor-pointer">
                        <User size={14} /> Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex items-center gap-2 text-red-500 cursor-pointer" onClick={handleLogout}>
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div className="ml-4 flex items-center space-x-2">
                <Button asChild variant="ghost">
                  <Link to="/login">Log in</Link>
                </Button>
                <Button asChild className="bg-carbon-500 hover:bg-carbon-600">
                  <Link to="/signup">Sign up</Link>
                </Button>
              </div>
            )}
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden mt-4 pb-4 border-t pt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  !item.protected || (item.protected && isAuthenticated) ? (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <>
                          <div className={`flex items-center justify-between p-2 rounded-md ${
                            isActive(item.path) 
                              ? 'bg-carbon-50 text-carbon-600 font-medium' 
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}>
                            <div className="flex items-center space-x-3">
                              <item.icon size={20} />
                              <span>{item.name}</span>
                            </div>
                            <ChevronDown size={16} />
                          </div>
                          <div className="pl-8 mt-1 space-y-1">
                            {item.items?.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                className="block p-2 text-gray-600 hover:text-carbon-500 rounded-md"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </>
                      ) : (
                        <Link
                          to={item.path}
                          className={`flex items-center space-x-3 p-2 rounded-md ${
                            isActive(item.path) 
                              ? 'bg-carbon-50 text-carbon-600 font-medium' 
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <item.icon size={20} />
                          <span>{item.name}</span>
                        </Link>
                      )}
                    </div>
                  ) : null
                ))}
                
                {isAuthenticated ? (
                  <>
                    <div className="flex items-center p-2">
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage src={user?.photoURL} alt={user?.name} />
                        <AvatarFallback>{user?.name ? getInitials(user.name) : '?'}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{user?.name || 'User'}</p>
                        <p className="text-sm text-gray-500">{user?.email || ''}</p>
                      </div>
                    </div>
                    <Link 
                      to="/profile" 
                      className="flex items-center space-x-3 p-2 rounded-md text-gray-600 hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <User size={20} />
                      <span>Profile</span>
                    </Link>
                    <Button 
                      variant="outline" 
                      className="mt-2 flex items-center justify-center w-full" 
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                    >
                      Log out
                    </Button>
                  </>
                ) : (
                  <div className="flex flex-col space-y-2 mt-2">
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/login" onClick={() => setIsMenuOpen(false)}>Log in</Link>
                    </Button>
                    <Button asChild className="bg-carbon-500 hover:bg-carbon-600 w-full">
                      <Link to="/login" onClick={() => setIsMenuOpen(false)}>Sign up</Link>
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
