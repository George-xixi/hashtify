import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import SearchResults from "./SearchResults";
import searchHashtags from "../requests/searchHashtags";
import useCopyToClipboard from "../copyToClipboard/useCopyToClipboard";
import Alert from "./Alert";

const Search = ({
  searchValue,
  setSearchValue,
  searchResults,
  setSearchResults,
}) => {
  const navigate = useNavigate();
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
    searchHashtags(searchValue, setSearchResults, setReady);
    setAlert(initalState.alert);
  };

  return (
    <div className="search">
      <h1>#Hashtify</h1>
      <div className="search-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="search-input">Search for hashtags{}</label>
          <input
            type="text"
            id="search-input"
            name="search-input"
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="search-results">
        {ready && <SearchResults searchResults={searchResults} />}
      </div>
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
      <button type="button" onClick={() => navigate("/add-hashtags")}>
        Save
      </button>
      <Alert message={alert.message} success={alert.isSuccess} />
    </div>
  );
};

Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  searchResults: PropTypes.string.isRequired,
  setSearchResults: PropTypes.func.isRequired,
};

export default Search;
