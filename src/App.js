import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Shop from "./components/shop";
import About from "./components/about";

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Shop />
    </div>
  );
}

export default App;
