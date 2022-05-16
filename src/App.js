import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Mint from "./components/mint";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Mint />
      <Contact />
    </div>
  );
}

export default App;
