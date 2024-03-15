import React from "react";
import { Link, useNavigate } from "react-router-dom";


const CustomerHome = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.clear();
    navigate("/");
  };

  const userType = localStorage.getItem("user_type");
  if (!userType) {
    alert("User not logged in");
    navigate("/");
  }
  else if (userType !== "Customer")
  {
    alert("You are not a customer");
    navigate("/");
  }


  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
      <br />
      <div><h2>WELCOME TO CUSTOMER HOME PAGE!</h2></div>
      <br />
      <Link to="/profile">Your Profile</Link>
      <br />
      <Link to="/customerProductPage">View Products</Link>
      <br />
      <Link to="/cart">Check Cart</Link>
      <br />
      <Link to="/customerAllOrdersPage">View Order History</Link>
    </div>
  );
};

export default CustomerHome;
