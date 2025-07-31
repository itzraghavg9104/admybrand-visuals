import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { EngagementChart } from "@/components/charts/EngagementChart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Eye, Clock, MousePointer } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EngagementDetails = () => {
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
              User Engagement Analytics
            </h1>
            <p className="text-muted-foreground">
              Detailed user interaction and engagement metrics
            </p>
          </div>
        </div>

        {/* Engagement Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-card rounded-xl border border-border/50 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8,423</div>
              <p className="text-xs text-muted-foreground">
                +5.2% from last week
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card rounded-xl border border-border/50 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Page Views</CardTitle>
              <Eye className="h-4 w-4 text-info" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24,631</div>
              <p className="text-xs text-muted-foreground">
                +8.1% from last week
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card rounded-xl border border-border/50 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Session</CardTitle>
              <Clock className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4m 32s</div>
              <p className="text-xs text-muted-foreground">
                +12s from last week
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card rounded-xl border border-border/50 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Click Rate</CardTitle>
              <MousePointer className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.2%</div>
              <p className="text-xs text-muted-foreground">
                +0.3% from last week
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Chart */}
        <EngagementChart />

        {/* Additional Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-gradient-card rounded-xl border border-border/50 shadow-lg">
            <CardHeader>
              <CardTitle>Top Pages</CardTitle>
              <CardDescription>
                Most visited pages this week
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">/dashboard</span>
                  <span className="text-sm text-muted-foreground">8,234 views</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">/analytics</span>
                  <span className="text-sm text-muted-foreground">5,642 views</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">/reports</span>
                  <span className="text-sm text-muted-foreground">3,891 views</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">/settings</span>
                  <span className="text-sm text-muted-foreground">2,456 views</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card rounded-xl border border-border/50 shadow-lg">
            <CardHeader>
              <CardTitle>Device Breakdown</CardTitle>
              <CardDescription>
                User engagement by device type
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Desktop</span>
                  <span className="text-sm text-muted-foreground">55%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Mobile</span>
                  <span className="text-sm text-muted-foreground">35%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Tablet</span>
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

export default EngagementDetails;