import React from "react";
import "./App.css";
import Login from "./components/Login";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Signup from "./components/Signup";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
