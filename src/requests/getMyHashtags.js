/* eslint-disable no-console */
import axios from "axios";

const getMyHashtags = (setMyHashtags, userID, category) => {
  if (category) {
    try {
      axios
        .get(`http://localhost:3000/hashtags/${userID}/${category}`)
        .then((res) => {
          setMyHashtags(res.data);
          console.log(res.data, "res.data");
        });
    } catch (e) {
      console.log(e);
    }
  }
  try {
    axios.get(`http://localhost:3000/hashtags/${userID}`).then((res) => {
      setMyHashtags(res.data);
      console.log(res.data, "res.data");
    });
  } catch (e) {
    console.log(e);
  }
};

export default getMyHashtags;
