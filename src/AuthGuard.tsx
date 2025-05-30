import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "./routes/main-route";

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = false; // !!localStorage.getItem("authToken"); // Replace with your auth logic

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(Routes.LOGIN);
    }
  }, [isAuthenticated, history]);

  return isAuthenticated ? <>{children}</> : null;
};

export default AuthGuard;
