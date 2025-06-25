import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function PrivateRoute({ children }) {
  const { session, loading } = useAuth();
  if (loading) return null; // ou um loading spinner
  console.log(session)
  return session ? children : <Navigate to="/welcome" replace />;
}