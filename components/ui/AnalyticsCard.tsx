import { LucideIcon } from "lucide-react";
import React from "react";
import DashboardComponentsContainer from "./DashboardComponentsContainer";

export type AnalyticCardProps = {
	label: string;
	Icon: LucideIcon;
	amount: string;
	description: string;
};

const AnalyticsCard = ({
	cardData: { label, Icon, amount, description },
}: {
	cardData: AnalyticCardProps;
}) => {
	return (
		<DashboardComponentsContainer>
			<div className='flex justify-between items-center'>
				<span>{label}</span>

				<Icon className='text-slate-500 w-6 h-6' />
			</div>

			<div className='flex flex-col gap-2'>
				<h2 className='text-xl sm:text-2xl font-semibold'>{amount}</h2>

				<p className='text-sm font-light'>{description}</p>
			</div>
		</DashboardComponentsContainer>
	);
};

export default AnalyticsCard;
