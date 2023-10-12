import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import '../Assets/css/signup.css';
import { toast, ToastContainer } from 'react-toastify';
import { userRegister } from '../Services/api';

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const hasEmptyField = Object.values(formData).some((field) => field === '');

    // Check if the email is in a valid format using a regular expression
    const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
      formData.email
    );

    // Check if the password contains at least one symbol and one number
    const isValidPassword = /^(?=.*[!@#$%^&*])(?=.*\d).+$/.test(formData.password);

    if (hasEmptyField) {
      // Display a creative alert message using Toastify
      toast.error(
        <div>
          <p>Please fill in all the fields to continue.</p>
          <div class="loader">
            <div class="circle">
              <div class="dot"></div>
              <div class="outline"></div>
            </div>
            <div class="circle">
              <div class="dot"></div>
              <div class="outline"></div>
            </div>
            <div class="circle">
              <div class="dot"></div>
              <div class="outline"></div>
            </div>
            <div class="circle">
              <div class="dot"></div>
              <div class="outline"></div>
            </div>
          </div>
        </div>,
        {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: true,
          closeButton: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
        }
      );
    } else if (!isValidEmail) {
      // Display an error message for an invalid email
      toast.error('Please enter a valid email address.');
    } else if (!isValidPassword) {
      
      toast.error(
        'Password must contain at least one symbol (!@#$%^&*) and at least one number.'
      );
    } else {
      try {
        const res = await userRegister(formData); // Use formData instead of signup
        if (res.data === "User registered successfully") {
          toast.success(` Signup Successful !`, {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setTimeout(() => {
            navigate('/login');
          }, 1500);
        }
      } catch (error) {
        // Handle any potential errors here
        console.error("Error during registration:", error);
      }
    }
  };
  

  return (
    <>
    <div className='signupbody'>
      <div className="form-box">
        <form className="form" onSubmit={handleFormSubmit}>
          <span className="title">Welcome</span>
          <span className="subtitle">Create a free account </span>
          <div className="form-container">
            <input
              type="text"
              className="input"
              placeholder="Full Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              value={formData.email}
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
          <button type="submit">Sign up</button>
        </form>
        <div className="form-section">
          <p>
            Have an account? <Link to="/login">Log in</Link>{' '}
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
    </>
  );
};

export default Signup;
