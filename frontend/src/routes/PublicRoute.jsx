import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  if (token && user.role) {
    return <Navigate to={`/${user.role.toLowerCase()}/dashboard`} replace />;
  }

  return <Outlet />;
};

export default PublicRoute;