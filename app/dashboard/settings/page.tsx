import PageHeader from "@/components/PageHeader";
import { Separator } from "@/components/ui/separator";
import React from "react";

type Props = {};

const SettingsPage = (props: Props) => {
	return (
		<div className='py-4 px-2 flex flex-col gap-5'>
			<PageHeader title='Settings' />

			<Separator />
		</div>
	);
};

export default SettingsPage;
