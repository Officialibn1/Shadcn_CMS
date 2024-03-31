"use client";
import React, { useEffect, useState } from "react";

import {
	ChevronLeft,
	LayoutDashboard,
	MailIcon,
	Settings,
	ShoppingBag,
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

	const toggleNavbarCollapseState = () => {
		setisCollapsed(!isCollapsed);
	};

	const [isSmallScreenView, setisSmallScreenView] = useState(true);

	const screenWidth = useWindowWidth();

	useEffect(() => {
		if (screenWidth < 769) {
			setisSmallScreenView(true);
		} else {
			setisSmallScreenView(false);
		}
	}, []);

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
						variant: "ghost",
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
						title: "Orders",
						label: "23",
						icon: ShoppingBag,
						variant: "ghost",
						href: "/dashboard/orders",
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
