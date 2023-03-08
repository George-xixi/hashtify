import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import getMyHashtags from "../requests/getMyHashtags";

const MyHashtags = ({ userID }) => {
  const [myHashtags, setMyHashtags] = useState([]);
  const [category, setCategory] = useState("All");
  const handleFieldChange = (e) => {
    setCategory(e.target.value);
  };

  // useEffect(() => {
  //   getMyHashtags(setMyHashtags, userID);
  // }, [userID]);
  useEffect(() => {
    getMyHashtags(setMyHashtags, userID, category);
  }, [category, userID]);
  return (
    <div className="my-hashtags">
      <h1>#My Hashtags</h1>
      <form className="my-hashtags__form">
        <label htmlFor="category-filter">Filter Hashtags by Category{}</label>
        <select
          id="category-filter"
          name="category"
          value={category}
          onChange={handleFieldChange}
        >
          <option value="All">All</option>
          <option value="Music">Music</option>
          <option value="Art">Art</option>
          <option value="Travel">Travel</option>
          <option value="Art">Art</option>
          <option value="Business">Business</option>
          <option value="Other">Other</option>
        </select>
      </form>
      <div className="my-hashtags__display">
        {myHashtags.map((unit) => (
          <div key={unit.id} className="my-hashtags__card">
            <h2>{unit.title}</h2>
            <p>{unit.hashtags}</p>
            <button type="button">Copy</button>
          </div>
        ))}
        + {userID}
      </div>
    </div>
  );
};

MyHashtags.propTypes = {
  userID: PropTypes.string.isRequired,
};

export default MyHashtags;
