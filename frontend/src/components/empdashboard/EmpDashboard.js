import React from 'react';
import Card from 'react-bootstrap/Card';
import './EmpDashboard.css';

const EmpDashboard = () => {
  return (
    <div className="emp-dashboard-container">
      <div className="d-flex justify-content-center align-items-center h-100">
        <Card className="emp-dashboard text-dark">
          <Card.Body>
            <Card.Title className="emp-dashboard__title">Welcome to the Employee Dashboard</Card.Title>
            <Card.Text className="emp-dashboard__description">
              Here, you can view and manage your tasks, schedule, and other relevant information.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default EmpDashboard;