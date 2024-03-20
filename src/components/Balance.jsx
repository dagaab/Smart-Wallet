import React from "react";
import { useState } from 'react';
import { useEffect } from "react";
import "../styles/Balance.css";


function Balance() {

// State variables for balance, expenses, and income

// balance holds the current value of the state variable and the function setBalance updates the value of balance
// the argument '0' passed in useSate is the initial value of the balance state variable
const [balance, setBalance] = useState(0);

// The same logic for expenses applies here
const [income, setIncome] = useState([]);

// Load income from local storage
useEffect(() => {
  const storedIncome = JSON.parse(localStorage.getItem("income")) || [];
  setIncome(storedIncome);
}, []);

// Save income and expenses to local storage whenever they change
useEffect(() => {
  localStorage.setItem("income", JSON.stringify(income));
}, [income]);

// Function to add income
const addIncome = (amount) => {
  // Adds the amount parameter to the current balance value
  setBalance(balance + amount);

  // adds the amount parameter to the existing income array
  setIncome([...income, amount]);
};

// This state variable inputExpense useState starts off as an empty string, the setInputExpense updates the inputExpense variable anytime a new value is added to the array
// A similar thing to the inputExpense is taking place for InputIncome
  const [inputIncome, setInputIncome] = useState("");

  // The function handleIncomeInputChange behaves in a similar way to the handleExpenseInputChange
  const handleIncomeInputChange = (e) => {
    // the setInputIncome updates the value of the inputIncome to match the new value written in the input field
    setInputIncome(e.target.value);
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


// a code for changing the gif based on balance:
const getGif = () => {
  if (balance >= 1600) {
    return "/gifs/star.gif";
  } else if (balance >= 1500) {
    return "/gifs/yeah.gif";
  } else if (balance >= 1400) {
    return "/gifs/heart.gif";
  } else if (balance >= 1300) {
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
  } else if (balance >= 600) {
    return "/gifs/wallet.gif";
  } else if (balance >= 200) {
    return "/gifs/cold.gif";
  } else if (balance >= 100) {
    return "/gifs/sick.gif";
  } else if (balance >= 0) {
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
          type="number"
          value={inputIncome}
          onChange={handleIncomeInputChange}
          placeholder="Enter income amount"
        />
        {/* Add income button attached to an event listener handleIncome */}
        <button onClick={handleAddIncome}>Add Income</button>
      </div>
    </section>
  );
}


export default Balance;

