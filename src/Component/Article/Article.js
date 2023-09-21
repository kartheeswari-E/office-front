import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Top from "../Top/Top";
import current from "../Images/Currentissue.svg";
import archive from "../Images/Archivess.svg";
import { useEffect } from "react";
import archives from "../Images/Archives 2.svg";
import board from '../Images/EB.svg'
import { keyframes } from "styled-components";

function Article() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate=useNavigate();
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            High-quality research articles in science and engineering fields
          </title>
          <link rel="canonical" href="https://ijresonline.com/articles" />
          <meta
            name="title"
            content="High-quality research articles in science and engineering fields"
          />
          <meta
            name="description"
            content="Read the latest Research articles from SSRG International journal of
Recent Engineering Science"
          />
          <meta
            name="keywords"
            content="ijres, recent articles from ijres, ssrg international, ijres archive, complete
collection engineering journals, recent topics in science and engineering, latest research in engineering and
science."
          />
          <meta property="og:type" content="Website" />
          <meta
            property="og:site_name"
            content="Seventh Sense Research Group"
          />
          <meta property="og:url" content="https://ijresonline.com/articles" />
          <meta
            property="og:title"
            content="High-quality research articles in science and engineering fields"
          />

          <meta
            property="og:description"
            content="Read the latest Research articles from SSRG International journal
of Recent Engineering Science"
          />
          <meta property="og:image" content="image url" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:description"
            content="Read the latest Research articles from SSRG International
journal of Recent Engineering Science"
          />
          <meta name="twitter:site" content="@sense_groups" />
          <meta
            name="twitter:title"
            content="High-quality research articles in science and engineering fields"
          />
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
            <h2>ARTICLE</h2>
          </div>

          <div className="row top33boxfull" style={{ marginBottom: "5%" }}>
            <div className="col-lg-4 col-md-6">
              <div className="icon-box" id="box-right">
                <div className="icon">
                  <img style={{ height: "74px" }} src={current} alt="..." />
                </div>
                <h4 className="title">
                  <Link href="">CURRENT ISSUE</Link>
                </h4>
                <p className="description">
                  Authors can directly pay to our bank account which is
                  mentioned in our acceptance...
                </p>
                <button
                  type="button"
                  style={{ background: "rgb(0,157,221)" }}
                  className="btn  clr-for"
                  onClick={() => navigate("/current-issue")}
                >
                  Read More &nbsp;<i className="bi bi-caret-right-fill"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="icon-box" id="box-right">
                <div className="icon">
                  <img style={{ height: "74px" }} src={archive} alt="..." />
                </div>
                <h4 className="title">
                  <Link href="">ARCHIVES</Link>
                </h4>
                <p className="description">
                  The peer review process at IJRES strives to be transparent,
                  fair, thorough, and objective...
                </p>
                <button
                  type="button"
                  style={{ background: "rgb(0,157,221)" }}
                  className="btn  clr-for"
                  onClick={() => navigate("/archives")}
                >
                  Read More&nbsp;<i className="bi bi-caret-right-fill"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <div className="icon-box" id="box-right">
                <div className="icon">
                  <img style={{ height: "74px" }} src={board} alt="..." />
                </div>
                <h4 className="title">
                  <Link href="">Board Members</Link>
                </h4>
                <p className="description">
                  This document gives formatting instructions for authors
                  preparing papers for publication...
                </p>
                <button
                  type="button"
                  style={{ background: "rgb(0,157,221)", right: "27px" }}
                  className="btn  clr-for"
                  onClick={() => navigate("/editorial-board")}
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

export default Article;


{/* <div id="box">
  <img src="" alt="logo" width={250px} height={50px}/>
</div>

@keyframes logo{
0%{
  opacity:0;
}
10% .2
.
50% 1
60% .8
100% .0
}

#box{
  dis
} */}