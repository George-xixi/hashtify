import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Search from "./Search";
import AddHashtags from "./AddHashtags";
import "../styles/App.css";
import Navbar from "./Navbar";
import MyHashtags from "./MyHashtags";

const App = () => {
  const [userID, setUserID] = useState("");
  const onLogin = (response) => {
    setUserID(response.id);
  };
  const onLogout = () => {
    window.FB.logout();
    setUserID("");
  };

  return (
    <div className="App">
      {userID && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            !userID ? (
              <Login onLogin={onLogin} onLogout={onLogout} userID={userID} />
            ) : (
              <Navigate to="/search" />
            )
          }
        />
        <Route path="/search" element={<Search />} />
        <Route path="add-hashtags" element={<AddHashtags />} />
        <Route path="my-hashtags" element={<MyHashtags />} />
      </Routes>
    </div>
  );
};

export default App;
