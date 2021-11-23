import React from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((item) => {
        return <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
          />;
      })}
    </Card>
  );
}

export default Expenses;
