
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Profile from './components/Profile';
import ProfileUpdate from './components/ProfileUpdate';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <Link to="/api/signup">Signup / </Link>
            <Link to="/api/login">Login</Link>
           
          </ul>
        </nav>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/api/signup" element={<Signup />} />
          <Route path="/api/login" element={<Login />} />
          <Route path="/api/forgot-password" element={<ForgotPassword />} />
          <Route path="/api/reset-password" element={<ResetPassword />} />
          <Route path="/api/profile" element={<Profile />} />
          <Route path="/api/profile-update" element={<ProfileUpdate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

