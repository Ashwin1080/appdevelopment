import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useHistory for redirection
import 'react-toastify/dist/ReactToastify.css';
import '../Assets/css/login.css';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux'; // Import useDispatch for Redux

// Import your login action (replace with actual action)
import { loginUser } from './authActions';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch(); // Get the dispatch function from Redux

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
      // Dispatch the login action with the form data
      dispatch(loginUser(formData));
        
          // If login is successful, navigate to the dashboard
          navigate('/dashboard');
        
        
    }
  };

  return (
    <div className='body'>
      <div className="loginpage">
        <div className="form-box">
          <form className="form" onSubmit={handleFormSubmit}>
            <span className="title">Hop In</span>
            <span className="subtitle">Welcome back</span>
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
            <button type="submit">Sign in</button>
          </form>
          <div className="form-section">
            <p>
              Don't have an account? <Link to="/signup">Signup</Link>{' '}
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
