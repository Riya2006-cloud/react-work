import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1350&q=80',
    'https://cdn.phenompeople.com/CareerConnectResources/KIVKBRUS/images/MicrosoftTeams-image102[1920x927]web-1664813477508.jpg',
    'https://images.moneycontrol.com/static-mcnews/2022/08/Employees-at-work-770x433.jpg?impolicy=website&width=770&height=431',
    'https://imgproxy.divecdn.com/0TPgKNRFWdo6pMzN_RTV2v2R_qBdV6rAJ9dwh3St62s/g:ce/rs:fill:1200:675:1/Z3M6Ly9kaXZlc2l0ZS1zdG9yYWdlL2RpdmVpbWFnZS9HZXR0eUltYWdlcy0xMzU0MjA1MDY1X295MWFIRW4uanBn.webp'
  ];

  const categories = [
    { name: "Design", vacancies: 87, page: "/category1" },
    { name: "Sales", vacancies: 120, page: "/category2" },
    { name: "Marketing", vacancies: 65, page: "/category3" },
    { name: "Finance", vacancies: 42, page: "/category4" },
    { name: "Teaching and Education", vacancies: 100, page: "/education" },
    { name: "Freelancing", vacancies: 78, page: "/category-base" },
    { name: "Project Management", vacancies: 56, page: "/manage" },
    { name: "Customer Services", vacancies: 33, page: "/service" }
  ];

  const jobs = [
    {
      id: 1,
      company: "TechInnovate Inc.",
      logo: "TI",
      title: "Senior UX Designer",
      description: "We're looking for a talented UX designer to join our product team and help create amazing user experiences.",
      location: "Remote",
      type: "Full-time",
      tags: ["UI/UX", "Figma", "Product Design"],
      salary: "$90k - $120k"
    },
    {
      id: 2,
      company: "WebSolutions Ltd.",
      logo: "WS",
      title: "Full Stack Developer",
      description: "Join our engineering team to build innovative web applications using modern technologies.",
      location: "Bangalore",
      type: "Full-time",
      tags: ["React", "Node.js", "MongoDB"],
      salary: "$110k - $140k"
    },
    {
      id: 3,
      company: "GrowthDigital Agency",
      logo: "GD",
      title: "Marketing Manager",
      description: "Lead our marketing efforts and develop strategies to increase brand awareness and customer engagement.",
      location: "Mumbai",
      type: "Full-time",
      tags: ["Digital Marketing", "SEO", "Social Media"],
      salary: "$85k - $100k"
    }
  ];

  const features = [
    {
      icon: "fas fa-search",
      title: "Smart Job Matching",
      description: "Our AI-powered algorithm matches you with jobs that fit your skills and preferences perfectly."
    },
    {
      icon: "fas fa-rocket",
      title: "Quick Apply",
      description: "Apply to multiple jobs with just one click using our streamlined application process."
    },
    {
      icon: "fas fa-chart-line",
      title: "Career Growth",
      description: "Access resources and tools to help you grow your career and develop new skills."
    }
  ];

  const stats = [
    { number: "231", text: "Jobs Available" },
    { number: "192", text: "Companies Hiring" },
    { number: "542", text: "Job Seekers Hired" },
    { number: "98", text: "Remote Jobs" }
  ];

  const steps = [
    {
      number: "01",
      title: "Create an Account",
      description: "Sign up with just a few clicks to unlock exclusive access to a world of job opportunities. It's quick, easy, and completely free."
    },
    {
      number: "02",
      title: "Search Job",
      description: "Dive into our job database tailored to your skills. With advanced filters, finding the perfect job has never been easier."
    },
    {
      number: "03",
      title: "Upload CV/Resume",
      description: "Showcase your experience by uploading your CV or resume. Employers will know why you're the right candidate."
    },
    {
      number: "04",
      title: "Get Job",
      description: "Take the final step towards your career. Secure the job you've been dreaming of and start your journey."
    }
  ];

  // Slider functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#113e6a" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#113e6a",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true
          }
        },
        retina_detect: true
      });
    }
  }, []);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = () => {
    closeMenu();
  };

  const getCategoryIcon = (categoryName) => {
    const icons = {
      "Design": <i className="fa-solid fa-pen-ruler"></i>,
      "Sales": (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 359.49" width="45" height="45" fill="currentColor">
          <path d="M477.666 152.24v201.217c0 3.298-2.735 6.033-6.034 6.033h-52.029c-3.299 0-6.034-2.714-6.034-6.033V203.785c10.62-10.387 23.674-22.952 36.993-35.77l21.017-20.249a50.492 50.492 0 006.087 4.474zM197.013 93.506l40.059-35.046c30.44 29.82 59.953 65.866 90.086 95.636L437.009 43.728 401.63 8.348 512 0l-6.206 112.469-33.938-33.946c-24.364 24.683-81.983 79.078-106.378 103.476-30.815 30.82-45.532 31.376-76.359.548l-52.047-57.926-10.106 8.962a123.575 123.575 0 00-5.137-9.915c-3.87-6.704-8.312-12.927-13.235-18.572l.067-.058c-3.495-4.014-7.392-7.873-11.648-11.532zm-70.715 1.189a87.26 87.26 0 00-33.857 4.363l-.231.086a87.673 87.673 0 00-29.418 16.951 87.66 87.66 0 00-20.883 27.093 87.286 87.286 0 00-8.893 32.943 87.695 87.695 0 001.934 25.21 87.074 87.074 0 007.511 20.685l-41.155 39.4a4.198 4.198 0 00-.156 5.929l23.299 24.369a4.184 4.184 0 005.909.141l39.604-38.23A87.016 87.016 0 0089.4 263.973a87.577 87.577 0 0025.046 5.442 87.3 87.3 0 0033.841-4.358 87.648 87.648 0 0029.666-17.04 87.687 87.687 0 0020.879-27.085c4.978-10.012 8.099-21.141 8.901-32.955.801-11.814-.79-23.263-4.362-33.857l-.086-.231a87.7 87.7 0 00-16.963-29.405 87.384 87.384 0 00-27.066-20.887c-10.011-4.978-21.144-8.101-32.958-8.902zm-14.309 121.492c-4.613-.322-10.488-1.459-15.011-2.671v-14.187c6.004.486 20.789 1.747 26.24.514 4.09-.929 3.637-7.387.943-8.196-3.243-1.009-10.031.202-15.49-1.379-2.786-.808-5.137-2.026-7.053-3.653-1.957-1.67-3.422-3.882-4.384-6.63-.939-2.674-1.412-5.859-1.412-9.552v-4.862c0-10.395 5.732-16.587 16.167-18.331v-7.452h14.866v7.162c4.611.368 10.349 1.546 14.925 2.655v14.21c-6.239-.549-18.072-1.665-23.99-.59a5.747 5.747 0 00-1.404.432c-2.43 1.152-2.333 7.798.644 8.585 1.947.511 5.94.241 8.069.241 2.154 0 4.152.211 5.986.626 1.85.421 3.525 1.058 5.009 1.906 6.226 3.548 8.972 9.806 8.972 16.717v4.867c0 2.888-.259 5.466-.769 7.72-2.033 8.941-8.968 10.87-17.442 11.797v8.037h-14.866v-7.966zm-37.567-86.768c6.879-5.999 14.911-10.665 23.644-13.604 8.425-2.84 17.564-4.102 27.033-3.461 9.468.642 18.357 3.129 26.313 7.076 8.264 4.097 15.587 9.802 21.59 16.678l.213.225a70.156 70.156 0 0113.401 23.438l.076.209c2.781 8.355 4.017 17.42 3.381 26.804-.641 9.459-3.125 18.345-7.067 26.296a70.168 70.168 0 01-16.69 21.602c-6.876 6.003-14.908 10.67-23.641 13.611-8.416 2.835-17.56 4.099-27.03 3.457-9.456-.641-18.335-3.125-26.293-7.073l-.208-.095c-16.478-8.23-29.128-22.797-35.012-40.242l-.076-.208c-2.781-8.357-4.017-17.421-3.381-26.808.642-9.466 3.128-18.352 7.076-26.31a69.887 69.887 0 0116.671-21.595zm89.246 161.438v62.6c0 3.307-2.726 6.033-6.034 6.033h-52.029c-3.308 0-6.034-2.714-6.034-6.033v-56.096c4.159.74 8.466 1.271 12.908 1.573 7.538.508 15.186.237 22.824-.747a116.568 116.568 0 0022.36-5.12c2.02-.68 4.021-1.415 6.005-2.21zm104.665-60.788v123.388c0 3.304-2.732 6.033-6.036 6.033H210.27c-3.304 0-6.036-2.714-6.036-6.033v-89.681a117.464 117.464 0 0021.105-29.763 116.488 116.488 0 008.157-21.452 115.425 115.425 0 002.943-14.613l13.89 15.451a48.33 48.33 0 001.783 1.878c5.543 5.543 10.916 10.472 16.221 14.792zm104.664 9.188v114.2c0 3.304-2.729 6.033-6.033 6.033h-52.03c-3.303 0-6.033-2.714-6.033-6.033V251.179c6.074 1.349 12.366 1.983 18.999 1.902 16.583-.201 30.915-4.82 45.097-13.824z"/>
        </svg>
      ),
      "Marketing": <i className="fa-solid fa-bullhorn"></i>,
      "Finance": <i className="fa-solid fa-coins"></i>,
      "Teaching and Education": <i className="fa-solid fa-chalkboard-user"></i>,
      "Freelancing": <i className="fa-solid fa-laptop"></i>,
      "Project Management": <i className="fa-solid fa-list-check"></i>,
      "Customer Services": <i className="fa-solid fa-user"></i>
    };
    return icons[categoryName] || <i className="fa-solid fa-briefcase"></i>;
  };

  const handleApply = (jobTitle) => {
    alert(`Applying for: ${jobTitle}`);
  };

  return (
    <div className="home-page">
      {/* Particles Background */}
      <div id="particles-js"></div>
      
      {/* Navbar */}
      <nav>
        <div className="logo">JOBORBIT</div>
        <ul>
          <li><Link to="/homepage">Home</Link></li>
          <li><a href="#jobs">Jobs</a></li>
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
        <Link to="/homepage" onClick={handleNavClick}>Home</Link>
        <a href="#jobs" onClick={handleNavClick}>Jobs</a>
        <Link to="/about" onClick={handleNavClick}>About</Link>
        <Link to="/feedback" onClick={handleNavClick}>Feedback</Link>
        <Link to="/signup" onClick={handleNavClick}>Sign In</Link>
      </div>

      {/* Hero Slider */}
      <section className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url('${slide}')` }}
          ></div>
        ))}
        <div className="arrow left" onClick={prevSlide}>&#10094;</div>
        <div className="arrow right" onClick={nextSlide}>&#10095;</div>
        <div className="hero-content">
          <h1>FIND YOUR <span>PERFECT JOB</span> EASILY</h1>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-container">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-text">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <div className="steps-self">
        <h2>Get Hired in <span style={{color: "#113e6a"}}>4 Quick Easy Steps</span></h2>
        <p className="subtitle">Follow Our Simple, Step-by-Step Guide to Quickly Land Your Dream Job and Start Your New Career Journey.</p>
        <section className="steps-section">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="note">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </section>
      </div>

      {/* Job Categories */}
      <div id="jobs" className="all">
        <div className="container">
          <h2>COUNTLESS CAREER OPTIONS ARE WAITING FOR <br /> YOU TO EXPLORE</h2>
          <p className="subtitle">Discover a World of Exciting Opportunities and <br /> Endless Possibilities, and Find the Perfect Career Path to Shape Your Future.</p>
          <div className="grid" id="jobCategories">
            {categories.map((category, index) => (
              <Link key={index} className="card" to={category.page}>
                <div className="icon">{getCategoryIcon(category.name)}</div>
                <h3>{category.name}</h3>
                <p>{category.vacancies} Vacancies</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <section className="job-listings">
        <div className="section-title">
          <h2>Featured Job Opportunities</h2>
          <p>Explore these hand-picked opportunities from our partner companies</p>
        </div>
        <div className="jobs-container">
          {jobs.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-header">
                <div className="company-logo">{job.logo}</div>
                <div className="job-header-content">
                  <h3>{job.title}</h3>
                  <span>{job.company}</span>
                </div>
              </div>
              <div className="job-body">
                <p>{job.description}</p>
                <div className="job-details">
                  <div className="job-detail">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{job.location}</span>
                  </div>
                  <div className="job-detail">
                    <i className="fas fa-clock"></i>
                    <span>{job.type}</span>
                  </div>
                </div>
                <div className="job-tags">
                  {job.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="job-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="job-footer">
                <div className="job-salary">{job.salary}</div>
                <button 
                  className="apply-btn" 
                  onClick={() => handleApply(job.title)}
                >
                  Apply Now <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="section-title">
          <h2>Why Choose JobOrbit</h2>
          <p>We provide the tools and resources to make your job search efficient and successful</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

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
              <li><a href="#jobs">Jobs</a></li>
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

export default Homepage;