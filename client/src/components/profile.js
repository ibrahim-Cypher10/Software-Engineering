// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Profile = () => {
//   const navigater = useNavigate();
//   const [user, setUser] = useState({
//     username: "",
//     email: "",
//     user_type: "",
//     first_name: "",
//     last_name: "",
//     DOB: "",
//     address: "",
//     gender: "",
//   });
//   const user_type = localStorage.getItem("user_type");

//   const navigateToHome = () => {
//     // if (user_type === "Customer") {
//     //   navigater("/customerHome");
//     // } else if (user_type === "Vendor") {
//     //   navigater("/vendorHome");
//     // } else if (user_type === "Manager") {
//     //   navigater("/managerHome");
//     // }
//     navigater("/home");
//   };

//   useEffect(() => {
//     const userId = localStorage.getItem("user_id");

//     fetch("api/user/getuserbyid", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ UserID: userId }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.error) {
//           alert(data.error);
//           navigateToHome();
//         } else {
//           setUser(data);
//         }
//       });
//   }, []);

//   return (
//     <div>
//       <div>
//         <p>Profile</p>
//         <br />
//         <p>Username: {user.username}</p>
//         <br />
//         <p>Email: {user.email}</p>
//         <br />
//         <p>User Type: {user.user_type}</p>
//         <br />
//         <p>First Name: {user.first_name}</p>
//         <br />
//         <p>Last Name: {user.last_name}</p>
//         <br />
//         <p>Address: {user.address}</p>
//         <br />
//         <p>Gender: {user.gender}</p>
//         <br />
//         <p>Date of Birth: {user.DOB}</p>
//       </div>
//       <button onClick={() => navigateToHome()}>Go back to home</button>
//     </div>
//   );
// };

// export default Profile;


import React, { useState } from 'react';
import '../styles/profile.css';

// Placeholder profile image import
import placeholderProfilePic from '../assets/image/blackhat.png';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    profilePic: placeholderProfilePic,
    username: 'Ibrahim',
    email: 'Ibrahim@billionaire.com',
    firstName: 'Ibbi',
    lastName: 'Khan',
    address: 'Rawalpindi',
    gender: 'Male',
    dob: '2003-01-08',
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleProfilePicChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUser({ ...user, profilePic: e.target?.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div className="user-profile">
      <div className="profile-header">
        <h1>User Profile</h1>
        <button onClick={handleEditClick} className="edit-profile-button">
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>
      <div className="profile-image-container">
        <img src={user.profilePic} alt="Profile" className="profile-image" />
        {isEditing && (
          <>
            <input
              id="profile-pic-upload"
              type="file"
              onChange={handleProfilePicChange}
              className="file-input"
            />
            <label htmlFor="profile-pic-upload" className="custom-file-upload">
              Change Photo
            </label>
          </>
        )}
      </div>
      <div className="profile-details">
        {/* Iterate over each user detail item */}
        {Object.entries(user).map(([key, value]) => {
          if (key === 'profilePic') return null; // Skip profile picture field for iteration
          return (
            <div className="detail-item" key={key}>
              <span className="label">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</span>
              {isEditing ? (
                <input
                  type={key === 'dob' ? 'date' : 'text'}
                  name={key}
                  value={value}
                  onChange={handleInputChange}
                  className="edit-input"
                />
              ) : (
                <span className="value">{value}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
