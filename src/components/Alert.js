import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../styles/alert.scss";

const Alert = ({ message, success }) => {
  if (!message) {
    return null;
  }
  return (
    <div className={`alert-${success ? "success" : "error"}`}>
      {message === "Successfully saved" || message === "Successfully copied" ? (
        <FontAwesomeIcon className="icon" icon={faCheck} />
      ) : (
        <FontAwesomeIcon className="icon" icon={faTimes} />
      )}
      {message}
    </div>
  );
};

Alert.defaultProps = {
  message: "",
  success: false,
};

Alert.propTypes = {
  message: PropTypes.string,
  success: PropTypes.bool,
};

export default Alert;
