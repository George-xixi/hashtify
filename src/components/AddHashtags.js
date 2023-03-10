import React, { useState } from "react";
import PropTypes from "prop-types";
import addHashtags from "../requests/addHashtags";
import Alert from "./Alert";

const AddHashtags = ({ userID }) => {
  const initalState = {
    fields: {
      userId: userID,
      title: "",
      category: "Music",
      hashtags: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };
  const [fields, setFields] = useState(initalState.fields);
  const [alert, setAlert] = useState(initalState.alert);

  const handleAddHashtag = async (e) => {
    e.preventDefault();
    addHashtags(fields, setAlert);
    await setFields(initalState.fields);
    setAlert(initalState.alert);
  };
  const handleFieldChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="add-hashtags">
      <h1>Add New #Hashtags</h1>
      <Alert message={alert.message} success={alert.isSuccess} />
      <form className="add-hashtags-form" onSubmit={handleAddHashtag}>
        <label htmlFor="title">Title{}</label>
        <input
          id="title"
          name="title"
          value={fields.title}
          onChange={handleFieldChange}
        />
        <select
          id="category-filter"
          name="category"
          value={fields.category}
          onChange={handleFieldChange}
        >
          <option value="Music">Music</option>
          <option value="Art">Art</option>
          <option value="Beauty">Beauty</option>
          <option value="Travel">Travel</option>
          <option value="Food">Food</option>
          <option value="Business">Business</option>
          <option value="Sport">Sport</option>
          <option value="Other">Other</option>
        </select>
        <label htmlFor="hashtags">Hashtags{}</label>
        <textarea
          id="hashtags"
          name="hashtags"
          value={fields.hashtags}
          onChange={handleFieldChange}
        />
        <button type="submit"> Save </button>
      </form>
    </div>
  );
};

AddHashtags.propTypes = {
  userID: PropTypes.string.isRequired,
};

export default AddHashtags;
