import React from 'react';
import { useAuth } from '../../context/AuthContext';

function StudentPanel() {
  const { logout } = useAuth();

  return (
    <div className="panel">
      <h2>Student Panel</h2>
      <div className="panel-content">
        <p>Welcome to the Student Dashboard</p>
        {/* Add student-specific features here */}
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default StudentPanel; 