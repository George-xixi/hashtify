/* eslint-disable no-console */
import axios from "axios";

const searchHashtags = async (
  searchValue,
  setSearchResults,
  setReady,
  setRenderSave,
  userID
) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/search/${searchValue}`
    );
    setSearchResults(response.data);
    await setReady(true);
    if (userID) {
      setRenderSave(true);
    } else {
      setRenderSave(false);
    }
  } catch (error) {
    console.error(error);
  }
};

export default searchHashtags;
