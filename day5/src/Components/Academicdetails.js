import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../Assets/css/Academicdetails.css'; // Import the CSS file

function AcademicDetailsForm() {
  const [formData, setFormData] = useState({
    name: '',
    schoolName: '',
    schoolLocation: '',
    degree: '',
    graduationYear: '',
    major: '',
    cgpa: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here, e.g., send the data to a backend API
    console.log('Form data:', formData);
  };

  return (
    <Container>
      <h2 className="form-title">PG Admission Portal</h2>
      <Form onSubmit={handleSubmit} className="academic-details-form">
        <h3 className="section-title">School Details</h3>
        <Form.Group controlId="schoolName">
          <Form.Label>School/University Name</Form.Label>
          <Form.Control
            type="text"
            name="schoolName"
            placeholder="Enter school/university name"
            value={formData.schoolName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="schoolLocation">
          <Form.Label>School/University Location</Form.Label>
          <Form.Control
            type="text"
            name="schoolLocation"
            placeholder="Enter school/university location"
            value={formData.schoolLocation}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <h3 className="section-title">Undergraduate (UG) Details</h3>
        <Form.Group controlId="degree">
          <Form.Label>Degree</Form.Label>
          <Form.Control
            type="text"
            name="degree"
            placeholder="Enter your UG degree"
            value={formData.degree}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="graduationYear">
          <Form.Label>Graduation Year</Form.Label>
          <Form.Control
            type="text"
            name="graduationYear"
            placeholder="Enter your UG graduation year"
            value={formData.graduationYear}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="major">
          <Form.Label>Major</Form.Label>
          <Form.Control
            type="text"
            name="major"
            placeholder="Enter your UG major"
            value={formData.major}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="cgpa">
          <Form.Label>CGPA</Form.Label>
          <Form.Control
            type="text"
            name="cgpa"
            placeholder="Enter your UG CGPA"
            value={formData.cgpa}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-button">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default AcademicDetailsForm;
