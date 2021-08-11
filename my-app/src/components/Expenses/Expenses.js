import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const changeFilterHandler = (selectedYear) => {
    console.log("Working in expenses.js");
    setFilteredYear(selectedYear);
  };

  const filteredItems = props.items.filter(
    (element) => element.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      <ExpensesList items={filteredItems} />
    </Card>
  );
}
export default Expenses;
