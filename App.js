import React,{useState}from 'react';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';


const  Dummy_expenses= [
  { id:'e1',title: "Bike Insurance", amount: 234.34, date: new Date(2020, 3, 13) },
  { id:'e2',title: "Car Insurance", amount: 544.34, date: new Date(2022, 2, 25) },
];

function App() {
  
  const [expenses,setExpenses]=useState(Dummy_expenses);
  
  const addExpenseHandler=(expense)=>
  {
      setExpenses(prevExpenses=>{
        return [expense,...prevExpenses];
      });

  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses exp={expenses}></Expenses>   
    </div>
  );
}

export default App;
