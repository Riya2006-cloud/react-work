import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [savedJobs, setSavedJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [jobs] = useState([
    {
      id: 1,
      title: "UI Designer",
      company: "Microsoft",
      location: "Bangalore · Hybrid",
      type: "Full-time",
      salary: "₹18 - 35 LPA",
      conversion: "(~$40,000 - $78,000 USD)"
    },
    {
      id: 2,
      title: "Product Designer",
      company: "Google",
      location: "Hyderabad · On-site",
      type: "Full-time",
      salary: "₹20 - 40 LPA",
      conversion: "(~$45,000 - $90,000 USD)"
    },
    {
      id: 3,
      title: "Graphic Designer",
      company: "Amazon",
      location: "Remote",
      type: "Full-time",
      salary: "₹8 - 15 LPA",
      conversion: "(~$18,000 - $34,000 USD)"
    },
    {
      id: 4,
      title: "Motion Graphics Designer",
      company: "Apple",
      location: "Mumbai",
      type: "Full-time",
      salary: "₹10 - 18 LPA",
      conversion: "(~$23,000 - $40,000 USD)"
    },
    {
      id: 5,
      title: "UX Researcher",
      company: "Netflix",
      location: "Remote",
      type: "Full-time",
      salary: "₹18 - 35 LPA",
      conversion: "(~$40,000 - $78,000 USD)"
    },
    {
      id: 6,
      title: "UX Designer",
      company: "Meta",
      location: "Bangalore · Hybrid",
      type: "Full-time",
      salary: "₹22 - 42 LPA",
      conversion: "(~$49,000 - $94,000 USD)"
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
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
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
            <h1>THE BEST PLACE TO FIND YOUR DREAM JOB</h1>
            <p>Find job you love and research the fastest-growing companies, and hire experienced workers.</p>
          </div>
          <div className="search-box">
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyUp={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>

        {/* Companies Section */}
        <section className="companies-section">
          <h2 className="section-title">Top Companies Hiring Designers</h2>
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
          <h2 className="section-title">Most Popular Design Jobs In India</h2>
          
          {filteredJobs.length === 0 ? (
            <div className="no-jobs-message">
              No jobs found matching your search criteria. Try different keywords.
            </div>
          ) : (
            filteredJobs.map(job => (
              <div key={job.id} className="job-card">
                <div className="job-info">
                  <h3 className="job-title">{job.title}</h3>
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

export default App;