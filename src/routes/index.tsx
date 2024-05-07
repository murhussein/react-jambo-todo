import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home.tsx";

export default function AppRoutes() {
  return (
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
      </Routes>
  );
}

