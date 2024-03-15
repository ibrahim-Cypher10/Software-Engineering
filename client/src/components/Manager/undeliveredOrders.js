import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UndeliveredOrders = () => {
  const navigator = useNavigate();
  const [orders, setOrders] = useState([]);

  const userType = localStorage.getItem("user_type");
  if (!userType) {
    alert("User not logged in");
    navigator("/");
  }
  else if (userType !== "Manager")
  {
    alert("You are not a manager!");
    navigator("/");
  }

  useEffect(() => {
    fetch("/fetchundeliveredorders")
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
          navigator("/managerHome");
        } else {
          // console.log(data);
          setOrders(data);
        }
      });
  }, []);

  const handleDelivery = (orderId) => {
    fetch("/createdelivery", {
      method: "POST",
      body: JSON.stringify({ orderID: orderId }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
          navigator("/managerHome");
        } else {
          alert(data.message);

          fetch("/fetchundeliveredorders")
            .then((response) => response.json())
            .then((data) => {
              if (data.error) {
                alert(data.error);
                navigator("/managerHome");
              } else {
                setOrders(data);
              }
            });
        }
      });
  };

  return (
    <div>
      <Link to="/managerHome">Go back to Home page</Link>;
      <div>Undelivered Orders</div>
      {orders.map((order) => (
        <div key={order._id}>
          <p>Order ID: {String(order._id)}</p>
          <p>Bill: {String(order.bill)}</p>
          <button onClick={() => handleDelivery(order._id)}>
            Create Delivery
          </button>
        </div>
      ))}
    </div>
  );
};

export default UndeliveredOrders;
