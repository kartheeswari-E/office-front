import React from "react";
import { Link, useNavigate } from "react-router-dom";
import authgui from "../Images/authgui.svg";
import authdo from "../Images/authdo.svg";
import { useEffect } from "react";
import authpo from "../Images/authpo.svg";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Top from "../Top/Top";

function Author() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            Submit your research paper for publication - IJRES for Authors
          </title>
          <link rel="canonical" href="https://ijresonline.com/for-authors" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="title"
            content="Submit your research paper for publication - IJRES for Authors"
          />
          <meta
            name="description"
            content="Get your research published in IJRES! Submit your manuscript today
and join the community of esteemed authors. Learn how to submit here."
          />
          <meta
            name="keywords"
            content="research guidelines, research guidelines for students, example of research
guidelines, guidelines for research paper, research process, research guidelines for students"
          />
          <meta property="og:type" content="Website" />
          <meta
            property="og:site_name"
            content="Seventh Sense Research Group"
          />
          <meta
            property="og:url"
            content="https://ijresonline.com/for-authors"
          />

          <meta
            property="og:title"
            content="Submit your research paper for publication - IJRES for Authors"
          />
          <meta
            property="og:description"
            content=" Get your research published in IJRES! Submit your manuscript
today and join the community of esteemed authors. Learn how to submit here. "
          />
          <meta property="og:image" content="image url" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Submit your research paper for publication - IJRES for Authors"
          />
          <meta
            name="twitter:description"
            content=" Get your research published in IJRES! Submit your manuscript
today and join the community of esteemed authors. Learn how to submit here."
          />
          <meta name="twitter:site" content="@sense_groups" />
          <meta name="twitter:url" content="https://twitter.com/sense_groups" />
          <meta name="twitter:image" content="image url" />
          <meta name="robots" content="index, follow" />
        </Helmet>
      </HelmetProvider>

      <div className="user-width">
        <Top />
        <section
          style={{ padding: "60px" }}
          id="featured-services"
          className="featured-services section-bg"
        >
          <div className="section-title">
            <h2>For Authors</h2>
          </div>

          <div className="row top33boxfull" style={{ marginBottom: "5%" }}>
            <div className="col-lg-4 col-md-6">
              <div className="icon-box" id="box-right">
                <div className="icon">
                  <img style={{ height: "74px" }} src={authgui} alt="..." />
                </div>
                <h4 className="title">
                  <Link href="">Author Guidelines</Link>
                </h4>
                <p className="description">
                  Authors can directly pay to our bank account which is
                  mentioned in our acceptance...
                </p>
                <button
                  type="button"
                  id="blink"
                  style={{ background: "rgb(13, 109, 147)" }}
                  className="btn  clr-for"
                  onClick={() => navigate("/for-authors/author-guidelines")}
                >
                  Read More &nbsp;<i className="bi bi-caret-right-fill"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="icon-box" id="box-right">
                <div className="icon">
                  <img style={{ height: "74px" }} src={authpo} alt="..." />
                </div>
                <h4 className="title">
                  <Link href="">Policies</Link>
                </h4>
                <p className="description">
                  The peer review process at IJRES strives to be transparent,
                  fair, thorough, and objective...
                </p>
                <button
                id="blink"
                  type="button"
                  style={{ background: "rgb(13, 109, 147)" }}
                  className="btn  clr-for"
                  onClick={() => navigate("/for-authors/policies")}
                >
                  Read More&nbsp;<i className="bi bi-caret-right-fill"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <div className="icon-box" id="box-right">
                <div className="icon">
                  <img style={{ height: "74px" }} src={authdo} alt="..." />
                </div>
                <h4 className="title">
                  <Link href="">Downloads</Link>
                </h4>
                <p className="description">
                  This document gives formatting instructions for authors
                  preparing papers for publication...
                </p>
                <button
                  type="button"
                  id="blink"
                  style={{ background: "rgb(13, 109, 147)", right: "27px" }}
                  className="btn  clr-for"
                  onClick={() => navigate("/for-authors/downloads")}
                >
                  Read More &nbsp;<i className="bi bi-caret-right-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Author;
