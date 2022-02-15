import React from "react";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import LoginForm from "./LoginForm";
import RecoverPassword from "./RecoverPassword";

const Login = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="passwordForgotten" element={<ForgotPassword />} />
      <Route path="recoverPassword" element={<RecoverPassword />} />
    </Routes>
  );
};

export default Login;
