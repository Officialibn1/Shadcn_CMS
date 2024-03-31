"use client";

import React, { useEffect, useState } from "react";

import { orders } from "@/lib/dummyData";
import OrdersTable from "@/components/ui/OrdersTable";
import {
	DesktopOrderColumn,
	MobileOrderColumn,
	TabletOrderColumn,
} from "@/components/ui/OrdersColumn";
import { useWindowWidth } from "@react-hook/window-size";

const OrdersTableWrapper = () => {
	const [windowWidth, setWindowWidth] = useState(0);

	const screenWidth = useWindowWidth();

	useEffect(() => {
		setWindowWidth(screenWidth);
	}, []);
	return (
		<div className=' max-w-[300px] sm:max-w-full  overflow-x-auto'>
			{windowWidth < 600 && (
				<OrdersTable
					columns={MobileOrderColumn}
					data={orders}
				/>
			)}

			{windowWidth > 600 && windowWidth < 1300 && (
				<OrdersTable
					columns={TabletOrderColumn}
					data={orders}
				/>
			)}

			{windowWidth >= 1300 && (
				<OrdersTable
					columns={DesktopOrderColumn}
					data={orders}
				/>
			)}
		</div>
	);
};

export default OrdersTableWrapper;
