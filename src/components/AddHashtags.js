import React, { useState } from "react";
import PropTypes from "prop-types";
import addHashtags from "../requests/addHashtags";

const AddHashtags = ({ userID }) => {
  const initalState = {
    fields: {
      userId: userID,
      title: "",
      category: "",
      hashtags: "",
    },
  };
  const [fields, setFields] = useState(initalState.fields);
  const handleAddHashtag = async (e) => {
    e.preventDefault();
    addHashtags(fields);
    await setFields(initalState.fields);
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
      <form className="add-hashtags-form" onSubmit={handleAddHashtag}>
        <label htmlFor="title">Title{}</label>
        <input
          id="title"
          name="title"
          value={fields.title}
          onChange={handleFieldChange}
        />
        <label htmlFor="category">Category{}</label>
        <input
          id="category"
          name="category"
          value={fields.category}
          onChange={handleFieldChange}
        />
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
