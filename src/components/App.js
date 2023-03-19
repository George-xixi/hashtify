/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect, useCallback } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Cookie from "js-cookie";
import jwtDecode from "jwt-decode";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import handleJwt from "../requests/handleJwt";
import Login from "./Login";
import Search from "./Search";
import AddHashtags from "./AddHashtags";
import AddHashtagsAuto from "./AddHashtagsAuto";
import "../styles/app.scss";
import Navbar from "./Navbar";
import MyHashtags from "./MyHashtags";
import SearchByImage from "./SearchByImage";

const App = () => {
  const [userID, setUserID] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [statsResults, setStatsResults] = useState({});
  const [image, setImage] = useState({});
  const [imageResult, setImageResult] = useState([]);
  const [imageHashtags, setImageHashtags] = useState("");
  const [url, setUrl] = useState("");

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

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
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
            path="/search-by-image"
            element={
              <SearchByImage
                userID={userID}
                image={image}
                setImage={setImage}
                imageResult={imageResult}
                setImageResult={setImageResult}
                url={url}
                setUrl={setUrl}
                imageHashtags={imageHashtags}
                setImageHashtags={setImageHashtags}
              />
            }
          />
          <Route
            path="add-hashtags"
            element={
              userID ? <AddHashtags userID={userID} /> : <Navigate to="/" />
            }
          />
          <Route
            path="add-hashtags-auto"
            element={
              userID ? (
                <AddHashtagsAuto
                  userID={userID}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  searchResults={searchResults}
                  setSearchResults={setSearchResults}
                  imageResult={imageResult}
                  setImageResult={setImageResult}
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
      <div className="particles">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          className="particles"
          options={{
            background: {
              color: {
                value: "#E0CFFF",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 1500,
                },
                value: 60,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    </>
  );
};

export default App;
