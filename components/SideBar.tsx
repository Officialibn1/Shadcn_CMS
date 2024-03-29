"use client";
import React, { useState } from "react";

import {
	ChevronLeft,
	LayoutDashboard,
	MailIcon,
	Settings,
	ShoppingCart,
	User,
	UsersRound,
} from "lucide-react";
import { Nav } from "./ui/nav";
import { Button } from "./ui/button";
import { useWindowWidth } from "@react-hook/window-size";

type Props = {};

function SideBar({}: Props) {
	const [isCollapsed, setisCollapsed] = useState(false);

	const screenWidth = useWindowWidth();

	const isSmallScreenView = screenWidth < 769;

	const toggleNavbarCollapseState = () => {
		setisCollapsed(!isCollapsed);
	};
	return (
		<div className='border border-l-3 px-2 py-5 pt-10 md:pt-24 min-h-screen relative'>
			{!isSmallScreenView && (
				<Button
					onClick={toggleNavbarCollapseState}
					variant={"secondary"}
					className='rounded-full p-2 absolute top-8 -right-5 hover:opacity-85'>
					<ChevronLeft />
				</Button>
			)}
			<Nav
				isCollapsed={isSmallScreenView ? true : isCollapsed}
				links={[
					{
						title: "Dashboard",
						label: "",
						icon: LayoutDashboard,
						variant: "default",
						href: "/dashboard",
					},
					{
						title: "Customers",
						label: "",
						icon: UsersRound,
						variant: "ghost",
						href: "/dashboard/customers",
					},
					{
						title: "Mial",
						label: "23",
						icon: MailIcon,
						variant: "ghost",
						href: "/dashboard/mails",
					},
					{
						title: "Inventory",
						label: "",
						icon: ShoppingCart,
						variant: "ghost",
						href: "/dashboard/inventory",
					},
					{
						title: "Settings",
						label: "",
						icon: Settings,
						variant: "ghost",
						href: "/dashboard/settings",
					},
					{
						title: "My Profile",
						label: "",
						icon: User,
						variant: "ghost",
						href: "/dashboard/profile",
					},
					// {
					// 	title: "Logout",
					// 	label: "",
					// 	icon: LogOut,
					// 	variant: "destructive",
					// 	href: "#",
					// },
				]}
			/>
		</div>
	);
}

export default SideBar;
