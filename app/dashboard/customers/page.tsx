import PageHeader from "@/components/PageHeader";

import React, { useEffect, useState } from "react";
import CustomerTableWrapper from "./CustomerTableWrapper";

type Props = {};

const CustomersPage = async (props: Props) => {
	await new Promise<void>((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, 3000);
	});
	return (
		<div className='py-4 px-2 flex flex-col gap-5 max-w-full h-full overflow-hidden'>
			<PageHeader title='Customers' />

			<CustomerTableWrapper />
		</div>
	);
};

export default CustomersPage;
