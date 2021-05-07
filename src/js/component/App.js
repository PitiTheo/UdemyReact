import React from "react";
import ExpenseItem from "./ExpenseItem";

export function App() {
	const expenses = [
		{
			id: "ed1",
			title: "toilet paper",
			amount: "94.12",
			date: Date(2020, 7, 8)
		},
		{
			id: "ed2",
			title: "car insurance",
			amount: 100.12,
			date: Date(2020, 8, 8)
		},
		{
			id: "ed3",
			title: "coffee",
			amount: 12,
			date: Date(2020, 7, 8)
		},
		{
			id: "ed4",
			title: "cigarrets",
			amount: 50,
			date: Date(2020, 10, 8)
		}
	];

	return (
		<div>
			<h2>Lets get satrted!</h2>
			<ExpenseItem
				title={expenses[0].title}
				amount={expenses[0].amount}
				date={expenses[0].date}
			/>
			<ExpenseItem
				title={expenses[1].title}
				amount={expenses[1].amount}
				date={expenses[1].date}
			/>
			<ExpenseItem
				title={expenses[2].title}
				amount={expenses[2].amount}
				date={expenses[2].date}
			/>
			<ExpenseItem
				title={expenses[3].title}
				amount={expenses[3].amount}
				date={expenses[3].date}
			/>
		</div>
	);
}
