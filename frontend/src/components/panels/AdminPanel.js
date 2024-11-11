import React from 'react';
import { useAuth } from '../../context/AuthContext';

function AdminPanel() {
  const { logout } = useAuth();

  return (
    <div className="panel">
      <h2>Admin Panel</h2>
      <div className="panel-content">
        <p>Welcome to the Admin Dashboard</p>
        {/* Add admin-specific features here */}
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default AdminPanel;
