// eslint-disable-next-line no-use-before-define
import React, { useState } from "react";
import PropTypes from "prop-types";
import SearchByImageResults from "./SearchByImageResult";
import searchHashtagsByImage from "../requests/searchHashtagsByImage";
import { storage } from "./firebase";

const SearchByImage = ({
  image,
  setImage,
  url,
  setUrl,
  imageResult,
  setImageResult,
}) => {
  const [ready, setReady] = useState(false);
  const upload = () => {
    if (image == null) return;
    setUrl("Getting url link..");

    // eslint-disable-next-line no-unused-expressions
    storage
      .ref(`/images/${image.name}`)
      .put(image)
      .on("state_changed", alert("success"), alert, () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((Url) => {
            setUrl(Url);
          });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchHashtagsByImage(url, setImageResult, setReady);
  };

  return (
    <>
      <div className="search-by-image">
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <button type="button" onClick={upload}>
          upload
        </button>
        <br />
        <p>
          <a href={url}>{url}</a>
        </p>
        <button
          className="search-bar__button"
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>{" "}
      <div className="stats-results-container">
        {ready && <SearchByImageResults imageResult={imageResult} />}
      </div>
    </>
  );
};

export default SearchByImage;

SearchByImage.propTypes = {
  image: PropTypes.string.isRequired,
  setImage: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  setUrl: PropTypes.func.isRequired,
};
