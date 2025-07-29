import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "increase" | "decrease" | "neutral";
  icon: LucideIcon;
  className?: string;
}

export const MetricCard = ({ 
  title, 
  value, 
  change, 
  changeType, 
  icon: Icon,
  className 
}: MetricCardProps) => {
  const changeColor = {
    increase: "text-success",
    decrease: "text-destructive",
    neutral: "text-muted-foreground"
  }[changeType];

  const changePrefix = changeType === "increase" ? "+" : changeType === "decrease" ? "-" : "";

  return (
    <Card className={cn(
      "transition-all duration-300 hover:shadow-lg hover:scale-105 animate-fade-in",
      "bg-gradient-card border-0 shadow-md",
      className
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground mb-1">
          {value}
        </div>
        <p className="text-xs flex items-center gap-1">
          <span className={cn("font-medium", changeColor)}>
            {changePrefix}{change}
          </span>
          <span className="text-muted-foreground">from last month</span>
        </p>
      </CardContent>
    </Card>
  );
};