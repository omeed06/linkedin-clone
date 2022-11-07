import React from "react";
import { Routes , Route  } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import SignUp from "./SignUp";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default Routing;
