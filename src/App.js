import React from "react";
import "./style.css";
import ExpenseItem from './components/ExpenseItem';

export default function App() {
  return (
    <div>
      <h1>Let's get started!</h1>
      <p>This is also visible!</p>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}
