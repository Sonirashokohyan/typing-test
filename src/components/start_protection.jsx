import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function Start_protection() {
  const token = localStorage.getItem("token");
  return token? <Outlet /> : <Navigate to="/" />;
}

export default Start_protection;
