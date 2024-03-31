import React from "react";
import { Skeleton as ShadCnSkeleton } from "@/components/ui/skeleton";
import { DashboardOrdersSkeleton } from "@/components/DashboardSkeleton";

export function CustomerAndOrderPageTableColumnSkeleton() {
	return (
		<div
			className={`relative overflow-hidden rounded-xl bg-background w-full h-16   shadow`}>
			<ShadCnSkeleton className='h-full w-full rounded-sm' />
		</div>
	);
}

const Loading = () => {
	return (
		<div>
			<div className='flex justify-between h-16 items-center mb-10'>
				<div className='lg:ml-2 w-36 h-10'>
					<ShadCnSkeleton className='w-full h-10' />
				</div>
				<div className='w-10 h-10'>
					<ShadCnSkeleton className='w-10 h-10 rounded-sm' />
				</div>
			</div>

			<div className='flex flex-col gap-3 border p-4 rounded-sm'>
				<div className='flex justify-between gap-2 mb-3'>
					<ShadCnSkeleton className='w-24 h-7 rounded-sm' />
					<ShadCnSkeleton className='w-28 h-7 rounded-sm' />
					<ShadCnSkeleton className='w-28 h-7 rounded-sm' />
					<ShadCnSkeleton className='w-52 h-7 rounded-sm' />
					<ShadCnSkeleton className='w-32 h-7 rounded-sm' />
				</div>

				<CustomerAndOrderPageTableColumnSkeleton />
				<CustomerAndOrderPageTableColumnSkeleton />
				<CustomerAndOrderPageTableColumnSkeleton />
				<CustomerAndOrderPageTableColumnSkeleton />
				<CustomerAndOrderPageTableColumnSkeleton />
				<CustomerAndOrderPageTableColumnSkeleton />
				<CustomerAndOrderPageTableColumnSkeleton />
				<CustomerAndOrderPageTableColumnSkeleton />
				<CustomerAndOrderPageTableColumnSkeleton />
			</div>
		</div>
	);
};

export default Loading;
