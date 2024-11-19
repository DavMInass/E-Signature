import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { HomePage } from '../pages/Home'
export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return (<HomePage/>);
};
