import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigater = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    user_type: "",
    first_name: "",
    last_name: "",
    DOB: "",
    address: "",
    gender: "",
  });
  const user_type = localStorage.getItem("user_type");

  const navigateToHome = () => {
    // if (user_type === "Customer") {
    //   navigater("/customerHome");
    // } else if (user_type === "Vendor") {
    //   navigater("/vendorHome");
    // } else if (user_type === "Manager") {
    //   navigater("/managerHome");
    // }
    navigater("/home");
  };

  useEffect(() => {
    const userId = localStorage.getItem("user_id");

    fetch("/getuserbyid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ UserID: userId }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
          navigateToHome();
        } else {
          setUser(data);
        }
      });
  }, []);

  return (
    <div>
      <div>
        <p>Profile</p>
        <br />
        <p>Username: {user.username}</p>
        <br />
        <p>Email: {user.email}</p>
        <br />
        <p>User Type: {user.user_type}</p>
        <br />
        <p>First Name: {user.first_name}</p>
        <br />
        <p>Last Name: {user.last_name}</p>
        <br />
        <p>Address: {user.address}</p>
        <br />
        <p>Gender: {user.gender}</p>
        <br />
        <p>Date of Birth: {user.DOB}</p>
      </div>
      <button onClick={() => navigateToHome()}>Go back to home</button>
    </div>
  );
};

export default Profile;
