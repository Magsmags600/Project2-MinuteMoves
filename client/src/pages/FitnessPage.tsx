import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Modal, Form } from 'react-bootstrap';
import 'chart.js/auto';
import '../css/FitnessPage.css';
import auth from '../utils/auth';

const FitnessPage = () => {
  // State for modal
  const [showModal, setShowModal] = useState(false);
  
  // State for user inputs
  const [weight, setWeight] = useState<number | ''>('');
  const [height, setHeight] = useState<number | ''>('');
  const [age, setAge] = useState<number | ''>('');
  const [gender, setGender] = useState<string>(''); // Default to empty string
  const [activityLevel, setActivityLevel] = useState<string>(''); // Default to empty string

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(auth.getProfile()?.id); // Get user's name from Auth0
    // Validate inputs before proceeding
    if (typeof weight === 'number' && typeof height === 'number' && typeof age === 'number' && gender && activityLevel) {
      // Use the inputs for your calculations or logic
      console.log({ weight, height, age, gender, activityLevel });
      handleClose();
    } else {
      alert('Please fill in all fields correctly.');
    }
  };

  return (
    <Container className="fitness-page">
      <Row className="mb-4">
        {/* Profile Card */}
        <Col md={6}>
          <Card className="profile-card">
            <Card.Body>
              <Card.Title>User Profile</Card.Title>
              {/* Profile table */}
              <table className="profile-table">
                <tbody>
                  {/* Sample data for user profile */}
                  <tr>
                    <td>First Name:</td>
                    <td>John</td>
                  </tr>
                  {/* Other rows here */}
                </tbody>
              </table>
            </Card.Body>
          </Card>
        </Col>

        {/* Button to open modal */}
        <Col md={6}>
          <Button variant="primary" onClick={handleShow}>
            Create New Goal
          </Button>
        </Col>
      </Row>

      {/* Modal for user input */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Goal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formWeight">
              <Form.Label>Weight (kg)</Form.Label>
              <Form.Control
                type="number"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value) || '')} // Convert string to number
                placeholder="Enter weight"
              />
            </Form.Group>
            <Form.Group controlId="formHeight">
              <Form.Label>Height (cm)</Form.Label>
              <Form.Control
                type="number"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value) || '')} // Convert string to number
                placeholder="Enter height"
              />
            </Form.Group>
            <Form.Group controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value) || '')} // Convert string to number
                placeholder="Enter age"
              />
            </Form.Group>
            <Form.Group controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="formActivityLevel">
              <Form.Label>Activity Level</Form.Label>
              <Form.Select
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
              >
                <option value="">Select Activity Level</option>
                <option value="sedentary">Sedentary</option>
                <option value="lightly active">Lightly Active</option>
                <option value="moderately active">Moderately Active</option>
                <option value="very active">Very Active</option>
                <option value="super active">Super Active</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Other components */}
    </Container>
  );
};

export default FitnessPage;
