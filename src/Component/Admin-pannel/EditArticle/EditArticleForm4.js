import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditArticleForm4({ setdata, data, setpage, dbdata, loadData }) {
  const [filefocus, setfilefocus] = useState(false);
  const [available, setavailable] = useState(true);
  const [edit, setedit] = useState(false);

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

  const navigate = useNavigate();
  // const oldfile = dbdata.pdfdata.originalname
  const cancelchange = () => {
    setedit(!edit);
    delete data["file"];
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
        if (dbdata.issue === data.issue && dbdata.volume === data.volume) {
          console.log("same path");
          const formData = new FormData(e.target);
          delete data["pdf"];
          delete data["_id"];
          delete data["pdfdata"];
          const keys = Object.keys(data);
          keys.forEach((key) => {
            formData.append(key, data[key]);
          });

          console.log(data);
          console.log(dbdata);
          const config = {
            headers: { "content-type": "multipart/form-data" },
          };
          let info = await axios.post(
            `${process.env.REACT_APP_API_URL}/updatesamepath?id=${dbdata._id}&volume=${data.volume}&issue=${data.issue}&oldfile=${dbdata.pdfdata.originalname}`,
            formData,
            config
          );

          console.log(info);
          loadData();
          alert("Edited Successfully");
          navigate("/admin-login/articles");
        } else {
          console.log("not same path");
          const formData = new FormData(e.target);
          delete data["pdf"];
          delete data["_id"];
          delete data["pdfdata"];
          const keys = Object.keys(data);
          keys.forEach((key) => {
            formData.append(key, data[key]);
          });
          console.log(data);
          console.log(dbdata);
          const config = {
            headers: { "content-type": "multipart/form-data" },
          };
          let info = await axios.post(
            `${process.env.REACT_APP_API_URL}/updatediffrentpath?id=${dbdata._id}&volume=${data.volume}&issue=${data.issue}&oldfile=${dbdata.pdfdata.originalname}`,
            formData,
            config
          );

          console.log(info);
          loadData();
          navigate("/admin-login/articles");
        }
      }
    } else {
      setavailable(false);
    }
  };

  return (
    <>
      <div className="head">Edit Article Page(4/4)</div>
      <form onSubmit={handlesubmit}>
        <div className="frm-group">
          <label>PDF File :</label>

          <div className="pdfedit">
            {edit ? (
              <div className="frm-group">
                <input
                  className="fil"
                  type="file"
                  name="pdf"
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
            ) : (
              <div>
                {!dbdata.pdfdata.originalname
                  ? "loading data"
                  : dbdata.pdfdata.originalname}
              </div>
            )}

            <div className="pdfeditbtn">
              {/* {edit ? null : <div className="pdf">View PDF</div>} */}
              <div className="pdf" onClick={cancelchange}>
                {edit ? "Cancel Change" : "Change PDF"}
              </div>
            </div>
          </div>
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

export default EditArticleForm4;
