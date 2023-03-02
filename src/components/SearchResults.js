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
  return <div className="search-results">{searchResults}</div>;
};

SearchResults.propTypes = {
  searchResults: PropTypes.string.isRequired,
};

export default SearchResults;
