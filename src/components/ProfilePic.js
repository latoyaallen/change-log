import React from 'react';
import profile from '../images/profile.png';

const image = {
  width: 50,
  height: 50,
  position: 'absolute',
  right: '10px',
}

const ProfilePic = () => (
  <div>
    <img src={profile} style={image} alt="Profile" />
  </div>
);

export default ProfilePic;
