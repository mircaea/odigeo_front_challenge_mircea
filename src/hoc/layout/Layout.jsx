import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div className="web-content">
      <div className="web-content-inner">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
