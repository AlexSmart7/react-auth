import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Home, Login, Signup, Secret } from "@/pages";
import { useAuthContext } from "../context/AuthContext";

const RoutesIndex = () => {
  const { isAuth } = useAuthContext();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/dashboard"
        element={isAuth ? <Dashboard /> : <Navigate to="/login" replace />}
      />
      <Route path="/secret" element={<Secret />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default RoutesIndex;
