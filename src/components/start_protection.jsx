import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function Start_protection() {
  const auth = true;
  return auth ? <Outlet /> : <Navigate to="/" />;
}

export default Start_protection;
