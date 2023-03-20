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
  if (!statsResults.tweets) {
    return <p className="no-stats-results-message">loading</p>;
  }
  return (
    <div className="stats-search-results">
      <div className="Real-time-stats">
        Real-time stats for #{statsResults.tag} per hour
      </div>
      <div className="tweets">
        Tweets
        <img
          src="/images/tweet-icon.png"
          alt="twitter logo"
          className="stats-logo"
        />
      </div>
      <div className="exposure">
        Views
        <img src="/images/views-icon.png" alt="eye" className="stats-logo" />
      </div>
      <div className="reteets">
        Retweets
        <img
          src="/images/retweet-icon.png"
          alt="retweet logo"
          className="stats-logo"
        />
      </div>
      <div className="mentions">
        {" "}
        Mentions
        <img
          src="/images/mention-icon.png"
          alt="twitter logo"
          className="stats-logo"
        />
      </div>
      <div className="number">{statsResults.tweets.toLocaleString()}</div>
      <div className="number2">{statsResults.exposure.toLocaleString()}</div>
      <div className="number3">{statsResults.retweets.toLocaleString()}</div>
      <div className="number4">{Math.round(statsResults.mentions * 100)}%</div>
    </div>
  );
};

StatsResults.propTypes = {
  statsResults: PropTypes.shape({
    tag: PropTypes.string,
    tweets: PropTypes.number,
    exposure: PropTypes.number,
    retweets: PropTypes.number,
    images: PropTypes.number,
    links: PropTypes.number,
    mentions: PropTypes.number,
    color: PropTypes.number,
    hashtag: PropTypes.string,
  }).isRequired,
};

export default StatsResults;
