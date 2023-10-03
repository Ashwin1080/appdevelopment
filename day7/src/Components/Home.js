
import React from 'react';
import Navbar from './navbar';
import Footer from './footer';


function Home() {
  return (
    <div className="app-container">
      <Navbar />
      {/* Add your homepage content here */}
      <div className="content">
        <h1>Welcome to Our Website</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Home;