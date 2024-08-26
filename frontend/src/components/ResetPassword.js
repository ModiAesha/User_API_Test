import React, { useState } from 'react';
import axios from 'axios';

function ResetPassword() {
  const [formData, setFormData] = useState({ email: '', otp: '', new_password: '' });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/reset-password/', formData);
      setSuccess('Password reset successful.');
      setError('');
    } catch (error) {
      const errorMessage = error.response?.data?.non_field_errors?.[0] || 'An error occurred.';
      setError(errorMessage);
      setSuccess('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Reset Password</h2>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="text" name="otp" placeholder="OTP" onChange={handleChange} required />
      <input type="password" name="new_password" placeholder="New Password" onChange={handleChange} required />
      <button type="submit">Reset Password</button>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </form>
  );
}

export default ResetPassword;
