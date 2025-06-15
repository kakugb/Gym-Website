import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthGuard = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const publicRoutes = ['/', '/infosection', '/home', '/login', '/signup'];

    if (token && user.role && publicRoutes.includes(location.pathname)) {
      navigate(`/${user.role.toLowerCase()}/dashboard`, { replace: true });
    }
  }, [location, navigate]);

  return children;
};

export default AuthGuard;