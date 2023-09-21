import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Manual from "../Manual/Manual";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Sidebar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("id");
    navigate("/admin-login");
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link rel="stylesheet" href="/assets/css/adminstyle.css" />
        </Helmet>
      </HelmetProvider>
      {/* for-navbar */}

      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              to="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-user fa-fw"></i>
            </Link>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <Link
                  to="/admin-login/admin-register"
                  className="dropdown-item"
                >
                  Register
                </Link>
              </li>
              <li>
                <div onClick={logout} className="dropdown-item">
                  Logout
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* for sidebar */}

      <aside style={{"position":"fixed"}} className="main-sidebar sidebar-dark-primary elevation-4">
        <div className="sidebar">
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item " style={{ cursor: "pointer" }}>
                <Link to="/admin-login/dashboard" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>Dashboard</p>
                </Link>
              </li>
              <li className="nav-item" style={{ cursor: "pointer" }}>
                <Link to="/admin-login/create" className="nav-link active">
                  <i className="nav-icon fas fa-th"></i>
                  <p>Create</p>
                </Link>
              </li>
              <li className="nav-item " style={{ cursor: "pointer" }}>
                <Link to="/admin-login/Current" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>Current Issue</p>
                </Link>
              </li>
              <li className="nav-item " style={{ cursor: "pointer" }}>
                <Link
                  to="/admin-login/current/dashboard"
                  className="nav-link active"
                >
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>Current Dashboard</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
