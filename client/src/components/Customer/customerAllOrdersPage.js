import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const CustomerAllOrdersPage = () => {
  const navigator = useNavigate();
  const user_id = localStorage.getItem("user_id");
  const [allOrders, setOrders] = useState([]);

  const userType = localStorage.getItem("user_type");
  if (!userType) {
    alert("User not logged in");
    navigator("/");
  }
  else if (userType !== "Customer")
  {
    alert("You are not a customer");
    navigator("/");
  }

  useEffect(() => {
    fetch("/fetchorderscust", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ customerId: user_id }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
          navigator("/customerHome");
        } else {
          setOrders(data);
        }
      });
  }, []);

  return (
    <div>
      <Link to="/customerHome">Go back to Home page</Link>;
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

export default CustomerAllOrdersPage;
