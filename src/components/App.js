import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Search from "./Search";
import AddHashtags from "./AddHashtags";
import "../styles/App.css";
import Navbar from "./Navbar";
import MyHashtags from "./MyHashtags";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="add-hashtags" element={<AddHashtags />} />
        <Route path="my-hashtags" element={<MyHashtags />} />
      </Routes>
    </div>
  );
};

export default App;
