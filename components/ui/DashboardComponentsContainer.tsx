import React from "react";
import { cn } from "@/lib/utils";

const DashboardComponentsContainer = (
	props: React.HTMLAttributes<HTMLDivElement>,
) => {
	return (
		<div
			{...props}
			className={cn(
				"flex w-full flex-col p-3 gap-5 border shadow rounded-lg",
				props.className,
			)}
		/>
	);
};

export default DashboardComponentsContainer;
