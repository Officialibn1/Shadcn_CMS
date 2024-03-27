"use client";
import React, { useState } from "react";

import {
	AlertCircle,
	Archive,
	ArchiveX,
	File,
	Inbox,
	LayoutDashboard,
	LogOut,
	MailIcon,
	MessagesSquare,
	Search,
	Send,
	Settings,
	ShoppingCart,
	Trash2,
	User,
	Users2,
	UsersRound,
} from "lucide-react";
import { Nav } from "./ui/nav";

type Props = {};

function SideBar({}: Props) {
	const [isCollapsed, setisCollapsed] = useState(true);

	const toggleNavbarCollapseState = () => {
		setisCollapsed(!isCollapsed);
	};
	return (
		<div>
			<Nav
				isCollapsed={isCollapsed}
				links={[
					{
						title: "Dashboard",
						label: "",
						icon: LayoutDashboard,
						variant: "default",
						href: "#",
					},
					{
						title: "Users",
						label: "",
						icon: UsersRound,
						variant: "ghost",
						href: "#",
					},
					{
						title: "Mial",
						label: "23",
						icon: MailIcon,
						variant: "ghost",
						href: "#",
					},
					{
						title: "Inventory",
						label: "",
						icon: ShoppingCart,
						variant: "ghost",
						href: "#",
					},
					{
						title: "Settings",
						label: "",
						icon: Settings,
						variant: "ghost",
						href: "#",
					},
					{
						title: "My Profile",
						label: "",
						icon: User,
						variant: "ghost",
						href: "#",
					},
					{
						title: "Logout",
						label: "",
						icon: LogOut,
						variant: "destructive",
						href: "#",
					},
				]}
			/>
		</div>
	);
}

export default SideBar;
