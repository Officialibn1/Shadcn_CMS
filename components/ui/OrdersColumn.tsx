"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Customer, Order } from "@/lib/dummyData";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Button } from "./button";

import { cn } from "@/lib/utils";

export const MobileOrderColumn: ColumnDef<Order>[] = [
	{
		accessorKey: "name",
		header: () => <div className='font-semibold text-lg'>{""}</div>,
		cell: ({ row }) => {
			function splitStringToFirstWord(row: string) {
				const lastSpaceIndex = row.indexOf(" ");
				if (lastSpaceIndex !== -1) {
					// Check if space exists
					return row.substring(lastSpaceIndex + 1);
				} else {
					return row; // Return the original string if there's no space
				}
			}

			let name = splitStringToFirstWord(row.getValue("name"));
			return (
				<Avatar className='w-14 h-14 rounded-md'>
					<AvatarImage
						src={`https://api.dicebear.com/8.x/fun-emoji/svg?seed=${name}`}
						alt='Avatar'
					/>
					<AvatarFallback>{name}</AvatarFallback>
				</Avatar>
			);
		},
	},
	{
		accessorKey: "status",
		header: () => <div className='font-semibold text-lg'>Status</div>,
		cell: ({ row }) => (
			<Button
				className={cn("w-1/2", {
					"bg-red-400 hover:bg-red-400/70":
						row.getValue("status") === "Cancelled",
					"bg-green-400 hover:bg-green-400/70":
						row.getValue("status") === "Paid",
					"bg-yellow-400 hover:bg-yellow-400/70":
						row.getValue("status") === "Pending",
				})}>
				{row.getValue("status")}
			</Button>
		),
	},

	{
		accessorKey: "total",
		header: "Total",
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue("total"));
			const formatted = new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: "USD",
			}).format(amount);

			return (
				<div className='text-foreground font-medium text-base'>{formatted}</div>
			);
		},
	},
];

export const TabletOrderColumn: ColumnDef<Order>[] = [
	{
		accessorKey: "name",
		header: () => <div className='font-semibold text-lg'>{""}</div>,
		cell: ({ row }) => {
			function splitStringToFirstWord(row: string) {
				const lastSpaceIndex = row.indexOf(" ");
				if (lastSpaceIndex !== -1) {
					// Check if space exists
					return row.substring(lastSpaceIndex + 1);
				} else {
					return row; // Return the original string if there's no space
				}
			}

			let name = splitStringToFirstWord(row.getValue("name"));
			return (
				<Avatar className='w-14 h-14 rounded-md'>
					<AvatarImage
						src={`https://api.dicebear.com/8.x/fun-emoji/svg?seed=${name}`}
						alt='Avatar'
					/>
					<AvatarFallback>{name}</AvatarFallback>
				</Avatar>
			);
		},
	},
	{
		accessorKey: "id",
		header: () => <div className='font-semibold text-lg'>ID</div>,
	},
	{
		accessorKey: "status",
		header: () => <div className='font-semibold text-lg'>Status</div>,
		cell: ({ row }) => (
			<Button
				className={cn("w-1/2", {
					"bg-red-400 hover:bg-red-400/70":
						row.getValue("status") === "Cancelled",
					"bg-green-400 hover:bg-green-400/70":
						row.getValue("status") === "Paid",
					"bg-yellow-400 hover:bg-yellow-400/70":
						row.getValue("status") === "Pending",
				})}>
				{row.getValue("status")}
			</Button>
		),
	},
	{
		accessorKey: "item_qty",
		header: () => <div className='font-semibold text-lg'>Item Qty</div>,
	},

	{
		accessorKey: "total",
		header: () => <div className='font-semibold text-lg'>Total</div>,
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue("total"));
			const formatted = new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: "USD",
			}).format(amount);

			return (
				<div className='text-foreground font-medium text-base'>{formatted}</div>
			);
		},
	},
];

export const DesktopOrderColumn: ColumnDef<Order>[] = [
	{
		accessorKey: "name",
		header: () => <div className='font-semibold text-lg'>{""}</div>,
		cell: ({ row }) => {
			function splitStringToFirstWord(row: string) {
				const lastSpaceIndex = row.indexOf(" ");
				if (lastSpaceIndex !== -1) {
					// Check if space exists
					return row.substring(lastSpaceIndex + 1);
				} else {
					return row; // Return the original string if there's no space
				}
			}

			let name = splitStringToFirstWord(row.getValue("name"));
			return (
				<Avatar className='w-14 h-14 rounded-md'>
					<AvatarImage
						src={`https://api.dicebear.com/8.x/fun-emoji/svg?seed=${name}`}
						alt='Avatar'
					/>
					<AvatarFallback>{name}</AvatarFallback>
				</Avatar>
			);
		},
	},
	{
		accessorKey: "id",
		header: () => <div className='font-semibold text-lg'>ID</div>,
	},

	{
		accessorKey: "status",
		header: () => <div className='font-semibold text-lg'>Status</div>,
		cell: ({ row }) => (
			<Button
				className={cn("w-1/2", {
					"bg-red-400 hover:bg-red-400/70":
						row.getValue("status") === "Cancelled",
					"bg-green-400 hover:bg-green-400/70":
						row.getValue("status") === "Paid",
					"bg-yellow-400 hover:bg-yellow-400/70":
						row.getValue("status") === "Pending",
				})}>
				{row.getValue("status")}
			</Button>
		),
	},
	{
		accessorKey: "item_qty",
		header: () => <div className='font-semibold text-lg'>Item Qty</div>,
	},
	{
		accessorKey: "name",
		header: () => <div className='font-semibold text-lg'>Desc</div>,
	},
	{
		accessorKey: "total",
		header: () => <div className='font-semibold text-lg'>Total</div>,
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue("total"));
			const formatted = new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: "USD",
			}).format(amount);

			return (
				<div className='text-foreground font-medium text-base'>{formatted}</div>
			);
		},
	},
];
