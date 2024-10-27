// import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
// import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

import '../css/FitnessPage.css';

const FitnessPage = () => {
  // Sample data for the pie chart
  const pieData = {
    labels: ['Protein', 'Carbs', 'Fats'],
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <Container className="fitness-page">
      <Row className="mb-4">
        {/* Profile Card */}
        <Col md={6}>
          <Card className="profile-card">
            <Card.Body>
              <Card.Title>User Profile</Card.Title>
              <table className="profile-table">
                <tbody>
                  <tr>
                    <td>First Name:</td>
                    <td>John</td>
                  </tr>
                  <tr>
                    <td>Last Name:</td>
                    <td>Doe</td>
                  </tr>
                  <tr>
                    <td>Username:</td>
                    <td>johndoe123</td>
                  </tr>
                  <tr>
                    <td>Age:</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>Weight:</td>
                    <td>70 kg</td>
                  </tr>
                  <tr>
                    <td>Height:</td>
                    <td>175 cm</td>
                  </tr>
                  <tr>
                    <td>Gender:</td>
                    <td>Male</td>
                  </tr>
                  <tr>
                    <td>Activity Level:</td>
                    <td>Active</td>
                  </tr>
                  <tr>
                    <td>Fitness Goal:</td>
                    <td>Maintain Weight</td>
                  </tr>
                </tbody>
              </table>
            </Card.Body>
          </Card>
        </Col>

        {/* Pie Chart Card
        <Col md={6}>
          <Card className="chart-card">
            <Card.Body>
              <Card.Title>Nutrition Breakdown</Card.Title>
              <Pie data={pieData} />
            </Card.Body>
          </Card>
        </Col> */}
      </Row>

      <Row className="mb-4">
        {/* Link to Meal Page */}
        <Col md={6}>
          <Card className="meal-card">
            <Card.Body>
              <Card.Title>Meals</Card.Title>
              <Card.Text>Track your daily meals and nutrition.</Card.Text>
              <Button variant="primary" href="/MealPage">
                Go to Meal Page
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Placeholder Cards */}
        <Col md={6}>
          <Card className="placeholder-card">
            <Card.Body>
              <Card.Title>Placeholder Card 1</Card.Title>
              <Card.Text>This is a placeholder for future content.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card className="placeholder-card">
            <Card.Body>
              <Card.Title>Placeholder Card 2</Card.Title>
              <Card.Text>This is a placeholder for future content.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FitnessPage;
