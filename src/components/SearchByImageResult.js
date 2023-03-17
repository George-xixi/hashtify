import React from "react";
import PropTypes from "prop-types";

const SearchByImageResults = ({ imageResult }) => {
  console.log(imageResult, "IMAGE RESULT");
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
  imageResult: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default SearchByImageResults;
