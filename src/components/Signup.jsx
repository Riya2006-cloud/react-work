import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [activeForm, setActiveForm] = useState('login');
  const [formData, setFormData] = useState({
    loginEmail: '',
    loginPassword: '',
    signupName: '',
    signupEmail: '',
    signupPassword: '',
    signupConfirm: '',
    resetEmail: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert("Login Submitted!");
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    alert("Account Created Successfully!");
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();
    alert("Password reset link sent to your email!");
  };

  const handleGoogleLogin = () => {
    window.location.href = "https://accounts.google.com/signin";
  };

  const handleGithubLogin = () => {
    window.location.href = "https://github.com/login";
  };

  const showSignup = (e) => {
    e.preventDefault();
    setActiveForm('signup');
  };

  const showLogin = (e) => {
    e.preventDefault();
    setActiveForm('login');
  };

  const showReset = (e) => {
    e.preventDefault();
    setActiveForm('reset');
  };

  const backToLogin = (e) => {
    e.preventDefault();
    setActiveForm('login');
  };

  return (
    <div className="signup-page">
      <div className="container">
        {/* LEFT FORM */}
        <div className="form-section">
          {/* LOGIN */}
          <div id="loginBox" className={activeForm === 'login' ? '' : 'hidden'}>
            <h2>Welcome Back</h2>
            <p>Enter your account details</p>

            <button className="google-btn" onClick={handleGoogleLogin}>
              <img src="https://img.icons8.com/color/16/google-logo.png" alt="Google" /> Log in with Google
            </button>
            <button className="github-btn" onClick={handleGithubLogin}>
              <img src="https://img.icons8.com/ios-glyphs/16/github.png" alt="GitHub" /> Log in with GitHub
            </button>

            <div className="divider"><span>OR</span></div>

            <form id="loginForm" onSubmit={handleLoginSubmit}>
              <input 
                type="text" 
                id="loginEmail" 
                name="loginEmail"
                placeholder="Email or Username" 
                value={formData.loginEmail}
                onChange={handleInputChange}
                required 
              />
              <input 
                type="password" 
                id="loginPassword" 
                name="loginPassword"
                placeholder="Password" 
                value={formData.loginPassword}
                onChange={handleInputChange}
                required 
              />
              <div className="options">
                <label><input type="checkbox" /> Keep me signed in</label>
                <a href="#" onClick={showReset}>Forgot password?</a>
              </div>
              <button type="submit" className="signin-btn">Sign In</button>
            </form>
            <div className="message" id="loginMsg"></div>
            <p style={{marginTop: '10px'}}>
              Don't have an account? <a href="#" onClick={showSignup}>Sign Up</a>
            </p>
          </div>

          {/* SIGNUP */}
          <div id="signupBox" className={activeForm === 'signup' ? '' : 'hidden'}>
            <h2>Create Account</h2>
            <p>Fill in the details below</p>
            <form id="signupForm" onSubmit={handleSignupSubmit}>
              <input 
                type="text" 
                id="signupName" 
                name="signupName"
                placeholder="Full Name" 
                value={formData.signupName}
                onChange={handleInputChange}
                required 
              />
              <input 
                type="email" 
                id="signupEmail" 
                name="signupEmail"
                placeholder="Email" 
                value={formData.signupEmail}
                onChange={handleInputChange}
                required 
              />
              <input 
                type="password" 
                id="signupPassword" 
                name="signupPassword"
                placeholder="Password" 
                value={formData.signupPassword}
                onChange={handleInputChange}
                required 
              />
              <input 
                type="password" 
                id="signupConfirm" 
                name="signupConfirm"
                placeholder="Confirm Password" 
                value={formData.signupConfirm}
                onChange={handleInputChange}
                required 
              />
              <button type="submit" className="signin-btn">Sign Up</button>
            </form>
            <div className="message" id="signupMsg"></div>
            <p style={{marginTop: '10px'}}>
              Already have an account? <a href="#" onClick={showLogin}>Sign In</a>
            </p>
          </div>

          {/* RESET */}
          <div id="resetBox" className={activeForm === 'reset' ? '' : 'hidden'}>
            <h2>Reset Password</h2>
            <p>Enter your email to receive reset instructions</p>
            <form id="resetForm" onSubmit={handleResetSubmit}>
              <input 
                type="email" 
                id="resetEmail" 
                name="resetEmail"
                placeholder="Your Email" 
                value={formData.resetEmail}
                onChange={handleInputChange}
                required 
              />
              <button type="submit" className="signin-btn">Send Reset Link</button>
            </form>
            <div className="message" id="resetMsg"></div>
            <p style={{marginTop: '10px'}}>
              <a href="#" onClick={backToLogin}>Back to Login</a>
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="image-section">
          <img src="https://www.indiafilings.com/learn/wp-content/uploads/2025/01/Elements-of-Business-Plan.jpg" alt="Background" />
        </div>
      </div>
    </div>
  );
};

export default Signup;