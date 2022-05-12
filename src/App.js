import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Mint from "./components/mint";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Mint />
    </div>
  );
}

export default App;
