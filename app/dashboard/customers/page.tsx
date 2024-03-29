"use client";
import PageHeader from "@/components/PageHeader";
import {
	DesktopCustomerColumn,
	TabletCustomerColumn,
	MobileCustomerColumn,
} from "@/components/ui/CustomerColumn";
import CustomerTable from "@/components/ui/CustomersTable";
import { customers } from "@/lib/dummyData";
import React from "react";
import { useWindowWidth } from "@react-hook/window-size";

type Props = {};

const CustomersPage = (props: Props) => {
	const windowWidth = useWindowWidth();
	return (
		<div className='py-4 px-2 flex flex-col gap-5 max-w-full h-full overflow-hidden'>
			<PageHeader title='Customers' />

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
		</div>
	);
};

export default CustomersPage;
