import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const auth = Object.hasOwnProperty.call(localStorage, 'token');

  return auth ? children : <Navigate to="/login" />;
};

export default RequireAuth;
