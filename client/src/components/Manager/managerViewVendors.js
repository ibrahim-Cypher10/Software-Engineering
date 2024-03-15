import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

//Implement Search Bar

const ManagerViewVendors = () => {
  const navigator = useNavigate();
  const [vendors, setVendors] = useState([]);

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
    fetch("/fetchvendors")
      .then((response) => response.json())
      .then((data) => setVendors(data))
      .catch((error) => console.error(error));
  }, []);

  const deleteVendor = (vendorId) => {
    fetch("/deleteuser", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userID: vendorId }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
          navigator("/managerHome");
        } else {
          alert("Vendor deleted successfully"); //remove its products

          fetch("/fetchvendors")
            .then((response) => response.json())
            .then((data) => setVendors(data))
            .catch((error) => console.error(error));
        }
      });
  };

  return (
    <div>
      <div>
        <Link to="/managerHome">Go to Home</Link>
      </div>
      {vendors.map((vendor) => (
        <div key={vendor._id}>
          <h3>Name: {vendor.username}</h3>
          <p>Email: {vendor.email}</p>
          <button onClick={() => deleteVendor(vendor._id)}>
            Delete Vendor
          </button>
        </div>
      ))}
    </div>
  );
};

export default ManagerViewVendors;
