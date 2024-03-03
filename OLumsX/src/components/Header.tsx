import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Add a focus box shadow on search bar !!

const Header = () => {
  return (
    <>
      <div className="main-header">
        <div className="col-2 logo">OLumsX</div>

        <div className="col-6 search-bar">
          <FontAwesomeIcon icon="magnifying-glass" className="search-icon" />
          <input type="text" className="search-input" placeholder="Search..." />
        </div>

        <div className="col-3 navigate-boxes">
          <div className="navigate-box">
            <FontAwesomeIcon icon="heart" className="navigate-icon" />
          </div>

          <div className="navigate-box">
            <FontAwesomeIcon icon="user" className="navigate-icon" />
          </div>

          <div className="navigate-box">
            <FontAwesomeIcon icon="cart-shopping" className="navigate-icon" />
          </div>

          <div className="navigate-box">
            <FontAwesomeIcon icon="gear" className="navigate-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
