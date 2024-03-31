import PageHeader from "@/components/PageHeader";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useWindowWidth } from "@react-hook/window-size";
import React from "react";
import InventoryTableWrapper from "./InventoryTableWrapper";

type Props = {};

const InventoryPage = async (props: Props) => {
	await new Promise<void>((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, 3000);
	});

	return (
		<div className='py-4 px-2 flex flex-col gap-5'>
			<PageHeader title='Inventory/Stocks' />
			<Separator />

			<div className='flex flex-row justify-end mb-2 '>
				<Button
					variant={"default"}
					className='px-8'>
					Add Stock
				</Button>
			</div>

			<InventoryTableWrapper />
		</div>
	);
};

export default InventoryPage;
