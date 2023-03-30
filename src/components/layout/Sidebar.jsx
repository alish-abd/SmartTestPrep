import React from "react";
import "../../styles/layout/sidebar.css";
import MenuItem from "../custom components/MenuItem";
import DashboardIcon from "../icons/DashboardIcon";
import ProfileIcon from "../icons/ProfileIcon";
import RecomendationsIcon from "../icons/RecomendationsIcon";
import CatalogIcon from "../icons/CatalogIcon";
import SavedIcon from "../icons/SavedIcon";
import LeariningIcon from "../icons/LeariningIcon";
import ApplicationsIcon from "../icons/ApplicationsIcon";
import Logo from "../icons/Logo";
import Divider from "../custom components/Divider";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

function Sidebar() {
  const activeItem = useSelector((state) => state.activeItem);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleItemClick = (item) => {
    dispatch({ type: "SET_ACTIVE_ITEM", payload: item });
  };

  return (
    <div className="sidebar">
      <Logo />
      <div className="menu-items">
        <MenuItem
          icon={
            <DashboardIcon
              fill={activeItem === "dashboard" ? "#fff" : "#06253C"}
            />
          }
          name="Dashboard"
          link="dashboard"
        />
        <MenuItem
          icon={
            <ProfileIcon fill={activeItem === "profile" ? "#fff" : "#06253C"} />
          }
          name="Profile"
          link="profile"
        />
        <MenuItem
          icon={
            <RecomendationsIcon
              fill={activeItem === "recommendations" ? "#fff" : "#06253C"}
            />
          }
          name="Recommendations"
          link="recommendations"
        />
        <MenuItem
          icon={
            <CatalogIcon fill={activeItem === "catalog" ? "#fff" : "#06253C"} />
          }
          name="Catalog"
          link="catalog"
        />
        <MenuItem
          icon={
            <SavedIcon fill={activeItem === "saved" ? "#fff" : "#06253C"} />
          }
          name="Saved"
          link="saved"
        />
        <MenuItem
          icon={
            <ApplicationsIcon
              fill={activeItem === "applications" ? "#fff" : "#06253C"}
            />
          }
          name="Applications"
          link="applications"
        />
        <Divider />
        <MenuItem
          icon={
            <LeariningIcon
              fill={activeItem === "learning-platform" ? "#fff" : "#06253C"}
            />
          }
          name="Learning Platform"
          link="learning-platform"
        />
      </div>
    </div>
  );
}

export default Sidebar;
