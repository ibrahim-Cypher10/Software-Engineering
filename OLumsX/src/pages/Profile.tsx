// UserProfilePage.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface UserData {
  name: string;
  email: string;
  // Add more properties as needed
}

const UserProfilePage: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      setError('User ID not found in local storage');
      setLoading(false);
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get<UserData>(`http://localhost:5173/user/${userId}`);
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>No user data available.</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
        {/* Add more user details as needed */}
      </div>
    </div>
  );
};

export default UserProfilePage;
