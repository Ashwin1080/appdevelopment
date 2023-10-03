import React, { Component } from 'react';
import '../Assets/css/profileDetails.css' // Import your CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

class ProfileDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      email: '',
      phoneNumber: '',
      address: '',
      socialMediaLinks: [{ platform: '', url: '' }],
    };
  }

  componentDidMount() {
    // Check if there are saved form data in local storage
    const storedData = localStorage.getItem('profileData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      this.setState(parsedData);
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    // Check if the input field is in the socialMediaLinks array
    if (name.startsWith('socialMediaLinks-')) {
      const [, index, field] = name.split('-'); // Skip the "socialMediaLinks-" part
      const socialMediaLinks = [...this.state.socialMediaLinks];
      socialMediaLinks[index][field] = value;
      this.setState({ socialMediaLinks });
    } else {
      // For other input fields, set the state directly based on their name
      this.setState({ [name]: value });
    }

    // Store the updated data in local storage
    localStorage.setItem('profileData', JSON.stringify(this.state));
  };

  handleAddLink = () => {
    const socialMediaLinks = [...this.state.socialMediaLinks];
    socialMediaLinks.push({ platform: '', url: '' });
    this.setState({ socialMediaLinks });

    // Store the updated data in local storage
    localStorage.setItem('profileData', JSON.stringify(this.state));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // You can process the form data here or send it to a server

    // Clear the data from local storage after submission
    localStorage.removeItem('profileData');

    console.log('Form data submitted:', this.state);
  };

  render() {
    const { fullName, email, phoneNumber, address, socialMediaLinks } = this.state;

    return (
      <div className="profiledetailsContainer">
        <h2>Personal Details</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              value={address}
              onChange={this.handleChange}
              rows="4"
            />
          </div>
          <h3>Social Media Links</h3>
          {socialMediaLinks.map((link, index) => (
            <div key={index} className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor={`platform-${index}`}>Platform</label>
                <input
                  type="text"
                  className="form-control"
                  id={`platform-${index}`}
                  name={`socialMediaLinks-${index}-platform`}
                  value={link.platform}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group col-md-7">
                <label htmlFor={`url-${index}`}>URL</label>
                <input
                  type="url"
                  className="form-control"
                  id={`url-${index}`}
                  name={`socialMediaLinks-${index}-url`}
                  value={link.url}
                  onChange={this.handleChange}
                />
              </div>
              {index === socialMediaLinks.length - 1 && (
                <div className="form-group col-md-1">
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={this.handleAddLink}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          ))}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ProfileDetails;
