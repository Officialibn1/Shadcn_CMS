import React from "react";
import { shimmer } from "./ui/Shrimmer";

import { Skeleton as ShadCnSkeleton } from "@/components/ui/skeleton";

export function CardSkeleton() {
	return (
		<div className={`relative overflow-hidden rounded-xl w-full h-36  shadow`}>
			<ShadCnSkeleton className='h-36 rounded-sm w-full' />
		</div>
	);
}

export function CardsSkeleton() {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 justify-between'>
			<CardSkeleton />
			<CardSkeleton />
			<CardSkeleton />
			<CardSkeleton />
		</div>
	);
}

export function DashboardBarChartSkeleton() {
	return (
		<div
			className={`relative overflow-hidden rounded-xl bg-background w-full h-[400px] xl:h-[550px]  shadow`}>
			<ShadCnSkeleton className='h-full w-full rounded-sm' />
		</div>
	);
}

export function DashboardOrdersSkeleton() {
	return (
		<div
			className={`relative overflow-hidden rounded-xl bg-background w-full h-20   shadow`}>
			<ShadCnSkeleton className='h-full w-full rounded-sm' />
		</div>
	);
}

const DashboardSkeleton = () => {
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

			<CardsSkeleton />

			<div className='grid grid-cols-1 gap-5 mt-5 lg:grid-cols-2'>
				<DashboardBarChartSkeleton />

				<div className='flex flex-col gap-3 border p-4 rounded-sm'>
					<div className='flex flex-col justify-between gap-2 mb-3'>
						<div className='w-52 h-10'>
							<ShadCnSkeleton className='w-full h-8' />
						</div>
						<div className='w-72 h-6'>
							<ShadCnSkeleton className='w-full h-full rounded-sm' />
						</div>
					</div>
					<DashboardOrdersSkeleton />
					<DashboardOrdersSkeleton />
					<DashboardOrdersSkeleton />
					<DashboardOrdersSkeleton />
					<DashboardOrdersSkeleton />
				</div>
			</div>
		</div>
	);
};

export default DashboardSkeleton;
