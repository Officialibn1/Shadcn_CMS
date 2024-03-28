import type { Metadata } from "next";
import SideBar from "@/components/SideBar";

export const metadata: Metadata = {
	title: "Dashboard",
	description: "Overview of your dashboard and data's",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='min-h-screen, w-full flex'>
			<SideBar />
			<div className='w-full p-8'>{children}</div>
		</div>
	);
}
