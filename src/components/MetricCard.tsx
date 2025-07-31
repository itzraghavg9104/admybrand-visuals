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
      "group transition-all duration-500 hover:shadow-card hover:scale-105 animate-fade-in hover:-translate-y-2",
      "bg-gradient-card border-0 shadow-lg backdrop-blur-sm relative overflow-hidden",
      "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
      className
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
        <CardTitle className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-primary transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="text-2xl font-bold text-foreground mb-1 transition-all duration-300 group-hover:text-primary group-hover:scale-105">
          {value}
        </div>
        <p className="text-xs flex items-center gap-1">
          <span className={cn("font-medium transition-all duration-300 group-hover:scale-105", changeColor)}>
            {changePrefix}{change}
          </span>
          <span className="text-muted-foreground group-hover:text-foreground transition-colors">from last month</span>
        </p>
      </CardContent>
    </Card>
  );
};