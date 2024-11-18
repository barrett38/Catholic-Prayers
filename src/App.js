import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ServiteRosaryOffering from "./components/ServiteRosary/ServiteRosaryOffering";
import DailyRosary from "./components/DailyRosary/DailyRosary";

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
      </Routes>
    </Router>
  );
}

export default App;
