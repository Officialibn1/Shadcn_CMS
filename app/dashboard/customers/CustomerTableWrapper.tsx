"use client";

import React, { useEffect, useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import {
	DesktopCustomerColumn,
	TabletCustomerColumn,
	MobileCustomerColumn,
} from "@/components/ui/CustomerColumn";
import CustomerTable from "@/components/ui/CustomersTable";
import { customers } from "@/lib/dummyData";

const CustomerTableWrapper = () => {
	const [windowWidth, setWindowWidth] = useState(0);

	const screenWidth = useWindowWidth();

	useEffect(() => {
		setWindowWidth(screenWidth);
	}, []);
	return (
		<div className=' max-w-[300px] sm:max-w-full  overflow-x-auto'>
			{windowWidth < 600 && (
				<CustomerTable
					columns={MobileCustomerColumn}
					data={customers}
				/>
			)}

			{windowWidth > 600 && windowWidth < 1300 && (
				<CustomerTable
					columns={TabletCustomerColumn}
					data={customers}
				/>
			)}

			{windowWidth >= 1300 && (
				<CustomerTable
					columns={DesktopCustomerColumn}
					data={customers}
				/>
			)}
		</div>
	);
};

export default CustomerTableWrapper;
