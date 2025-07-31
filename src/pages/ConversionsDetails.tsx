import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { ConversionsChart } from "@/components/charts/ConversionsChart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Target, TrendingUp, Users, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ConversionsDetails = () => {
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
              Conversion Analytics
            </h1>
            <p className="text-muted-foreground">
              Detailed conversion tracking and performance metrics
            </p>
          </div>
        </div>

        {/* Conversion Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-card rounded-xl border border-border/50 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              <Target className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.24%</div>
              <p className="text-xs text-muted-foreground">
                +0.5% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card rounded-xl border border-border/50 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Conversions</CardTitle>
              <ShoppingCart className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">
                +156 from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card rounded-xl border border-border/50 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversion Value</CardTitle>
              <TrendingUp className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$89,430</div>
              <p className="text-xs text-muted-foreground">
                +$12,340 from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card rounded-xl border border-border/50 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Order Value</CardTitle>
              <Users className="h-4 w-4 text-info" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$72.50</div>
              <p className="text-xs text-muted-foreground">
                +$5.20 from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Chart */}
        <ConversionsChart />

        {/* Additional Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-gradient-card rounded-xl border border-border/50 shadow-lg">
            <CardHeader>
              <CardTitle>Conversion Funnel</CardTitle>
              <CardDescription>
                Step-by-step conversion analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Page Views</span>
                  <span className="text-sm text-muted-foreground">100% (24,631)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Product Views</span>
                  <span className="text-sm text-muted-foreground">45% (11,084)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Add to Cart</span>
                  <span className="text-sm text-muted-foreground">12% (2,956)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Checkout</span>
                  <span className="text-sm text-muted-foreground">8% (1,970)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Purchase</span>
                  <span className="text-sm text-muted-foreground">5% (1,234)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card rounded-xl border border-border/50 shadow-lg">
            <CardHeader>
              <CardTitle>Top Converting Products</CardTitle>
              <CardDescription>
                Products with highest conversion rates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Analytics Pro</span>
                  <span className="text-sm font-bold">8.5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Data Insights</span>
                  <span className="text-sm font-bold">6.2%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Dashboard Suite</span>
                  <span className="text-sm font-bold">4.8%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Report Builder</span>
                  <span className="text-sm font-bold">3.1%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ConversionsDetails;