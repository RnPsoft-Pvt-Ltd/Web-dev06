import React from 'react';
import './login.css'; 
import profilePic from './Images/0777cf943add46498ab08cf24fcf8a78.jpeg'; 
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  
  const navigate=useNavigate();

  return (
    <div className="lp-wrapper">
      <div className="lp-container">
        <div className="lp-box">
          <img src={profilePic} alt="Profile Picture" className="lp-pic" />
          <h2>Log in</h2>
          <form>
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">Password</label>
            <div className="lp-password-wrapper">
              <input type="password" id="password" name="password" required />
              <span className="lp-toggle-password">Hide</span>
            </div>

            <button onClick={()=>navigate('/ticket')} type="submit">Log in</button>
          </form>
          <p className="lp-secure-text">
            Secure login with reCAPTCHA subject to <a href="#">Google Terms & Privacy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
