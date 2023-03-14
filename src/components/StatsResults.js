import React from "react";
import PropTypes from "prop-types";

const StatsResults = ({ statsResults }) => {
  if (!statsResults) {
    return (
      <p className="no-stats-results-message">
        Sorry, we couldn&apos;t find anything.
      </p>
    );
  }
  return <div className="search-results">{statsResults}</div>;
};

export default StatsResults;

StatsResults.propTypes = {
  statsResults: PropTypes.string.isRequired,
};
