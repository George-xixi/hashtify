/* eslint-disable no-console */
import axios from "axios";

const searchHashtagsByImage = async (
  url,
  setImageResult,
  setReady,
  setRenderSave,
  userID,
  setImageHashtags
) => {
  try {
    const url2 = encodeURIComponent(`${url}`);
    const response = await axios.get(
      `http://localhost:3000/search-by-image/${url2}`
    );
    const images = response.data.map((obj) => obj.hashtag);
    setImageResult(images);
    setImageHashtags(images.join("  #"));
    console.log(images, "DATA HERE!");
    await setReady(true);
    if (userID) {
      setRenderSave(true);
    } else {
      setRenderSave(false);
    }
    console.log(response.data);
    console.log(url2);
    await setReady(true);
  } catch (error) {
    console.error(error);
  }
};

export default searchHashtagsByImage;
