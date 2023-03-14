/* eslint-disable no-console */
import axios from "axios";

const getStatsResult = async (searchValue, setStatsResults, setReady) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/stats/${searchValue}`
    );
    console.log(response.data);
    setStatsResults(response.data);
    await setReady(true);
  } catch (error) {
    console.error(error);
  }
};

export default getStatsResult;
