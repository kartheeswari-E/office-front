import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
function CreateArticle() {
  useEffect(() => {
    loadData();
  }, []);

  const [view, setview] = useState([]);

  let loadData = async () => {
    try {
      let articledata = await axios.get(
        `${process.env.REACT_APP_API_URL}/allthree`
      );

      setview(articledata.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(view);

  const [data, setdata] = useState([]);

  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    fetch(`${process.env.REACT_APP_API_URL}/three`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      if (res.status === 201) {
        alert("sucessfully logged in");
      } else {
        window.alert("Incorrect email  or password");
        console.log(res.status);
      }
    });
  };
  console.log(view);
  return (
    <>
      <Sidebar />

      <div id="three">
        <form id="the" onSubmit={handlesubmit} enctype="multipart/form-data">
          <div className="frm-group">
            <label>Volume:</label>
            <input
              type="text"
              name="volume"
              value={data.volume || ""}
              required
              onChange={(e) => {
                setdata({ ...data, [e.target.name]: e.target.value });
              }}
            ></input>
          </div>
          <div className="frm-group">
            <label>Issue :</label>
            <input
              type="text"
              name="issue"
              value={data.issue || ""}
              required
              onChange={(e) => {
                setdata({ ...data, [e.target.name]: e.target.value });
              }}
            ></input>
          </div>
          <button id="th" className="finlsub">
            submit
          </button>
        </form>
        <div style={{ marginTop: "5%" }}>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Volume</th>
                <th scope="col">Issue</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{view.volume}</th>
                <td>{view.issue}</td>
                <td className="project-actions text-right">
                  <div
                    className="btn btn-primary btn-sm"
                    onClick={() => navigate("/admin-login/current/dashboard")}
                  >
                    <i className="fas fa-folder"></i>
                    View
                  </div>{" "}
                  &nbsp;
                  <div
                    className="btn btn-info btn-sm"
                    onClick={() =>
                      navigate(`/admin-login/Three/${view.volume}`)
                    }
                  >
                    <i className="fas fa-pencil-alt"></i>
                    Edit
                  </div>{" "}
                  &nbsp;
                </td>
              </tr>
            </tbody>
          </table>{" "}
        </div>
      </div>
    </>
  );
}

export default CreateArticle;
