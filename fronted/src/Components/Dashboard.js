import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../Redux/authSlice';
import '../Assets/css/dashboard.css';
import Sidebar from './Sidebar';
import Footer from './footer';

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.email);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='dashboard-container '>

      <Sidebar/>
      
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
            <div className="welcome">Welcome {email}!</div>
            <p className='welcomedesp'>A PG (Postgraduate) admission portal </p>
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  );
}

export default Dashboard;
