import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Search from "./Search";
import "../styles/App.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
};

export default App;
