"use client";
import PageHeader from "@/components/PageHeader";
import {
	DesktopCustomerColumn,
	TabletCustomerColumn,
	MobileCustomerColumn,
} from "@/components/ui/CustomerColumn";
import CustomerTable from "@/components/ui/CustomersTable";
import { customers, orders } from "@/lib/dummyData";
import React from "react";
import { useWindowWidth } from "@react-hook/window-size";
import OrdersTable from "@/components/ui/OrdersTable";
import {
	DesktopOrderColumn,
	MobileOrderColumn,
	TabletOrderColumn,
} from "@/components/ui/OrdersColumn";

type Props = {};

const CustomersPage = (props: Props) => {
	const windowWidth = useWindowWidth();
	return (
		<div className='py-4 px-2 flex flex-col gap-5 max-w-full h-full overflow-hidden'>
			<PageHeader title='Customers' />

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
		</div>
	);
};

export default CustomersPage;
