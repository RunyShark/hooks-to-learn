import { Route, Routes, Navigate } from "react-router-dom";
import { AboutPage, LoginPage, HomePage, ErrorPage } from "./pages";
import { UserProvider } from "../context";
export const MainApp = () => {
  return (
    <UserProvider>
      <h1>Main app</h1>
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="aboutPage" element={<AboutPage />} />
        <Route path="error" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
    </UserProvider>
  );
};
