import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../Assets/css/navbar.css'; // Import Navbar CSS
import AboutUsModal from './AboutUsModal'; // Import the About Us Modal component

function Navbar() {
  const [showAboutUsModal, setShowAboutUsModal] = useState(false);

  const handleAboutUsClick = () => {
    setShowAboutUsModal(true);
  };

  const handleCloseAboutUsModal = () => {
    setShowAboutUsModal(false);
  };

  return (
    <header className="navbar">
      <div className="logo">MASTER-UP</div>
      <nav className="nav-container">
        <ul className="nav-links">
          <li><a href="/" className="nav-item">Home</a></li>
          <li><a href="#" className="nav-item" onClick={handleAboutUsClick}>About Us</a></li>
          <li><a href="/login" className="nav-item">Login</a></li>
        </ul>
      </nav>

      {/* About Us Modal */}
      <AboutUsModal show={showAboutUsModal} onClose={handleCloseAboutUsModal} />
    </header>
  );
}

export default Navbar;
