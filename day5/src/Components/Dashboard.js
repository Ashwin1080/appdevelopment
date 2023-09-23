import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'; 
import { logoutUser } from './authActions';
import '../Assets/css/dashboard.css'; // Import your dashboard CSS for styling

function Dashboard() {
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user); // Get user data from Redux
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch a logout action
    dispatch(logoutUser());
    // Redirect to the login page (you can use react-router-dom for this)
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo">Master-Up</div>
        <ul>
          <li><a href="/profile">Profile Details</a></li>
          <li><a href="/academic">Academic Details</a></li>
          <li><a href="/application">Application Details</a></li>
        </ul>
      </div>
      <div className="content">
        <header>
          <div className="top-nav">
            <div className='navbartitle'>Dashboard</div>
            <button class="Btn" onClick={handleLogout}>
  logout
  </button>
          </div>
        </header>
        <main>
            <div className='maincontentdashboard'>
            <div className="welcome">Welcome {user.username}!</div>

            <p className='welcomedesp'>A PG (Postgraduate) admission portal is a web-based system utilized by educational institutions to facilitate the streamlined application and admission process for postgraduate programs. It enables prospective students to create accounts, access program details, complete online application forms, securely upload required documents, pay application fees, and track their application status. Admissions committees use the portal to review applications, communicate decisions, and admit successful candidates. Additionally, it serves as a hub for admitted students to confirm enrollment, register for courses, and handle administrative tasks. With a focus on data security and accessibility, these portals provide a convenient and efficient platform for the entire postgraduate admission journey.</p>
            </div>
          </main>
      </div>
    </div>
  );
}

export default Dashboard;
