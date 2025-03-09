import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from "./pages/login/LoginPage";
import ProjectsListPage from "./pages/projects/ProjectsListPage";
import RegProjectPage from "./pages/projects/RegProjectPage";
import UploadPictureContainer from "./components/container/projects/UploadPictureContainer";

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/newProject" element={<RegProjectPage />} />
        <Route path="/uploadPicture" element={<UploadPictureContainer />} />
        <Route path="/projectsList" element={<ProjectsListPage />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;