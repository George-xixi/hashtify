import React from "react";
import PropTypes from "prop-types";

const SearchByImageResults = ({ imageResult, imageHashtags }) => {
  if (!imageResult) {
    return (
      <p className="no-results-message">
        Sorry, we couldn&apos;t find anything.
      </p>
    );
  }

  return (
    <div className="image-results">
      <p>{imageHashtags}</p>
    </div>
  );
};

SearchByImageResults.propTypes = {
  imageResult: PropTypes.arrayOf(PropTypes.shape).isRequired,
  imageHashtags: PropTypes.string.isRequired,
};

export default SearchByImageResults;
