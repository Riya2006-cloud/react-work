import React, { useState, useRef } from "react";

const ApplyNow = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    setShowConfirm(false);
    setShowSuccess(true);
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };

  const handleSuccessOk = () => {
    setShowSuccess(false);
    formRef.current?.reset();
  };

  // Inline styles
  const styles = {
    body: {
      backgroundColor: "#f9fafc",
      color: "#333",
      fontFamily: "Poppins, sans-serif",
      margin: 0,
      padding: 0,
    },
    nav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem ",
      background: "rgba(27, 17, 140, 0.8)",
      position: "fixed",
      width: "100%",
      top: 0,
      left: 0,
      zIndex: 100,
    },
    logo: {
      color: "#ffffffff",
      fontSize: "1.5rem",
      fontWeight: "bold",
      letterSpacing: "1px",
    },
    navLinks: {
      display: "flex",
      listStyle: "none",
      gap: "2rem",
    },
    navLink: {
      textDecoration: "none",
      color: "white",
      fontWeight: 500,
      transition: "0.3s",
    },
    applySection: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "100px 20px 60px",
      background: "linear-gradient(to bottom right, #e3f2fd, #fff)",
    },
    applyContainer: {
      background: "#fff",
      padding: "40px 50px",
      borderRadius: "12px",
      boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
      maxWidth: "550px",
      width: "100%",
    },
    heading: {
      textAlign: "center",
      color: "#004aad",
      marginBottom: "10px",
    },
    subtext: {
      textAlign: "center",
      color: "#666",
      marginBottom: "30px",
    },
    label: {
      fontWeight: 500,
      display: "block",
      marginBottom: "8px",
    },
    input: {
      width: "100%",
      padding: "10px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      marginBottom: "20px",
      fontSize: "15px",
      transition: "0.3s",
      backgroundColor: "white",
    },
    button: {
      width: "100%",
      padding: "12px",
      background: "#004aad",
      color: "white",
      fontWeight: "bold",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "0.3s",
    },
    footer: {
      background: "#002d62",
      color: "white",
      padding: "50px 0 20px",
      marginTop: "50px",
    },
    footerContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "30px",
      padding: "0 50px",
    },
    footerLogo: { fontSize: "24px", color: "#fdd835" },
    footerBottom: {
      textAlign: "center",
      marginTop: "20px",
      fontSize: "14px",
      color: "#ccc",
    },
    modal: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 200,
    },
    modalContent: {
      background: "#fff",
      padding: "30px",
      borderRadius: "10px",
      textAlign: "center",
      width: "90%",
      maxWidth: "400px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    },
    modalButtons: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "20px",
    },
    modalBtn: {
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontWeight: "bold",
    },
    okBtn: { background: "#004aad", color: "white" },
    cancelBtn: { background: "#ccc", color: "black" },
  };

  return (
    <div style={styles.body}>
      {/* Navbar */}
      <nav style={styles.nav}>
        <div style={styles.logo}>JOBORBIT</div>
        <ul style={styles.navLinks}>
          <li><a href="/homepage" style={styles.navLink}>Home</a></li>
          <li><a href="/homepage#jobs" style={styles.navLink}>Jobs</a></li>
          <li><a href="/about" style={styles.navLink}>About</a></li>
          <li><a href="/feedback" style={styles.navLink}>Feedback</a></li>
          <li><a href="/signup" style={styles.navLink}>Sign In</a></li>
        </ul>
      </nav>

      {/* Apply Form Section */}
      <section style={styles.applySection}>
        <div style={styles.applyContainer}>
          <h2 style={styles.heading}>Apply for Your Dream Job</h2>
          <p style={styles.subtext}>Fill out your details and upload your resume to apply instantly.</p>

          <form ref={formRef} id="applyForm" onSubmit={handleSubmit}>
            <label htmlFor="name" style={styles.label}>Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" required style={styles.input} />

            <label htmlFor="age" style={styles.label}>Age</label>
            <input type="number" id="age" placeholder="Enter your age" required style={styles.input} />

            <label htmlFor="dob" style={styles.label}>Date of Birth</label>
            <input type="date" id="dob" required style={styles.input} />

            <label htmlFor="address" style={styles.label}>Residential Address</label>
            <textarea id="address" rows="3" placeholder="Enter your full address" required style={styles.input}></textarea>

            <label htmlFor="bloodgroup" style={styles.label}>Blood Group</label>
            <input type="text" id="bloodgroup" placeholder="Enter your blood group" required style={styles.input} />

            <label htmlFor="gender" style={styles.label}>Gender</label>
            <select id="gender" required defaultValue="" style={styles.input}>
              <option value="" disabled>Select Gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>

            <label htmlFor="email" style={styles.label}>Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required style={styles.input} />

            <label htmlFor="phone" style={styles.label}>Phone Number</label>
            <input type="tel" id="phone" placeholder="Enter your phone number" required style={styles.input} />

            <label htmlFor="resume" style={styles.label}>Upload Resume</label>
            <input type="file" id="resume" accept=".pdf,.doc,.docx" required style={styles.input} />

            <label htmlFor="message" style={styles.label}>Why should we hire you?</label>
            <textarea id="message" rows="4" placeholder="Write a short statement" style={styles.input}></textarea>

            <button type="submit" style={styles.button}>Submit Application</button>
          </form>
        </div>
      </section>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div style={styles.modal} role="dialog" aria-modal="true">
          <div style={styles.modalContent}>
            <p>Are you sure you want to submit this application form?</p>
            <div style={styles.modalButtons}>
              <button style={{ ...styles.modalBtn, ...styles.cancelBtn }} onClick={handleCancel}>Cancel</button>
              <button style={{ ...styles.modalBtn, ...styles.okBtn }} onClick={handleConfirm}>OK</button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccess && (
        <div style={styles.modal} role="dialog" aria-modal="true">
          <div style={styles.modalContent}>
            <p>🎉 Congratulations! Your form has been submitted successfully!</p>
            <button style={{ ...styles.modalBtn, ...styles.okBtn }} onClick={handleSuccessOk}>OK</button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div>
            <h2 style={styles.footerLogo}>JobOrbit</h2>
            <p>Connecting talent with opportunity. <br />Your career starts here!</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/homepage" style={{ color: "#ddd", textDecoration: "none" }}>Home</a></li>
              <li><a href="/homepage#jobs" style={{ color: "#ddd", textDecoration: "none" }}>Jobs</a></li>
              <li><a href="/about" style={{ color: "#ddd", textDecoration: "none" }}>About</a></li>
              <li><a href="/feedback" style={{ color: "#ddd", textDecoration: "none" }}>Feedback</a></li>
              <li><a href="#" style={{ color: "#ddd", textDecoration: "none" }}>Contact</a></li>
            </ul>
          </div>
        </div>
        <div style={styles.footerBottom}>© 2025 JobOrbit. All Rights Reserved.</div>
      </footer>
    </div>
  );
};

export default ApplyNow;
