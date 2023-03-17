/* eslint-disable no-console */
import axios from "axios";

const searchHashtagsByImage = async (
  url,
  setImageResult,
  setReady,
  setRenderSave,
  userID
) => {
  try {
    const url2 = encodeURIComponent(`${url}`);
    const response = await axios.get(
      `http://localhost:3000/search-by-image/${url2}`
    );
    setImageResult(response.data);
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
