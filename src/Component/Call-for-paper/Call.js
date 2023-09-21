import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Top from "../Top/Top";

function Call() {
  useEffect(() => {
    window.scrollTo(0, 0);
    getarticle();
  }, []);

  const [details, setdetails] = useState([]);

  const getarticle = () => {
    fetch(`${process.env.REACT_APP_API_URL}/allpost`)
      .then((data) => data.json())
      .then((answ) => setdetails(answ[0]));
  };
  console.log(details);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link rel="stylesheet" href="client/css/style.css" />
          <title>SSRG IJRES Call for Paper 2023</title>
          <link rel="canonical" href="https://ijresonline.com/call-for-paper" />
          <meta name="title" content="SSRG IJRES Call for Paper 2023" />
          <meta
            name="description"
            content="Calls for papers. Here are the latest calls for papers and special issues
from our extensive journal and case study range."
          />
          <meta
            name="keywords"
            content="call for paper, call for papers in journals, call for papers in scopus indexed
journals, call for papers in journals, call for articles, call for papers conference, call for papers special issue,
call for paper jurnal, p2p network call for papers, call for research papers, call for papers for communication
journal."
          />
          <meta property="og:type" content="Website" />
          <meta
            property="og:site_name"
            content="Seventh Sense Research Group"
          />
          <meta
            property="og:url"
            content="https://ijresonline.com/call-for-paper"
          />
          <meta property="og:title" content="SSRG IJRES Call for Paper 2023" />
          <meta
            property="og:description"
            content="Calls for papers. Here are the latest calls for papers and special
issues from our extensive journal and case study range."
          />
          <meta property="og:image" content="image url" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="SSRG IJRES Call for Paper 2023" />
          <meta
            name="twitter:description"
            content="Calls for papers. Here are the latest calls for papers and special
issues from our extensive journal and case study range."
          />
          <meta name="twitter:site" content="@sense_groups" />
          <meta name="twitter:url" content="https://twitter.com/sense_groups" />
          <meta name="twitter:image" content="image url" />
          <meta name="robots" content="index, follow" />
        </Helmet>
      </HelmetProvider>

      <div className="user-width">
        <Top />
        <section id="call-for-paper" style={{ background: "white" }}>
          <div className="section-title">
            <h2>Call for Paper</h2>
          </div>
          <div className="call-container">
            <p>
            International Journal of Recent Engineering Science (IJRES) welcomes the original research
article, long papers, and short papers for {details.callmonthstart} to {details.callmonthend} 2023. Manuscripts submitted to this
journal will be deemed as they have not been published and are not under consideration for
publication elsewhere.
            </p>
            <p>
              <span className="span">
                * Non-Profit Journal - No Publication Fee / No Article Processing Charges - Submit Quality
Article Only
              </span>
            </p>
            <p>
              <span className="span">Submit Your article:</span>
              <a
                style={{ fontWeight: "bold", color: "black" }}
                href="mailto:editor@ijresonline.com"
              >
                &nbsp;{details.articleemail}
              </a>{" "}
            </p>
            <p>
              <span className="span">To view :</span>
              <Link style={{ color: "black" }} to="/topics">
                Topics
              </Link>{" "}
            </p>
            <p>
              <span className="span">To download :</span> IJRES Paper Template
            </p>
            <p>
              <span className="span">To download :</span> IJRES Copyright Form
            </p>
            <p>
              <span className="span">
                Last Date for Manuscript Submission :
              </span>{" "}
               {details.lastdate}th  {details.lastmonth} {details.lastyear}
              {/* {details.lastdate}th {details.lastmonth} {details.lastyear} */}
            </p>
            <p>
              <span className="span">Online Publication Date :</span> Within ten
              working days from the date of final paper submission.
            </p>
            <div className="corner-adjust">
              <p>
                <i className="bi bi-pen-fill color"> &nbsp;</i>Submit your paper
                in the form of Mircrosoft word format ( .doc or .docx ); if you
                were used latex then send it as PDF format.
              </p>
              <p>
                <i className="bi bi-pen-fill color"> &nbsp;</i>Submiting the
                paper in multiple journals are offence, Please do not waste our
                valuable time
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Call;
