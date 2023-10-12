// AcademicDetails.js
import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setAcademicData, selectAcademicData } from '../Redux/academicSlice';
import '../Assets/css/Academic.css'
import Sidebar from './Sidebar';
import { academicPost } from '../Services/api';

function AcademicDetails() {
  const dispatch = useDispatch();
  const academicData = useSelector(selectAcademicData);

  const [showModal, setShowModal] = useState(false);

  
  const [formData, setFormData] = useState({
    sscSchool: '',
    sscDistrict: '',
    sscState: '',
    sscMarks: '',
    hscSchool: '',
    hscDistrict: '',
    hscState: '',
    hscMarks: '',
    ugCollegeName: '',
    ugDistrict: '',
    ugState: '',
    ugCgpa: '',
  });
  

  useEffect(() => {
    if (academicData) {
      setFormData(academicData);
    }
  }, [academicData]);

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleEdit = () => {
    setShowModal(true);
  };

  const handleSave = async() => {
    dispatch(setAcademicData(formData));
    console.log(localStorage.getItem("Token"));
    const res = await academicPost(formData);
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className='academicmaindiv'>
      <div><Sidebar/></div>
      <div>
      <h2>Academic Details</h2>
      {academicData ? (
        <>
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>School/College Name</th>
                <th>District</th>
                <th>State</th>
                <th>Marks/CGPA</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{academicData.sscSchool}</td>
                <td>{academicData.sscDistrict}</td>
                <td>{academicData.sscState}</td>
                <td>{academicData.sscMarks}</td>
                <td>
                  <Button variant="info" className='editbuttonacademic'onClick={handleEdit}>
                    Edit
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
          
        </>
      ) : (
        <div>
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>School/College Name</th>
                <th>District</th>
                <th>State</th>
                <th>Marks/CGPA</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <Button variant="info" onClick={handleEdit}>
                    Edit
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
          
        </div>
      )}

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{academicData ? 'Edit Academic Details' : 'Add Academic Details'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>SSC</h3>
          <Form.Group controlId="sscSchool">
            <Form.Label>School Name</Form.Label>
            <Form.Control
              type="text"
              name="sscSchool"
              value={formData.sscSchool}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="sscDistrict">
            <Form.Label>District</Form.Label>
            <Form.Control
              type="text"
              name="sscDistrict"
              value={formData.sscDistrict}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="sscState">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              name="sscState"
              value={formData.sscState}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="sscMarks">
            <Form.Label>Marks</Form.Label>
            <Form.Control
              type="text"
              name="sscMarks"
              value={formData.sscMarks}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <h3>HSC</h3>
          <Form.Group controlId="hscSchool">
            <Form.Label>School Name</Form.Label>
            <Form.Control
              type="text"
              name="hscSchool"
              value={formData.hscSchool}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="hscDistrict">
            <Form.Label>District</Form.Label>
            <Form.Control
              type="text"
              name="hscDistrict"
              value={formData.hscDistrict}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="hscState">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              name="hscState"
              value={formData.hscState}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="hscMarks">
            <Form.Label>Marks</Form.Label>
            <Form.Control
              type="text"
              name="hscMarks"
              value={formData.hscMarks}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <h3>UG</h3>
          <Form.Group controlId="ugCollegeName">
            <Form.Label>College Name</Form.Label>
            <Form.Control
              type="text"
              name="ugCollegeName"
              value={formData.ugCollegeName}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="ugDistrict">
            <Form.Label>District</Form.Label>
            <Form.Control
              type="text"
              name="ugDistrict"
              value={formData.ugDistrict}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="ugState">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              name="ugState"
              value={formData.ugState}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="ugCgpa">
            <Form.Label>CGPA</Form.Label>
            <Form.Control
              type="text"
              name="ugCgpa"
              value={formData.ugCgpa}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  );
}

export default AcademicDetails;
