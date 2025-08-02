import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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
      <div className="space-y-8 animate-fade-in relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative z-10">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-foreground drop-shadow-lg animate-glow">
              Analytics Overview
            </h1>
            <p className="text-foreground/80 text-lg animate-slide-up [animation-delay:200ms] drop-shadow-md">
              Track your marketing performance in real-time
            </p>
          </div>
          <div className="flex items-center gap-4 animate-slide-up [animation-delay:400ms]">
            <div className="text-sm text-foreground bg-card/80 px-3 py-1 rounded-full backdrop-blur-sm border border-border/50 shadow-md">
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
            onClick={() => navigate('/revenue')}
          />
          <MetricCard
            title="Active Users"
            value={metricsData.users.value}
            change={metricsData.users.change}
            changeType={metricsData.users.changeType}
            icon={Users}
            className="animate-slide-up [animation-delay:100ms]"
            onClick={() => navigate('/engagement')}
          />
          <MetricCard
            title="Conversion Rate"
            value={metricsData.conversions.value}
            change={metricsData.conversions.change}
            changeType={metricsData.conversions.changeType}
            icon={Target}
            className="animate-slide-up [animation-delay:200ms]"
            onClick={() => navigate('/conversions')}
          />
          <MetricCard
            title="Growth Rate"
            value={metricsData.growth.value}
            change={metricsData.growth.change}
            changeType={metricsData.growth.changeType}
            icon={TrendingUp}
            className="animate-slide-up [animation-delay:300ms]"
            onClick={() => navigate('/campaigns')}
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
          <div 
            className="cursor-pointer transition-all duration-300 hover:scale-[1.01]"
            onClick={() => navigate('/campaigns')}
          >
            <CampaignTable />
          </div>
        </div>
      </div>
      <Toaster />
    </DashboardLayout>
  );
};

export default Index;
