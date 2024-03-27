"use client";
import React, { useState } from "react";

import {
	AlertCircle,
	Archive,
	ArchiveX,
	File,
	Inbox,
	MessagesSquare,
	Search,
	Send,
	ShoppingCart,
	Trash2,
	Users2,
} from "lucide-react";
import { Nav } from "./ui/nav";

type Props = {};

function SideBar({}: Props) {
	const [isCollapsed, setisCollapsed] = useState(false);

	const toggleNavbarCollapseState = () => {
		setisCollapsed(!isCollapsed);
	};
	return (
		<div>
			<Nav
				isCollapsed={isCollapsed}
				links={[
					{
						title: "Inbox",
						label: "128",
						icon: Inbox,
						variant: "default",
					},
					{
						title: "Drafts",
						label: "9",
						icon: File,
						variant: "ghost",
					},
					{
						title: "Sent",
						label: "",
						icon: Send,
						variant: "ghost",
					},
					{
						title: "Junk",
						label: "23",
						icon: ArchiveX,
						variant: "ghost",
					},
					{
						title: "Trash",
						label: "",
						icon: Trash2,
						variant: "ghost",
					},
					{
						title: "Archive",
						label: "",
						icon: Archive,
						variant: "ghost",
					},
				]}
			/>
		</div>
	);
}

export default SideBar;
