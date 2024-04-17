import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const auth = Object.prototype.hasOwnProperty.call(localStorage, 'token');

  return auth ? children : <Navigate to="/login" />;
};

export default RequireAuth;
