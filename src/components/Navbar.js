import React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.scss";

const Navbar = ({ userID, onLogout }) => {
  const navigate = useNavigate();
  const { pathname } = window.location;
  const renderLoginButton = () => {
    if (pathname === "/") {
      return null;
    }
    if (userID) {
      return (
        <button className="sign-out-btn" type="button" onClick={onLogout}>
          Sign out
        </button>
      );
    }
    return (
      <button
        className="log-in-btn"
        type="button"
        onClick={() => navigate("/")}
      >
        Log in
      </button>
    );
  };

  return (
    <div className="navbar">
      <Link to="/" className="navbar__logo">
        <p>#Hashtify</p>
      </Link>
      <ul className="navbar-links">
        <li className="narbar-links__item">
          <Link className="narbar-links__text" to="/search">
            Search by Keyword
          </Link>
        </li>
        <li className="narbar-links__item">
          <Link className="narbar-links__text" to="/search-by-image">
            Search by Image
          </Link>
        </li>
        {userID && (
          <>
            <li className="narbar-links__item">
              <Link className="narbar-links__text" to="/my-hashtags">
                My Hashtags
              </Link>
            </li>
            <li className="narbar-links__item">
              <Link className="narbar-links__text" to="/add-hashtags">
                Add Hashtags
              </Link>
            </li>
          </>
        )}
      </ul>
      {renderLoginButton()}
    </div>
  );
};

export default Navbar;

Navbar.propTypes = {
  onLogout: PropTypes.func.isRequired,
  userID: PropTypes.string.isRequired,
};
