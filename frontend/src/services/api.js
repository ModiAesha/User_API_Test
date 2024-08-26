// src/api.js

import axios from 'axios';

// Set the base URL for your API requests
const API_BASE_URL = 'http://localhost:8000/api';

// Function to handle user signup
export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup/`, userData);
    return response.data;
  } catch (error) {
    console.error('Error during signup:', error);
    throw error;
  }
};

// Function to handle user login
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login/`, credentials);
    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

// Function to handle forgot password
export const forgotPassword = async (email) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/forgot-password/`, { email });
    return response.data;
  } catch (error) {
    console.error('Error during forgot password:', error);
    throw error;
  }
};

// Function to handle password reset
export const resetPassword = async (otp, newPassword) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/reset-password/`, { otp, newPassword });
    return response.data;
  } catch (error) {
    console.error('Error during reset password:', error);
    throw error;
  }
};




// Function to handle profile update
export const updateProfile = async (profileData) => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    throw new Error('No token found');
  }

  try {
    const response = await axios.put(`${API_BASE_URL}/profile-update/`, profileData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error updating profile:', error.response ? error.response.data : error.message);
    throw error;
  }
};


export const fetchProfile = async () => {
  const token = localStorage.getItem('authToken'); // Retrieve the token from local storage
  if (!token) {
    throw new Error('No authentication token found');
  }

  try {
    const response = await fetch(`${API_BASE_URL}/profile/`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
        'Content-Type': 'application/json' // Optional: Set Content-Type if needed
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch profile');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

  

// export const fetchProfile = async () => {
//     const token = localStorage.getItem('authToken'); // Ensure token key is consistent
//     if (!token) {
//       throw new Error('No token found');
//     }
  
//     try {
//       const response = await axios.get(`${API_BASE_URL}/profile/${profileId}`, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//         },
//       });
//       return response.data;
//     } catch (error) {
//       console.error('Error during fetch profile:', error.response ? error.response.data : error.message);
//       throw error;
//     }
//   };
  
