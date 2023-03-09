import React, { useState } from "react";
import SearchResults from "./SearchResults";
import searchHashtags from "../requests/searchHashtags";
import useCopyToClipboard from "../copyToClipboard/useCopyToClipboard";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [ready, setReady] = useState(false);
  const [copyToClipboard, { success }] = useCopyToClipboard();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    searchHashtags(searchValue, setSearchResults, setReady);
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
      <button type="button" onClick={() => copyToClipboard(searchResults)}>
        {success ? "Copied" : "Copy Hashtag"}
      </button>
    </div>
  );
};

export default Search;
