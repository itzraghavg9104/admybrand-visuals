import React, { ReactNode, useState, useEffect } from "react";
import admybrandLogo from "@/assets/admybrand-logo.png";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, Bell, Search, User } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen moving-gradient text-foreground relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float [animation-delay:2s]"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-white/15 rounded-full blur-3xl animate-float [animation-delay:4s]"></div>
      </div>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-white/80 backdrop-blur-md shadow-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="md:hidden hover:bg-primary/10 transition-colors">
                <Menu className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.location.href = '/'}>
                <img 
                  src={admybrandLogo} 
                  alt="ADmyBRAND Insights" 
                  className="h-8 w-auto transition-transform duration-300 group-hover:scale-110"
                />
                <div className="hidden sm:block">
                  <h1 className="font-bold text-lg bg-gradient-primary bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">
                    ADmyBRAND Insights
                  </h1>
                  <p className="text-xs text-muted-foreground -mt-1 transition-colors group-hover:text-primary">Analytics Dashboard</p>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
                <input
                  type="text"
                  placeholder="Search insights..."
                  className="w-full pl-10 pr-4 py-2 text-sm bg-white/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 backdrop-blur-sm hover:bg-white/80 focus:bg-white"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="hidden md:flex hover:bg-primary/10 transition-all duration-300 hover:scale-105">
                <Bell className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={toggleTheme}
                className="transition-all duration-300 hover:bg-primary/10 hover:scale-105 hover:rotate-12"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full hover:bg-primary/10 transition-all duration-300 hover:scale-105">
                <User className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};