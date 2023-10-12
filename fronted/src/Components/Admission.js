import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import '../Assets/css/Admission.css';
import Sidebar from './Sidebar';
import { useEffect } from 'react';
import { applicationsDelete, applicationsGet, applicationsGetId, applicationsPost, applicationsPut, getUserbyId } from '../Services/api';

function Admission() {
  const [applications, setApplications] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    fathersName: '',
    mothersName: '',
    marks10: '',
    marks12: '',
    ugCgpa: '',
    pgCollegeName: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setFormData({});
    setEditIndex(-1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    if (editIndex === -1) {
      const u_id = localStorage.getItem("userId"); 
      
      let UserbyId=await getUserbyId(u_id);

      const uid=u_id;
      const name=UserbyId.data.name;
      const email=UserbyId.data.email;
      const password=UserbyId.data.password;
      const role=UserbyId.data.role;
      
      const dataToSend = {
        ...formData,
        user: {
          uid,
          name,
          email,
          password,
          role
        } // Include the user details in the data
      };


      console.log(dataToSend);
      const res = await applicationsPost(dataToSend);
      console.log(res);
      setApplications([...applications, res.data]);
    } else {
      const u_id = localStorage.getItem("userId"); 
      
      let UserbyId=await getUserbyId(u_id);

      const uid=u_id;
      const name=UserbyId.data.name;
      const email=UserbyId.data.email;
      const password=UserbyId.data.password;
      const role=UserbyId.data.role;
      
      const dataToSend = {
        ...formData,
        user: {
          uid,
          name,
          email,
          password,
          role
        } // Include the user details in the data
      };
      console.log(formData);
      const res = await applicationsPut(formData.id, dataToSend);
      const updatedApplications = [...applications];
      updatedApplications[editIndex] = res.data;
      setApplications(updatedApplications);
    }
    handleClose();
  };

  const handleEdit = (app) => { 
    const index = applications.findIndex((a) => a.id === app.id);
    setFormData({ ...app });
    setEditIndex(index);
    handleShow();
  };

  const handleRemove = async (app) => {
    await applicationsDelete(app.id);
    const updatedApplications = applications.filter((a) => a.id !== app.id);
    setApplications(updatedApplications);
  };

  const fetchData = async () => {
    try {
      const u_id = localStorage.getItem("userId"); 
    
        let UserbyId=await getUserbyId(u_id);

        const uid=u_id;
        const name=UserbyId.data.name;
        const email=UserbyId.data.email;
        const password=UserbyId.data.password;
        const role=UserbyId.data.role;
        
        const users = {
            uid,
            name,
            email,
            password,
            role
           // Include the user details in the data
        };
        console.log(localStorage.getItem("Token"));
        console.log(UserbyId.data);
      const data = await applicationsGetId(uid);
      console.log("Fetched data:", data); // Add this line for debugging
      if (Array.isArray(data.data)) {
        setApplications(data.data);
      } else {
        console.error('Data received from the API is not an array:', data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    
    fetchData();
  }, []);

  return (
    <div className="applicationmaindiv">
      <div>
        <Sidebar />
      </div>
      <div className="container">
        <h1>PG Admission Details</h1>
        <Button variant="primary" className="addapplicationbutton" onClick={handleShow}>
          Add Application
        </Button>
        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Father's Name</th>
              <th>Mother's Name</th>
              <th>10th Marks</th>
              <th>12th Marks</th>
              <th>UG CGPA</th>
              <th>PG College Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={app.id}>
                <td>{app.id}</td>
                <td>{app.name}</td>
                <td>{app.fathersName}</td>
                <td>{app.mothersName}</td>
                <td>{app.marks10}</td>
                <td>{app.marks12}</td>
                <td>{app.ugCgpa}</td>
                <td>{app.pgCollegeName}</td>
                <td>
                  <Button variant="info" className="edit-button" onClick={() => handleEdit(app)}>
                    Edit
                  </Button>
                  <Button variant="danger" className="remove-button" onClick={() => handleRemove(app)}>
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{editIndex === -1 ? 'Add Application' : 'Edit Application'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={formData.name || ''}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="fathersName">
                <Form.Label>Father's Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Father's Name"
                  name="fathersName"
                  value={formData.fathersName || ''}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="mothersName">
                <Form.Label>Mother's Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Mother's Name"
                  name="mothersName"
                  value={formData.mothersName || ''}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="marks10">
                <Form.Label>10th Marks</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter 10th Marks"
                  name="marks10"
                  value={formData.marks10 || ''}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="marks12">
                <Form.Label>12th Marks</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter 12th Marks"
                  name="marks12"
                  value={formData.marks12 || ''}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="ugCgpa">
                <Form.Label>UG CGPA</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter UG CGPA"
                  name="ugCgpa"
                  value={formData.ugCgpa || ''}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="pgCollegeName">
                <Form.Label>PG College Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter PG College Name"
                  name="pgCollegeName"
                  value={formData.pgCollegeName || ''}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              {editIndex === -1 ? 'Add' : 'Save Changes'}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Admission;

