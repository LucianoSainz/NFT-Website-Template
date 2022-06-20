import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Mint from "./components/mint";
import Contact from "./components/contact";
import MyNft from "./components/myNft";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Mint />
      <Contact />
      <BrowserRouter>
        <Routes>
          <Route path="/myNft" element={<MyNft />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
