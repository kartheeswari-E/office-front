import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useEffect } from "react";

import { Link } from "react-router-dom";

function Boxes() {
  const [data, setdata] = useState("");
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/allarticle`)
      .then((data) => data.json())
      .then((answ) => setdata(answ));
  }, []);
  return (
    <>
      <Sidebar />
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Dashboard</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/admin-login/dashboard">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-6">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>{data.length}</h3>

                    <p>No-Of-Articles:</p>
                  </div>

                  <Link
                    to="/admin-login/articles"
                    style={{ cursor: "pointer" }}
                    className="small-box-footer"
                  >
                    More info <i className="fas fa-arrow-circle-right"></i>
                  </Link>
                </div>
              </div>

              <div className="col-lg-3 col-6">
                <div className="small-box bg-success">
                  <div style={{ color: "white" }} className="inner">
                    <h3> + </h3>

                    <p>Create Articles</p>
                  </div>

                  <Link
                    to="/admin-login/create"
                    style={{ cursor: "pointer" }}
                    className="small-box-footer"
                  >
                    More info <i className="fas fa-arrow-circle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Boxes;
