import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SideBar from "@/components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ShadCn CMS Dashboard",
	description: "Created for managing inventory, monitoring sales and customers",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={cn("outline min-h-screen", inter.className, {
					"debug-screens": process.env.NODE_ENV === "development",
				})}>
				{children}
			</body>
		</html>
	);
}
