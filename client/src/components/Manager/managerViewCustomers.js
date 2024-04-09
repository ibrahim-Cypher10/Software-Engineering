import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ManagerViewCustomers = () => {
  const navigator = useNavigate();
  const [customers, setCustomers] = useState([]);

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
    fetch("/fetchcustomers")
      .then((response) => response.json())
      .then((data) => setCustomers(data))
      .catch((error) => console.error(error));
  }, []);

  const deleteCustomer = (customerID) => {
    fetch("/deleteuser", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userID: customerID }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
          navigator("/managerHome");
        } else {
          alert("Customer deleted successfully");

          fetch("/fetchcustomers")
            .then((response) => response.json())
            .then((data) => setCustomers(data))
            .catch((error) => console.error(error));
        }
      });
  };

  return (
    <div>
      <div>
        <Link to="/managerHome">Go to Home</Link>
      </div>
      {customers.map((customer) => (
        <div key={customer._id}>
          <h3>Name: {customer.username}</h3>
          <p>Email: {customer.email}</p>
          <button onClick={() => deleteCustomer(customer._id)}>
            Delete Customer
          </button>
        </div>
      ))}
    </div>
  );
};

export default ManagerViewCustomers;
