import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { chartData } from "@/data/mockData";
import { useNavigate } from "react-router-dom";

export const ConversionsChart = () => {
  const navigate = useNavigate();

  return (
    <Card 
      className="group animate-fade-in bg-gradient-card backdrop-blur-sm border border-border/50 shadow-card hover:shadow-xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden cursor-pointer rounded-xl"
      onClick={() => navigate('/conversions')}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-success/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <CardHeader className="relative z-10">
        <CardTitle className="group-hover:text-primary transition-colors duration-300">Conversion Performance</CardTitle>
        <CardDescription className="group-hover:text-foreground transition-colors duration-300">
          Current vs previous period comparison
        </CardDescription>
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData.conversions} barCategoryGap="20%">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="category" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }}
                formatter={(value, name) => [
                  `${value}%`, 
                  name === "current" ? "Current Period" : "Previous Period"
                ]}
              />
              <Bar 
                dataKey="previous" 
                fill="hsl(var(--chart-2))" 
                radius={[4, 4, 0, 0]}
                name="previous"
              />
              <Bar 
                dataKey="current" 
                fill="hsl(var(--chart-1))" 
                radius={[4, 4, 0, 0]}
                name="current"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};