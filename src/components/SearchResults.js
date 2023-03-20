import React from "react";
import PropTypes from "prop-types";

const SearchResults = ({ searchResults }) => {
  if (!searchResults) {
    return (
      <p className="no-results-message">
        Sorry, we couldn&apos;t find anything.
      </p>
    );
  }
  const resultsArray = searchResults.split(" ");
  return (
    <div className="search-results">
      <h2 className="search-results__title">{resultsArray[0]}</h2>
      {searchResults}
    </div>
  );
};

SearchResults.propTypes = {
  searchResults: PropTypes.string.isRequired,
};

export default SearchResults;
