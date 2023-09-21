import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Top from "../Top/Top";
function Download() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            IJRES Journal Downloads: Manuscript Templates and Submission
            Guidelines
          </title>
          <link
            rel="canonical"
            href="https://ijresonline.com/for-authors/downloads"
          />
          <meta
            name="title"
            content="IJRES Journal Downloads: Manuscript Templates and Submission Guidelines"
          />
          <meta
            name="description"
            content="Download the appropriate manuscript template for your research and
use the submission guidelines to ensure that your manuscript meets the journal&#39;s requirements."
          />
          <meta
            name="keywords"
            content="manuscript templates, submission guidelines, research publishing,
manuscript formatting, manuscript example, journal publication, research publication, research paper
publication, standard manuscript format, research and publication ethics, author guidelines, free publication
journals, author manuscript, novel manuscript format, book manuscript format, abstract guidelines, guide for
authors."
          />
          <meta property="og:type" content="Website" />
          <meta
            property="og:site_name"
            content="Seventh Sense Research Group"
          />
          <meta
            property="og:url"
            content="https://ijresonline.com/for-authors/downloads"
          />

          <meta
            property="og:title"
            content="IJRES Journal Downloads: Manuscript Templates and Submission
Guidelines"
          />
          <meta
            property="og:description"
            content="Download the appropriate manuscript template for your research
and use the submission guidelines to ensure that your manuscript meets the journal's requirements."
          />
          <meta property="og:image" content="image url" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="IJRES Journal Downloads: Manuscript Templates and Submission
Guidelines"
          />
          <meta
            name="twitter:description"
            content="Download the appropriate manuscript template for your
research and use the submission guidelines to ensure that your manuscript meets the journal's
requirements."
          />
          <meta name="twitter:site" content="@sense_groups" />
          <meta name="twitter:url" content="https://twitter.com/sense_groups" />
          <meta name="twitter:image" content="image url" />
          <meta name="robots" content="index, follow" />
        </Helmet>
      </HelmetProvider>

      <div className="user-width">
        <Top />
        <section id="services" className="services section-bg">
          <div className="container" data-aos="fade-up">
            <div  className="row">
              <div className="ro d-flex align-items-stretch col-lg-4">
                <div
                  className="card"
                  style={{ boxShadow: "0px 4px 4px rgb(0 0 0 / 15%)" }}
                >
                  <div>
                    <h5
                      style={{
                        textAlign: "center",
                        height: "40px",
                        margin: "4% 0% 4% 0%",
                      }}
                      className="card-title font-weight-bold mb-2"
                    >
                      Paper Template
                    </h5>
                  </div>
                  <div
                    className="bg-image hover-overlay self-img ripple rounded-0"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      style={{ height: "80px" }}
                      className="img-fluid"
                      src="https://ijresonline.com/images/common.png"
                      alt="Card"
                    />
                    <Link>
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </Link>
                  </div>
                  <div className="card-body">
                    <div className="author">
                      This document gives formatting instructions for authors
                      preparing papers for publication in the Proceedings of an
                      IJRES Journal. The authors must follow the instructions
                      given in the document...
                    </div>
                    <div className="d-flex justify-content-between">
                      <a
                        className="btn btn-link  p-md-1 my-1"
                        style={{
                          background: "rgb(13, 109, 147)",
                          border: "1px solid rgb(13, 109, 147)",
                          color: "white ",
                          marginLeft: "65%",
                          fontSize: "15px",
                          width: "150px",
                        }}
                        data-mdb-toggle="collapse"
                        type="button"
                        role="button"
                        aria-controls="collapseContent"
                        href="/Downloads/paper1.doc"
                      >
                        Download Here<i className="bi bi-caret-right-fill"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ro d-flex align-items-stretch col-lg-4" >
                <div
                  className="card"
                  style={{ boxShadow: "0px 4px 4px rgb(0 0 0 / 15%)" }}
                >
                  <div>
                    <h5
                      style={{
                        textAlign: "center",
                        height: "40px",
                        margin: "4% 0% 4% 0%",
                      }}
                      className="card-title font-weight-bold mb-2"
                    >
                      Copyrights Form
                    </h5>
                  </div>
                  <div
                    className="bg-image hover-overlay self-img ripple rounded-0"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      style={{ height: "80px" }}
                      className="img-fluid"
                      src="https://ijresonline.com/images/common.png"
                      alt="Card"
                    />
                    <Link to="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </Link>
                  </div>
                  <div className="card-body">
                    <div className="author">
                      The transfer of copyright gives IJRES the right to
                      develop, promote, distribute, sell, and archive a body of
                      scientific works throughout the world. The Author hereby
                      grants and assigns ...
                    </div>
                    <div className="d-flex justify-content-between">
                      <a
                        href="/Downloads/paper2.doc"
                        className="btn btn-link  p-md-1 my-1"
                        style={{
                          background: "rgb(13, 109, 147)",
                          border: "1px solid rgb(13, 109, 147)",
                          color: "white ",
                          marginLeft: "65%",
                          fontSize: "15px",
                          width: "150px",
                        }}
                        data-mdb-toggle="collapse"
                        role="button"
                        aria-controls="collapseContent"
                      >
                        Download Here<i className="bi bi-caret-right-fill"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Download;
