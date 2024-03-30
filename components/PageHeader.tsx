"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

type Props = {
	title: string;
	className?: string;
};

const PageHeader = ({ title, className }: Props) => {
	const { theme, setTheme } = useTheme();
	return (
		<div className='flex justify-between w-full items-center mb-10'>
			<h1 className={cn("text-xl sm:text-2xl font-semibold", className)}>
				{title}
			</h1>

			<div className='flex flex-col gap-2 items-center'>
				<Button
					className='ml-auto'
					variant={"ghost"}
					size={"icon"}
					onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
					<Moon className='w-8 h-8 absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100 transition-all' />

					<Sun className='w-8 h-8 absolute rotate-0 scale-100 dark:rotate-90 dark:scale-0 transition-all' />
				</Button>
			</div>
		</div>
	);
};

export default PageHeader;
