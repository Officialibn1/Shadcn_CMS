import PageHeader from "@/components/PageHeader";
import ProfileForm from "@/components/ProfileForm";
import { Separator } from "@/components/ui/separator";
import React from "react";

type Props = {};

const ProfilePage = (props: Props) => {
	return (
		<div className='py-4 px-2 flex flex-col gap-5'>
			<PageHeader title='My Profile' />

			<Separator />

			<div className='w-full  lg:w-[768px]'>
				<ProfileForm />
			</div>
		</div>
	);
};

export default ProfilePage;
