import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const VendorViewOrders = () => {
  const navigator = useNavigate();
  const user_id = localStorage.getItem("user_id");
  const [allOrders, setOrders] = useState([]);

  const userType = localStorage.getItem("user_type");
  if (!userType) {
    alert("User not logged in");
    navigator("/");
  }
  else if (userType !== "Vendor")
  {
    alert("You are not a vendor!");
    navigator("/");
  }

  useEffect(() => {
    fetch("/fetchordersvend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ vendorId: user_id }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
          navigator("/vendorHome");
        } else {
          setOrders(data);
        }
      });
  }, []);

  return (
    <div>
      <Link to="/vendorHome">Go back to Home page</Link>;
      {allOrders.map((order) => (
        <div key={order._id}>
          <p>Order ID: {order._id}</p>
          <p>Vendor: {order.vendor}</p>
          <p>Bill: {order.bill}</p>
          <p>Paid: Yes</p>
        </div>
      ))}
    </div>
  );
};

export default VendorViewOrders;
