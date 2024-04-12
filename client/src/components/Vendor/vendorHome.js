import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const VendorHome = () => {
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
  else if (userType !== "Vendor")
  {
    alert("You are not a vendor!");
    navigate("/");
  }

  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
      <br />
      <div>
        <h2>WELCOME TO VENDOR HOME PAGE!</h2>
      </div>
      <br />
      <Link to="/profile">Your Profile</Link>
      <br />
      <Link to="/vendorProducts">Your Products</Link>
      <br />
      <Link to="/vendorAddProduct">Add Product</Link>
      <br />
      <Link to="/vendorDeleteProduct">Delete Product</Link>
      <br />
      <Link to="/vendorViewOrder">View All Orders</Link>
    </div>
  );
};

export default VendorHome;
