import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateArticleForm4({ setdata, data, setpage }) {
  const [filefocus, setfilefocus] = useState(false);
  const [available, setavailable] = useState(true);
  const navigate = useNavigate();

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
    ],
  };

  const focuschange = () => {
    setfilefocus(true);
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    if ("reference" in data) {
      if (data["reference"] == "<p><br></p>") {
        setavailable(false);
      } else {
        setavailable(true);
        data[
          "doi"
        ] = `https://doi.org/10.14445/23497157/${data.article.toUpperCase()}`;
        const formData = new FormData(e.target);
        delete data["pdf"];
        const keys = Object.keys(data);
        keys.forEach((key) => {
          formData.append(key, data[key]);
        });

        console.log(data);
        const config = {
          headers: { "content-type": "multipart/form-data" },
        };
        let info = await axios.post(
          `${process.env.REACT_APP_API_URL}/create?volume=${data.volume}&issue=${data.issue}`,
          formData,
          config
        );
        alert("sucessfully registered");
        navigate("/admin-login/articles");
        console.log(info);
      }
    } else {
      alert("Article-id already exsist");
      setavailable(false);
    }
  };

  return (
    <>
      <div className="head">Create Article Page(4/4)</div>
      <form onSubmit={handlesubmit}>
        <div className="frm-group">
          <label>PDF File :</label>
          <input
            type="file"
            name="pdf"
            accept="application/pdf"
            required
            onChange={(e) => {
              setdata({ ...data, [e.target.name]: e.target.files[0] });
            }}
            onBlur={() => {
              setfilefocus(true);
            }}
            focused={filefocus.toString()}
          ></input>
          <span>required</span>
        </div>
        <div className="form-group app">
          <label>Reference :</label>
          <ReactQuill
            className="reactquill"
            onChange={(e) => {
              setdata({ ...data, ["reference"]: e });
            }}
            value={data.reference || ""}
            theme="snow"
            modules={modules}
            required
          />
          <span className={available ? "" : "noquill"}>required</span>
        </div>
        <div className="buttony">
          <button
            className="subx"
            onClick={() => {
              setpage((currentpage) => currentpage - 1);
            }}
          >
            back
          </button>
        </div>
        <button className="finlsub" onClick={focuschange}>
          submit
        </button>
      </form>
    </>
  );
}

export default CreateArticleForm4;
