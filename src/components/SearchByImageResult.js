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
      <p>{imageResult.map((hashtag) => `#${hashtag.hashtag} `)}</p>
    </div>
  );
};

SearchByImageResults.propTypes = {
  imageResult: PropTypes.arrayOf.isRequired,
};

export default SearchByImageResults;
