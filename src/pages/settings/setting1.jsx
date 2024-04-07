import React from 'react';

const Setting1 = () => {
  
  return <div><div className="center-box">
  <div className="medium-box">
    <div className="secondecontainer">
      <div className="box">
        <div className="inner-container">
          <h2>Change Email</h2>
          <div className="input-container">
          <div className="form__group field">
  <input type="email" className="form__field" placeholder="" required />
  <label htmlFor="email" className="form__label">old email</label>
</div>

          </div>
          <div className="input-container">
          <div className="form__group field">
  <input type="email" className="form__field" placeholder="" required />
  <label htmlFor="email" className="form__label">new email</label>
</div>

          </div>
        </div>
    <div className="inner-container">
          <h2>Change Password</h2>
      <div className="input-container">
        <div className="form__group field">
          <input type="password" className="form__field" placeholder="" required />
         <label htmlFor="password" className="form__label">old Password</label>
        </div>

      </div>
          <div className="input-container">
          <div className="form__group field">
                   <input type="password" className="form__field" placeholder="" required />
                   <label htmlFor="password" className="form__label">new Password</label>
          </div>

          </div>
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
  </div>
</div>


  </div>;
};

export default Setting1;