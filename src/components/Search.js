import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/search.scss";
import { FaRegCopy, FaRegSave } from "react-icons/fa";
import SearchResults from "./SearchResults";
import StatsResults from "./StatsResults";
import searchHashtags from "../requests/searchHashtags";
import getStatsResult from "../requests/getStatsResult";
import useCopyToClipboard from "../copyToClipboard/useCopyToClipboard";
import Alert from "./Alert";

const Search = ({
  userID,
  searchValue,
  setSearchValue,
  searchResults,
  setSearchResults,
  statsResults,
  setStatsResults,
}) => {
  const navigate = useNavigate();
  const [renderSave, setRenderSave] = useState(false);
  const [ready, setReady] = useState(false);
  const [copyToClipboard] = useCopyToClipboard();
  const initalState = {
    alert: {
      message: "",
      isSuccess: false,
    },
  };
  const [alert, setAlert] = useState(initalState.alert);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    searchHashtags(
      searchValue,
      setSearchResults,
      setReady,
      setRenderSave,
      userID
    );
    getStatsResult(searchValue, setStatsResults, setReady);
    setAlert(initalState.alert);
  };

  return (
    <div className="search">
      <div className="search-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="search-input">
            <h1 className="search-form__title">Search for hashtags{}</h1>
          </label>
          <div className="search-bar">
            <input
              className="search-bar__input"
              type="text"
              id="search-input"
              name="search-input"
              onChange={handleChange}
            />
            <button className="search-bar__button" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="stats-results-container">
        {ready && <StatsResults statsResults={statsResults} />}
      </div>
      <div className="search-results-container">
        {ready && <SearchResults searchResults={searchResults} />}
      </div>
      <div className="search-button-container">
        {ready && (
          <button
            className="copy-button"
            type="button"
            onClick={() => {
              copyToClipboard(searchResults);
              setAlert({
                message: "Successfully copied",
                isSuccess: true,
              });
            }}
          >
            <FaRegCopy className="copy-icon" /> Copy
          </button>
        )}
        {renderSave && (
          <button
            className="save-button"
            type="button"
            onClick={() => navigate("/add-hashtags-auto")}
          >
            <FaRegSave className="save-icon" /> Save
          </button>
        )}
      </div>
      <div className="alert-message">
        <Alert message={alert.message} success={alert.isSuccess} />
      </div>
    </div>
  );
};

Search.propTypes = {
  userID: PropTypes.string.isRequired,
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  searchResults: PropTypes.string.isRequired,
  setSearchResults: PropTypes.func.isRequired,
  setStatsResults: PropTypes.func.isRequired,
  statsResults: PropTypes.shape({
    tweets: PropTypes.number,
    retweets: PropTypes.number,
    images: PropTypes.number,
    links: PropTypes.number,
    mentions: PropTypes.number,
  }).isRequired,
};

export default Search;
