import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Cookie from "js-cookie";
import jwtDecode from "jwt-decode";
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
  const [statsResults, setStatsResults] = useState({});
  useEffect(() => {
    const token = Cookie.get("userToken");
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserID(decodedToken.userId);
    }
  }, []);

  const onLogin = (response) => {
    setUserID(response.id);
    handleJwt(response.id);
  };
  const onLogout = () => {
    window.FB.logout();
    setUserID("");
    Cookie.remove("userToken");
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
              userID={userID}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              searchResults={searchResults}
              setSearchResults={setSearchResults}
              statsResults={statsResults}
              setStatsResults={setStatsResults}
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
