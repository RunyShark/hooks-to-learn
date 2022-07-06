import { Route, Routes } from "react-router-dom";
import { AboutPage, LoginPage, HomePage } from "./pages";

export const MainApp = () => {
  return (
    <>
      <h1>Main app</h1>
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/aboutPage" element={<AboutPage />} />
      </Routes>
    </>
  );
};
