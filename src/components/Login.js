import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <h1>#Hashtify</h1>
      <h2>Log in to search, create and manage your hashtags.</h2>
      <button type="button">Log in</button>
      <h2>Or you can search without logging in.</h2>
      <Link to="/search">I just want to search</Link>
    </div>
  );
};

export default Login;
