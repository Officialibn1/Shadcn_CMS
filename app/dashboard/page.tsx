import PageHeader from "@/components/PageHeader";
import AnalyticsCard from "@/components/ui/AnalyticsCard";
import { dashboardAnalyticsCardData } from "@/lib/dummyData";
import Image from "next/image";

export default function Home() {
	return (
		<div className='py-4 px-2'>
			<PageHeader title='Dashboard' />

			<section className='grid grid-cols-1 gap-4 gap-x-4 sm:grid-cols-2 xl:grid-cols-4'>
				{dashboardAnalyticsCardData.map((card, index) => (
					<AnalyticsCard
						key={index}
						cardData={card}
					/>
				))}
			</section>
		</div>
	);
}
