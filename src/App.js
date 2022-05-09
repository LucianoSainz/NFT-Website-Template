import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <div className="row">
        <Navbar />
        <Home />
        <About />
      </div>
    </div>
  );
}

export default App;
