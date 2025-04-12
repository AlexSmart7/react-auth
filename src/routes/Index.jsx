import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Home, Login, Signup, Secret } from "@/pages";

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/secret" element={<Secret />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default RoutesIndex;
