import React, { useState } from 'react';
import { updateProfile } from '../services/api';

function ProfileUpdate() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    mobile: '',
    dob: '',
    gender: '',
    address: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Retrieve the authentication token from local storage
    const token = localStorage.getItem('authToken');
    console.log('Token being sent:', token); // Debugging line

    if (!token) {
      setError('No token found. Please log in.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/profile-update/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.detail || 'An error occurred.';
        setError(errorMessage);
        setSuccess('');
      } else {
        const data = await response.json();
        setSuccess('Profile updated successfully.');
        setError('');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setError('An error occurred while updating the profile.');
      setSuccess('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Profile Update</h2>
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="text" name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} required />
      <input type="date" name="dob" placeholder="Date of Birth" value={formData.dob} onChange={handleChange} required />
      <input type="text" name="gender" placeholder="Gender" value={formData.gender} onChange={handleChange} required />
      <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} required></textarea>
      <button type="submit">Update Profile</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </form>
  );
}

export default ProfileUpdate;
