import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/search.scss";
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
      <h1>#Hashtify</h1>
      <div className="search-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="search-input">Search for hashtags{}</label>
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
      <div className="search-results">
        {ready && <SearchResults searchResults={searchResults} />}
      </div>
      <div className="search__buttons">
        {ready && (
          <button
            type="button"
            onClick={() => {
              copyToClipboard(searchResults);
              setAlert({
                message: "Successfully copied",
                isSuccess: true,
              });
            }}
          >
            Copy
          </button>
        )}
        {renderSave && (
          <button type="button" onClick={() => navigate("/add-hashtags")}>
            Save
          </button>
        )}
      </div>
      <Alert message={alert.message} success={alert.isSuccess} />
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
