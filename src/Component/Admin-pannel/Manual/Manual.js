import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
} from "cdbreact";
import { Link } from "react-router-dom";

function Manual() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("id");
    navigate("/admin-login/admin-login");
  };
  return (
    <>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars"></i></Link>
      </li>
    
    </ul> */}

        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0"></form>

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

      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <div className="sidebar">
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item " style={{ cursor: "pointer" }}>
                <Link to="/dashboard" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>Dashboard</p>
                </Link>
              </li>
              <li className="nav-item" style={{ cursor: "pointer" }}>
                <Link to="/create" className="nav-link active">
                  <i className="nav-icon fas fa-th"></i>
                  <p>Create</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a
              href="/"
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              Sidebar
            </a>
          </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <div>dashboarfd</div>
              <div>dashboarfd</div>
            </CDBSidebarMenu>
          </CDBSidebarContent>

          <CDBSidebarFooter style={{ textAlign: "center" }}>
            <div
              style={{
                padding: "20px 5px",
              }}
            >
              Sidebar Footer
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    </>
  );
}

export default Manual;
