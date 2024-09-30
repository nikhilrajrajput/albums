// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.brand}>Album Manager</h2>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.link}>Albums</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/add-album" style={styles.link}>Add Album</Link>
        </li>
      </ul>
    </nav>
  );
};

// Inline styles (optional)
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    backgroundColor: '#333',
    color: 'white',
  },
  brand: {
    fontSize: '1.5rem',
  },
  navLinks: {
    listStyleType: 'none',
    display: 'flex',
    gap: '1rem',
  },
  navItem: {
    display: 'inline',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
  }
};

export default Navbar;
