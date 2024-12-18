import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '98%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
    zIndex: 1000,
  };

  const linkContainerStyle = {
    display: isOpen ? 'block' : 'none',
    position: 'absolute',
    top: '50px',
    left: 0,
    backgroundColor: '#444',
    width: '100%',
    textAlign: 'center',
    padding: '10px 0',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    display: 'block',
    padding: '10px 0',
  };

  const hamburgerStyle = {
    fontSize: '24px',
    cursor: 'pointer',
    color: '#fff',
    display: 'none', // Hidden by default; visible on small screens
  };

  const linksDesktopStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
  };

  return (
    <nav style={navbarStyle}>
      <div className="logo">
        <h1 style={{ margin: '0' }}>MyApp</h1>
      </div>
      <div
        className="hamburger"
        style={{ ...hamburgerStyle, display: window.innerWidth <= 768 ? 'block' : 'none' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        &#9776;
      </div>
      <div
        className="links"
        style={window.innerWidth > 768 ? linksDesktopStyle : linkContainerStyle}
      >
        <a href="/" style={linkStyle}>
          Home
        </a>
        <a href="/about" style={linkStyle}>
          About
        </a>
        <a href="/contact" style={linkStyle}>
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;