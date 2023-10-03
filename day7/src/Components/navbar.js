// Navbar.js
import React from 'react';
import '../Assets/css/navbar.css'; // Import Navbar CSS

function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav-container">
        
        <ul className="nav-links">
          <li className="logo">Your Logo</li>
          <li><a href="#" className="nav-item">Home</a></li>
          <li><a href="#" className="nav-item">About Us</a></li>
          <li><a href="#" className="nav-item">Login</a></li>
        </ul>
        
      </nav>
    </header>
  );
}

export default Navbar;