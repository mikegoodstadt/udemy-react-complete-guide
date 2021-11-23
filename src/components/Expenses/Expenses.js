import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2020');

  const filterYearHandler = (year) => {
    setFilterYear(year);
    console.log('Filter Year:', year)
  };

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selected={filterYear} onSelectYear={filterYearHandler}/>
        {props.expenses.map((item) => {
          return <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
          />;
        })}
      </Card>
    </div>
  );
}

export default Expenses;
