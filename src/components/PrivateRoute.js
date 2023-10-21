import React, { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import AuthContext from './AuthContext';

const PrivateRoute = ({ path, ...props }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
