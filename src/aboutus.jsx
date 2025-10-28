import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUserGraduate,
  faGlobe,
  faRobot,
  faLaptopCode,
  faHouseUser,
  faUsers,
  faBuilding,
  faHandshake,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

const About = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <Helmet>
        <title>JobOrbit</title>
        <link rel="icon" href="./JOBORBITlogo.jpg.png" type="image/jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      {/* Inline CSS */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
        }

        body {
          background-color: #f9f9f9;
          color: #333;
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #113e6a;
          padding: 1rem 5%;
          color: white;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
        }

        nav .logo {
          font-size: 1.8rem;
          font-weight: bold;
        }

        nav ul {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        nav ul li a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        nav ul li a:hover {
          color: #ff6b3c;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 4px;
        }

        .hamburger span {
          width: 25px;
          height: 3px;
          background: white;
        }

        @media (max-width: 768px) {
          nav ul {
            display: none;
          }
          .hamburger {
            display: flex;
          }
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0,0,0,0.9);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 200;
        }

        .overlay a {
          color: white;
          font-size: 1.8rem;
          text-decoration: none;
          margin: 15px 0;
        }

        .overlay .close-btn {
          position: absolute;
          top: 20px;
          right: 30px;
          font-size: 2rem;
          color: white;
          cursor: pointer;
        }

        .hero {
          padding: 140px 5% 80px;
          text-align: center;
          background: linear-gradient(135deg, #113e6a, #1c5ea3);
          color: white;
        }

        .hero h1 {
          font-size: 2.8rem;
          margin-bottom: 20px;
        }

        .hero p {
          font-size: 1.2rem;
          max-width: 800px;
          margin: 0 auto;
          color: #e3e3e3;
        }

        .section-title {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 40px;
          color: #113e6a;
        }

        .problem-section {
          padding: 80px 5%;
          background-color: #f5f5f5;
        }

        .problem-cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
        }

        .problem-card {
          background: white;
          border-radius: 10px;
          padding: 30px;
          width: 320px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          text-align: center;
          transition: transform 0.3s ease;
        }

        .problem-card:hover {
          transform: translateY(-5px);
        }

        .problem-card svg {
          font-size: 2.5rem;
          color: #113e6a;
          margin-bottom: 15px;
        }

        .problem-card h3 {
          margin-bottom: 10px;
          color: #113e6a;
        }

        .problem-card p {
          color: #555;
          font-size: 0.95rem;
        }

        .solution-section {
          padding: 80px 5%;
          background-color: white;
        }

        .solution {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          margin-bottom: 60px;
          gap: 30px;
        }

        .solution-content {
          flex: 1;
          min-width: 280px;
        }

        .solution-image {
          flex: 1;
          text-align: center;
        }

        .solution-image svg {
          font-size: 6rem;
          color: #113e6a;
        }

        .solution h3 {
          color: #113e6a;
          margin-bottom: 15px;
        }

        .solution p {
          color: #555;
        }

        .stats-section {
          background: linear-gradient(135deg, #113e6a, #1c5ea3);
          color: white;
          padding: 80px 5%;
          text-align: center;
        }

        .stats-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 50px;
        }

        .stat {
          text-align: center;
        }

        .stat svg {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }

        .team-section {
          padding: 80px 5%;
          background: #f8f9fa;
          text-align: center;
        }

        .team-members {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
        }

        .team-member {
          background: white;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          width: 230px;
          overflow: hidden;
        }

        .member-img {
          background: linear-gradient(135deg, #113e6a, #1c5ea3);
          padding: 30px;
        }

        .member-img svg {
          color: white;
          font-size: 3rem;
        }

        .member-info {
          padding: 15px;
        }

        .member-info h3 {
          color: #113e6a;
          margin-bottom: 5px;
        }

        .cta-section {
          padding: 80px 5%;
          text-align: center;
          background-color: white;
        }

        .cta-button {
          background: #113e6a;
          color: white;
          padding: 15px 35px;
          border-radius: 30px;
          font-size: 1.1rem;
          text-decoration: none;
          transition: 0.3s;
        }

        .cta-button:hover {
          background: #1c5ea3;
        }

        .footer {
          background: #113e6a;
          color: white;
          padding: 60px 10%;
        }

        .footer-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 40px;
        }

        .footer-section {
          flex: 1;
          min-width: 180px;
        }

        .footer-logo {
          color: #ff6b3c;
          font-size: 1.8rem;
          margin-bottom: 10px;
        }

        .footer-section h3 {
          color: #ff6b3c;
          margin-bottom: 10px;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
        }

        .footer-section ul li a {
          text-decoration: none;
          color: #e3e3e3;
          transition: 0.3s;
        }

        .footer-section ul li a:hover {
          color: #ff6b3c;
        }

        .footer-bottom {
          margin-top: 30px;
          text-align: center;
          font-size: 0.9rem;
          color: #ccc;
        }
      `}</style>

      {/* Navbar */}
      <nav>
        <div className="logo">JOBORBIT</div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Feedback</a></li>
          <li><a href="#">Sign In</a></li>
        </ul>
        <div className="hamburger" onClick={openMenu}>
          <span></span><span></span><span></span>
        </div>
      </nav>

      {/* Overlay Menu */}
      {menuOpen && (
        <div className="overlay">
          <span className="close-btn" onClick={closeMenu}>&times;</span>
          <a href="#">Home</a>
          <a href="#">Jobs</a>
          <a href="#">About</a>
          <a href="#">Feedback</a>
          <a href="#">Sign In</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero">
        <h1>Connecting Talent with Opportunity</h1>
        <p>
          At JobOrbit, we're revolutionizing the job search process by
          addressing the core challenges job seekers face and creating meaningful
          connections between talent and employers worldwide.
        </p>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <h2 className="section-title">Challenges in Today's Job Market</h2>
        <div className="problem-cards">
          <div className="problem-card">
            <FontAwesomeIcon icon={faSearch} />
            <h3>Inefficient Job Search</h3>
            <p>
              Job seekers often struggle to find relevant opportunities amidst countless
              listings, wasting time on applications that go unanswered.
            </p>
          </div>
          <div className="problem-card">
            <FontAwesomeIcon icon={faUserGraduate} />
            <h3>Entry-Level Barriers</h3>
            <p>
              Fresh graduates and career changers face the "experience required" paradox,
              making it difficult to start their professional journey.
            </p>
          </div>
          <div className="problem-card">
            <FontAwesomeIcon icon={faGlobe} />
            <h3>Geographic Limitations</h3>
            <p>
              Talented individuals in remote areas often miss out on opportunities due to
              location constraints, limiting their career growth.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <h2 className="section-title">Our Innovative Solutions</h2>

        <div className="solution">
          <div className="solution-content">
            <h3>Smart Matching Technology</h3>
            <p>
              Our advanced AI algorithm matches candidates with opportunities that align
              with their skills, experience, and career aspirations.
            </p>
          </div>
          <div className="solution-image">
            <FontAwesomeIcon icon={faRobot} />
          </div>
        </div>

        <div className="solution">
          <div className="solution-image">
            <FontAwesomeIcon icon={faLaptopCode} />
          </div>
          <div className="solution-content">
            <h3>Skill-Based Opportunities</h3>
            <p>
              We partner with companies that value skills over years of experience,
              creating more pathways for entry-level candidates.
            </p>
          </div>
        </div>

        <div className="solution">
          <div className="solution-content">
            <h3>Remote Work Ecosystem</h3>
            <p>
              Our platform connects talent with remote opportunities, breaking down
              geographic barriers and creating a global job market.
            </p>
          </div>
          <div className="solution-image">
            <FontAwesomeIcon icon={faHouseUser} />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <h2 className="section-title">Our Impact</h2>
        <div className="stats-container">
          <div className="stat">
            <FontAwesomeIcon icon={faUsers} />
            <h3>500,000+</h3>
            <p>Job Seekers Connected</p>
          </div>
          <div className="stat">
            <FontAwesomeIcon icon={faBuilding} />
            <h3>15,000+</h3>
            <p>Companies Registered</p>
          </div>
          <div className="stat">
            <FontAwesomeIcon icon={faHandshake} />
            <h3>200,000+</h3>
            <p>Successful Matches</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2 className="section-title">Our Leadership Team</h2>
        <div className="team-members">
          {[
            { name: "Pankhil", role: "CEO & Founder" },
            { name: "Riya", role: "CTO" },
            { name: "Priyanka", role: "Head of Partnerships" },
            { name: "Pridhi Sabikhi", role: "Head of Partnerships" },
          ].map((member, i) => (
            <div className="team-member" key={i}>
              <div className="member-img">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2 className="section-title">Ready to Transform Your Career?</h2>
        <p>Join thousands of job seekers who found their dream jobs with JobOrbit.</p>
        <a href="#" className="cta-button">Get Started Today</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h2 className="footer-logo">JobOrbit</h2>
            <p>Connecting talent with opportunity. Your career starts here!</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Feedback</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Categories</h3>
            <ul>
              <li><a href="#">Freelancing</a></li>
              <li><a href="#">Design</a></li>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Customer Service</a></li>
              <li><a href="#">Finance</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">© 2025 JobOrbit. All Rights Reserved.</div>
      </footer>
    </>
  );
};

export default About;
