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
  setBalance(balance + amount);
  setIncome([...income, amount]);
};

// Calculate total expenses for the current month
const totalExpensesThisMonth = expenses.reduce(
  (total, expense) => total + expense,
  0
);

  
}

export default Balance;

