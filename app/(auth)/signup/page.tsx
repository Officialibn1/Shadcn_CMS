"use client";
// import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import SignUpForm from "@/components/SignupForm";

import React from "react";
import Lottie from "lottie-react";

import AuthAnimation1 from "@/lottiefiles/AuthAnimation1.json";

import AuthAnimation2 from "@/lottiefiles/AuthAnimation2.json";

// export const metadata: Metadata = {
// 	title: "LogIn",
// 	description: "Login to your account to access the dashboard.",
// };

type Props = {};

const SignUpPage = (props: Props) => {
	return (
		<div className='outline w-full flex min-h-screen place-items-center '>
			<div className='border container relative h-[600px] w-[80%] rounded-md shadow-lg flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 overflow-hidden'>
				<Link
					href='/'
					className={cn(
						buttonVariants({ variant: "ghost" }),
						"absolute right-4 top-4 md:right-8 md:top-8",
					)}>
					LogIn
				</Link>
				<div className='relative hidden   h-[600px] w-full aspect-square items-center justify-center bg-primary/15 p-10 lg:flex dark:border-r'>
					<Lottie
						className='w-70% aspect-square'
						animationData={AuthAnimation1}
						loop={true}
					/>
				</div>
				<div className='lg:p-8 mt-28 md:mt-0'>
					<div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
						<div className='flex flex-col space-y-2 text-center'>
							<h1 className='text-2xl font-semibold tracking-tight'>
								Create an account
							</h1>
							<p className='text-sm text-muted-foreground'>
								Enter your credentials below to create an account
							</p>
						</div>
						<SignUpForm />
						<p className='px-8 text-center text-sm text-muted-foreground'>
							By clicking continue, you agree to our{" "}
							<Link
								href='#'
								className='underline underline-offset-4 hover:text-primary'>
								Terms of Service
							</Link>{" "}
							and{" "}
							<Link
								href='#'
								className='underline underline-offset-4 hover:text-primary'>
								Privacy Policy
							</Link>
							.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUpPage;
