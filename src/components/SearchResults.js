import React from "react";
import PropTypes from "prop-types";

const SearchResults = ({ searchResults, searchValue }) => {
  if (!searchResults) {
    return (
      <p className="no-results-message">
        Sorry, we couldn&apos;t find anything.
      </p>
    );
  }
  return (
    <div className="search-results">
      <h2 className="search-results__title">{searchValue}</h2>
      {searchResults}
    </div>
  );
};

SearchResults.propTypes = {
  searchResults: PropTypes.string.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default SearchResults;
