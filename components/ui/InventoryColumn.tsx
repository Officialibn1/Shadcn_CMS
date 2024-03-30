"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Customer, Order, Stock } from "@/lib/dummyData";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Button } from "./button";

import { cn } from "@/lib/utils";
import { Pencil, Trash } from "lucide-react";

export const MobileInventoryColumn: ColumnDef<Stock>[] = [
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
				className={cn("w-full", {
					"bg-red-400 hover:bg-red-400/70":
						row.getValue("status") === "Out of Stock",
					"bg-green-400 hover:bg-green-400/70":
						row.getValue("status") === "In Stock",
				})}>
				{row.getValue("status")}
			</Button>
		),
	},
	{
		accessorKey: "name",
		header: () => <div className='font-semibold text-lg'>Desc</div>,
	},

	{
		accessorKey: "price",
		header: "Price",
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue("price"));
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

export const TabletInventoryColumn: ColumnDef<Stock>[] = [
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
	// {
	// 	accessorKey: "id",
	// 	header: () => <div className='font-semibold text-lg'>ID</div>,
	// },
	{
		accessorKey: "status",
		header: () => <div className='font-semibold text-lg'>Status</div>,
		cell: ({ row }) => (
			<Button
				className={cn("w-full", {
					"bg-red-400 hover:bg-red-400/70":
						row.getValue("status") === "Out of Stock",
					"bg-green-400 hover:bg-green-400/70":
						row.getValue("status") === "In Stock",
				})}>
				{row.getValue("status")}
			</Button>
		),
	},
	{
		accessorKey: "name",
		header: () => <div className='font-semibold text-lg'>Desc</div>,
	},

	{
		accessorKey: "price",
		header: () => <div className='font-semibold text-lg'>Price</div>,
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue("price"));
			const formatted = new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: "USD",
			}).format(amount);

			return (
				<div className='text-foreground font-medium text-base'>{formatted}</div>
			);
		},
	},
	{
		accessorKey: "item_qty",
		header: () => <div className='font-semibold text-lg'>Edit</div>,
		cell: ({ row }) => (
			<Button
				className={cn(
					"w-fit flex items-center justify-center bg-green-400 hover:bg-green-400/70",
					{},
				)}>
				<Pencil />
			</Button>
		),
	},
	{
		accessorKey: "item_qty",
		header: () => <div className='font-semibold text-lg'>Delete</div>,
		cell: ({ row }) => (
			<Button
				className={cn(
					"w-fit flex items-center justify-center bg-red-400 hover:bg-red-400/70",
					{},
				)}>
				<Trash />
			</Button>
		),
	},
];

export const DesktopInventoryColumn: ColumnDef<Stock>[] = [
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
						row.getValue("status") === "Out of Stock",
					"bg-green-400 hover:bg-green-400/70":
						row.getValue("status") === "In Stock",
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
		accessorKey: "price",
		header: () => <div className='font-semibold text-lg'>Price</div>,
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue("price"));
			const formatted = new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: "USD",
			}).format(amount);

			return (
				<div className='text-foreground font-medium text-base'>{formatted}</div>
			);
		},
	},
	{
		accessorKey: "item_qty",
		header: () => <div className='font-semibold text-lg'>Edit</div>,
		cell: ({ row }) => (
			<Button
				className={cn(
					"w-fit flex items-center justify-center bg-green-400 hover:bg-green-400/70",
				)}>
				<Pencil />
			</Button>
		),
	},
	{
		accessorKey: "item_qty",
		header: () => <div className='font-semibold text-lg'>Delete</div>,
		cell: ({ row }) => (
			<Button
				className={cn(
					"w-fit flex items-center justify-center bg-red-400 hover:bg-red-400/70",
				)}>
				<Trash />
			</Button>
		),
	},
];
