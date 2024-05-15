import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SideBar from "@/components/SideBar";
import { Themeprovider } from "@/providers/theme_providers";
import { Toaster } from "@/components/ui/toaster";
import { dark } from "@clerk/themes";

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
				<ClerkProvider
					appearance={{
						baseTheme: dark,
					}}>
					<Themeprovider
						attribute='class'
						defaultTheme='dark'
						enableSystem>
						{children}
					</Themeprovider>
					<Toaster />
				</ClerkProvider>
			</body>
		</html>
	);
}
