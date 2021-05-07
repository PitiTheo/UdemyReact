import React from "react";

function ExpenseItem() {
	const expenseDate = new Date(2021, 2, 28);
	const expenseTitle = "car insurance";
	const expenseAmount = 294.5;

	return (
		<div>
			<h2>{expenseTitle}</h2>
			<div>{expenseDate.toISOString()}</div>
			<div>{expenseAmount} USD</div>
			<div>{Math.random()}</div>
			<div>{1 + 1}</div>
		</div>
	);
}
export default ExpenseItem;
