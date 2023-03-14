import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaRegCopy } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
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
    <>
      <h2 className="hashtags-card__title">{title}</h2>

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
        <FaRegCopy /> Copy
      </button>
      <button
        type="button"
        onClick={() => {
          onRemoveHashtag(hashtagId);
        }}
      >
        <MdDeleteForever /> Delete
      </button>
      <Alert message={alert.message} success={alert.isSuccess} />
    </>
  );
};

MyHashtagsCard.propTypes = {
  hashtagId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  hashtags: PropTypes.string.isRequired,
  onCopyHashtag: PropTypes.func.isRequired,
  onRemoveHashtag: PropTypes.func.isRequired,
};

export default MyHashtagsCard;
