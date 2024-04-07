import React from 'react';

const Setting3 = () => {
  // Your settings page component code here
  return <div>

<div className="myaccountcontainer">
      <div className="myaccountsettings-box">
        <h2 className="myacounttitle">My Account</h2>
        <div className="myaccountprofile-picture">
          <img src="/loginAssets/user.png" alt="Profile" className="myaccountprofile-img" />
          <button className="myaccountchange-picture-btn">Change Picture</button>
        </div>
        <hr className="myaccountdivider" />
        <div className="change-nickname">
          <label htmlFor="nickname" className="myaccountlabel">Change Nickname</label>
          <div className="form-control">
      <input type="text" required />
      <label>
        <span style={{ transitionDelay: '0ms' }}>N</span>
        <span style={{ transitionDelay: '50ms' }}>i</span>
        <span style={{ transitionDelay: '100ms' }}>c</span>
        <span style={{ transitionDelay: '150ms' }}>k</span>
        <span style={{ transitionDelay: '200ms' }}>n</span>
        <span style={{ transitionDelay: '250ms' }}>a</span>
        <span style={{ transitionDelay: '300ms' }}>m</span>
        <span style={{ transitionDelay: '350ms' }}>e</span>
      </label>
    </div>
        </div>
        <hr className="myaccountdivider" />
        <div className="change-username">
          <label htmlFor="username" className="myaccountlabel">Change Username</label>
          <div className="form-control">
      <input type="text" required />
      <label>
        <span style={{ transitionDelay: '0ms' }}>U</span>
        <span style={{ transitionDelay: '50ms' }}>s</span>
        <span style={{ transitionDelay: '100ms' }}>e</span>
        <span style={{ transitionDelay: '150ms' }}>r</span>
        <span style={{ transitionDelay: '200ms' }}>n</span>
        <span style={{ transitionDelay: '250ms' }}>a</span>
        <span style={{ transitionDelay: '300ms' }}>m</span>
        <span style={{ transitionDelay: '350ms' }}>e</span>
      </label>
    </div>
        </div>
        <hr className="myaccountdivider" />
        <div className="change-bio">
          <label htmlFor="bio" className="myaccountlabel">Change Bio</label>
          <textarea id="bio" className="myaccounttextarea-field" placeholder="Enter new bio"></textarea>
        </div>

        <button className="bookmarkBtn">
      <span className="IconContainer">
        <svg viewBox="0 0 384 512" height="0.9em" className="icon">
          <path
            d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
          ></path>
        </svg>
      </span>
      <p className="text">Save</p>
    </button>

      </div>
    </div>
  </div>;
};

export default Setting3;
