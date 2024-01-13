import { Routes, Route } from "react-router-dom";
import {
  ForgotPassword,
  NotFound,
  Login,
  ResetPassword,
  Register,
  Initial,
  Home,
  Configuracao,
} from "../pages";

export const AuthRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/configuracao" element={<Configuracao />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
