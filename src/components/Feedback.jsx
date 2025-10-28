import React, { useState } from 'react';
import './Feedback.css';
import feedbackImage from '../assets/images/feedback.jpg.jpg'; 

const Feedback = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    message: '',
    rating: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRatingChange = (value) => {
    setFormData(prevState => ({
      ...prevState,
      rating: value
    }));
  };

  const clearRating = () => {
    setFormData(prevState => ({
      ...prevState,
      rating: ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.username || !formData.email || !formData.phone || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (formData.phone.length < 10) {
      alert('Please enter a valid phone number');
      return;
    }

    // If everything is valid
    alert('Thank you for your feedback! We will get back to you soon.');
    
    // Reset form
    setFormData({
      username: '',
      email: '',
      phone: '',
      message: '',
      rating: ''
    });
  };

  return (
    <div className="feedback-page">
      {/* Navbar - You might want to create a separate Navbar component */}
      <nav>
        <div className="logo">JOBORBIT</div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/#jobs">Jobs</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/feedback">Feedback</a></li>
          <li><a href="/signup">Sign In</a></li>
        </ul>
        <div className="hamburger" onClick={() => document.getElementById("overlayMenu").style.display = "flex"}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Overlay Menu */}
      <div className="overlay" id="overlayMenu">
        <span className="close-btn" onClick={() => document.getElementById("overlayMenu").style.display = "none"}>&times;</span>
        <a href="/">Home</a>
        <a href="/#jobs">Jobs</a>
        <a href="/about">About</a>
        <a href="/feedback">Feedback</a>
        <a href="/signup">Sign In</a>
      </div>

      <div className="container">
        <header>
          <div className="logo1">Get In Touch</div>
        </header>

        <div className="divider"></div>

        <div className="content">
          <div className="feedback-form-container">
            <h2 className="section-title">Let's Talk</h2>
            <p className="subtitle">We value your input and will respond within one business day.</p>

            <form id="feedbackForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input 
                  type="text" 
                  id="username" 
                  name="username"
                  className="form-control" 
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="form-control" 
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  className="form-control" 
                  placeholder="+91 Enter phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  className="form-control" 
                  rows="5" 
                  placeholder="Please share your thoughts, suggestions, or concerns..."
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <div id="rating">
                <label htmlFor="rate" id="rate"><b>RATE YOUR EXPERIENCE:</b></label>
                <div className="stars">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <React.Fragment key={star}>
                      <input 
                        type="radio" 
                        id={`star${star}`} 
                        name="rating" 
                        value={star}
                        checked={formData.rating === star.toString()}
                        onChange={() => handleRatingChange(star.toString())}
                      />
                      <label 
                        htmlFor={`star${star}`} 
                        title={`${star} ${star === 1 ? 'star' : 'stars'}`}
                      >
                        ★
                      </label>
                    </React.Fragment>
                  ))}
                </div>
                <button type="button" id="clear-rating" onClick={clearRating}>
                  Clear Rating
                </button>
              </div>

              <button type="submit" className="btn-submit">
                Submit Feedback
              </button>
            </form>
          </div>

          <div className="form-image">
            <img src={feedbackImage} alt="Career support team" />
            <div className="image-overlay">
              <h3 className="feedback-line">Your Feedback Matters</h3>
              <p className="feedback-line">Help us improve your job search experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h2 className="footer-logo">JobOrbit</h2>
            <p>Connecting talent with opportunity. <br />Your career starts here!</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/#jobs">Jobs</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/feedback">Feedback</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Categories</h3>
            <ul>
              <li><a href="/category-base">Freelancing</a></li>
              <li><a href="/category1">Design</a></li>
              <li><a href="/category3">Marketing</a></li>
              <li><a href="/service">Customer Services</a></li>
              <li><a href="/category4">Finance</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li><a href="/help">Help Center</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © 2025 JobOrbit. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Feedback;