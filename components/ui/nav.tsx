"use client";

import Link from "next/link";
import { LogOut, LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePathname } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

interface NavProps {
	isCollapsed: boolean;
	links: {
		title: string;
		label?: string;
		icon: LucideIcon;
		variant: "default" | "ghost" | "destructive";
		href: string;
	}[];
}

export function Nav({ links, isCollapsed }: NavProps) {
	const pathName = usePathname();

	const { signOut } = useAuth();

	return (
		<TooltipProvider>
			<div
				data-collapsed={isCollapsed}
				className='group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2 h-[100%]'>
				<nav className=' grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2'>
					{links.map((link, index) =>
						isCollapsed ? (
							<Tooltip
								key={index}
								delayDuration={0}>
								<TooltipTrigger asChild>
									<Link
										href={link.href}
										className={cn(
											buttonVariants({
												variant: pathName === link.href ? "default" : "ghost",
												size: "icon",
											}),
											"h-9 w-9 my-2",
											link.variant === "default" &&
												"dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white",
										)}>
										<link.icon className='h-4 w-4' />
										<span className='sr-only'>{link.title}</span>
									</Link>
								</TooltipTrigger>
								<TooltipContent
									side='right'
									className='flex items-center gap-4'>
									{link.title}
									{link.label && <span className='ml-auto'>{link.label}</span>}
								</TooltipContent>
							</Tooltip>
						) : (
							<Link
								key={index}
								href={link.href}
								className={cn(
									"my-2",
									buttonVariants({
										variant: pathName === link.href ? "default" : "ghost",
										size: "default",
									}),
									link.variant === "default" &&
										"dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
									"justify-start",
								)}>
								<link.icon className='mr-2 h-4 w-4' />
								<span className='text-base font-light'>{link.title}</span>
								{link.label && (
									<span
										className={cn(
											"ml-auto text-green-500",
											link.variant === "default" && "text-background",
										)}>
										{link.label}
									</span>
								)}
							</Link>
						),
					)}
					{isCollapsed ? (
						<Tooltip delayDuration={0}>
							<TooltipTrigger asChild>
								<Button
									onClick={() => signOut()}
									className={cn(
										buttonVariants({ variant: "destructive", size: "icon" }),
										"h-9 w-9 mt-80",
										links[0].variant !== "default" &&
											"dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white",
									)}>
									<LogOut className='h-4 w-4' />
									<span className='sr-only'>{"Logout"}</span>
								</Button>
							</TooltipTrigger>
							<TooltipContent
								side='right'
								className='flex items-center gap-4 bg-destructive'>
								{"LogOut"}
							</TooltipContent>
						</Tooltip>
					) : (
						<Button
							onClick={() => signOut()}
							className={cn(
								"my-2 mt-80",
								buttonVariants({ variant: "destructive", size: "default" }),
								links[0].variant !== "default" &&
									"dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
								"justify-start",
							)}>
							<LogOut className='mr-2 h-4 w-4' />
							<span className='text-base font-light'>{"LogOut"}</span>
						</Button>
					)}
				</nav>
			</div>
		</TooltipProvider>
	);
}
