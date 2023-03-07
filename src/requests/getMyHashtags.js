/* eslint-disable no-console */
import axios from "axios";

const getMyHashtags = (setMyHashtags, category) => {
  if (category) {
    try {
      axios.get(`http://localhost:3000/hashtags/${category}`).then((res) => {
        setMyHashtags(res.data);
        console.log(res.data, "res.data");
      });
    } catch (e) {
      console.log(e);
    }
  }
  try {
    axios.get("http://localhost:3000/hashtags").then((res) => {
      setMyHashtags(res.data);
      console.log(res.data, "res.data");
    });
  } catch (e) {
    console.log(e);
  }
};

export default getMyHashtags;
