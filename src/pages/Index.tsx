import { DashboardLayout } from "@/components/DashboardLayout";
import { MetricCard } from "@/components/MetricCard";
import { RevenueChart } from "@/components/charts/RevenueChart";
import { EngagementChart } from "@/components/charts/EngagementChart";
import { ConversionsChart } from "@/components/charts/ConversionsChart";
import { CampaignTable } from "@/components/CampaignTable";
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
import { useState, useEffect } from "react";

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
      <div className="space-y-8 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Analytics Overview
            </h1>
            <p className="text-muted-foreground mt-1">
              Track your marketing performance in real-time
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="transition-all duration-300"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <EngagementChart />
          <ConversionsChart />
        </div>

        {/* Data Table */}
        <CampaignTable />
      </div>
    </DashboardLayout>
  );
};

export default Index;
