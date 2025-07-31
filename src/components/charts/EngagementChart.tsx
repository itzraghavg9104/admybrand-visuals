import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { chartData } from "@/data/mockData";
import { useNavigate } from "react-router-dom";

export const EngagementChart = () => {
  const navigate = useNavigate();

  return (
    <Card 
      className="group animate-fade-in bg-gradient-card backdrop-blur-sm border border-border/50 shadow-card hover:shadow-xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden cursor-pointer rounded-xl"
      onClick={() => navigate('/engagement')}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <CardHeader className="relative z-10">
        <CardTitle className="group-hover:text-primary transition-colors duration-300">User Engagement</CardTitle>
        <CardDescription className="group-hover:text-foreground transition-colors duration-300">
          Traffic sources breakdown
        </CardDescription>
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData.userEngagement}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={2}
                dataKey="value"
              >
                {chartData.userEngagement.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }}
                formatter={(value) => [`${value}%`, "Share"]}
              />
              <Legend 
                verticalAlign="bottom" 
                height={36}
                iconType="circle"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};