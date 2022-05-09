import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import About from "./components/about";

function App() {
  return (
    <div className="App">
      <div className="row">
        <Navbar />
        <About />
      </div>
    </div>
  );
}

export default App;
