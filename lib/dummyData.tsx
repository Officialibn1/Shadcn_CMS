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

export type DashboardRecentOrdersData = {
	imgUrl: string;
	name: string;
	email: string;
	amount: string;
};

export const dashboardRecentOrdersData: DashboardRecentOrdersData[] = [
	{
		imgUrl: "/avatars/01.png",
		name: "Sarah Queen",
		email: "sarahqueen@shadcn.com",
		amount: "+$34,598.00",
	},
	{
		imgUrl: "/avatars/02.png",
		name: "John Doe",
		email: "johndoe@shadcn.com",
		amount: "+$34,598.00",
	},
	{
		imgUrl: "/avatars/03.png",
		name: "Isah Ibn",
		email: "isahibn@shadcn.com",
		amount: "+$34,598.00",
	},
	{
		imgUrl: "/avatars/04.png",
		name: "Allen Jr",
		email: "allenjr@shadcn.com",
		amount: "+$34,598.00",
	},
	{
		imgUrl: "/avatars/05.png",
		name: "Kate Woods",
		email: "katewoods@shadcn.com",
		amount: "+$34,598.00",
	},
	{
		imgUrl: "/avatars/01.png",
		name: "Sarah Queen",
		email: "sarahqueen@shadcn.com",
		amount: "+$34,598.00",
	},
	{
		imgUrl: "/avatars/02.png",
		name: "John Doe",
		email: "johndoe@shadcn.com",
		amount: "+$34,598.00",
	},
	{
		imgUrl: "/avatars/03.png",
		name: "Isah Ibn",
		email: "isahibn@shadcn.com",
		amount: "+$34,598.00",
	},
	{
		imgUrl: "/avatars/04.png",
		name: "Allen Jr",
		email: "allenjr@shadcn.com",
		amount: "+$34,598.00",
	},
	{
		imgUrl: "/avatars/05.png",
		name: "Kate Woods",
		email: "katewoods@shadcn.com",
		amount: "+$34,598.00",
	},
	{
		imgUrl: "/avatars/01.png",
		name: "Sarah Queen",
		email: "sarahqueen@shadcn.com",
		amount: "+$34,598.00",
	},
	{
		imgUrl: "/avatars/02.png",
		name: "John Doe",
		email: "johndoe@shadcn.com",
		amount: "+$34,598.00",
	},
	{
		imgUrl: "/avatars/03.png",
		name: "Isah Ibn",
		email: "isahibn@shadcn.com",
		amount: "+$34,598.00",
	},
	{
		imgUrl: "/avatars/04.png",
		name: "Allen Jr",
		email: "allenjr@shadcn.com",
		amount: "+$34,598.00",
	},
	{
		imgUrl: "/avatars/05.png",
		name: "Kate Woods",
		email: "katewoods@shadcn.com",
		amount: "+$34,598.00",
	},
];

export type Customer = {
	id: string;
	name: string;
	email: string;
	address: string;
	spent: number; //Total money the customer have used to purchase goods in my store
};

export const customers: Customer[] = [
	{
		id: "CUST001",
		name: "Callie Doe",
		email: "john.doe@example.com",
		address: "123 Main Street, Anytown, CA 12345",
		spent: 125.5,
	},
	{
		id: "CUST002",
		name: "Mittens Smith",
		email: "jane.smith@email.provider.com",
		address: "456 Elm Street, Springfield, NY 54321",
		spent: 78.99,
	},
	{
		id: "CUST003",
		name: "Patches Lee",
		email: "mike.lee@workplace.com",
		address: "789 Maple Ave, Centerville, TX 09876",
		spent: 0.0,
	},
	{
		id: "CUST004",
		name: "Alice Johnson",
		email: "alice.johnson@gmail.com",
		address: "10 Observatory Hill, Stargazer City, AZ 87654",
		spent: 210.75,
	},
	{
		id: "CUST005",
		name: "David Williams",
		email: "david.williams@hotmail.com",
		address: "321 Beach Road, Sunville, FL 33333",
		spent: 45.99,
	},
	{
		id: "CUST006",
		name: "Emily Garcia",
		email: "emily.garcia@yahoo.com",
		address: "567 Park Lane, Greenhaven, VT 05853",
		spent: 88.2,
	},
	{
		id: "CUST007",
		name: "Charles Miller",
		email: "charles.miller@company.com",
		address: "890 Mountain View, Highpoint, CO 80123",
		spent: 0.0, // New customer
	},
	{
		id: "CUST008",
		name: "Brenda Hernandez",
		email: "brenda.hernandez@internet.com",
		address: "25 Maple Street, Leafville, OR 97354",
		spent: 156.42,
	},
	{
		id: "CUST009",
		name: "Joseph Thomas",
		email: "joseph.thomas@outlook.com",
		address: "684 Evergreen Drive, Oakhaven, NJ 07034",
		spent: 99.0,
	},
	{
		id: "CUST010",
		name: "Ashley Moore",
		email: "ashley.moore@webmail.com",
		address: "13 Sunset Boulevard, Westview, CA 90210",
		spent: 32.5,
	},
	{
		id: "CUST011",
		name: "Sarah Jones",
		email: "sarah.jones@frugal.com",
		address: "42 Penny Lane, Thriftyville, WA 98052",
		spent: 250.0, // Loyal customer, but spends moderately
	},
	{
		id: "CUST012",
		name: "Daniel Robinson",
		email: "daniel.robinson@splurge.com",
		address: "7 Luxury Lane, Highroller City, NV 89100",
		spent: 1200.0, // Spends a lot, but less frequently
	},
	{
		id: "CUST013",
		name: "Marie Dupont",
		email: "marie.dupont@paris.fr",
		address: "12 Rue de la Paix, Paris, France 75002",
		spent: 75.2, // International customer with a recent purchase
	},
	{
		id: "CUST014",
		name: "Christopher Lee",
		email: "christopher.lee@dormant.net",
		address: "8 Silent Street, Ghosttown, WY 12345",
		spent: 0.0, // Inactive customer with no recent purchases
	},
	{
		id: "CUST015",
		name: "Acme Corporation",
		email: "orders@acmecorp.com",
		address: "1 Business Park Drive, Anytown, CA 12345",
		spent: 5000.0, // Wholesale buyer with high spending amount
	},
];
