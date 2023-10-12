import React, { useState } from 'react';
import '../Assets/css/sidebar.css';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Import the Lucide icons

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      {/* Navigation toggle button for mobile */}
      <button className="mobile-nav-button" onClick={toggleSidebar}>
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />} {/* Lucide icons */}
      </button>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        {/* Close button to close the sidebar */}
        <button className="close-sidebar-button" onClick={closeSidebar}>
          Close Sidebar
        </button>
        <div className="logo">Master-Up</div>
        <ul>
          <li><Link to="/dashboard" onClick={closeSidebar}>Dashboard</Link></li>
          <li><Link to="/profile" onClick={closeSidebar}>Profile Details</Link></li>
          <li><Link to="/academic" onClick={closeSidebar}>Academic Details</Link></li>
          <li><Link to="/application" onClick={closeSidebar}>Application Details</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
