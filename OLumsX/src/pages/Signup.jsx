import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../styles/login_signup.scss";

// Re-enter password

const Signup = () => {
  const navigater = useNavigate();

  const [signup_details, setState] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    user_type: "Customer",
    DOB: "",
    gender: "",
    address: "",
  });

  const handleInputChange = (event) => {
    setState({ ...signup_details, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signup_details),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert(data.message);
          navigater("/");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="signup-page">
        <Header />

        <div className="signup-form">
          <div className="signup-title">Signup</div>

          <form onSubmit={handleSubmit}>
            <div className="input-box mt-0">
              <div className="input-label">First Name:</div>

              <input
                type="text"
                name="first_name"
                value={signup_details.first_name}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-box">
              <div className="input-label">Last Name:</div>

              <input
                type="text"
                name="last_name"
                value={signup_details.last_name}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-box">
              <div className="input-label">Username:</div>

              <input
                type="text"
                name="username"
                value={signup_details.username}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-box">
              <div className="input-label">Email:</div>

              <input
                type="email"
                name="email"
                value={signup_details.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-box">
              <div className="input-label">Password:</div>

              <input
                type="password"
                name="password"
                value={signup_details.password}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-box">
              <div className="input-label">Date of Birth:</div>

              <input
                type="text"
                name="DOB"
                value={signup_details.DOB}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-box">
              <div className="input-label">Gender:</div>

              <input
                type="text"
                name="gender"
                value={signup_details.gender}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-box">
              <div className="input-label">Address:</div>

              <input
                type="text"
                name="address"
                value={signup_details.address}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-box">
              <div className="input-label">User Type:</div>

              <select
                name="user_type"
                value={signup_details.user_type}
                onChange={handleInputChange}
              >
                <option value="Customer">Customer</option>
                <option value="Vendor">Vendor</option>
                <option value="Manager">Manager</option>
              </select>
            </div>
          </form>

          <div className="d-flex justify-content-center align-items-center flex-column">
            <div className="submit-btn">
              <input type="submit" value="Submit" onSubmit={handleSubmit} />
            </div>
          </div>

          {/* <div>
            <Link to="/">Already Registered? Click here to Login</Link>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Signup;
