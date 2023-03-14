/* eslint-disable no-console */
import axios from "axios";

// will need to add alert component here

const addHashtags = (fields, setAlert) => {
  console.log(fields);
  try {
    axios.post("http://localhost:3000/hashtags", fields).then((res) => {
      console.log(res.data);
      setAlert({
        message: "Successfully saved",
        isSuccess: true,
      });
    });
  } catch (e) {
    console.log(e);
    setAlert({
      message: "Error, please try again.",
      isSuccess: false,
    });
  }
};

export default addHashtags;
