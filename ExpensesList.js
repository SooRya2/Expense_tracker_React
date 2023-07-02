import React from "react";
import ExpenseItem from "./Expenseitem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let expensecontent = (
    <h2 className="expenses-list__fallback">No expenses found in this year</h2>
  );

  if (props.filter.length > 0) {
    expensecontent = props.filter.map(
      (
        expense //filteredexpenses stores the array of expense items for the selected year by confirming the year.
      ) => (
        <ExpenseItem
          key={expense.id}
          titl={expense.title}
          amt={expense.amount}
          date={expense.date}
        />
      )
    );
  }
  return <ul className="expenses-list">{expensecontent}</ul>;
};

export default ExpensesList;
