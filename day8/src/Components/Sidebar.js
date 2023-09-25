import React from 'react'
import '../Assets/css/sidebar.css'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div>
      <div className="sidebar sidebar-right">
          <div className="logo">Master-Up</div>
          <ul>

            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/profile">Profile Details</Link></li>
            <li><Link to="/academic">Academic Details</Link></li>
            <li><Link to="/application">Application Details</Link></li>
          </ul>
        </div>
    </div>
  )
}

export default Sidebar
