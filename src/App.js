import React from "react";
import "./App.css";
import SignOfTheCross from "./components/Prayers";

function App() {
  return (
    <div className="App">
      <header className="App-header">Select a Prayer...</header>
      <p>The Sign of the Cross</p>
      <SignOfTheCross />
      <p>Act of Contrition</p>
      <p>Apostles' Creed</p>
      <p>Our Father</p>
      <p>Hail Mary</p>
      <p>The Glory Be</p>
      <p>Saint Michael</p>
      <p>O My Jesus</p>
      <p>The Daily Rosary</p>
      <p>The Servite Rosary</p>
    </div>
  );
}

export default App;
