import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function AboutUsModal(props) {
  return (
    <Modal show={props.show} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>About Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Add your About Us content here */}
        <p>"Welcome to the PG Admission Portal, your trusted resource for pursuing postgraduate education. Our mission is to simplify the admission process, providing aspiring students with comprehensive information on PG programs, application procedures, and admission requirements. We believe that everyone should have access to quality higher education, and our platform is designed to empower you to achieve your academic goals. Whether you're exploring program options or preparing your application, we're here to support you every step of the way. Choose PG Admission Portal for personalized assistance, timely updates, and a seamless journey to postgraduate studies."</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AboutUsModal;
