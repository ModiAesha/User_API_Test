import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProfile, updateProfile } from '../services/api'; 

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const token = localStorage.getItem('authToken'); 
        if (!token) {
          setError('No token found. Please log in.');
          return;
        }

        console.log('Attempting to fetch profile with token:', token);

        const data = await fetchProfile();
        setProfile(data);
        setFormData(data); 
      } catch (error) {
        setError('Failed to load profile. try again login');
        console.error('Error fetching profile:', error.message);
      }
    };

    getProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      await updateProfile(formData);
      setProfile(formData); 
       setIsEditing(false);
       setError('Profile updated successfully.');
    } catch (error) {
      setError('Failed to update profile.');
      console.error('Error updating profile:', error.message);
    }
  };

  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>Profile</h2>
      {profile ? (
        <div>
          {isEditing ? (
            <div>
              <label>
                Name:
                <input type="text" name="name" value={formData.name || ''} onChange={handleChange} />
              </label>
              <label>
                Mobile:
                <input type="text" name="mobile" value={formData.mobile || ''} onChange={handleChange} />
              </label>
              <label>
                Email:
                <input type="email" name="email" value={formData.email || ''} onChange={handleChange} />
              </label>
              <label>
                Date of Birth:
                <input type="date" name="dob" value={formData.dob || ''} onChange={handleChange} />
              </label>
              <label>
                Gender:
                <input type="text" name="gender" value={formData.gender || ''} onChange={handleChange} />
              </label>
              <label>
                Address:
                <textarea name="address" value={formData.address || ''} onChange={handleChange} />
              </label>
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          ) : (
            <div>
              <p>Name: {profile.name}</p>
              <p>Mobile: {profile.mobile}</p>
              <p>Email: {profile.email}</p>
              <p>Date of Birth: {profile.dob}</p>
              <p>Gender: {profile.gender}</p>
              <p>Address: {profile.address}</p>
              <button onClick={() => setIsEditing(true)}>Edit Profile</button>
            </div>
          )}
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
