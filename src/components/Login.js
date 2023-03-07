import React from "react";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = ({ onLogin, onLogout, userID }) => {
  return (
    <div className="login">
      <h1>#Hashtify</h1>
      <h2>Log in to search, create and manage your hashtags.</h2>
      {userID ? (
        <button className="fb-logout-button" type="button" onClick={onLogout}>
          Sign out
        </button>
      ) : (
        <FacebookLogin
          appId="519196123675566"
          callback={onLogin}
          userID={userID}
          cssClass="my-facebook-button-class"
          icon={<FaFacebookF className="fb-icon" />}
        />
      )}
      <h2>Or you can search without logging in.</h2>
      <Link to="/search">I just want to search</Link>
    </div>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  userID: PropTypes.string.isRequired,
};
export default Login;
