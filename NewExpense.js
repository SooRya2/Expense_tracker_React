import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [newone, setNewone] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
    props.onAddExpense(expenseData);
  };

  const newHandler = () => {
    setNewone(true);
  };

  const stopedit = () => {
    setNewone(false);
  };

  return (
    <div className="new-expense">
      {!newone && <button onClick={newHandler}>Add New Expense</button>}
      {newone && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopedit}
        />
      )}
    </div>
  );
};

export default NewExpense;
