/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import getMyHashtags from "../requests/getMyHashtags";
import useCopyToClipboard from "../copyToClipboard/useCopyToClipboard";
import Alert from "./Alert";
import MyHashtagsCard from "./MyHashtagsCard";

const MyHashtags = ({ userID }) => {
  const [myHashtags, setMyHashtags] = useState([]);
  const [category, setCategory] = useState("All");
  const [copyToClipboard] = useCopyToClipboard();

  const handleFieldChange = (e) => {
    setCategory(e.target.value);
  };

  // useEffect(() => {
  //   getMyHashtags(setMyHashtags, userID);
  // }, [userID]);
  useEffect(() => {
    getMyHashtags(setMyHashtags, userID, category);
  }, [category, userID]);

  const handleRemovedHashtag = (hashtagId) => {
    try {
      axios.delete(`http://localhost:3000/hashtags/${hashtagId}`).then(() => {
        axios
          .get(`http://localhost:3000/hashtags/${userID}/hashtag`)
          .then((res) => {
            setMyHashtags(res.data);
            console.log(res.data, "res.data");
          });
      });
    } catch (e) {
      console.error(e);
    }
  };

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
          <option value="Beauty">Beauty</option>
          <option value="Travel">Travel</option>
          <option value="Food">Food</option>
          <option value="Business">Business</option>
          <option value="Sport">Sport</option>
          <option value="Other">Other</option>
        </select>
      </form>
      <Alert message={alert.message} success={alert.isSuccess} />
      <div className="my-hashtags__display">
        {myHashtags.map((unit) => (
          <div key={unit.id} className="item">
            <MyHashtagsCard
              userID={userID}
              hashtagId={unit.id}
              title={unit.title}
              hashtags={unit.hashtags}
              onCopyHashtag={() => copyToClipboard(unit.hashtags)}
              onRemoveHashtag={handleRemovedHashtag}
            />
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
