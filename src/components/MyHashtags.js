import React from "react";

const MyHashtags = () => {
  return (
    <div className="my-hashtags">
      <h1>#My Hashtags</h1>
      <form className="my-hashtags__form">
        <label htmlFor="category-filter">Filter Hashtags by Category{}</label>
        <select id="category-filter">
          <option value="Music">Music</option>
          <option value="Art">Art</option>
          <option value="Travel">Travel</option>
          <option value="Art">Art</option>
          <option value="Business">Business</option>
          <option value="Other">Other</option>
        </select>
      </form>
      <div className="my-hashtags__display">
        <div className="my-hashtags__card">
          <h2>Card Title</h2>
          <p>
            #nowplaying #love #radio #video #live #hiphop #spotify #newmusic
            #life #apple #rock #dance #christmas #playlist #pop #musicvideo
            #song #applemusic #goodmusic #time #country #playing #album
            #listening #musical #songs #christmasmusic #likedvideo
            #officialmusic #officialmusicvideo
          </p>
          <button type="button">Copy</button>
        </div>
      </div>
    </div>
  );
};

export default MyHashtags;
