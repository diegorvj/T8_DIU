import React from 'react';
import './Profile.css';

const Profile = ({ user }) => {
  return (
    <div className="profile-container">
      <img src={user.avatar} alt="Avatar del usuario" className="profile-avatar" />
      <h2 className="profile-name">{user.name}</h2>
      <p className="profile-bio">{user.bio}</p>
    </div>
  );
};

export default Profile;
