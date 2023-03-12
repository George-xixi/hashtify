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
        Removed
      </button>
      <Alert message={alert.message} success={alert.isSuccess} />
    </div>
  );
};

export default MyHashtagsCard;
