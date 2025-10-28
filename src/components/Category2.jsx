import React, { useState, useEffect } from 'react';
import './Category2.css';

const Category2 = () => {
  const [savedJobs, setSavedJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [jobs] = useState([
    {
      id: 1,
      title: "Sales Executive",
      roleTag: "B2B",
      company: "Microsoft",
      location: "Bangalore · Hybrid",
      type: "Full-time",
      salary: "₹6 - 12 LPA",
      conversion: "(+ Commission & Bonuses)"
    },
    {
      id: 2,
      title: "Account Manager",
      roleTag: "Enterprise",
      company: "Google",
      location: "Hyderabad · On-site",
      type: "Full-time",
      salary: "₹10 - 20 LPA",
      conversion: "(+ Performance Bonus)"
    },
    {
      id: 3,
      title: "Business Development Manager",
      roleTag: "Strategic",
      company: "Amazon",
      location: "Remote",
      type: "Full-time",
      salary: "₹12 - 25 LPA",
      conversion: "(+ Commission)"
    },
    {
      id: 4,
      title: "Sales Representative",
      roleTag: "Retail",
      company: "Apple",
      location: "Mumbai",
      type: "Full-time",
      salary: "₹4 - 8 LPA",
      conversion: "(+ Incentives)"
    },
    {
      id: 5,
      title: "Enterprise Sales Manager",
      roleTag: "B2B",
      company: "Oracle",
      location: "Delhi · Hybrid",
      type: "Full-time",
      salary: "₹15 - 30 LPA",
      conversion: "(+ Commission)"
    },
    {
      id: 6,
      title: "Inside Sales Representative",
      roleTag: "Remote",
      company: "IBM",
      location: "Remote",
      type: "Full-time",
      salary: "₹5 - 10 LPA",
      conversion: "(+ Performance Bonus)"
    }
  ]);

  const companies = [
    { name: "Microsoft", logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png" },
    { name: "Google", logo: "https://cdn-icons-png.flaticon.com/512/300/300221.png" },
    { name: "Apple", logo: "https://cdn-icons-png.flaticon.com/512/0/747.png" },
    { name: "Amazon", logo: "https://images.seeklogo.com/logo-png/28/1/amazon-logo-png_seeklogo-286206.png" },
    { name: "Netflix", logo: "https://images.seeklogo.com/logo-png/31/1/netflix-n-logo-png_seeklogo-318950.png" },
    { name: "Meta", logo: "https://images.seeklogo.com/logo-png/42/1/meta-icon-new-facebook-2021-logo-png_seeklogo-424014.png" },
    { name: "Twitter", logo: "https://cdn-icons-png.flaticon.com/512/124/124021.png" },
    { name: "Tesla", logo: "https://images.seeklogo.com/logo-png/32/1/tesla-logo-png_seeklogo-329764.png" }
  ];

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSavedJobs(saved);
  }, []);

  const toggleSaveJob = (jobId) => {
    let updatedSavedJobs;
    if (savedJobs.includes(jobId)) {
      updatedSavedJobs = savedJobs.filter(id => id !== jobId);
    } else {
      updatedSavedJobs = [...savedJobs, jobId];
    }
    setSavedJobs(updatedSavedJobs);
    localStorage.setItem("savedJobs", JSON.stringify(updatedSavedJobs));
  };

  const handleApply = (jobTitle) => {
    alert(`Applying for: ${jobTitle}`);
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const element = document.getElementById('job-listings');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.roleTag.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="category2">
      {/* Navbar */}
      <nav>
        <div className="logo">JOBORBIT</div>
        <ul>
          <li><a href="#jobs">Jobs</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#feedback">Feedback</a></li>
          <li><a href="#signin">Sign In</a></li>
        </ul>
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </div>
      </nav>

      {/* Overlay Menu */}
      {menuOpen && (
        <div className="overlay">
          <span className="close-btn" onClick={() => setMenuOpen(false)}>&times;</span>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#jobs" onClick={() => setMenuOpen(false)}>Jobs</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#feedback" onClick={() => setMenuOpen(false)}>Feedback</a>
          <a href="#signin" onClick={() => setMenuOpen(false)}>Sign In</a>
        </div>
      )}

      <div className="container">
        {/* Hero Section */}
        <div className="hero-image">
          <div className="hero-text">
            <h1>FIND SALES JOBS THAT FUEL YOUR AMBITION</h1>
            <p>Discover high-commission sales roles with top companies across India and beyond.</p>
          </div>
          <div className="search-box">
            <input
              type="text"
              placeholder="Sales role, industry, or company"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyUp={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>

        {/* Companies Section */}
        <section className="companies-section">
          <h2 className="section-title">Top Companies Hiring Sales Professionals</h2>
          <div className="companies-scroll">
            <div className="scroll-track">
              {[...companies, ...companies].map((company, index) => (
                <div key={index} className="company-item">
                  <img src={company.logo} alt={company.name} />
                  <span>{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Jobs Section */}
        <section className="job-listings" id="job-listings">
          <h2 className="section-title">Most Popular Sales Jobs In India</h2>
          
          {filteredJobs.length === 0 ? (
            <div className="no-jobs-message">
              No jobs found matching your search criteria. Try different keywords.
            </div>
          ) : (
            filteredJobs.map(job => (
              <div key={job.id} className="job-card">
                <div className="job-info">
                  <h3 className="job-title">
                    {job.title} 
                    <span className="sales-role-tag">{job.roleTag}</span>
                  </h3>
                  <p className="job-company">{job.company} · {job.location}</p>
                  <span className="job-type">{job.type}</span>
                </div>
                <div className="job-salary">
                  {job.salary}
                  <div className="salary-conversion">{job.conversion}</div>
                </div>
                <div className="apply-section">
                  <button 
                    className="apply-btn"
                    onClick={() => handleApply(job.title)}
                  >
                    Apply Now
                  </button>
                  <button 
                    className={`save-btn ${savedJobs.includes(job.id) ? 'saved' : ''}`}
                    onClick={() => toggleSaveJob(job.id)}
                  >
                    <i className={savedJobs.includes(job.id) ? "fas fa-bookmark" : "far fa-bookmark"}></i>
                    {savedJobs.includes(job.id) ? ' Saved' : ' Save'}
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
              <li><a href="#home">Home</a></li>
              <li><a href="#jobs">Jobs</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#feedback">Feedback</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Categories</h3>
            <ul>
              <li><a href="#freelancing">Freelancing</a></li>
              <li><a href="#design">Design</a></li>
              <li><a href="#marketing">Marketing</a></li>
              <li><a href="#customer-services">Customer Services</a></li>
              <li><a href="#finance">Finance</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#faq">FAQ</a></li>
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

export default Category2;