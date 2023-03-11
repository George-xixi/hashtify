import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import handleJwt from "../requests/handleJwt";
import Login from "./Login";
import Search from "./Search";
import AddHashtags from "./AddHashtags";
import "../styles/app.scss";
import Navbar from "./Navbar";
import MyHashtags from "./MyHashtags";

const App = () => {
  const [userID, setUserID] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const onLogin = (response) => {
    setUserID(response.id);
    handleJwt(response.id);
  };
  const onLogout = () => {
    window.FB.logout();
    setUserID("");
  };

  return (
    <div className="App">
      <Navbar onLogout={onLogout} userID={userID} />
      <Routes>
        <Route
          path="/"
          element={
            !userID ? (
              <Login onLogin={onLogin} userID={userID} />
            ) : (
              <Navigate to="/search" />
            )
          }
        />
        <Route
          path="/search"
          element={
            <Search
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              searchResults={searchResults}
              setSearchResults={setSearchResults}
            />
          }
        />
        <Route
          path="add-hashtags"
          element={
            userID ? (
              <AddHashtags
                userID={userID}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                searchResults={searchResults}
                setSearchResults={setSearchResults}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="my-hashtags"
          element={
            userID ? <MyHashtags userID={userID} /> : <Navigate to="/" />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
