import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { CampaignTable } from "@/components/CampaignTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BarChart3, Users, MousePointer, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CampaignDetails = () => {
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
              Campaign Performance
            </h1>
            <p className="text-muted-foreground">
              Detailed campaign analytics and performance metrics
            </p>
          </div>
        </div>

        {/* Campaign Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-card rounded-xl border border-border/50 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Campaigns</CardTitle>
              <BarChart3 className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">
                3 active campaigns
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card rounded-xl border border-border/50 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Impressions</CardTitle>
              <Users className="h-4 w-4 text-info" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.4M</div>
              <p className="text-xs text-muted-foreground">
                +15% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card rounded-xl border border-border/50 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. CTR</CardTitle>
              <MousePointer className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.8%</div>
              <p className="text-xs text-muted-foreground">
                +0.3% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card rounded-xl border border-border/50 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$89,430</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Campaign Table */}
        <CampaignTable />

        {/* Additional Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-gradient-card rounded-xl border border-border/50 shadow-lg">
            <CardHeader>
              <CardTitle>Top Performing Channels</CardTitle>
              <CardDescription>
                Best performing advertising channels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Google Ads</span>
                  <span className="text-sm text-success font-bold">3.2% CTR</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Facebook Ads</span>
                  <span className="text-sm text-success font-bold">2.8% CTR</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">LinkedIn Ads</span>
                  <span className="text-sm text-warning font-bold">2.1% CTR</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Instagram Ads</span>
                  <span className="text-sm text-muted-foreground font-bold">1.9% CTR</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card rounded-xl border border-border/50 shadow-lg">
            <CardHeader>
              <CardTitle>Campaign Budget Distribution</CardTitle>
              <CardDescription>
                How budget is allocated across channels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Google Ads</span>
                  <span className="text-sm text-muted-foreground">40%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Facebook Ads</span>
                  <span className="text-sm text-muted-foreground">30%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">LinkedIn Ads</span>
                  <span className="text-sm text-muted-foreground">20%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Other Channels</span>
                  <span className="text-sm text-muted-foreground">10%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CampaignDetails;