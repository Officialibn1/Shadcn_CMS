import PageHeader from "@/components/PageHeader";
import ProfileForm from "@/components/ProfileForm";
import { Separator } from "@/components/ui/separator";
import { UserProfile } from "@clerk/nextjs";
import React from "react";

type Props = {};

const ProfilePage = async (props: Props) => {
	await new Promise<void>((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, 2000);
	});
	return (
		<div className='py-4 px-2 flex flex-col gap-5 '>
			<PageHeader title='My Profile' />

			<Separator />

			<div className='w-[70vw] sm:w-[80vw] md:w-[83vw] lg:w-auto  overflow-x-scroll '>
				{/* <ProfileForm /> */}
				<UserProfile routing='hash' />
			</div>
		</div>
	);
};

export default ProfilePage;
