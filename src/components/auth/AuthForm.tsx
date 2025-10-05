
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthContext";
import { Separator } from "@/components/ui/separator";
import { Github, Mail, Facebook } from 'lucide-react';

export function AuthForm() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { toast } = useToast();
  const { login, signupWithEmail, isLoading } = useAuth();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    await login(loginEmail, loginPassword);
  };

  const handleSignup = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (registerPassword !== confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please make sure your passwords match.",
        variant: "destructive"
      });
      return;
    }
    
    await signupWithEmail(registerEmail, registerPassword, registerName);
  };

  const handleSocialAuth = (provider: string) => {
    toast({
      title: `${provider} authentication`,
      description: `${provider} authentication would be implemented with a real auth provider.`,
    });
  };

  const initialTab = typeof window !== 'undefined' && window.location.hash === '#register' ? 'register' : 'login';

  return (
    <div className="w-full max-w-md mx-auto">
      <Tabs defaultValue={initialTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleLogin}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input 
                    id="login-email" 
                    type="email" 
                    placeholder="name@example.com" 
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="login-password">Password</Label>
                    <a href="#" className="text-sm text-carbon-600 hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <Input 
                    id="login-password" 
                    type="password" 
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required 
                  />
                </div>
                
                <div className="pt-2">
                  <Button type="submit" className="w-full bg-carbon-500 hover:bg-carbon-600" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Login"}
                  </Button>
                </div>
                
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => handleSocialAuth('Google')}
                  >
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                      <path
                        d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                        fill="#EA4335"
                      />
                      <path
                        d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                        fill="#34A853"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => handleSocialAuth('GitHub')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => handleSocialAuth('Facebook')}
                  >
                    <Facebook className="mr-2 h-4 w-4" />
                    Facebook
                  </Button>
                </div>
              </CardContent>
            </form>
          </Card>
        </TabsContent>
        
        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle>Register</CardTitle>
              <CardDescription>
                Create an account to start tracking your carbon footprint
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSignup}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe"
                    value={registerName}
                    onChange={(e) => setRegisterName(e.target.value)}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-email">Email</Label>
                  <Input 
                    id="register-email" 
                    type="email" 
                    placeholder="name@example.com"
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-password">Password</Label>
                  <Input 
                    id="register-password" 
                    type="password"
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input 
                    id="confirm-password" 
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required 
                  />
                </div>
                
                <div className="pt-2">
                  <Button type="submit" className="w-full bg-carbon-500 hover:bg-carbon-600" disabled={isLoading}>
                    {isLoading ? "Creating account..." : "Create account"}
                  </Button>
                </div>
                
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => handleSocialAuth('Google')}
                  >
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                      <path
                        d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                        fill="#EA4335"
                      />
                      <path
                        d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                        fill="#34A853"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => handleSocialAuth('GitHub')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => handleSocialAuth('Facebook')}
                  >
                    <Facebook className="mr-2 h-4 w-4" />
                    Facebook
                  </Button>
                </div>
              </CardContent>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
