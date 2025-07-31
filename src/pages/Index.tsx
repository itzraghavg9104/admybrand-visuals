import React, { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { MetricCard } from "@/components/MetricCard";
import { RevenueChart } from "@/components/charts/RevenueChart";
import { EngagementChart } from "@/components/charts/EngagementChart";
import { ConversionsChart } from "@/components/charts/ConversionsChart";
import { CampaignTable } from "@/components/CampaignTable";
import { Toaster } from "@/components/ui/toaster";
import { metricsData } from "@/data/mockData";
import { 
  DollarSign, 
  Users, 
  Target, 
  TrendingUp,
  Calendar,
  RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastUpdated(new Date());
    setIsRefreshing(false);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in relative">{/* Floating background elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float -z-10"></div>
        <div className="absolute top-40 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float [animation-delay:2s] -z-10"></div>
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-success/10 rounded-full blur-3xl animate-float [animation-delay:4s] -z-10"></div>
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative z-10">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent animate-glow">
              Analytics Overview
            </h1>
            <p className="text-muted-foreground text-lg animate-slide-up [animation-delay:200ms]">
              Track your marketing performance in real-time
            </p>
          </div>
          <div className="flex items-center gap-4 animate-slide-up [animation-delay:400ms]">
            <div className="text-sm text-muted-foreground bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm border border-border/50">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="transition-all duration-300 hover:shadow-md hover:scale-105 hover:bg-primary hover:text-primary-foreground border-primary/20 backdrop-blur-sm"
            >
              <RefreshCw className={`h-4 w-4 mr-2 transition-transform duration-300 ${isRefreshing ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          <MetricCard
            title="Total Revenue"
            value={metricsData.revenue.value}
            change={metricsData.revenue.change}
            changeType={metricsData.revenue.changeType}
            icon={DollarSign}
            className="animate-slide-up"
          />
          <MetricCard
            title="Active Users"
            value={metricsData.users.value}
            change={metricsData.users.change}
            changeType={metricsData.users.changeType}
            icon={Users}
            className="animate-slide-up [animation-delay:100ms]"
          />
          <MetricCard
            title="Conversion Rate"
            value={metricsData.conversions.value}
            change={metricsData.conversions.change}
            changeType={metricsData.conversions.changeType}
            icon={Target}
            className="animate-slide-up [animation-delay:200ms]"
          />
          <MetricCard
            title="Growth Rate"
            value={metricsData.growth.value}
            change={metricsData.growth.change}
            changeType={metricsData.growth.changeType}
            icon={TrendingUp}
            className="animate-slide-up [animation-delay:300ms]"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
          <div className="lg:col-span-2 animate-scale-in [animation-delay:600ms]">
            <RevenueChart />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
          <div className="animate-scale-in [animation-delay:800ms]">
            <EngagementChart />
          </div>
          <div className="animate-scale-in [animation-delay:1000ms]">
            <ConversionsChart />
          </div>
        </div>

        {/* Data Table */}
        <div className="animate-scale-in [animation-delay:1200ms] relative z-10">
          <CampaignTable />
        </div>
      </div>
      <Toaster />
    </DashboardLayout>
  );
};

export default Index;
