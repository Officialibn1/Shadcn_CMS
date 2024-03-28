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
