import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import '../Assets/css/login.css';
import { toast, ToastContainer } from 'react-toastify';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const hasEmptyField = Object.values(formData).some((field) => field === '');

    if (hasEmptyField) {
      // Display a Toastify error message
      toast.error('Please fill in all the fields to continue.', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: true,
        closeButton: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
      });
    } else {
      // All fields are filled, you can proceed with login logic
    }
  };

  return (
    <>
      <div className="loginpage">
        <div className="form-box">
          <form className="form" onSubmit={handleFormSubmit}>
            <span className="title">Login</span>
            <span className="subtitle">Already existing User</span>
            <div className="form-container">
              <input
                type="text"
                className="input"
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" onClick={handleFormSubmit}>Sign in</button>
          </form>
          <div className="form-section">
            <p>
              Don't have an account? <Link to="/signup">Signup</Link>{' '}
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
