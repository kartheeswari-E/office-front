import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Table() {
  useEffect(() => {
    getData();
  }, []);

  const [query, setquery] = useState("");

  const [data, setdata] = useState([]);

  let getData = async () => {
    try {
      let articledata = await axios.get(
        `${process.env.REACT_APP_API_URL}/allthree`
      );

      let getdata = await axios.get(
        `${process.env.REACT_APP_API_URL}/files?volume=${articledata.data[0].volume}&issue=${articledata.data[0].issue}`
      );

      setdata(getdata.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);

  const logout = () => {
    localStorage.removeItem("id");
    navigate("/admin-login");
  };

  const navigate = useNavigate();
  const [current, setcurrent] = useState(1);
  const records = 6;
  const lastIndex = current * records;
  const firstIndex = lastIndex - records;
  const page = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / records);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function previous() {
    if (current !== 1) {
      setcurrent(current - 1);
    }
  }

  function change(id) {
    setcurrent(id);
  }

  function next() {
    if (current !== npage) {
      setcurrent(current + 1);
    }
  }
  console.log(query);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link rel="stylesheet" href="/assets/css/adminstyle.css" />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"
          />

          <link
            rel="stylesheet"
            href="plugins/fontawesome-free/css/all.min.css"
          />

          <link
            rel="stylesheet"
            href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
          />

          <link
            rel="stylesheet"
            href="plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css"
          />

          <link
            rel="stylesheet"
            href="plugins/icheck-bootstrap/icheck-bootstrap.min.css"
          />

          <link rel="stylesheet" href="plugins/jqvmap/jqvmap.min.css" />

          <link rel="stylesheet" href="dist/css/adminlte.min.css" />
          <link rel="stylesheet" href="/public/dist/css/adminlte.min.css" />

          <link
            rel="stylesheet"
            href="plugins/overlayScrollbars/css/OverlayScrollbars.min.css"
          />

          <link
            rel="stylesheet"
            href="plugins/daterangepicker/daterangepicker.css"
          />

          <link
            rel="stylesheet"
            href="plugins/summernote/summernote-bs4.min.css"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/style.min.css"
            rel="stylesheet"
          />
          <link href="css/styles.css" rel="stylesheet" />
          <script
            src="https://use.fontawesome.com/releases/v6.3.0/js/all.js"
            crossorigin="anonymous"
          ></script>

          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
            crossorigin="anonymous"
          ></script>
          <script type="text/babel" src="js/scripts.js"></script>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/umd/simple-datatables.min.js"
            crossorigin="anonymous"
          ></script>
          <script type="text/babel" src="js/datatables-simple-demo.js"></script>
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
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <p className="text-danger">* Type in Small Letters </p>{" "}
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Search for..."
              onChange={(e) => setquery(e.target.value)}
              aria-label="Search for..."
              aria-describedby="btnNavbarSearch"
            />
            <button
              className="btn btn-primary"
              id="btnNavbarSearch"
              type="button"
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
      </nav>

      {/* for sidebar */}

      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* <Link to="index3.html" className="brand-link">
  <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{"opacity":".8"}}/>
   
    <span className="brand-text font-weight-light">AdminLTE 3</span>
  </Link> */}

        <div className="sidebar">
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item ">
                <Link to="/admin-login/dashboard" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>Dashboard</p>
                </Link>
              </li>
              <li className="nav-item">
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

      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Articles</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/admin-login/dashboard">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Articles</li>
                </ol>
              </div>
              <div
                onClick={() => navigate("/admin-login/Current")}
                className="create-button"
              >
                Create +
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="card" style={{ margin: "0px 20px 20px 20px " }}>
            {/* <div className="card-header">
          <h3 className="card-title">Articles</h3>
        </div> */}

            <div className="card-body p-0">
              <table className="table table-striped projects">
                <thead>
                  <tr>
                    <th style={{ width: "10%" }}>ARTICLE.ID</th>

                    <th style={{ width: "6%" }}>VOLUME</th>
                    <th style={{ width: "7%" }}>ISSUE</th>

                    <th style={{ width: "20%" }}>TITTLE</th>
                    <th style={{ width: "20%" }}>Authors</th>
                    <th style={{ width: "5%" }}>YEAR</th>

                    <th style={{ width: "16%" }}></th>
                  </tr>
                </thead>
                <tbody>
                  {page
                    .filter(
                      (user) =>
                        user.authors.toLowerCase().includes(query) ||
                        user.heading.toLowerCase().includes(query) ||
                        user.article.toLowerCase().includes(query)
                    )
                    .map((user, i) => {
                      return (
                        <>
                          <tr key={i}>
                            <td>{!user.article ? "null" : user.article}</td>

                            <td>
                              Volume-{!user.volume ? "null" : user.volume}
                            </td>
                            <td>Issue-{!user.issue ? "null" : user.issue}</td>
                            <td>{!user.heading ? "null" : user.heading}</td>
                            <td>{!user.authors ? "null" : user.authors}</td>
                            <td>{!user.year ? "null" : user.year}</td>
                            <td className="project-actions text-right">
                              <div
                                className="btn btn-primary btn-sm"
                                onClick={() =>
                                  navigate(
                                    `/admin-login/article/view/${user.article}`
                                  )
                                }
                              >
                                <i className="fas fa-folder"></i>
                                View
                              </div>{" "}
                              &nbsp;
                              <div
                                className="btn btn-info btn-sm"
                                onClick={() =>
                                  navigate(
                                    `/admin-login/article/edit/${user.article}`
                                  )
                                }
                              >
                                <i className="fas fa-pencil-alt"></i>
                                Edit
                              </div>{" "}
                              &nbsp;
                            </td>
                          </tr>
                        </>
                      );
                    })}
                </tbody>
              </table>

              <div className="page-container">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li id="new" className="page-item">
                      <Link onClick={previous} className="page-link" to="#">
                        Previous
                      </Link>
                    </li>

                    {numbers.map((n, i) => (
                      <li className="page-item" key={i}>
                        <Link
                          to="# "
                          onClick={() => change(n)}
                          className={`page-link  ${
                            current === n ? "active" : ""
                          }`}
                        >
                          {n}
                        </Link>
                      </li>
                    ))}
                    <li className="page-item">
                      <Link onClick={next} className="page-link" to="#">
                        Next
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Table;
