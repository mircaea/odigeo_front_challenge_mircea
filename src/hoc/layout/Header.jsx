import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const openHome = () => navigate("/");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark static-top header-bg">
      <div className="container justify-content-center">
        <p
          data-testid="header-info"
          className="navbar-brand"
          onClick={openHome}
        >
          ODIGEO TECH CHALLENGE
        </p>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ position: "absolute", right: "8px" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default memo(Header);
