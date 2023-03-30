import React from "react";
import "../../styles/components/menu-item.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom/dist";

const MenuItem = ({ icon, name, link }) => {
  const navigate = useNavigate();
  const activeItem = useSelector((state) => state.activeItem);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleItemClick = (item) => {
    dispatch({ type: "SET_ACTIVE_ITEM", payload: item });
    navigate(`/${link}`);
  };

  useEffect(() => {
    const path = location.pathname;
    let item = "";

    switch (path) {
      case "/dashboard":
        item = "dashboard";
        break;
      case "/profile":
        item = "profile";
        break;
      case "/recommendations":
        item = "recommendations";
        break;
      case "/catalog":
        item = "catalog";
        break;
      case "/saved":
        item = "saved";
        break;
      case "/applications":
        item = "applications";
        break;
      case "/learning-platform":
        item = "learning-platform";
        break;
      default:
        break;
    }

    if (item !== activeItem) {
      dispatch({ type: "SET_ACTIVE_ITEM", payload: item });
    }
  }, [location.pathname, activeItem, dispatch]);

  return (
    <div
      className={`menu-item ${activeItem === `${link}` ? "active" : ""}`}
      onClick={() => handleItemClick()}
    >
      {icon}
      {name}
    </div>
  );
};

export default MenuItem;
