"use client";
// import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import LoginForm from "@/components/LoginForm";

import React from "react";
import Lottie from "lottie-react";

import AuthAnimation1 from "@/lottiefiles/AuthAnimation1.json";

import AuthAnimation2 from "@/lottiefiles/AuthAnimation2.json";

// export const metadata: Metadata = {
// 	title: "LogIn",
// 	description: "Login to your account to access the dashboard.",
// };

type Props = {};

const LoginPage = (props: Props) => {
	return (
		<div className='outline w-full flex min-h-screen place-items-center '>
			<div className='border container relative h-[600px] w-[80%] rounded-md shadow-lg flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 overflow-hidden'>
				<Link
					href='/signup'
					className={cn(
						buttonVariants({ variant: "ghost" }),
						"absolute right-4 top-4 md:right-8 md:top-8",
					)}>
					Sign Up
				</Link>
				<div className='relative hidden   h-[600px] w-full aspect-square items-center justify-center bg-primary/15 p-10 lg:flex dark:border-r'>
					<Lottie
						className='w-70% aspect-square'
						animationData={AuthAnimation2}
						loop={true}
					/>
					;
				</div>
				<div className='lg:p-8 mt-28 md:mt-0'>
					<div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
						<div className='flex flex-col space-y-2 text-center'>
							<h1 className='text-2xl font-semibold tracking-tight'>
								Login to your account
							</h1>
							<p className='text-sm text-muted-foreground'>
								Enter your email below to login your account
							</p>
						</div>

						<LoginForm />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
