import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { chartData } from "@/data/mockData";

export const ConversionsChart = () => {
  return (
    <Card className="animate-fade-in bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border/50 shadow-lg">
      <CardHeader>
        <CardTitle>Conversion Performance</CardTitle>
        <CardDescription>
          Current vs previous period comparison
        </CardDescription>
      </CardHeader>
      <CardContent>
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