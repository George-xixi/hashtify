import React, { useState } from "react";
import PropTypes from "prop-types";
import Alert from "./Alert";

const MyHashtagsCard = ({
  hashtagId,
  title,
  hashtags,
  onCopyHashtag,
  onRemoveHashtag,
}) => {
  const initalState = {
    alert: {
      message: "",
      isSuccess: false,
    },
  };
  const [alert, setAlert] = useState(initalState.alert);
  return (
    <div className="save-hashtags-card-container">
      <h2>{title}</h2>
      <p>{hashtags}</p>
      <button
        type="button"
        onClick={() => {
          onCopyHashtag();
          setAlert({
            message: "Successfully copied",
            isSuccess: true,
          });
        }}
      >
        Copy
      </button>
      <button
        type="button"
        onClick={() => {
          onRemoveHashtag(hashtagId);
        }}
      >
        Remove
      </button>
      <Alert message={alert.message} success={alert.isSuccess} />
    </div>
  );
};

MyHashtagsCard.propTypes = {
  hashtagId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  hashtags: PropTypes.string.isRequired,
  onCopyHashtag: PropTypes.func.isRequired,
  onRemoveHashtag: PropTypes.func.isRequired,
};

export default MyHashtagsCard;
