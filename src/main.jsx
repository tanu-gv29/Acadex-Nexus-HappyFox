
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import './index.css'
import App from './App.jsx'
import TestPage from "./pages/TestPage";
import PerformanceReport from "./pages/PerformanceReport";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import StudentProfile from "./pages/StudentProfile.jsx";
import TeacherProfile from "./pages/TeacherProfile.jsx";
import ProjectMentor from "./pages/ProjectMentor";
import Mentor from "./pages/Mentor";
// import LandingPage from "./components/LandingPage.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/studentprofile" element={<StudentProfile/>} />
      <Route path="/teacherprofile" element={<TeacherProfile/>} />
      <Route path="/mentor" element={<ProjectMentor/>} />
      <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
      <Route path="/mentor1" element={<Mentor />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path="/test/:examId" element={<TestPage />} />
      <Route path="/performance-report/:examId" element={<PerformanceReport />} />
    </Routes>
  </BrowserRouter>
);
