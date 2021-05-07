import React from "react";
import PropTypes from "prop-types";

function ExpenseItem(props) {
	return (
		<div>
			<h2>{props.title}</h2>
			<div>{props.date} USD</div>
			<div>{props.amount} USD</div>
			<div>{Math.random()}</div>
			<div>{1 + 1}</div>
		</div>
	);
}

ExpenseItem.propTypes = {
	name: PropTypes.string,
	title: PropTypes.string,
	date: PropTypes.Date,
	amount: PropTypes.float
};

export default ExpenseItem;
