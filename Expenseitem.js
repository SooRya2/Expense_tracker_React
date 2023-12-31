import React from 'react';
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {

  return (
    <Card className="expense-item">
      <ExpenseDate dat={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.titl}</h2>
        <div className="expense-item__price">${props.amt}</div>
      </div>
      
    </Card>
    );
}

export default ExpenseItem;
