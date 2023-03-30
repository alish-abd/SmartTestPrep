import React from "react";
import "../../styles/layout/header.css";
import Avatar from "../custom components/Avatar";
import UserImage from "../../assets/user.png";
import Switch from "../custom components/Switch";
import { useNavigate, Link } from "react-router-dom/dist";

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className="header">
      <ul className="header-items">
        <li className="header-item">
          <Link className="header-item" to="/blog">
            Blog
          </Link>
        </li>
        <li className="header-item">
          <Link className="header-item" to="/useful">
            Useful resources
          </Link>
        </li>
      </ul>
      <Switch />
      <Avatar avatar={UserImage} />
    </nav>
  );
};

export default Header;
