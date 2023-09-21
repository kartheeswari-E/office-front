import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
function Three() {
  const { volume } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);

  const [data, setdata] = useState([]);
  const [datas, setdatas] = useState([]);

  let getData = async () => {
    try {
      let getdata = await axios.get(
        `${process.env.REACT_APP_API_URL}/edit/${volume}`
      );

      setdata(getdata.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      let currentdata = await axios.put(
        `${process.env.REACT_APP_API_URL}/current/${volume}?volume=${data.volume}&issue=${data.issue}`,
        datas
      );
      alert("edited successfully");
      navigate("/admin-login/Current");
    } catch (error) {
      console.log(error);
    }
  };

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
            Edit
          </button>
        </form>
      </div>
    </>
  );
}

export default Three;
