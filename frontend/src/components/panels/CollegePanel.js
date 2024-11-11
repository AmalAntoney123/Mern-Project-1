import React from 'react';
import { useAuth } from '../../context/AuthContext';

function CollegePanel() {
  const { logout } = useAuth();

  return (
    <div className="panel">
      <h2>College Panel</h2>
      <div className="panel-content">
        <p>Welcome to the College Dashboard</p>
        {/* Add college-specific features here */}
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default CollegePanel; 