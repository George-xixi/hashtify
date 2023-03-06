/* eslint-disable no-console */
import axios from "axios";

const searchHashtags = async (searchValue, setSearchResults, setReady) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/search/${searchValue}`
    );
    setSearchResults(response.data);
    await setReady(true);
  } catch (error) {
    console.error(error);
  }
};

export default searchHashtags;
