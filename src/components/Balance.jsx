import React from "react";
import { useState } from 'react';
import "../styles/Balance.css";

// By importing the Section.css file, it is added to the DOM whenever this component loads
function Balance() {

// State variables for balance, expenses, and income

// balance holds the current value of the state variable and the function setBalance updates the value of balance
// the argument '0' passed in useSate is the initial value of the balance state variable
const [balance, setBalance] = useState(0);

// The same logic for balance applies here except that expenses state will start off as an empty array
const [expenses, setExpenses] = useState([]);

// The same logic for expenses applies here
const [income, setIncome] = useState([]);

// Function to add expense
const addExpense = (amount) => {
  // calculates the new balance, subtracts the amount parameter from the current value of balance
  setBalance(balance - amount);

  // creates a new array along with all the expenses along with the new amount
  setExpenses([...expenses, amount]);
};

// Function to add income
const addIncome = (amount) => {
  // Adds the amount parameter to the current balance value
  setBalance(balance + amount);

  // adds the amount parameter to the existing income array
  setIncome([...income, amount]);
};

const [inputExpense, setInputExpense] = useState("");
  const [inputIncome, setInputIncome] = useState("");

  const handleExpenseInputChange = (e) => {
    setInputExpense(e.target.value);
  };

  const handleIncomeInputChange = (e) => {
    setInputIncome(e.target.value);
  };

  const handleAddExpense = () => {
    const expenseAmount = parseInt(inputExpense);
    if (!isNaN(expenseAmount)) {
      addExpense(expenseAmount);
      setInputExpense("");
    }
  };

  // This is a function to handle user income
  const handleAddIncome = () => {
    const incomeAmount = parseInt(inputIncome);
    if (!isNaN(incomeAmount)) {
      addIncome(incomeAmount);
      setInputIncome("");
    }
  };

 // Calculate total expenses for the current month
const totalExpensesThisMonth = expenses.reduce(
  // this is a callback function that takes two parameters, total and expense. It adds the expenses
  // The 0 is the initial value for the total parameter
  (total, expense) => total + expense,
  0
);
  return (
    <section className="balance-section">
      <h2>Balance: ${balance}</h2>
      <div>
        <input
        // type accepts numerical values only
          type="number"
          // the value displays whatever is in the inputExpense state variable
          value={inputExpense}
          // the event handler 'handleExpenseInputChange' is called anytime the input value changes
          onChange={handleExpenseInputChange}
          // A placeholder showing the string below
          placeholder="Enter expense amount"
        />
        <button onClick={handleAddExpense}>Add Expense</button>

        <input
          type="number"
          value={inputIncome}
          onChange={handleIncomeInputChange}
          placeholder="Enter income amount"
        />
        {/* Add income button attached to an event listener handleIncome */}
        <button onClick={handleAddIncome}>Add Income</button>
      </div>
      <div>
        {/* This displays the total expenses for the whole mount combined */}
        <h3>Expenses This Month: ${totalExpensesThisMonth}</h3>
      </div>
    </section>
  );
}


export default Balance;

