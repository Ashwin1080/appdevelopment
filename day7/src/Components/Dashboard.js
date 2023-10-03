import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../Redux/authSlice';
import '../Assets/css/dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.username);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`dashboard-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      {/* Sidebar Toggle Button */}
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        {isSidebarOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
        )}
      </div>

      {/* Sidebar Content */}
      {isSidebarOpen && (
        <div className="sidebar sidebar-right">
          <div className="logo">Master-Up</div>
          <ul>
            <li><Link to="/profile">Profile Details</Link></li>
            <li><Link to="/academic">Academic Details</Link></li>
            <li><Link to="/application">Application Details</Link></li>
          </ul>
        </div>
      )}

      <div className="content">
        <header>
          <div className="top-nav">
            <div className='navbartitle'>Dashboard</div>
            <button className="Btn" onClick={handleLogout}>
              logout
            </button>
          </div>
        </header>
        <main>
          <div className='maincontentdashboard'>
            <div className="welcome">Welcome {username}!</div>
            <p className='welcomedesp'>A PG (Postgraduate) admission portal is a web-based system...</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
