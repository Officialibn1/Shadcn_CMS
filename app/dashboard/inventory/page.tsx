"use client";
import PageHeader from "@/components/PageHeader";
import {
	DesktopInventoryColumn,
	MobileInventoryColumn,
	TabletInventoryColumn,
} from "@/components/ui/InventoryColumn";
import InventoryTable from "@/components/ui/InventoryTable";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { orders, stock } from "@/lib/dummyData";
import { useWindowWidth } from "@react-hook/window-size";
import React from "react";

type Props = {};

const InventoryPage = (props: Props) => {
	const windowWidth = useWindowWidth();

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
		</div>
	);
};

export default InventoryPage;
