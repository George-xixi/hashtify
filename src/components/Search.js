import React from "react";

const Search = () => {
  return (
    <div className="search">
      <h1>#Hashtify</h1>
      <form>
        {/* Labels have a weird error - let's look into this together */}
        <label htmlFor="search-input">Search for hashtags{}</label>
        <input type="text" id="search-input" name="search-input" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
