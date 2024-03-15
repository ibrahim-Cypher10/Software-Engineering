import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/header_2.css";

// Add a focus box shadow on search bar !!

const Header = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <nav className="main-header">
        <div className="col-2 logo">OLumsX</div>

        <div className="search-bar">
          <input
            type="search"
            placeholder="Search for products..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button type="button">
            <FontAwesomeIcon icon="magnifying-glass" className="search-icon" />
          </button>
          {/* Add Search Functionality */}
        </div>

        <div className="col-3 navigate-boxes">
          <Link to={"/profile"} className="navigate-box shift-r-60">
            <FontAwesomeIcon icon="user" className="navigate-icon" />
          </Link>

          <Link to={"/wishlist"} className="navigate-box shift-r-30">
            <FontAwesomeIcon icon="heart" className="navigate-icon" />
          </Link>

          <Link to={"/cart"} className="navigate-box">
            <FontAwesomeIcon icon="cart-shopping" className="navigate-icon" />
          </Link>

          {/* <Link className="navigate-box">
            <FontAwesomeIcon icon="gear" className="navigate-icon" />
          </Link> */}
        </div>
      </nav>
    </>
  );
};

export default Header;
