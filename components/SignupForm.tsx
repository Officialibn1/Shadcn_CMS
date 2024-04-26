"use client";
import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";
import { toast } from "./ui/use-toast";

const signUpFormSchema = z.object({
	firstName: z
		.string()
		.min(3, {
			message: "First name must be at least 3 characters!",
		})
		.max(20, {
			message: "First name msut not me more than 20 characters!",
		}),
	lastName: z
		.string()
		.min(3, {
			message: "Last name must be at least 3 characters!",
		})
		.max(20, {
			message: "Last name msut not me more than 20 characters!",
		}),
	email: z.string().email("Enter a valid email address."),
	password: z
		.string()
		.min(8, "Password must be at least 8 characters long")
		.regex(/[a-z]/, "Password must contain at least one lowercase letter")
		.regex(/[A-Z]/, "Password must contain at least one uppercase letter")
		.regex(/\d/, "Password must contain at least one digit")
		.regex(
			/[!@#$%^&*(),.?":{}|<>]/,
			"Password must contain at least one special character",
		),
});

type SignUpFormValues = z.infer<typeof signUpFormSchema>;

const defaultSignUpFormValues: Partial<SignUpFormValues> = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
};

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const SignUpForm = () => {
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm<SignUpFormValues>({
		resolver: zodResolver(signUpFormSchema),
		defaultValues: defaultSignUpFormValues,
		mode: "onChange",
	});

	async function onSubmit(data: SignUpFormValues) {
		setIsLoading(true);
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
					<code className='text-white'>{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	}

	return (
		<div className={cn("grid gap-6")}>
			{/* <form onSubmit={onSubmit}>
				<div className='grid gap-2'>
					<div className='grid gap-1'>
						<Label
							className='sr-only'
							htmlFor='email'>
							First Name
						</Label>
						<Input
							id='name'
							placeholder='Enter Name'
							type='text'
							autoCorrect='off'
							disabled={isLoading}
						/>
					</div>

					<div className='grid gap-1'>
						<Label
							className='sr-only'
							htmlFor='email'>
							Last Name
						</Label>
						<Input
							id='name'
							placeholder='Enter Name'
							type='text'
							autoCorrect='off'
							disabled={isLoading}
						/>
					</div>

					<div className='grid gap-1'>
						<Label
							className='sr-only'
							htmlFor='email'>
							Email
						</Label>
						<Input
							id='email'
							placeholder='name@example.com'
							type='email'
							autoCapitalize='none'
							autoComplete='email'
							autoCorrect='off'
							disabled={isLoading}
						/>
					</div>

					<div className='grid gap-1'>
						<Label
							className='sr-only'
							htmlFor='email'>
							Password
						</Label>
						<Input
							id='password'
							placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
							type='password'
							autoCapitalize='none'
							autoCorrect='off'
							disabled={isLoading}
						/>
					</div>
					<Button disabled={isLoading}>
						{isLoading && (
							<Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
						)}
						SignUp with Email
					</Button>
				</div>
			</form> */}
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<FormField
						control={form.control}
						name='firstName'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='font-light'>First Name</FormLabel>
								<FormControl>
									<Input
										placeholder='Enter First Name'
										{...field}
										onChange={field.onChange}
										defaultValue={field.value}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='lastName'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='font-light'>Last Name</FormLabel>
								<FormControl>
									<Input
										placeholder='Enter Last Name'
										{...field}
										onChange={field.onChange}
										defaultValue={field.value}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='font-light'>Email</FormLabel>
								<FormControl>
									<Input
										placeholder='Enter Valid Email'
										{...field}
										onChange={field.onChange}
										defaultValue={field.value}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='font-light'>Password</FormLabel>
								<FormControl>
									<Input
										placeholder='Enter password at least 8 characters'
										{...field}
										onChange={field.onChange}
										defaultValue={field.value}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<Button
						className='w-full mt-3'
						disabled={isLoading}>
						{isLoading && (
							<Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
						)}
						SignUp with Email
					</Button>
				</form>
			</Form>
			{/* <div className='relative'>
				<div className='absolute inset-0 flex items-center'>
					<span className='w-full border-t' />
				</div>
				<div className='relative flex justify-center text-xs uppercase'>
					<span className='bg-background px-2 text-muted-foreground'>
						Or continue with
					</span>
				</div>
			</div> */}
			{/* <Button
				variant='outline'
				type='button'
				disabled={isLoading}>
				{isLoading ? (
					<Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
				) : (
					<Icons.gitHub className='mr-2 h-4 w-4' />
				)}{" "}
				GitHub
			</Button> */}
		</div>
	);
};

export default SignUpForm;
