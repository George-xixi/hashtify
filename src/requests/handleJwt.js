/* eslint-disable no-console */
import axios from "axios";

const handleJwt = (userID) => {
  try {
    axios
      .post(
        `http://localhost:3000/auth/${userID}`,
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => console.log(res, "auth response"));
  } catch (e) {
    console.log(e, "res error");
  }
};

export default handleJwt;
