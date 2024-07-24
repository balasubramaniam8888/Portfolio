import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";
function Header() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg  navbar border-bottom border-black">
      <div className="container ">
        <a className="navbar-brand col-8 " href="#">
          Bs
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav justify-content-evenly  col-12">
            <a className="nav-link " href="#">
              Home
            </a>
            <a className="nav-link " id="About" onClick={() => navigate("/about")}>
              About
            </a>

            <a className="nav-link" id="Skills" onClick={() => navigate("/Skills")}>
              Skills
            </a>
            <a className="nav-link" id="Projects"  onClick={() => navigate("/projects")}>
              Projects
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
