import React from "react";
// import Navbar from "./components/Navbar";
import Balance from "./components/Balance";
import Categories from "./components/Categories";
import History from "./components/History";
import Pet from "./components/Pet";
import Recent from "./components/Recent";
import './App.css'
import Header from "./components/Navbar";
import { Grommet } from 'grommet';

function App() {
  return (
    <Grommet>
      <Header />
      {/* <Navbar /> */}
      <Pet />
      <Balance />
      <Categories />
      <Recent />
      <History />
    </Grommet>
  );
}

export default App
