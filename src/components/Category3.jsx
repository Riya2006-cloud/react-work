import React, { useState, useEffect } from 'react';
import './Category3.css';

const Category3 = () => {
  const [savedJobs, setSavedJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [jobs] = useState([
    {
      id: 1,
      title: "Digital Marketing Manager",
      company: "Google",
      location: "Hyderabad · On-Site",
      type: "Full-time",
      salary: "₹18 - 30 LPA",
      conversion: "(~$40,000 - $65,000 USD)"
    },
    {
      id: 2,
      title: "Content Marketing Specialist",
      company: "Amazon",
      location: "Bangalore · Hybrid",
      type: "Full-time",
      salary: "₹10 - 18 LPA",
      conversion: "(~$22,000 - $40,000 USD)"
    },
    {
      id: 3,
      title: "SEO Analyst",
      company: "Flipkart",
      location: "Remote",
      type: "Full-time",
      salary: "₹6 - 12 LPA",
      conversion: "(~$13,000 - $26,000 USD)"
    },
    {
      id: 4,
      title: "Social Media Manager",
      company: "Meta",
      location: "Gurgaon · Hybrid",
      type: "Full-time",
      salary: "₹12 - 22 LPA",
      conversion: "(~$26,000 - $48,000 USD)"
    },
    {
      id: 5,
      title: "Freelance Social Media Marketer",
      company: "Upwork",
      location: "Remote",
      type: "Part-time",
      salary: "₹25,000 - ₹50,000 per month",
      conversion: "(~$300 - $600 USD)"
    },
    {
      id: 6,
      title: "Content Writer & Marketing Assistant",
      company: "Fiverr",
      location: "Remote",
      type: "Part-time",
      salary: "₹15,000 - ₹30,000 per month",
      conversion: "(~$180 - $360 USD)"
    },
    {
      id: 7,
      title: "Campus Marketing Intern",
      company: "Zomato",
      location: "Multiple Cities",
      type: "Part-time",
      salary: "₹8,000 - ₹12,000 per month",
      conversion: "(~$100 - $150 USD)"
    },
    {
      id: 8,
      title: "Affiliate Marketing Executive",
      company: "Meesho",
      location: "Remote",
      type: "Part-time",
      salary: "₹12,000 - ₹20,000 per month",
      conversion: "(~$150 - $240 USD)"
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
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="category3">
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
            <h1>THE PLACE WHERE CREATIVITY MEETS STRATEGY</h1>
            <p>Find part-time, full-time, and remote jobs tailored to your skills and ambitions.</p>
          </div>
          <div className="search-box">
            <input
              type="text"
              placeholder="Job title, marketing skill, or company"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyUp={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>

        {/* Companies Section */}
        <section className="companies-section">
          <h2 className="section-title">Leading Brands Looking for Marketing Talent</h2>
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
          <h2 className="section-title">Top Marketing Careers to Explore in India</h2>
          
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
                  <span className={`job-type ${job.type.toLowerCase().replace('-', '')}`}>
                    {job.type}
                  </span>
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

export default Category3;