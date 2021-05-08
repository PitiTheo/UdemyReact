import React from "react";
import PropTypes from "prop-types";

function ExpenseItem(props) {
	const month = props.date.toLocaleString("en-US", { month: "long" });
	const day = props.date.toLocaleString("en-US", { day: "2-digit" });
	const year = props.date.getFullYear();

	return (
		<div>
			<h2>{props.title}</h2>
			<div>
				<div>{month}</div>
				<div>{day}</div>
				<div>{year}</div>
			</div>
			<div>{props.amount} USD</div>
			<div>{Math.random()}</div>
			<div>{1 + 1}</div>
		</div>
	);
}

ExpenseItem.propTypes = {
	name: PropTypes.string,
	title: PropTypes.string,
	date: PropTypes.number,
	amount: PropTypes.number
};

export default ExpenseItem;
