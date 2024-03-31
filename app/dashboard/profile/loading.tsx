import React from "react";
import { Skeleton as ShadCnSkeleton } from "@/components/ui/skeleton";
import { DashboardOrdersSkeleton } from "@/components/DashboardSkeleton";
import { Separator } from "@/components/ui/separator";

export function ProfileInputSkeleton() {
	return (
		<div
			className={`relative overflow-hidden rounded-xl bg-background w-full h-10 my-1  shadow`}>
			<ShadCnSkeleton className='h-full w-full rounded-sm' />
		</div>
	);
}

const Loading = () => {
	return (
		<div>
			<div className='flex justify-between h-14 items-center mb-14'>
				<div className='lg:ml-2 w-36 h-10'>
					<ShadCnSkeleton className='w-full h-10' />
				</div>
				<div className='w-10 h-10'>
					<ShadCnSkeleton className='w-10 h-10 rounded-sm' />
				</div>
			</div>

			<Separator />

			<div className='flex flex-col justify-between gap-4 mb-3 mt-5'>
				<ShadCnSkeleton className='w-72 h-4 rounded-sm' />

				<div
					className={`relative overflow-hidden rounded-xl bg-background lg:w-[768px] mt-1 w-full h-10 my-1  shadow`}>
					<ShadCnSkeleton className='h-full w-full rounded-sm' />
				</div>

				<ShadCnSkeleton className='w-60 h-4 rounded-sm' />

				<div
					className={`relative overflow-hidden rounded-xl bg-background lg:w-[768px] mt-1 w-full h-10 my-1  shadow`}>
					<ShadCnSkeleton className='h-full w-full rounded-sm' />
				</div>
				<ShadCnSkeleton className='w-60 h-4 rounded-sm' />

				<ShadCnSkeleton className='w-40 h-8' />
			</div>
			<ShadCnSkeleton className='w-14 my-2 h-8' />

			<div
				className={`relative overflow-hidden rounded-xl bg-background lg:w-[768px] mt-1 w-full h-40 lg:h-20 my-1  shadow`}>
				<ShadCnSkeleton className='h-full w-full rounded-sm' />
			</div>

			<div className='flex flex-col gap-2 mt-8  rounded-sm lg:w-[768px]'>
				<ShadCnSkeleton className='w-14 h-8' />

				<ShadCnSkeleton className='w-60 h-4 rounded-sm' />
				<ProfileInputSkeleton />
				<ProfileInputSkeleton />
				<ProfileInputSkeleton />
			</div>

			<ShadCnSkeleton className='w-52 mb-3 mt-5 h-6 rounded-sm' />
			<ShadCnSkeleton className='w-60 h-4 rounded-sm' />

			<div className='flex flex-row justify-start mb-5 mt-3 '>
				<ShadCnSkeleton className='w-32 h-10' />
			</div>
		</div>
	);
};

export default Loading;
