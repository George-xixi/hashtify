/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { FaRegCopy, FaRegSave } from "react-icons/fa";
import SearchByImageResults from "./SearchByImageResult";
import searchHashtagsByImage from "../requests/searchHashtagsByImage";
import useCopyToClipboard from "../copyToClipboard/useCopyToClipboard";
import Alert from "./Alert";
import { storage } from "./firebase";
import "../styles/search-by-image.scss";

const SearchByImage = ({
  userID,
  image,
  setImage,
  url,
  setUrl,
  imageResult,
  setImageResult,
  imageHashtags,
  setImageHashtags,
}) => {
  const navigate = useNavigate();
  const [renderSave, setRenderSave] = useState(false);
  const [ready, setReady] = useState(false);
  const [copyToClipboard] = useCopyToClipboard();
  const initalState = {
    alert: {
      message: "",
      isSuccess: false,
    },
  };
  const [alertMsg, setAlertMsg] = useState(initalState.alert);
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

  useEffect(() => {
    setImage({});
    setUrl("");
    setImageResult([]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchHashtagsByImage(
      url,
      setImageResult,
      setReady,
      setRenderSave,
      userID,
      setImageHashtags
    );
    setAlertMsg(initalState.alert);
  };

  return (
    <>
      <div className="search-by-image">
        <h1 className="search-form__title">Search by image</h1>
        <div className="image-submit">
          <input
            className="choose-file-button"
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          <button type="button" className="upload-button" onClick={upload}>
            upload
          </button>
        </div>
        <br />
        {/* <p>
          <a href={url}>{url}</a>
        </p> */}
      </div>{" "}
      <div className="display-result-container">
        {url && (
          <div className="display-uploaded-image">
            <img
              src={url}
              width="250px"
              height="250px"
              className="uploaded-image"
              alt="userImage"
            />
            <button
              className="image-submit__button"
              type="button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        )}
        <div className="image-results-all">
          <div className="image-results-container">
            {ready && (
              <SearchByImageResults
                imageResult={imageResult}
                imageHashtags={imageHashtags}
                setImageHashtags={setImageHashtags}
              />
            )}
          </div>
          <div className="search-button-container">
            {ready && (
              <button
                className="copy-button"
                type="button"
                onClick={() => {
                  copyToClipboard(imageHashtags);
                  setAlertMsg({
                    message: "Successfully copied",
                    isSuccess: true,
                  });
                }}
              >
                <FaRegCopy className="copy-icon" /> Copy
              </button>
            )}
            {renderSave && (
              <button
                className="save-button"
                type="button"
                onClick={() => navigate("/add-hashtags-auto")}
              >
                <FaRegSave className="save-icon" /> Save
              </button>
            )}
          </div>
          <div className="alert-message">
            <Alert message={alertMsg.message} success={alertMsg.isSuccess} />
          </div>
        </div>
      </div>
    </>
  );
};

SearchByImage.defaultProps = {
  image: {
    name: "",
  },
  imageResult: [{}],
};
SearchByImage.propTypes = {
  userID: PropTypes.string.isRequired,
  image: PropTypes.shape({
    name: PropTypes.string,
  }),
  setImage: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  setUrl: PropTypes.func.isRequired,
  imageResult: PropTypes.arrayOf(
    PropTypes.shape({
      hashtag: PropTypes.string,
      tweets: PropTypes.number,
      retweets: PropTypes.number,
      images: PropTypes.number,
      links: PropTypes.number,
      mentions: PropTypes.number,
    })
  ),
  setImageResult: PropTypes.func.isRequired,
  imageHashtags: PropTypes.string.isRequired,
  setImageHashtags: PropTypes.func.isRequired,
};

export default SearchByImage;
