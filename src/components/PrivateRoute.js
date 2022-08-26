import { Navigate } from "react-router-dom";

// Simular autenticacion
let auth;
auth = true;
//auth = null;

const PrivateRoute = ({ component: Component }) => {
  return auth ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
