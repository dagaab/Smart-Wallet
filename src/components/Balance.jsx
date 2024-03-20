import React from "react";
import { useState } from 'react';
import { useEffect } from "react";
import "../styles/Balance.css";


function Balance() {

// State variables for balance, expenses, and income

// balance holds the current value of the state variable and the function setBalance updates the value of balance
// the argument '0' passed in useSate is the initial value of the balance state variable
const [balance, setBalance] = useState(0);

// The same logic for balance applies here except that expenses state will start off as an empty array
const [expenses, setExpenses] = useState([]);

// The same logic for expenses applies here
const [income, setIncome] = useState([]);

// Load income and expenses from local storage
useEffect(() => {
  const storedIncome = JSON.parse(localStorage.getItem("income")) || [];
  const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
  setIncome(storedIncome);
  setExpenses(storedExpenses);
}, []);

// Save income and expenses to local storage whenever they change
useEffect(() => {
  localStorage.setItem("income", JSON.stringify(income));
  localStorage.setItem("expenses", JSON.stringify(expenses));
}, [income, expenses]);


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

// This state variable inputExpense useState starts off as an empty string, the setInputExpense updates the inputExpense variable anytime a new value is added to the array
const [inputExpense, setInputExpense] = useState("");
// A similar thing to the inputExpense is taking place for InputIncome
  const [inputIncome, setInputIncome] = useState("");
// the function handleExpenseInputChange takes an event object e, it represents the event object generated when an input element's value changes
  const handleExpenseInputChange = (e) => {
    // the e.target contains information that triggered the event and the value property contains the current vlaue of the input field
    // the setInputExpense updates the value of the inputExpense to match what was written in the input field
    setInputExpense(e.target.value);
  };

  // The function handleIncomeInputChange behaves in a similar way to the handleExpenseInputChange
  const handleIncomeInputChange = (e) => {
    // the setInputIncome updates the value of the inputIncome to match the new value written in the input field
    setInputIncome(e.target.value);
  };

// This is a function to handle user expense
  const handleAddExpense = () => {
    // Parses the value of inputExpense to an integer
    const expenseAmount = parseInt(inputExpense);
    // An if statement to check if the parsed expense amount is a valid number
    if (!isNaN(expenseAmount)) {
      // if it is a valid number is adds the expense amount to the expense state using the addExpense function
      addExpense(expenseAmount);
      // Once the expense amount has been added it clears the inputExpense state variable
      setInputExpense("");
    }
  };

  // This is a function to handle user income
  const handleAddIncome = () => {
    // Parses the value of inputIncome to an integer
    const incomeAmount = parseInt(inputIncome);
    // An if statement to check if the parsed income amount is a valid number
    if (!isNaN(incomeAmount)) {
      // if it is a valid number is adds the income amount to the income state using the addIncome function
      addIncome(incomeAmount);
      // Once the income amount has been added it clears the inputIncome state variable
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

// a code for changing the gif based on balance:
const getGif = () => {
  if (balance >= 1500) {
    return "/gifs/star.gif";
  } else if (balance >= 1400) {
    return "/gifs/yeah.gif";
  } else if (balance >= 1300) {
    return "/gifs/heart.gif";
  } else if (balance >= 1200) {
    return "/gifs/laugh.gif";
  } else if (balance >= 1100) {
    return "/gifs/thanks.gif";
  } else if (balance >= 1000) {
    return "/gifs/nice.gif";
  } else if (balance >= 900) {
    return "/gifs/giphy.gif";
  } else if (balance >= 800) {
    return "/gifs/shocked.gif";
  } else if (balance >= 700) {
    return "/gifs/angry.gif";
  } else if (balance >= 600) {
    return "/gifs/no.gif";
  } else if (balance >= 500) {
    return "/gifs/sad.gif";
  } else if (balance >= 400) {
    return "/gifs/crying.gif";
  } else if (balance >= 300) {
    return "/gifs/sweating.gif";
  } else if (balance >= 200) {
    return "/gifs/wallet.gif";
  } else if (balance >= 100) {
    return "/gifs/cold.gif";
  } else if (balance > 0) {
    return "/gifs/sick.gif";
  } else if (balance <= 0) {
    return "/gifs/heaven.gif";
  }
};
  return (
    <section className="balance-section">
      <div>
        <img src={getGif()} alt="Balance" className="gif" />
      </div>
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

