import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Add a focus box shadow on search bar !!

const Header = () => {
  return (
    <>
      <div className="main-header">
        <div className="col-2 logo">OLumsX</div>

        <div className="col-6">
        
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
