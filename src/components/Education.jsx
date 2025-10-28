import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Education.css';

const Education = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [savedJobs, setSavedJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);

  const jobListings = [
    {
      id: 1,
      title: "Mathematics Professor",
      company: "IIT Delhi",
      location: "New Delhi · Department of Mathematics",
      type: "Full-time",
      salary: "₹15-22 LPA",
      dataJobTitle: "Mathematics Professor",
      dataCompany: "IIT Delhi"
    },
    {
      id: 2,
      title: "Computer Science Professor",
      company: "IIT Bombay",
      location: "Mumbai · CS Department",
      type: "Full-time",
      salary: "₹18-25 LPA",
      dataJobTitle: "Computer Science Professor",
      dataCompany: "IIT Bombay"
    },
    {
      id: 3,
      title: "Physics Faculty",
      company: "IISc Bangalore",
      location: "Bengaluru · IoT Department",
      type: "Full-time",
      salary: "₹16-23 LPA",
      dataJobTitle: "Physics Faculty",
      dataCompany: "IISc Bangalore"
    },
    {
      id: 4,
      title: "English Lecturer",
      company: "Delhi University",
      location: "New Delhi · Literature Department",
      type: "Full-time",
      salary: "₹8-15 LPA",
      dataJobTitle: "English Lecturer",
      dataCompany: "Delhi University"
    },
    {
      id: 5,
      title: "Chemistry Teacher",
      company: "SRM University",
      location: "Chennai · Pharmaceutical Department",
      type: "Full-time",
      salary: "₹6-12 LPA",
      dataJobTitle: "Chemistry Teacher",
      dataCompany: "SRM University"
    },
    {
      id: 6,
      title: "Lab Assistant",
      company: "Amity University",
      location: "Noida · Research Department",
      type: "Full-time",
      salary: "₹4-8 LPA",
      dataJobTitle: "Lab Assistant",
      dataCompany: "Amity University"
    }
  ];

  const companies = [
    { 
      name: "IIT Madras", 
      logo: "https://images.seeklogo.com/logo-png/31/1/iit-madras-logo-png_seeklogo-310945.png" 
    },
    { 
      name: "ISM Dhanbad", 
      logo: "https://images.seeklogo.com/logo-png/51/1/iit-ism-dhanbad-logo-png_seeklogo-519550.png" 
    },
    { 
      name: "IISc Bangalore", 
      logo: "https://images.seeklogo.com/logo-png/36/1/mount-royal-university-logo-png_seeklogo-367433.png" 
    },
    { 
      name: "Delhi University", 
      logo: "https://images.seeklogo.com/logo-png/28/1/university-of-delhi-logo-png_seeklogo-289934.png" 
    },
    { 
      name: "IIT Delhi", 
      logo: "https://images.seeklogo.com/logo-png/48/1/indian-institute-of-technology-delhi-logo-png_seeklogo-483677.png" 
    },
    { 
      name: "Georgia Institute of Technology", 
      logo: "https://images.seeklogo.com/logo-png/48/1/georgia-institute-of-technology-logo-png_seeklogo-486640.png" 
    },
    { 
      name: "SRM University", 
      logo: "https://images.seeklogo.com/logo-png/38/1/srm-institute-of-science-and-technology-logo-png_seeklogo-381994.png" 
    },
    { 
      name: "Amity University", 
      logo: "https://images.seeklogo.com/logo-png/39/1/amity-university-logo-png_seeklogo-396047.png" 
    }
  ];

  // Hero background image URL from your HTML
  const heroBackground = "https://images.unsplash.com/photo-1522881193457-37ae97c905bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

  useEffect(() => {
    // Load saved jobs from localStorage
    const saved = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSavedJobs(saved);
    setFilteredJobs(jobListings);
  }, []);

  useEffect(() => {
    // Filter jobs based on search term
    if (!searchTerm.trim()) {
      setFilteredJobs(jobListings);
    } else {
      const filtered = jobListings.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredJobs(filtered);
    }
  }, [searchTerm]);

  const handleApply = (jobTitle) => {
    alert(`Applying for: ${jobTitle}`);
  };

  const handleSaveJob = (jobId) => {
    let updatedSavedJobs;
    if (savedJobs.includes(jobId)) {
      updatedSavedJobs = savedJobs.filter(id => id !== jobId);
    } else {
      updatedSavedJobs = [...savedJobs, jobId];
    }
    setSavedJobs(updatedSavedJobs);
    localStorage.setItem("savedJobs", JSON.stringify(updatedSavedJobs));
  };

  const handleSearch = () => {
    // Search is handled automatically by useEffect
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = () => {
    closeMenu();
  };

  return (
    <div className="education-page">
      {/* Navbar */}
      <nav>
        <div className="logo">JOBORBIT</div>
        <ul>
          <li><Link to="/homepage">Jobs</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
          <li><Link to="/signup">Sign In</Link></li>
        </ul>
        <div className="hamburger" onClick={openMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Overlay Menu */}
      <div className="overlay" id="overlayMenu" style={{ display: menuOpen ? 'flex' : 'none' }}>
        <span className="close-btn" onClick={closeMenu}>&times;</span>
        <Link to="/" onClick={handleNavClick}>Home</Link>
        <Link to="/homepage" onClick={handleNavClick}>Jobs</Link>
        <Link to="/about" onClick={handleNavClick}>About</Link>
        <Link to="/feedback" onClick={handleNavClick}>Feedback</Link>
        <Link to="/signup" onClick={handleNavClick}>Sign In</Link>
      </div>

      <div className="container">
        {/* Hero Section */}
        <div 
          className="hero-image"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="hero-text">
            <h1>FIND TEACHING JOBS THAT SHAPE FUTURES</h1>
            <p>Discover rewarding opportunities in education with top institutions and schools.</p>
          </div>
          
          <div className="search-box">
            <input 
              type="text" 
              id="search-input" 
              placeholder="Teaching role, subject, or school"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button id="search-btn" onClick={handleSearch}>Search</button>
          </div>
        </div>

        {/* Companies Section */}
        <section className="companies-section">
          <h2 className="section-title">Top Educational Institutions Hiring Now</h2>
          <div className="companies-scroll">
            <div className="scroll-track">
              {companies.concat(companies).map((company, index) => (
                <div key={index} className="company-item">
                  <img src={company.logo} alt={company.name} />
                  <span>{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="job-listings">
          <h2 className="section-title">Most Popular Teaching Positions</h2>
          
          {filteredJobs.length === 0 ? (
            <div className="no-jobs-message" id="no-jobs-message">
              No teaching positions found matching your search criteria. Try different keywords.
            </div>
          ) : (
            filteredJobs.map(job => (
              <div 
                key={job.id} 
                className="job-card"
                data-job-title={job.dataJobTitle}
                data-company={job.dataCompany}
              >
                <div className="job-info">
                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-company">{job.company} · {job.location}</p>
                  <span className="job-type">{job.type}</span>
                </div>
                <div className="job-salary">{job.salary}</div>
                <div className="apply-section">
                  <button 
                    className="apply-btn" 
                    onClick={() => handleApply(job.title)}
                  >
                    Apply Now
                  </button>
                  <button 
                    className={`save-btn ${savedJobs.includes(job.id) ? 'saved' : ''}`}
                    onClick={() => handleSaveJob(job.id)}
                  >
                    <i className={savedJobs.includes(job.id) ? "fas fa-bookmark" : "far fa-bookmark"}></i> Save
                  </button>
                </div>
              </div>
            ))
          )}
        </section>
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
              <li><Link to="/homepage">Home</Link></li>
              <li><a href="/homepage#jobs">Jobs</a></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/feedback">Feedback</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Categories</h3>
            <ul>
              <li><Link to="/category-base">Freelancing</Link></li>
              <li><Link to="/category1">Design</Link></li>
              <li><Link to="/category3">Marketing</Link></li>
              <li><Link to="/service">Customer Services</Link></li>
              <li><Link to="/category4">Finance</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li><Link to="/help">Help Center</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
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

export default Education;