import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AdminPanel from './components/panels/AdminPanel';
import CollegePanel from './components/panels/CollegePanel';
import StudentPanel from './components/panels/StudentPanel';
import ResetPassword from './components/auth/ResetPassword';
import { useAuth } from './context/AuthContext';

const PrivateRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/admin"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <AdminPanel />
              </PrivateRoute>
            }
          />
          <Route
            path="/college"
            element={
              <PrivateRoute allowedRoles={['college']}>
                <CollegePanel />
              </PrivateRoute>
            }
          />
          <Route
            path="/student"
            element={
              <PrivateRoute allowedRoles={['student']}>
                <StudentPanel />
              </PrivateRoute>
            }
          />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
