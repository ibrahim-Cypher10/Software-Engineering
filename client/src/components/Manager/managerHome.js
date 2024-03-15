import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ManagerHome = () => {

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
  else if (userType !== "Manager")
  {
    alert("You are not a manager!");
    navigate("/");
  }

  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
      <br />
      <div>
        <h2>WELCOME TO MANAGER HOME PAGE!</h2>
      </div>
      <br />
      <Link to="/profile">Your Profile</Link>
      <br />
      <Link to="/managerViewCustomers">View Customers</Link>
      <br />
      <Link to="/managerViewVendors">View Vendors</Link>
      <br />
      <Link to="/managerViewManager">View Managers</Link>
      <br />
      <Link to="/undeliveredOrders">View All Undelivered Orders</Link>
      <br />
      <Link to="/deliveredOrders">View All Deliveries</Link>
    </div>
  );
};

export default ManagerHome;
