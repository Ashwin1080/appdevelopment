
import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import '../Assets/css/home.css'
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="home-container">
      <Navbar />
      
      <div className="content">
        <h1>Welcome to Our Website</h1>
        <Link to='/login'><button className='homepagemainbutton'>Get started</button></Link>
      </div>

      <Footer />
    </div>
  );
}

export default Home;