
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";


type User = {
  id: string;
  email: string;
  name?: string;
  photoURL?: string;
  role: 'user' | 'admin';
  createdAt: string;
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signupWithEmail: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
  isAdmin: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    
    const storedUser = localStorage.getItem('carbonwise_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      
      if (email && password) {
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        
        const mockUsers = [
          { 
            id: '1', 
            email: 'user@example.com', 
            name: 'Demo User', 
            role: 'user', 
            photoURL: 'https://i.pravatar.cc/150?img=11',
            createdAt: new Date().toISOString()
          },
          { 
            id: '2', 
            email: 'admin@example.com', 
            name: 'Admin User', 
            role: 'admin',
            photoURL: 'https://i.pravatar.cc/150?img=12',
            createdAt: new Date().toISOString()
          }
        ];
        
        const foundUser = mockUsers.find(u => u.email === email);
        
        if (foundUser) {
          
          localStorage.setItem('carbonwise_user', JSON.stringify(foundUser));
          setUser(foundUser as User);
          
          toast({
            title: "Login successful",
            description: `Welcome back, ${foundUser.name}!`,
          });
          
          
          if (foundUser.role === 'admin') {
            navigate('/admin');
          } else {
            navigate('/dashboard');
          }
        } else {
          throw new Error('Invalid credentials');
        }
      } else {
        throw new Error('Please enter email and password');
      }
    } catch (error: any) {
      toast({
        title: "Login failed",
        description: error.message || "Something went wrong",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const signupWithEmail = async (email: string, password: string, name: string) => {
    setIsLoading(true);
    try {
      
      if (email && password && name) {
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const newUser = {
          id: Math.random().toString(36).substring(2, 9),
          email,
          name,
          role: 'user' as const,
          photoURL: `https://i.pravatar.cc/150?u=${email}`,
          createdAt: new Date().toISOString()
        };
        
        
        localStorage.setItem('carbonwise_user', JSON.stringify(newUser));
        setUser(newUser);
        
        toast({
          title: "Sign up successful",
          description: "Your account has been created!",
        });
        
        navigate('/dashboard');
      } else {
        throw new Error('Please fill in all required fields');
      }
    } catch (error: any) {
      toast({
        title: "Sign up failed",
        description: error.message || "Something went wrong",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setUser(null);
    localStorage.removeItem('carbonwise_user');
    
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    
    navigate('/login');
  };

  const isAuthenticated = !!user;
  const isAdmin = user?.role === 'admin';

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      login,
      signupWithEmail,
      logout,
      isAuthenticated,
      isAdmin
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

