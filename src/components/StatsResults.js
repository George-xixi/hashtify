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
  return (
    <div className="search-results">
      Real-time stats for #{statsResults.tag}
      <ul>
        <li>{statsResults.tweets} tweets per hour</li>
        <li>
          {Math.floor(statsResults.exposure / 1000000)}M exposure per hour
        </li>
        <li>{statsResults.retweets} retweets per hour</li>
        <li>{Math.round(statsResults.images * 100)}% tweets contain links</li>
        <li>{Math.round(statsResults.links * 100)}% tweets contain links</li>
        <li>
          {Math.round(statsResults.mentions * 100)}% tweets contain mentions
        </li>
      </ul>
    </div>
  );
};

export default StatsResults;

StatsResults.propTypes = {
  statsResults: PropTypes.shape.isRequired,
};
