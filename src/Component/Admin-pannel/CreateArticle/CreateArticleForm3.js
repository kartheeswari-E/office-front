import React, { useState } from "react";

function CreateArticleForm3({ setdata, data, setpage }) {
  const [recfocus, setrecfocus] = useState(false);
  const [revfocus, setrevfocus] = useState(false);
  const [accfocus, setaccfocus] = useState(false);
  const [pubfocus, setpubfocus] = useState(false);
  const [statusfocus, setstatusfocus] = useState(false);
  const [doifocus, setdoifocus] = useState(false);
  const [state, setstate] = useState("");
  const [all, setall] = useState("");
  const [states, setstates] = useState("");
  const [statess, setstatess] = useState("");
  const [statesss, setstatesss] = useState("");

  const focuschange = () => {
    setrecfocus(true);
    setrevfocus(true);
    setaccfocus(true);
    setpubfocus(true);
    setstatusfocus(true);
    setdoifocus(true);
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    setpage((currentpage) => currentpage + 1);
  };

  return (
    <>
      <div className="head">Create Article Page(3/4)</div>
      <form onSubmit={handlesubmit} enctype="multipart/form-data">
        <label> Date:</label>
        <div id="form-ratio-data">
          <input
            type="radio"
            onChange={(e) => setstate(e.target.value)}
            name="date"
            value="Recieved"
          />
          Recieved
          <input
            type="radio"
            onChange={(e) => setstates(e.target.value)}
            name="date"
            value="Revised"
          />
          Revised
          <input
            type="radio"
            onChange={(e) => setstatess(e.target.value)}
            name="date"
            value="Accepted"
          />
          Accepted
          <input
            type="radio"
            onChange={(e) => setstatesss(e.target.value)}
            name="date"
            value="Published"
          />
          Published
          <input
            type="radio"
            onChange={(e) => setall(e.target.value)}
            name="date"
            value="All"
          />
          All
        </div>
        <div
          className="clear-btn"
          onClick={() => {
            setstate(true);
            setstates("");
            setstatess("");
            setstatesss("");
            setall("");
          }}
        >
          Enable All
        </div>
        <div className="frm-group">
          <label>Recieved Date :</label>
          <input
            disabled={state == "Recieved" || all == "All"}
            type="date"
            name="received"
            value={data.received || ""}
            required
            onChange={(e) => {
              setdata({ ...data, [e.target.name]: e.target.value });
            }}
            onBlur={() => {
              setrecfocus(true);
            }}
            focused={recfocus.toString()}
          ></input>
          <span>required</span>
        </div>

        <div className="frm-group">
          <label>Revised Date :</label>
          <input
            disabled={states == "Revised" || all == "All"}
            type="date"
            name="revised"
            value={data.revised || ""}
            required
            onChange={(e) => {
              setdata({ ...data, [e.target.name]: e.target.value });
            }}
            onBlur={() => {
              setrevfocus(true);
            }}
            focused={revfocus.toString()}
          ></input>
          <span>required</span>
        </div>

        <div className="frm-group">
          <label>Accepted Date :</label>
          <input
            disabled={statess == "Accepted" || all == "All"}
            type="date"
            name="accepted"
            value={data.accepted || ""}
            required
            onChange={(e) => {
              setdata({ ...data, [e.target.name]: e.target.value });
            }}
            onBlur={() => {
              setaccfocus(true);
            }}
            focused={accfocus.toString()}
          ></input>
          <span>required</span>
        </div>

        <div className="frm-group">
          <label>Published Date :</label>
          <input
            disabled={statesss == "Published" || all == "All"}
            type="date"
            name="published"
            value={data.published || ""}
            required
            onChange={(e) => {
              setdata({ ...data, [e.target.name]: e.target.value });
            }}
            onBlur={() => {
              setpubfocus(true);
            }}
            focused={pubfocus.toString()}
          ></input>
          <span>required</span>
        </div>
        <div className="frm-group">
          <label>Status :</label>
          <select
            name="status"
            value={data.status || ""}
            onChange={(e) => {
              setdata({ ...data, [e.target.name]: e.target.value });
            }}
            onBlur={() => {
              setstatusfocus(true);
            }}
            focused={statusfocus.toString()}
            required
          >
            <option name=""></option>
            <option name="published">Published</option>
            <option name="not-published">Not-Published</option>
          </select>
          <span>required</span>
        </div>
        <div className="frm-group">
          <label>DOI Link :</label>
          <input
            type="text"
            name="doi"
            // value={data.doi || ""}
            value={`https://doi.org/10.14445/23497157/${data.article.toUpperCase()}`}
            onChange={(e) => {
              setdata({ ...data, [e.target.name]: e.target.value });
              console.log(data.doi);
            }}
            onBlur={() => {
              setdoifocus(true);
            }}
            focused={doifocus.toString()}
          ></input>
          <span>required</span>
        </div>

        <div className="buttons">
          <button
            className="sub"
            onClick={() => {
              setpage((currentpage) => currentpage - 1);
            }}
          >
            back
          </button>
          <button className="sub" onClick={focuschange}>
            next
          </button>
        </div>
      </form>
    </>
  );
}

export default CreateArticleForm3;
