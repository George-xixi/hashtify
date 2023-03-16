import React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.scss";

const Navbar = ({ userID, onLogout }) => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <Link to="/" className="navbar__logo">
        <p>#Hashtify</p>
      </Link>
      {userID && (
        <ul className="navbar-links">
          <li className="narbar-links__item">
            <Link className="narbar-links__text" to="/search">
              Search
            </Link>
          </li>
          <li className="narbar-links__item">
            <Link className="narbar-links__text" to="/search-by-image">
              Search By Image
            </Link>
          </li>
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
        </ul>
      )}

      {userID ? (
        <button className="sign-out-btn" type="button" onClick={onLogout}>
          Sign out
        </button>
      ) : (
        <button
          className="log-in-btn"
          type="button"
          onClick={() => navigate("/")}
        >
          Log in
        </button>
      )}
    </div>
  );
};

export default Navbar;

Navbar.propTypes = {
  onLogout: PropTypes.func.isRequired,
  userID: PropTypes.string.isRequired,
};
