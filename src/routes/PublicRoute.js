import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function PublicRoute({ children }) {
  const { session, loading } = useAuth();
  if (loading) return null;
  return !session ? children : <Navigate to="/home" replace />;
}