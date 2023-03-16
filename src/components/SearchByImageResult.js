import React from "react";
import PropTypes from "prop-types";

const SearchByImageResults = ({ imageResult }) => {
  if (!imageResult) {
    return (
      <p className="no-results-message">
        Sorry, we couldn&apos;t find anything.
      </p>
    );
  }

  return (
    <div className="image-results">
      <p>#{imageResult[0].hashtag}</p>
    </div>
  );
};

export default SearchByImageResults;

SearchByImageResults.propTypes = {
  imageResult: PropTypes.string.isRequired,
};
