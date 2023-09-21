import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Dash() {
  const [details, setdetails] = useState([]);

  const [query, setquery] = useState("");
  useEffect(() => getarticle(), []);
  const getarticle = () => {
    fetch(`${process.env.REACT_APP_API_URL}/allarticle`)
      .then((data) => data.json())
      .then((answ) => setdetails(answ.reverse()));
  };

  const logout = () => {
    localStorage.removeItem("id");
    navigate("/admin-login");
  };
  const navigate = useNavigate();
  const [current, setcurrent] = useState(1);
  const records =6;
  const lastIndex = current * records;
  const firstIndex = lastIndex - records;
  const page = details.slice(firstIndex, lastIndex);
  const npage = Math.ceil(details.length / records);
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

  const deletearticle = (id) => {
    fetch(`${process.env.REACT_APP_API_URL}/delfile?id=${id}`, {
      method: "DELETE",
    }).then(() => getarticle());
  };
  console.log(query);

  return (
    <>
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
        
          <div className="input-group">
  
            <button
              className="btn btn-primary"
              id="btnNavbarSearch"
              type="button"
              onClick={()=>navigate("/admin-login/table")}
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
      </nav>

      {/* for sidebar */}

      <aside style={{"position":"fixed"}}  className="main-sidebar sidebar-dark-primary elevation-4">
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
                onClick={() => navigate("/admin-login/create")}
                className="create-button"
              >
                Create +
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="card" style={{ margin: "0px 20px 20px 20px" }}>
            {/* <div className="card-header">
          <h3 className="card-title">Articles</h3>
        </div>
       */}
            <div className="card-body p-0">
              <table className="table table-striped projects">
                <thead>
                  <tr>
                    <th style={{ width: "8%" }}>ARTICLE.ID</th>

                    <th style={{ width: "5%" }}>VOLUME</th>
                    <th style={{ width: "5%" }}>ISSUE</th>

                    <th style={{ width: "20%" }}>TITTLE</th>
                    <th style={{ width: "18%" }}>Authors</th>
                    <th style={{ width: "5%" }}>YEAR</th>

                    <th style={{ width: "10%" }}></th>
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
                            <td style={{"display":"flex","flexDirection":"column"}} className="project-actions text-right">
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
                              <div
                                className="btn btn-danger btn-sm"
                                onClick={() => deletearticle(user.article)}
                              >
                                <i className="fas fa-trash"></i>
                                Delete
                              </div>
                            </td>
                          </tr>
                        </>
                      );
                    }
                    )
                  
                    }
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
                    {/* {numbers.map((n, i) => (
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
                    ))} */}.....
               
                    <li className="page-item"> 
                  
                      <Link onClick={next} className="page-link" to="#">
                        Next
                      </Link>
                     
                    </li> 
                     <div className="pajination">page {current} of {numbers.length}</div>
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

export default Dash;
