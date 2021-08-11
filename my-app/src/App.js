import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const dumpExpenses = [
  {
    id: "e1",
    title: "Car repair",
    amount: "100",
    date: new Date(2021, 2, 7),
  },
  {
    id: "e2",
    title: "Cigarettes",
    amount: "500",
    date: new Date(2021, 2, 17),
  },
  {
    id: "e3",
    title: "Fuel",
    amount: "50",
    date: new Date(2021, 2, 23),
  },
  {
    id: "e4",
    title: "Food for a week",
    amount: "250",
    date: new Date(2021, 2, 22),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dumpExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
