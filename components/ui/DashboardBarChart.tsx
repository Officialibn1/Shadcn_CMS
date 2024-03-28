"use client";
import { dahsboardbarChartData } from "@/lib/dummyData";
import React from "react";
import {
	ResponsiveContainer,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	BarChart,
} from "recharts";

type Props = {};

const DashboardBarChart = (props: Props) => {
	return (
		<ResponsiveContainer
			width={"100%"}
			height={450}>
			<BarChart data={dahsboardbarChartData}>
				<XAxis
					dataKey={"name"}
					tickLine={false}
					axisLine={true}
					stroke={"#888888"}
					fontSize={14}
				/>
				<YAxis
					tickLine
					axisLine
					stroke={"#888888"}
					fontSize={14}
					tickFormatter={(value) => `$${value}`}
				/>
				{/* <Tooltip
					wrapperStyle={{
						// border: "2px solid red",
						borderRadius: "8px",
						overflow: "hidden",
						backgroundColor: "rgba(255, 255, 255, 0.4) !important",
					}}
					labelStyle={{ color: "rgba(22, 163, 74, 1)" }}
					// itemStyle={{ backgroundColor: "rgba(22, 163, 74, 0.5)" }}
				/> */}
				<Bar
					dataKey={"value"}
					radius={[6, 6, 0, 0]}
					fill='currentColor'
					className='fill-primary'
					// style={{ backgroundColor: "#16A34A" }}
				/>
			</BarChart>
		</ResponsiveContainer>
	);
};

export default DashboardBarChart;
