import React from 'react';
import { FaCode, FaBug } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Import images
import backgroundImage from './assets/images/background.jpg';
import developmentImage from './assets/images/development.jpg';
import testingImage from './assets/images/testing.jpg';

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}><h1 style={styles.logoText}>Jigisha</h1></div>
        <div style={styles.navLinks}>
          <a href="#experience" style={styles.navLink}>Experience</a>
          <a href="#skills" style={styles.navLink}>Skills</a>
          <a href="#education" style={styles.navLink}>Education</a>
          <a href="#projects" style={styles.navLink}>Projects</a>
          <a href="#contact" style={styles.navLink}>Contact Me</a>
        </div>
      </nav>

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.bgContainer}>
          <img src={backgroundImage} alt="background" style={styles.background} />
          <div style={styles.overlay}>
            <motion.h1 
              style={styles.name}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Jigisha Shah
            </motion.h1>

            <motion.p 
              style={styles.tagline}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              Software professional skilled in both software development and quality assurance, 
              with hands-on experience in building scalable applications and robust automated testing frameworks. 
              Passionate about delivering reliable, high-quality software through efficient coding and thorough testing.
            </motion.p>

            <a href="#skills" style={styles.scrollBtn}>↓</a>
          </div>
        </div>
      </header>

      {/* Development Section */}
      <motion.section 
        id="skills"
        style={{ ...styles.fullScreenSection, backgroundImage: `url(${developmentImage})` }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div style={styles.rightOverlay}>
          <h2 style={styles.sectionTitle}><FaCode style={styles.icon} /> Software Development</h2>
          <ul>
            <li>Experienced in building responsive and maintainable applications using Python, Django, React, and AWS</li>
            <li>Skilled in designing efficient solutions with clean code and best practices</li>
            <li>Passionate about solving complex problems and creating seamless user experiences</li>
          </ul>
        </div>
      </motion.section>

      {/* Testing Section */}
      <motion.section 
        style={{ ...styles.fullScreenSection, backgroundImage: `url(${testingImage})` }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div style={styles.leftOverlay}>
          <h2 style={styles.sectionTitle}><FaBug style={styles.icon} /> Software Testing</h2>
          <ul>
            <li>Proficient in manual and automated testing using Selenium, TestNG, and Python frameworks</li>
            <li>Experienced in developing scalable automation frameworks to improve test coverage and efficiency</li>
            <li>Committed to ensuring software quality by identifying defects early and collaborating closely with cross-functional teams</li>
          </ul>
        </div>
      </motion.section>

    </div>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#282c34',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  logo: { flex: '1' },
  logoText: { color: 'white', fontSize: '24px', margin: 0 },
  navLinks: { display: 'flex', gap: '20px' },
  navLink: { color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px' },

  header: { height: '100vh', position: 'relative' },
  bgContainer: { position: 'absolute', width: '100%', height: '100%', overflow: 'hidden' },
  background: { width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(60%)' },
  overlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', padding: '0 20px', textAlign: 'center' },

  name: { fontSize: '4rem', marginBottom: '20px' },
  tagline: { fontSize: '1.5rem', maxWidth: '900px' },
  scrollBtn: { marginTop: '40px', fontSize: '3rem', textDecoration: 'none', color: 'white' },

  fullScreenSection: {
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  rightOverlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: 'white',
    padding: '30px',
    borderRadius: '8px',
    textAlign: 'left',
    maxWidth: '40%',
    marginLeft: 'auto',
    marginRight: '80px',
  },

  leftOverlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: 'white',
    padding: '30px',
    borderRadius: '8px',
    textAlign: 'left',
    maxWidth: '40%',
    marginLeft: '80px',
    marginRight: 'auto',
  },

  sectionTitle: { display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.8rem', marginBottom: '15px' },
  icon: { color: '#00ffff' },
};

export default App;
