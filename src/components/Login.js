import React from "react";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";
import "../styles/login.scss";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = ({ onLogin, userID }) => {
  return (
    <div className="login">
      <h1 className="login__header">#Hashtify</h1>
      <h2 className="login__header">
        Log in to search, create and manage your hashtags.
      </h2>
      <FacebookLogin
        appId="813549316783868"
        callback={onLogin}
        userID={userID}
        cssClass="my-facebook-button-class"
        icon={<FaFacebookF className="fb-icon" />}
      />
      <h2 className="login__header">Or you can search without logging in.</h2>
      <Link to="/search" className="search-only-button">
        I just want to search
      </Link>
    </div>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
  userID: PropTypes.string.isRequired,
};
export default Login;
