"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const profileFormSchema = z.object({
	username: z
		.string()
		.min(2, {
			message: "Username must be at least 2 characters.",
		})
		.max(30, {
			message: "Username must not be longer than 30 characters.",
		}),
	email: z
		.string({
			required_error: "Please select an email to display.",
		})
		.email(),
	bio: z.string().max(160).min(4),
	urls: z
		.array(
			z.object({
				value: z.string().url({ message: "Please enter a valid URL." }),
			}),
		)
		.optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
	bio: "I’m a Front-End developer with a keen eye and passion for designing interactive and engaging web interfaces. My proficiency lies in converting Figma designs, sketches and any type of mockups into fully functional and dynamic websites and web applications ensuring pixel perfect design (UI) and great user experience (UX) across all devices while adhering to performance best practices.",
	urls: [
		{ value: "https://www.linkedin.com/in/isah-muhammad-5046b125a/" },
		{ value: "https://github.com/Officialibn1" },
		{ value: "https://ibn.vzy.io" },
	],
};

const ProfileForm = () => {
	const form = useForm<ProfileFormValues>({
		resolver: zodResolver(profileFormSchema),
		defaultValues,
		mode: "onChange",
	});

	const { fields, append } = useFieldArray({
		name: "urls",
		control: form.control,
	});

	function onSubmit(data: ProfileFormValues) {
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
					<code className='text-white'>{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-8'>
				<FormField
					control={form.control}
					name='username'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input
									placeholder='Isah Ibn Muhammad'
									disabled
									{...field}
								/>
							</FormControl>
							<FormDescription>
								This is your public display name. It can be your real name or a
								pseudonym. You can only change this once every 30 days.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<Select
								onValueChange={field.onChange}
								defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder='Select a verified email to display' />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value='officilibn001@gmail.com'>
										officilibn001@gmail.com
									</SelectItem>
									<SelectItem value='fabulouselbin8598@gmail.com'>
										fabulouselbin8598@gmail.com
									</SelectItem>
									<SelectItem value='ibnsautomation@gmail.com'>
										ibnsautomation@gmail.com
									</SelectItem>
								</SelectContent>
							</Select>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='bio'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Bio</FormLabel>
							<FormControl>
								<Textarea
									placeholder='About Me'
									className='resize-auto min-h-36 lg:min-h-28'
									disabled
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<div>
					{fields.map((field, index) => (
						<FormField
							control={form.control}
							key={field.id}
							name={`urls.${index}.value`}
							render={({ field }) => (
								<FormItem>
									<FormLabel className={cn(index !== 0 && "sr-only")}>
										URLs
									</FormLabel>
									<FormDescription className={cn(index !== 0 && "sr-only")}>
										Here are links to my LinkedIn, GitHub and AI built portfolio
										website.
									</FormDescription>
									<FormControl>
										<Input
											disabled
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					))}
					<Button
						type='button'
						variant='outline'
						size='sm'
						className='mt-2'
						onClick={() => append({ value: "" })}>
						Add URL
					</Button>
				</div>
				<Button type='submit'>Update profile</Button>
			</form>
		</Form>
	);
};

export default ProfileForm;
