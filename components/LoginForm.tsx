"use client";
import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { useSignIn, SignInButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { toast } from "./ui/use-toast";

const signInFormSchema = z.object({
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

type SignInFormValues = z.infer<typeof signInFormSchema>;

const defaultSignInFormValues: Partial<SignInFormValues> = {
	email: "",
	password: "",
};

const LoginForm = () => {
	const { isLoaded, signIn, setActive } = useSignIn();

	const [isLoading, setIsLoading] = useState(false);

	const router = useRouter();

	const form = useForm<SignInFormValues>({
		resolver: zodResolver(signInFormSchema),
		defaultValues: defaultSignInFormValues,
		mode: "onChange",
	});

	async function onSubmit(data: SignInFormValues) {
		setIsLoading(true);

		console.log("Crerk Ready", isLoading);

		if (!isLoaded) {
			toast({
				title: `An error was encountered`,
				// @ts-ignore
				description: `The Login Server have not loaded`,
				variant: "destructive",
			});

			setIsLoading(false);

			return;
		}

		try {
			console.log({
				// strategy: "password",
				identifier: data.email,
				password: data.password,
			});

			const signInAttempt = await signIn.create({
				identifier: data.email,
				password: data.password,
			});

			console.log(signInAttempt);

			if (signInAttempt.status === "complete") {
				await setActive({ session: signInAttempt.createdSessionId });

				toast({
					title: `Login Successful`,
				});

				router.push("/dashboard");
			} else {
				console.log(JSON.stringify(signInAttempt, null, 2));
			}

			setIsLoading(false);
		} catch (error) {
			// @ts-ignore
			if (error.status === 422) {
				toast({
					title: `Invalid Credentials.`,

					variant: "destructive",
				});
			} else {
				// @ts-ignore
				console.log(error.message);

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

	return (
		<div className={cn("grid gap-6")}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
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
										type='password'
										onChange={field.onChange}
										defaultValue={field.value}
									/>
								</FormControl>
								{/* jhqjwh%#^12HJ */}

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
						SignIn with Email
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default LoginForm;
