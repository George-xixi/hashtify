import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
