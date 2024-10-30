import React, { useState } from "react";
 //UNCOMMENT THIS WHEN YOU WANT TO USE WITH AUTH TOKEN
import { calculateNutrition } from "../utils/fitnessCalculations";
import auth from "../utils/auth"; // Import auth if not already imported
import PieChart from "../components/PieChart";

import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Modal,
  Form,
} from "react-bootstrap";
import "chart.js/auto";
import "../css/FitnessPage.css";

const FitnessPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [weight, setWeight] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [age, setAge] = useState<number | "">("");
  const [gender, setGender] = useState<string>("");
  const [activityLevel, setActivityLevel] = useState<string>("");
  const [muscleGoal, setMuscleGoal] = useState<string>(""); // New state for muscle goal

  const [userProfile, setUserProfile] = useState({
    weight: "",
    height: "",
    age: "",
    gender: "",
    activityLevel: "",
    muscleGoal: "", 
  });

  const [workoutData, setWorkoutData] = useState<string[]>([]);
  const [completedItems, setCompletedItems] = useState<boolean[]>([]);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const isDayOfWeek = (line: string) => {
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Day 1:",
      "Day 2",
      "Day 3",
      "Day 4",
      "Day 5",
      "Day 6",
      "Day 7"
    ];
    return days.some((day) => line.startsWith(day));
  };

  const userPlan = () => {
    const requestText = `Create a seven day workout plan for a ${age} year old ${gender} with weight ${weight}, height ${height}, activity level ${activityLevel}, and muscle goal of ${muscleGoal}`;

    fetch("api/workoutplan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: requestText }),
    })
      .then((response) => response.json())
      .then((data) => {
        const response = data.response.replace(/\n\n/g,"\r\n");
        const workoutLines = response.split("\n");
        setWorkoutData(workoutLines);
        setCompletedItems(new Array(workoutLines.length).fill(false));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (
        typeof weight === "number" &&
        typeof height === "number" &&
        typeof age === "number" &&
        gender &&
        activityLevel &&
        muscleGoal // Ensure muscle goal is set
    ) {
        setUserProfile({
            weight: `${weight} kg`,
            height: `${height} cm`,
            age: `${age} years`,
            gender: gender.charAt(0).toUpperCase() + gender.slice(1),
            activityLevel: activityLevel,
            muscleGoal: muscleGoal, // Set muscle goal
        });

        //UNCOMMENT THIS WHEN YOU WANT TO USE WITH AUTH TOKEN
        const userId = auth.getProfile()?.id; // Make sure this is defined

        if (userId) {
          //UNCOMMENT THIS WHEN YOU WANT TO USE WITH AUTH TOKEN
            try {
                const nutritionData = await calculateNutrition(weight, height, age, gender, activityLevel, muscleGoal, userId); // Pass userId here
                console.log("Nutrition Data:", nutritionData);
            } catch (error) {
                console.error("Failed to calculate nutrition:", error);
            }
        } else {
            alert("User ID not found. Please ensure you're logged in.");
        }
        userPlan();
        handleClose();
      } else {
        alert("Please fill in all fields.");
      }
};

  const handleCheckboxChange = (index: number) => {
    const updatedCompletedItems = [...completedItems];
    updatedCompletedItems[index] = !updatedCompletedItems[index];
    setCompletedItems(updatedCompletedItems);
  };

  return (
    <Container className="fitness-page">
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
                onChange={(e) => setWeight(Number(e.target.value) || "")}
                placeholder="Enter weight"
              />
            </Form.Group>
            <Form.Group controlId="formHeight">
              <Form.Label>Height (cm)</Form.Label>
              <Form.Control
                type="number"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value) || "")}
                placeholder="Enter height"
              />
            </Form.Group>
            <Form.Group controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value) || "")}
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
            <Form.Group controlId="formMuscleGoal">
              <Form.Label>Muscle Goal</Form.Label>
              <Form.Select
                value={muscleGoal}
                onChange={(e) => setMuscleGoal(e.target.value)}
              >
                <option value="">Select Goal</option>
                <option value="gain muscle">Gain Muscle</option>
                <option value="lose weight">Lose Weight</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Row className="mb-4">
        <Col md={6}>
          <Card className="profile-card">
            <Card.Body>
              <Card.Title>User Profile</Card.Title>
              <table className="profile-table">
                <tbody>
                  <tr>
                    <td>Weight:</td>
                    <td>{userProfile.weight}</td>
                  </tr>
                  <tr>
                    <td>Height:</td>
                    <td>{userProfile.height}</td>
                  </tr>
                  <tr>
                    <td>Age:</td>
                    <td>{userProfile.age}</td>
                  </tr>
                  <tr>
                    <td>Gender:</td>
                    <td>{userProfile.gender}</td>
                  </tr>
                  <tr>
                    <td>Activity Level:</td>
                    <td>{userProfile.activityLevel}</td>
                  </tr>
                  {/* <tr>
                    <td>Muscle Goal:</td>
                    <td>{userProfile.muscleGoal}</td>
                  </tr> */}
                </tbody>
              </table>
              {/* Button to open modal */}
              <Button variant="primary" onClick={handleShow}>
                Create New Goal
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="chart-card">
            <Card.Body>
              <Card.Title>Nutrition Breakdown</Card.Title>
              <PieChart />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
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

        <Col md={6}>
          <Card className="placeholder-card">
            <Card.Body>
              <Card.Title>Workout Plan</Card.Title>
              <div className="workout-list">
                {workoutData.length > 0
                  ? workoutData.map((line, index) =>
                      isDayOfWeek(line) ? (
                        <div key={index} className="day-header">
                          {line}
                        </div>
                      ) : (
                        <Form.Check
                          key={index}
                          type="checkbox"
                          label={line.replace(/^-\s*/, "")}
                          checked={completedItems[index]}
                          onChange={() => handleCheckboxChange(index)}
                          className="workout-item"
                        />
                      )
                    )
                  : "Workout plan generated after filling out User Profile"}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FitnessPage;
