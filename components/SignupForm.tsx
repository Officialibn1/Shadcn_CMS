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
	FormDescription,
	FormField,
	FormItem,
	FormMessage,
} from "./ui/form";

import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/components/ui/input-otp";

import { toast } from "./ui/use-toast";
import { Label } from "./ui/label";
import { useRouter } from "next/navigation";
import { useSignUp } from "@clerk/nextjs";

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

const OTPSchema = z.object({
	pin: z.string().min(6, {
		message: "Your one-time password must be 6 characters.",
	}),
});

type SignUpFormValues = z.infer<typeof signUpFormSchema>;

const defaultSignUpFormValues: Partial<SignUpFormValues> = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
};

const SignUpForm = () => {
	const { isLoaded, signUp, setActive } = useSignUp();

	const [isLoading, setIsLoading] = useState(false);

	const [pendingVerification, setPendingVerification] = useState(false);

	const router = useRouter();

	const form = useForm<SignUpFormValues>({
		resolver: zodResolver(signUpFormSchema),
		defaultValues: defaultSignUpFormValues,
		mode: "onChange",
	});

	const otpForm = useForm<z.infer<typeof OTPSchema>>({
		resolver: zodResolver(OTPSchema),
		defaultValues: {
			pin: "",
		},
	});

	async function onSubmit(data: SignUpFormValues) {
		setIsLoading(true);

		if (!isLoaded) {
			toast({
				title: `An error was encountered`,
				// @ts-ignore
				description: `There could be an issue with the network`,
				variant: "destructive",
			});

			setIsLoading(false);

			return;
		}

		try {
			await signUp.create({
				firstName: data.firstName,
				lastName: data.lastName,
				emailAddress: data.email,
				password: data.password,
			});

			await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

			toast({
				title: `An OTP email have been sent to ${data.email}`,
			});

			setPendingVerification(true);

			setIsLoading(false);
		} catch (error) {
			// @ts-ignore
			if (error.status === 422) {
				toast({
					title: `This email address have already been taken.`,

					variant: "destructive",
				});
			} else {
				toast({
					title: `A network/server error was encountered`,
					// @ts-ignore
					description: `${error.message}`,
					variant: "destructive",
				});
			}

			setIsLoading(false);
		}

		setIsLoading(false);
	}

	async function onVerify(data: z.infer<typeof OTPSchema>) {
		setIsLoading(true);

		if (!isLoaded) {
			setIsLoading(false);

			return;
		}

		try {
			const res = await signUp.attemptEmailAddressVerification({
				code: data.pin,
			});

			console.log({
				code: data.pin,
				message: "OTP Ran",
			});

			if (res.status === "complete") {
				toast({
					title: `OTP verification successfull`,
				});
				await setActive({ session: res.createdSessionId });

				router.push("/dashboard");
			}

			if (res.status !== "complete") {
				toast({
					title: `An error was encountered`,
					// @ts-ignore
					description: `${JSON.stringify(res, null, 2)}`,
					variant: "destructive",
				});

				setPendingVerification(false);
			}

			setIsLoading(false);
		} catch (error) {
			toast({
				title: `There was an error while verifying OTP`,
				// @ts-ignore
				description: `${error.message}`,
				variant: "destructive",
			});
		}

		setIsLoading(false);
	}

	if (!pendingVerification) {
		return (
			<div className={cn("grid gap-6")}>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<FormField
							control={form.control}
							name='firstName'
							render={({ field }) => (
								<FormItem>
									<Label className='font-light'>First Name</Label>
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
									<Label className='font-light'>Last Name</Label>
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
									<Label className='font-light'>Email</Label>
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
									<Label className='font-light'>Password</Label>
									<FormControl>
										<Input
											placeholder='Enter password at least 8 characters'
											{...field}
											name='password'
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
	}

	return (
		<Form {...otpForm}>
			<form onSubmit={otpForm.handleSubmit(onVerify)}>
				<FormField
					control={otpForm.control}
					name='pin'
					render={({ field }) => (
						<FormItem className=' flex flex-col items-center '>
							<Label className='font-light text-center'>Enter OTP</Label>
							<FormControl>
								<InputOTP
									maxLength={6}
									{...field}>
									<InputOTPGroup>
										<InputOTPSlot index={0} />
										<InputOTPSlot index={1} />
										<InputOTPSlot index={2} />
										<InputOTPSlot index={3} />
										<InputOTPSlot index={4} />
										<InputOTPSlot index={5} />
									</InputOTPGroup>
								</InputOTP>
							</FormControl>
							<FormDescription>
								Please enter the one-time password sent to your email.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					className='w-full mt-3'
					disabled={isLoading}>
					{isLoading && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
					Verify
				</Button>
			</form>
		</Form>
	);
};

export default SignUpForm;
