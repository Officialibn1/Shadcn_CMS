"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Customer } from "@/lib/dummyData";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export const MobileCustomerColumn: ColumnDef<Customer>[] = [
	{
		accessorKey: "name",
		header: () => <div className='font-semibold text-lg'>{""}</div>,
		cell: ({ row }) => {
			function splitStringToFirstWord(row: string) {
				const firstSpaceIndex = row.indexOf(" ");
				if (firstSpaceIndex !== -1) {
					// Check if space exists
					return row.substring(0, firstSpaceIndex);
				} else {
					return row; // Return the original string if there's no space
				}
			}

			let name = splitStringToFirstWord(row.getValue("name"));
			return (
				<Avatar className='w-14 h-14'>
					<AvatarImage
						src={`https://api.dicebear.com/8.x/adventurer/svg?seed=${name}`}
						alt='Avatar'
					/>
					<AvatarFallback>{name}</AvatarFallback>
				</Avatar>
			);
		},
	},
	{
		accessorKey: "name",
		header: () => <div className='font-semibold text-lg'>Name</div>,
	},

	{
		accessorKey: "spent",
		header: "Spent",
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue("spent"));
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

export const TabletCustomerColumn: ColumnDef<Customer>[] = [
	{
		accessorKey: "name",
		header: () => <div className='font-semibold text-lg'>{""}</div>,
		cell: ({ row }) => {
			function splitStringToFirstWord(row: string) {
				const firstSpaceIndex = row.indexOf(" ");
				if (firstSpaceIndex !== -1) {
					// Check if space exists
					return row.substring(0, firstSpaceIndex);
				} else {
					return row; // Return the original string if there's no space
				}
			}

			let name = splitStringToFirstWord(row.getValue("name"));
			return (
				<Avatar className='w-14 h-14'>
					<AvatarImage
						src={`https://api.dicebear.com/8.x/adventurer/svg?seed=${name}`}
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
		accessorKey: "email",
		header: () => <div className='font-semibold text-lg'>Email</div>,
	},

	{
		accessorKey: "spent",
		header: () => <div className='font-semibold text-lg'>Spent</div>,
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue("spent"));
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

export const DesktopCustomerColumn: ColumnDef<Customer>[] = [
	{
		accessorKey: "name",
		header: () => <div className='font-semibold text-lg'>{""}</div>,
		cell: ({ row }) => {
			function splitStringToFirstWord(row: string) {
				const firstSpaceIndex = row.indexOf(" ");
				if (firstSpaceIndex !== -1) {
					// Check if space exists
					return row.substring(0, firstSpaceIndex);
				} else {
					return row; // Return the original string if there's no space
				}
			}

			let name = splitStringToFirstWord(row.getValue("name"));
			return (
				<Avatar className='w-14 h-14'>
					<AvatarImage
						src={`https://api.dicebear.com/8.x/adventurer/svg?seed=${name}`}
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
		accessorKey: "name",
		header: () => <div className='font-semibold text-lg'>Name</div>,
	},
	{
		accessorKey: "email",
		header: () => <div className='font-semibold text-lg'>Email</div>,
	},
	{
		accessorKey: "address",
		header: () => <div className='font-semibold text-lg'>Address</div>,
	},
	{
		accessorKey: "spent",
		header: () => <div className='font-semibold text-lg'>Spent</div>,
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue("spent"));
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
