import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/search.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faSave } from "@fortawesome/free-solid-svg-icons";
import SearchResults from "./SearchResults";
import searchHashtags from "../requests/searchHashtags";
import useCopyToClipboard from "../copyToClipboard/useCopyToClipboard";
import Alert from "./Alert";

const Search = ({
  userID,
  searchValue,
  setSearchValue,
  searchResults,
  setSearchResults,
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
    setAlert(initalState.alert);
  };

  return (
    <div className="search">
      <div className="search-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="search-input">
            <h2>Search for hashtags{}</h2>
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
      <div className="search-results-container">
        {ready && <SearchResults searchResults={searchResults} />}
      </div>
      <div className="search-button-container">
        {ready && (
          <button
            className="search__buttons"
            type="button"
            onClick={() => {
              copyToClipboard(searchResults);
              setAlert({
                message: "Successfully copied",
                isSuccess: true,
              });
            }}
          >
            <FontAwesomeIcon className="copy-icon" icon={faCopy} />
          </button>
        )}
        {renderSave && (
          <button
            className="save__buttons"
            type="button"
            onClick={() => navigate("/add-hashtags")}
          >
            <FontAwesomeIcon className="save-icon" icon={faSave} />
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
};

export default Search;
