import React from "react";
import Pet from "./components/Pet";
import './App.css'
import Nav from "./components/Navbar";
import { Grommet } from 'grommet';
import Grid from "./components/Grid";
import Footer from "./components/Footer";

function App() {
  return (
    <Grommet>
      <Nav />
      <Pet />
      <Grid />
      <Footer />
    </Grommet>
  );
}

export default App
