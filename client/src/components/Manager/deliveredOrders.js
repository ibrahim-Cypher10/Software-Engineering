import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const DeliveredOrders = () => {
  const navigator = useNavigate();
  const [deliveries, setDeliveries] = useState([]);

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
    fetch("/fetchdeliveries")
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
          navigator("/managerHome");
        } else {
          setDeliveries(data);
        }
      });
  }, []);

  return (
    <div>
      <Link to="/managerHome">Go back to Home page</Link>;
      <div>Deliveries Done</div>
      {deliveries.map((delivery) => (
        <div key={delivery._id}>
          <p>Order ID: {String(delivery.order)}</p>
          <div style={{ marginLeft: "20px" }}>
            <p>Status: {String(delivery.status)}</p>
            <p>Date: {String(delivery.date)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeliveredOrders;
