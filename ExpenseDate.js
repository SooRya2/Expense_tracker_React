import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.dat.toLocaleString("en-Us", { month: "long" });
  const day = props.dat.toLocaleString("en-US", { day: "2-digit" });
  const year = props.dat.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
