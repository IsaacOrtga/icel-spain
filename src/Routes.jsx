import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from "./pages/login/LoginPage";
import ProjectsListPage from "./pages/projects/ProjectsListPage";
import RegProjectPage from "./pages/projects/RegProjectPage";
import UploadPicture from "./components/container/projects/UploadPicture";

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/newProject" element={<RegProjectPage />} />
        <Route path="/uploadPicture" element={<UploadPicture />} />
        <Route path="/projectsList" element={<ProjectsListPage />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;