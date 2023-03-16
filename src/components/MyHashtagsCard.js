import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaRegCopy } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import Alert from "./Alert";
import icon from "../data/hashtagCardIcon.json";

const MyHashtagsCard = ({
  hashtagId,
  title,
  category,
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
      <div className="hashtags-card__heading">
        <h2 className="hashtags-card__title">{title}</h2>
        <img
          className="category-icons"
          src={icon[category]}
          alt={`${category} icon`}
        />
      </div>

      <p>{hashtags}</p>
      <div className="button-div">
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
          <RiDeleteBinLine /> Delete
        </button>
      </div>
      <Alert message={alert.message} success={alert.isSuccess} />
    </>
  );
};

MyHashtagsCard.propTypes = {
  hashtagId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  hashtags: PropTypes.string.isRequired,
  onCopyHashtag: PropTypes.func.isRequired,
  onRemoveHashtag: PropTypes.func.isRequired,
};

export default MyHashtagsCard;
