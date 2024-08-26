// // src/api.js

// import axios from 'axios';

// // Set the base URL for your API requests
// const API_BASE_URL = 'http://localhost:8000/api';

// // Function to handle user signup
// export const signupUser = async (userData) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/signup/`, userData);
//     return response.data;
//   } catch (error) {
//     console.error('Error during signup:', error);
//     throw error;
//   }
// };

// // Function to handle user login
// export const loginUser = async (credentials) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/login/`, credentials);
//     return response.data;
//   } catch (error) {
//     console.error('Error during login:', error);
//     throw error;
//   }
// };

// // Function to handle forgot password
// export const forgotPassword = async (email) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/forgot-password/`, { email });
//     return response.data;
//   } catch (error) {
//     console.error('Error during forgot password:', error);
//     throw error;
//   }
// };

// // Function to handle password reset
// export const resetPassword = async (otp, newPassword) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/reset-password/`, { otp, newPassword });
//     return response.data;
//   } catch (error) {
//     console.error('Error during reset password:', error);
//     throw error;
//   }
// };




// // Function to handle profile update
// export const updateProfile = async (userData) => {
//   try {
//     const response = await axios.put(`${API_BASE_URL}/profile-update/`, userData);
//     return response.data;
//   } catch (error) {
//     console.error('Error during profile update:', error);
//     throw error;
//   }
// };
