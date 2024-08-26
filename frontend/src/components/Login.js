import React, { useState } from 'react';
import axios from 'axios';
import { loginUser} from '../services/api'; // Adjust the import path as needed

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login/', formData);
      // const response=loginUser(formData);
      localStorage.setItem('authToken', response.data.access); 
      window.location.href = '/api/profile';
      console.log('Login successful.');
    } catch (error) {
      setError('Login failed: Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log in</h2>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Log In</button>
      <a href="/api/forgot-password">Forgot Password?</a>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default Login;
