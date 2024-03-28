import PageHeader from "@/components/PageHeader";
import AnalyticsCard from "@/components/ui/AnalyticsCard";
import DashboardBarChart from "@/components/ui/DashboardBarChart";
import DashboardComponentsContainer from "@/components/ui/DashboardComponentsContainer";
import DashboardOrderCard from "@/components/ui/DashboardOrderCard";
import {
	dashboardAnalyticsCardData,
	dashboardRecentOrdersData,
} from "@/lib/dummyData";
import Image from "next/image";

export default function Home() {
	return (
		<div className='py-4 px-2 flex flex-col gap-5'>
			<PageHeader title='Dashboard' />

			<section className='grid grid-cols-1 gap-4 gap-x-4 sm:grid-cols-2 xl:grid-cols-4'>
				{dashboardAnalyticsCardData.map((card, index) => (
					<AnalyticsCard
						key={index}
						cardData={card}
					/>
				))}
			</section>

			<section className='grid grid-cols-1 gap-4 gap-x-4 lg:grid-cols-2 '>
				<DashboardComponentsContainer className='p-6'>
					<h1 className='text-lg font-semibold'>Yearly Revenue</h1>

					<DashboardBarChart />
				</DashboardComponentsContainer>

				<DashboardComponentsContainer className='p-6'>
					<div className='flex flex-col gap-1'>
						<h1 className='text-lg font-semibold'>Recent Orders</h1>
						<p className='text-sm font-light text-slate-500'>
							You have 46 new orders to be approved
						</p>
					</div>

					<div className='flex flex-col gap-1 max-h-[420px] overflow-y-auto '>
						{dashboardRecentOrdersData.map((order, i) => (
							<DashboardOrderCard
								cardData={order}
								key={i}
							/>
						))}
					</div>
				</DashboardComponentsContainer>
			</section>
		</div>
	);
}
