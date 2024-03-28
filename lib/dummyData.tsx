import { AnalyticCardProps } from "@/components/ui/AnalyticsCard";
import { Activity, DollarSign, UserPlus, Users } from "lucide-react";

export const dashboardAnalyticsCardData: AnalyticCardProps[] = [
	{
		label: "Total Revenue",
		Icon: DollarSign,
		amount: "$45,643,345.90",
		description: "+20.3% from last month",
	},
	{
		label: "New Customers",
		Icon: UserPlus,
		amount: "894",
		description: "+24.3% from last month",
	},
	{
		label: "New Orders",
		Icon: Activity,
		amount: "1029",
		description: "+49.3% from last month",
	},
	{
		label: "Active Users",
		Icon: Users,
		amount: "23,456",
		description: "+18.3% from last month",
	},
];

type DahsboardbarChartData = {
	name: string;
	value: number;
};

export const dahsboardbarChartData: DahsboardbarChartData[] = [
	{
		name: "Jan",
		value: Math.floor(Math.random() * 500) + 500,
	},
	{
		name: "Feb",
		value: Math.floor(Math.random() * 500) + 700,
	},
	{
		name: "Mar",
		value: Math.floor(Math.random() * 500) + 200,
	},
	{
		name: "Apr",
		value: Math.floor(Math.random() * 500) + 800,
	},
	{
		name: "May",
		value: Math.floor(Math.random() * 500) + 1000,
	},
	{
		name: "Jun",
		value: Math.floor(Math.random() * 500) + 100,
	},
	{
		name: "Jul",
		value: Math.floor(Math.random() * 500) + 650,
	},
	{
		name: "Aug",
		value: Math.floor(Math.random() * 500) + 500,
	},
	{
		name: "Sep",
		value: Math.floor(Math.random() * 500) + 490,
	},
	{
		name: "Oct",
		value: Math.floor(Math.random() * 500) + 960,
	},
	{
		name: "Nov",
		value: Math.floor(Math.random() * 500) + 347,
	},
	{
		name: "Dec",
		value: Math.floor(Math.random() * 500) + 653,
	},
];
