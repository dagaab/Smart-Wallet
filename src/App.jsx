import React from "react";
import Navbar from "./components/Navbar";
import Balance from "./components/Balance";
import Categories from "./components/Categories";
import History from "./components/History";
import Pet from "./components/Pet";
import Recent from "./components/Recent";
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Pet />
      <Balance />
      <Categories />
      <Recent />
      <History />
    </div>
  );
}

export default App
