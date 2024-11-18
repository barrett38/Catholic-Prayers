import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ServiteRosaryOffering from "./components/ServiteRosary/ServiteRosaryOffering";
import DailyRosary from "./components/DailyRosary/DailyRosary";
import IndividualPrayers from "./components/IndividualPrayers/IndividualPrayers";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <ServiteRosaryOffering />
            </div>
          }
        />
        <Route path="/daily-rosary" element={<DailyRosary />} />
        <Route path="/individual-prayers" element={<IndividualPrayers />} />
      </Routes>
    </Router>
  );
}

export default App;
