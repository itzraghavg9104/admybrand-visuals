import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { RevenueChart } from "@/components/charts/RevenueChart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, DollarSign, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RevenueDetails = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/')}
            className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Revenue Analytics
            </h1>
            <p className="text-muted-foreground">
              Detailed revenue analysis and trends
            </p>
          </div>
        </div>

        {/* Revenue Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-card rounded-xl border border-border/50 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$124,532</div>
              <p className="text-xs text-muted-foreground">
                +12.5% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card rounded-xl border border-border/50 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Growth</CardTitle>
              <TrendingUp className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">+18.2%</div>
              <p className="text-xs text-muted-foreground">
                Compared to previous month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card rounded-xl border border-border/50 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Monthly</CardTitle>
              <Calendar className="h-4 w-4 text-info" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$20,755</div>
              <p className="text-xs text-muted-foreground">
                Last 6 months average
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Chart */}
        <RevenueChart />

        {/* Additional Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-gradient-card rounded-xl border border-border/50 shadow-lg">
            <CardHeader>
              <CardTitle>Revenue Breakdown</CardTitle>
              <CardDescription>
                Revenue sources for the current period
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Product Sales</span>
                  <span className="text-sm text-muted-foreground">65%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Service Revenue</span>
                  <span className="text-sm text-muted-foreground">25%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Subscriptions</span>
                  <span className="text-sm text-muted-foreground">10%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card rounded-xl border border-border/50 shadow-lg">
            <CardHeader>
              <CardTitle>Top Performing Products</CardTitle>
              <CardDescription>
                Highest revenue generating products
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Analytics Pro</span>
                  <span className="text-sm font-bold">$45,230</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Dashboard Suite</span>
                  <span className="text-sm font-bold">$32,180</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Data Insights</span>
                  <span className="text-sm font-bold">$28,940</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RevenueDetails;