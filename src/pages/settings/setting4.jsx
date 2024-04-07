import React from 'react';
import { useState } from 'react';




const Setting4 = () => {


  const CustomCheckbox = () => {
    const [checked, setChecked] = useState(false);
  
    const handleChange = () => {
      setChecked(!checked);
    };
  
    return (
      <div className="checkbox-wrapper-12">
        <div className={`cbx ${checked ? 'checked' : ''}`}>
          <input type="checkbox" id="cbx-12" checked={checked} onChange={handleChange} />
          <label htmlFor="cbx-12"></label>
          <svg fill="none" viewBox="0 0 15 14" height="14" width="15">
            <path d="M2 8.36364L6.23077 12L13 2"></path>
          </svg>
        </div>
  
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo-12">
              <feGaussianBlur result="blur" stdDeviation="4" in="SourceGraphic"></feGaussianBlur>
              <feColorMatrix result="goo-12" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" mode="matrix" in="blur"></feColorMatrix>
              <feBlend in2="goo-12" in="SourceGraphic"></feBlend>
            </filter>
          </defs>
        </svg>
      </div>
    );
  };
  
  // Your settings page component code here
  return <div> <div className="notifications-container">
  <div className="settings-box">
    <h2 className="title">Notifications Settings</h2>
    <div className="notification-option">
      <CustomCheckbox />
      <label htmlFor="all-notifications">All Notifications</label>
    </div>
    <div className="notification-option">
      <CustomCheckbox />
      <label htmlFor="new-follower">New Follower</label>
    </div>
    <div className="notification-option">
      <CustomCheckbox />
      <label htmlFor="new-message">New Message</label>
    </div>
    <div className="notification-option">
      <CustomCheckbox />
      <label htmlFor="new-post">New Post</label>
    </div>
    <div className="notification-option">
      <CustomCheckbox />
      <label htmlFor="new-like">New Like</label>
    </div>
  </div>
</div></div>;
};

export default Setting4;