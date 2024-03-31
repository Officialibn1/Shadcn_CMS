"use client";

import React, { useEffect, useState } from "react";

import {
	DesktopInventoryColumn,
	MobileInventoryColumn,
	TabletInventoryColumn,
} from "@/components/ui/InventoryColumn";
import InventoryTable from "@/components/ui/InventoryTable";
import { stock } from "@/lib/dummyData";
import { useWindowWidth } from "@react-hook/window-size";

const InventoryTableWrapper = () => {
	const [windowWidth, setWindowWidth] = useState(0);

	const screenWidth = useWindowWidth();

	useEffect(() => {
		setWindowWidth(screenWidth);
	}, []);

	return (
		<div className=' max-w-[300px] sm:max-w-full  overflow-x-auto'>
			{windowWidth < 600 && (
				<InventoryTable
					columns={MobileInventoryColumn}
					data={stock}
				/>
			)}

			{windowWidth > 600 && windowWidth < 1300 && (
				<InventoryTable
					columns={TabletInventoryColumn}
					data={stock}
				/>
			)}

			{windowWidth >= 1300 && (
				<InventoryTable
					columns={DesktopInventoryColumn}
					data={stock}
				/>
			)}
		</div>
	);
};

export default InventoryTableWrapper;
