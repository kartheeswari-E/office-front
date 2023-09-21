import React, { useState } from "react";
import { useEffect } from "react";
import Top from "../Top/Top";

function Aim() {
  const [details, setdetails] = useState([]);
  useEffect(() => {
    getarticle();
    window.scrollTo(0, 0);
  }, []);

  const getarticle = () => {
    fetch(`${process.env.REACT_APP_API_URL}/allpost`)
      .then((data) => data.json())
      .then((answ) => setdetails(answ[0]));
  };
  console.log(details);
  return (
    <>
      <div className="user-width">
        <Top />
        <div className="aim-container" style={{ background: "white" }}>
          <div className="section-title">
            <h2>Aims and Scope</h2>
          </div>

          <div className="aim-sub-container">
            <p className="content-aim">
              The International Journal of Recent Engineering Science (IJRES) is
              an international, double-blind peer-reviewed, open-access journal
              covering the full scope of engineering research, engineering
              science, engineering technology, and engineering-related fields.{" "}
            </p>
            <p>
              The primary purpose of the journal will be publishing high-quality
              original articles that make a significant contribution to the
              engineering research areas. This journal will be an efficient
              forum where the editors play a central role in soliciting the best
              research papers and where editorial decisions are reached in a
              timely fashion.
            </p>
            <p>
              The core vision of IJRES is sharing new research ideas in
              engineering-related fields. Every year majority of research
              efforts get lost due to a lack of effective scientific archival
              systems. However, IJRES provides a speedy and effective archival
              system, which gives high opportunities for engineering
              professionals, industry professionals, and research scholars to
              present their research ideas. To provide timely and broad coverage
              of this ever-evolving field, the International Journal of Recent
              Engineering Science offers its readers a mix of research and
              review articles.
            </p>
          </div>

          <div className="sub-content">
            <span style={{ color: "rgb(13, 109, 147)", fontWeight: "600" }}>
              Authors Geographical Coverage :
            </span>
            <br />
            <p className="sub-contents">
              {" "}
              Australia, USA, Greece, Nigeria, Pakistan, India, Bangladesh,
              Algeria, Egypt, Iraq, Malaysia, etc.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aim;
