import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DashboardRecentOrdersData } from "@/lib/dummyData";
import Image from "next/image";

const DashboardOrderCard = ({
	cardData: { imgUrl, name, email, amount },
}: {
	cardData: DashboardRecentOrdersData;
}) => {
	return (
		<div className='flex gap-4 items-center p-2 border rounded-lg my-2 shadow'>
			<Avatar className='w-14 h-14'>
				<AvatarImage
					src={imgUrl}
					alt='Avatar'
				/>
				<AvatarFallback>User</AvatarFallback>
			</Avatar>

			<div className='flex flex-col gap-2 sm:flex-row sm:justify-between sm:w-full sm:px-4 lg:flex-col xl:flex-row'>
				<div className='flex flex-col h-full justify-between'>
					<h1 className='text-lg font-normal'>{name}</h1>

					<h3 className='text-sm font-light text-slate-500'>{email}</h3>
				</div>

				<h1 className='text-base sm:text-lg font-medium'>{amount}</h1>
			</div>
		</div>
	);
};

export default DashboardOrderCard;
