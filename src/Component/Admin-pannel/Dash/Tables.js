import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Tables() {
  useEffect(() => getarticle(), []);
  const logout = () => {
    localStorage.removeItem("id");
    navigate("/admin-login");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [query, setquery] = useState({
    type: "all",
    search: "",
  });
  const [data, setdata] = useState([]);
  const [valid, setvalid] = useState("");

  console.log(query);
  const [details, setdetails] = useState([]);

  let handlesubmit = async (e) => {
    e.preventDefault();
    try {
      let searchdata = await axios.get(
        `${process.env.REACT_APP_API_URL}/search?key=${query.search}&type=${query.type}`
      );
      setdata(searchdata.data.data);
      setvalid(searchdata.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const [current, setcurrent] = useState(1);
  const records = 6;
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

  const getarticle = () => {
    fetch(`${process.env.REACT_APP_API_URL}/allarticle`)
      .then((data) => data.json())
      .then((answ) => setdetails(answ.reverse()));
  };

  const deletearticle = (id) => {
    fetch(`${process.env.REACT_APP_API_URL}/delfile?id=${id}`, {
      method: "DELETE",
    }).then(() => getarticle());
  };
  console.log(query);
  console.log(data);

  function getHighlightedText(text, higlight) {
    var parts = text.split(new RegExp(`(${higlight})`, "gi"));
    return parts.map((part, index) => (
      <span key={index}>
        {part.toLowerCase() === higlight.toLowerCase() ? (
          <b style={{ backgroundColor: "#e8bb49" }}>{part}</b>
        ) : (
          part
        )}
      </span>
    ));
  }
  return (
    <>
    
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

      <div className="search-container">
        <section id="faq" className="faq section-bg">
          <div className="container" data-aos="fade-up">
    

            <form onSubmit={handlesubmit}>
              <div style={{"marginLeft":"211px"}} className="row gy-4">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="searchwithbut"
                    name="search"
                    onChange={(e) => {
                      setquery({ ...query, [e.target.name]: e.target.value });
                    }}
                  />
                </div>
                <div style={{"marginTop":"20px"}} className="col-lg-2 col-md-12 col-sm-12">
                  <select
                    name="type"
                    className="butselect"
                    onChange={(e) => {
                      setquery({ ...query, [e.target.name]: e.target.value });
                    }}
                  >
                    <option name="select">--Select--</option>
                    <option name="all">All</option>
                    <option name="article">Article</option>
                    <option name="heading">Title</option>
                    <option name="abstract">Abstract</option>
                    <option name="authors">Authors</option>
                    <option name="keywords">Keywords</option>
                  </select>
                </div>
                <div id="btn" className="col-lg-12">
                  <button type="submit" className="but">
                    Search
                  </button>
                </div>

                <section
                  style={{ padding: "0" }}
                  id="testimonials"
                  className="testimonials section-bg"
                >
                  <div className="contaier">
                    <div className="row self-row">
                      {/* {data
                    ? data.map((article, index) => {
                        return ( */}

                      <section className="content">
                        <div
                          className="card"
                          style={{ margin: "0px 20px 20px 20px" }}
                        >
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

                                  <th style={{ width: "20%" }}></th>
                                </tr>
                              </thead>
                              <tbody>
                                {data? data.map((user, i) => {
                                  return (
                                    <>
                                      <tr key={i}>
                                        <td>
                                          {!user.article
                                            ? "null"
                                            : user.article}
                                        </td>

                                        <td>
                                          Volume-
                                          {!user.volume ? "null" : user.volume}
                                        </td>
                                        <td>
                                          Issue-
                                          {!user.issue ? "null" : user.issue}
                                        </td>
                                        <td>
                                          {!user.heading
                                            ? "null"
                                            : user.heading}
                                        </td>
                                        <td>
                                          {!user.authors
                                            ? "null"
                                            : user.authors}
                                        </td>
                                        <td>
                                          {!user.year ? "null" : user.year}
                                        </td>
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
                                            onClick={() =>
                                              deletearticle(user.article)
                                            }
                                          >
                                            <i className="fas fa-trash"></i>
                                            Delete
                                          </div>
                                        </td>
                                      </tr>
                                    </>
                                  );
                                } ):" "}
                              </tbody>
                            </table>

                            <div className="page-container">
                              <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                  <li id="new" className="page-item">
                                    <Link
                                      onClick={previous}
                                      className="page-link"
                                      to="#"
                                    >
                                      Previous
                                    </Link>
                                  </li>

                                  <li className="page-item">
                                    <Link
                                      onClick={next}
                                      className="page-link"
                                      to="#"
                                    >
                                      Next
                                    </Link>
                                  </li>
                                  <div className="pajination">
                                    page {current} of {numbers.length}
                                  </div>
                                </ul>
                              </nav>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </section>

                {valid !== "" ? <div>{valid}</div> : ""}
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default Tables;
