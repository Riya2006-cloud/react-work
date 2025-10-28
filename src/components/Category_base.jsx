import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Category_base.css';

const Category_base = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [savedJobs, setSavedJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);

  const jobListings = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Microsoft",
      location: "Bengaluru · Hybrid",
      type: "Full-time",
      salary: "₹18-25 LPA",
      dataJobTitle: "Frontend Developer",
      dataCompany: "Microsoft"
    },
    {
      id: 2,
      title: "UX Designer",
      company: "Google",
      location: "Hyderabad · On-site",
      type: "Full-time",
      salary: "₹15-22 LPA",
      dataJobTitle: "UX Designer",
      dataCompany: "Google"
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "Amazon",
      location: "Chennai · Remote",
      type: "Full-time",
      salary: "₹20-28 LPA",
      dataJobTitle: "Data Scientist",
      dataCompany: "Amazon"
    },
    {
      id: 4,
      title: "Product Manager",
      company: "Apple",
      location: "Gurgaon · On-site",
      type: "Full-time",
      salary: "₹25-35 LPA",
      dataJobTitle: "Product Manager",
      dataCompany: "Apple"
    },
    {
      id: 5,
      title: "DevOps Engineer",
      company: "Netflix",
      location: "Mumbai · Hybrid",
      type: "Full-time",
      salary: "₹22-30 LPA",
      dataJobTitle: "DevOps Engineer",
      dataCompany: "Netflix"
    },
    {
      id: 6,
      title: "Backend Developer",
      company: "Meta",
      location: "Bengaluru · On-site",
      type: "Full-time",
      salary: "₹16-24 LPA",
      dataJobTitle: "Backend Developer",
      dataCompany: "Meta"
    },
    {
      id: 7,
      title: "Cloud Engineer",
      company: "Tesla",
      location: "Pune · Remote",
      type: "Full-time",
      salary: "₹18-26 LPA",
      dataJobTitle: "Cloud Engineer",
      dataCompany: "Tesla"
    }
  ];

  const companies = [
    { 
      name: "Microsoft", 
      logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png" 
    },
    { 
      name: "Google", 
      logo: "https://cdn-icons-png.flaticon.com/512/300/300221.png" 
    },
    { 
      name: "Apple", 
      logo: "https://cdn-icons-png.flaticon.com/512/0/747.png" 
    },
    { 
      name: "Amazon", 
      logo: "https://images.seeklogo.com/logo-png/28/1/amazon-logo-png_seeklogo-286206.png" 
    },
    { 
      name: "Netflix", 
      logo: "https://images.seeklogo.com/logo-png/31/1/netflix-n-logo-png_seeklogo-318950.png" 
    },
    { 
      name: "Meta", 
      logo: "https://images.seeklogo.com/logo-png/42/1/meta-icon-new-facebook-2021-logo-png_seeklogo-424014.png" 
    },
    { 
      name: "Twitter", 
      logo: "https://cdn-icons-png.flaticon.com/512/124/124021.png" 
    },
    { 
      name: "Tesla", 
      logo: "https://images.seeklogo.com/logo-png/32/1/tesla-logo-png_seeklogo-329764.png" 
    }
  ];

  // Hero background image URL from your HTML
  const heroBackground = "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80";

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
    <div className="category-base-page">
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
            <h1>FIND THE JOB THAT FITS YOUR LIFESTYLE</h1>
            <p>Discover the best opportunities among the top companies across the geographical area.</p>
          </div>
          
          <div className="search-box">
            <input 
              type="text" 
              id="search-input" 
              placeholder="Job title, keywords, or company"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button id="search-btn" onClick={handleSearch}>Search</button>
          </div>
        </div>

        {/* Companies Section */}
        <section className="companies-section">
          <h2 className="section-title">Top Companies Hiring Now</h2>
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
          <h2 className="section-title">Most Popular Jobs</h2>
          
          {filteredJobs.length === 0 ? (
            <div className="no-jobs-message" id="no-jobs-message">
              No jobs found matching your search criteria. Try different keywords.
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

export default Category_base;