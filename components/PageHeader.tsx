"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

type Props = {
	title: string;
	className?: string;
};

const PageHeader = ({ title, className }: Props) => {
	const [theme, setTheme] = useState<"dark" | "light">("dark");
	return (
		<div className='flex justify-between w-full items-center mb-10'>
			<h1 className={cn("text-xl sm:text-2xl font-semibold", className)}>
				{title}
			</h1>

			<div className='flex flex-col gap-2 items-center'>
				<Button
					variant={"outline"}
					size={"icon"}>
					{theme === "dark" ? <Sun /> : <Moon />}
				</Button>
			</div>
		</div>
	);
};

export default PageHeader;
