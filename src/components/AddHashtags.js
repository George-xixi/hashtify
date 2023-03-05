import React from "react";

const AddHashtags = () => {
  return (
    <div className="add-hashtags">
      <h1>Add New #Hashtags</h1>
      <form className="add-hashtags-form">
        <label htmlFor="title">Title{}</label>
        <input id="title" name="title" />
        <label htmlFor="category">Category{}</label>
        <input id="category" name="category" />
        <label htmlFor="hashtags">Hashtags{}</label>
        <textarea id="hashtags" name="hashtags" />
        <button type="submit"> Save </button>
      </form>
    </div>
  );
};

export default AddHashtags;
