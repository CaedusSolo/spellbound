import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { authState } = useContext(AuthContext);

  if (!authState.isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }

  return children;
}

export default ProtectedRoute;
