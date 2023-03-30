import React from "react";
import { Route, Routes } from "react-router-dom/dist";
import Applications from "../pages/Applications";
import Catalog from "../pages/Catalog";
import Dashboard from "../pages/Dashboard";
import LearningPlatform from "../pages/LearningPlatform";
import Profile from "../pages/Profile";
import Recommendations from "../pages/Recommendations";
import Saved from "../pages/Saved";
import UsefulResources from "../pages/UsefulResources";
import Blog from "../pages/Blog";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/recommendations"} element={<Recommendations />} />
        <Route path={"/catalog"} element={<Catalog />} />
        <Route path={"/saved"} element={<Saved />} />
        <Route path={"/applications"} element={<Applications />} />
        <Route path={"/learning-platform"} element={<LearningPlatform />} />
        <Route path={"/blog"} element={<Blog />} />
        <Route path={"/useful"} element={<UsefulResources />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
