// Mock data for the analytics dashboard

export const metricsData = {
  revenue: {
    value: "$45,231",
    change: "20.1%",
    changeType: "increase" as const
  },
  users: {
    value: "2,350",
    change: "180",
    changeType: "increase" as const
  },
  conversions: {
    value: "12.5%",
    change: "2.3%",
    changeType: "increase" as const
  },
  growth: {
    value: "8.2%",
    change: "1.4%",
    changeType: "decrease" as const
  }
};

export const chartData = {
  revenue: [
    { month: "Jan", value: 32000 },
    { month: "Feb", value: 35000 },
    { month: "Mar", value: 38000 },
    { month: "Apr", value: 42000 },
    { month: "May", value: 39000 },
    { month: "Jun", value: 45000 }
  ],
  userEngagement: [
    { channel: "Organic", value: 45, fill: "hsl(var(--chart-1))" },
    { channel: "Social", value: 25, fill: "hsl(var(--chart-2))" },
    { channel: "Paid", value: 20, fill: "hsl(var(--chart-3))" },
    { channel: "Email", value: 10, fill: "hsl(var(--chart-4))" }
  ],
  conversions: [
    { category: "Landing Pages", current: 85, previous: 70 },
    { category: "Product Pages", current: 72, previous: 65 },
    { category: "Checkout", current: 95, previous: 88 },
    { category: "Email Campaigns", current: 68, previous: 72 },
    { category: "Social Media", current: 45, previous: 38 }
  ]
};

export const tableData = [
  {
    id: 1,
    campaign: "Summer Sale 2024",
    channel: "Google Ads",
    impressions: 125000,
    clicks: 3200,
    ctr: 2.56,
    conversions: 145,
    revenue: 12500,
    status: "Active"
  },
  {
    id: 2,
    campaign: "Brand Awareness Q2",
    channel: "Facebook",
    impressions: 98000,
    clicks: 2100,
    ctr: 2.14,
    conversions: 89,
    revenue: 8900,
    status: "Active"
  },
  {
    id: 3,
    campaign: "Product Launch",
    channel: "Instagram",
    impressions: 156000,
    clicks: 4800,
    ctr: 3.08,
    conversions: 234,
    revenue: 18700,
    status: "Completed"
  },
  {
    id: 4,
    campaign: "Email Newsletter",
    channel: "Email",
    impressions: 45000,
    clicks: 1800,
    ctr: 4.0,
    conversions: 156,
    revenue: 9300,
    status: "Active"
  },
  {
    id: 5,
    campaign: "Retargeting Campaign",
    channel: "Google Display",
    impressions: 67000,
    clicks: 1200,
    ctr: 1.79,
    conversions: 78,
    revenue: 5600,
    status: "Paused"
  },
  {
    id: 6,
    campaign: "Holiday Special 2024",
    channel: "YouTube Ads",
    impressions: 89000,
    clicks: 2650,
    ctr: 2.98,
    conversions: 198,
    revenue: 15200,
    status: "Active"
  },
  {
    id: 7,
    campaign: "Mobile App Install",
    channel: "TikTok",
    impressions: 234000,
    clicks: 7200,
    ctr: 3.08,
    conversions: 432,
    revenue: 21600,
    status: "Active"
  },
  {
    id: 8,
    campaign: "B2B Lead Generation",
    channel: "LinkedIn",
    impressions: 34000,
    clicks: 890,
    ctr: 2.62,
    conversions: 67,
    revenue: 13400,
    status: "Active"
  },
  {
    id: 9,
    campaign: "Local Store Promo",
    channel: "Google Local",
    impressions: 23000,
    clicks: 1100,
    ctr: 4.78,
    conversions: 145,
    revenue: 7250,
    status: "Completed"
  },
  {
    id: 10,
    campaign: "Influencer Collaboration",
    channel: "Instagram",
    impressions: 78000,
    clicks: 3400,
    ctr: 4.36,
    conversions: 289,
    revenue: 17340,
    status: "Active"
  },
  {
    id: 11,
    campaign: "Spring Collection",
    channel: "Pinterest",
    impressions: 112000,
    clicks: 2800,
    ctr: 2.50,
    conversions: 167,
    revenue: 11690,
    status: "Paused"
  },
  {
    id: 12,
    campaign: "Customer Retention",
    channel: "Email",
    impressions: 56000,
    clicks: 3360,
    ctr: 6.0,
    conversions: 234,
    revenue: 14040,
    status: "Active"
  }
];