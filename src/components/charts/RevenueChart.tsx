import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { chartData } from "@/data/mockData";
import { useNavigate } from "react-router-dom";

export const RevenueChart = () => {
  const navigate = useNavigate();

  return (
    <Card 
      className="group animate-fade-in bg-gradient-card backdrop-blur-sm border border-border/50 shadow-card hover:shadow-xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden cursor-pointer rounded-xl"
      onClick={() => navigate('/revenue')}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <CardHeader className="relative z-10">
        <CardTitle className="flex items-center gap-2 text-foreground group-hover:text-primary transition-colors duration-300">
          Revenue Trend
        </CardTitle>
        <CardDescription className="group-hover:text-foreground transition-colors duration-300">
          Monthly revenue over the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData.revenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="month" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }}
                formatter={(value) => [`$${value.toLocaleString()}`, "Revenue"]}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="hsl(var(--chart-1))" 
                strokeWidth={3}
                dot={{ fill: "hsl(var(--chart-1))", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "hsl(var(--chart-1))", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};