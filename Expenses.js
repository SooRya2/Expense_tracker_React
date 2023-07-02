import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFIlter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [year, setYearChange] = useState("2020");
  const filterChangeHandler = (enteredyear) => {
    setYearChange(enteredyear);
  };

  const filteredExpenses = props.exp.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={year} onYearChange={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filter={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
