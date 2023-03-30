import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../../styles/layout/layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="header-contnent">
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
