import React, { useState } from "react";
import results from "../data/results.json";
import SearchResults from "./SearchResults";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [loading, setLoading] = useState(true);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearchResults(results[searchValue]);
    await setLoading(false);
  };

  return (
    <div className="search">
      <h1>#Hashtify</h1>
      <div className="search-form">
        <form onSubmit={handleSubmit}>
          {/* Labels have a weird error - let's look into this together */}
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
        {!loading && <SearchResults searchResults={searchResults} />}
      </div>
    </div>
  );
};

export default Search;
