import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import imge1 from "../Images/common.png";
import imge2 from "../Images/Correction_Policy.png";
import imge3 from "../Images/APC.png";
import imge4 from "../Images/Licensing_Policy.png";
import imge5 from "../Images/Copyrights_infringment.png";

import { Link } from "react-router-dom";
import Top from "../Top/Top";
function Reviewer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>IJRES Journal - Guidelines and Policies for Reviewers</title>

          <link rel="canonical" href="https://ijresonline.com/for-reviewer" />
          <meta
            name="title"
            content="IJRES Journal - Guidelines and Policies for Reviewers"
          />
          <meta
            name="description"
            content="Explore the review process and contribute to quality research
publications in the field of recent engineering science."
          />
          <meta
            name="keywords"
            content="ijres journal, reviewers, peer review, manuscript, scientific research,
academic publishing, manuscript review, research papers, scientific articles, review process, scholarly
publishing."
          />
          <meta property="og:type" content="Website" />
          <meta
            property="og:site_name"
            content="Seventh Sense Research Group"
          />
          <meta
            property="og:url"
            content="https://ijresonline.com/for-reviewer"
          />
          <meta
            property="og:title"
            content="IJRES Journal - Guidelines and Policies for Reviewers"
          />
          <meta
            property="og:description"
            content="Explore the review process and contribute to quality research
publications in the field of recent engineering science."
          />
          <meta property="og:image" content="image url" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="IJRES Journal - Guidelines and Policies for Reviewers"
          />
          <meta
            name="twitter:description"
            content="Explore the review process and contribute to quality research
publications in the field of recent engineering science."
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
              
              <div
                className="ro d-flex align-items-stretch col-lg-4"
                style={{ marginTop: "5%" }}
              >
                <div
                  className="card"
                  style={{ "box-shadow": "0px 4px 4px rgb(0 0 0 / 15%)" }}
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
                      Reviewing Registered Reports
                    </h5>
                  </div>
                  <div
                    className="bg-image hover-overlay self-img ripple rounded-0"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      style={{ height: "80px" }}
                      className="img-fluid"
                      src={imge1}
                      alt="Card"
                    />
                    <Link to="#!">
                      <div
                        className="mask"
                        style={{
                          "background-color": "rgba(251, 251, 251, 0.15)",
                        }}
                      ></div>
                    </Link>
                  </div>
                  <div className="card-body">
                    <div className="author">
                      Registered Reports are a form of empirical article offered
                      by a number of journals in which the methods and proposed
                      analyses are pre-registered and reviewed prior to research
                      being ...
                    </div>
                    <div className="d-flex justify-content-between">
                      <Link
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
                        to="/for-reviewer/review-reg"
                        role="button"
                        aria-controls="collapseContent"
                      >
                        Read more&nbsp;
                        <i className="bi bi-caret-right-fill"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="ro d-flex align-items-stretch col-lg-4"
                style={{ marginTop: "5%" }}
              >
                <div
                  className="card"
                  style={{ "box-shadow": "0px 4px 4px rgb(0 0 0 / 15%)" }}
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
                      How to review revised manuscripts
                    </h5>
                  </div>
                  <div
                    className="bg-image hover-overlay self-img ripple rounded-0"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      style={{ height: "80px" }}
                      className="img-fluid"
                      src={imge2}
                      alt="Card"
                    />
                    <Link to="#!">
                      <div
                        className="mask"
                        style={{
                          "background-color": "rgba(251, 251, 251, 0.15)",
                        }}
                      ></div>
                    </Link>
                  </div>
                  <div className="card-body">
                    <div className="author">
                      It is uncommon for a paper to be accepted for publication
                      without changes – most papers are revised at least once in
                      light of comments from reviewers and editors. When a
                      revised ...
                    </div>
                    <div className="d-flex justify-content-between">
                      <Link
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
                        to="/for-reviewer/review-revised"
                        role="button"
                        aria-controls="collapseContent"
                      >
                        Read more&nbsp;
                        <i className="bi bi-caret-right-fill"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="ro d-flex align-items-stretch col-lg-4"
                style={{ marginTop: "5%" }}
              >
                <div
                  className="card"
                  style={{ "box-shadow": "0px 4px 4px rgb(0 0 0 / 15%)" }}
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
                      Step by step guide to reviewers
                    </h5>
                  </div>
                  <div
                    className="bg-image hover-overlay self-img ripple rounded-0"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      style={{ height: "80px" }}
                      className="img-fluid"
                      src={imge3}
                      alt="Card"
                    />
                    <Link to="#!">
                      <div
                        className="mask"
                        style={{
                          "background-color": "rgba(251, 251, 251, 0.15)",
                        }}
                      ></div>
                    </Link>
                  </div>
                  <div className="card-body">
                    <div className="author">
                      When you receive an invitation to peer review, you should
                      be sent a copy of the paper's abstract to help you decide
                      whether you wish to do the review. Try to respond to
                      invitations...
                    </div>
                    <div className="d-flex justify-content-between">
                      <Link
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
                        to="/for-reviewer/step-by-step-reviewer"
                        role="button"
                        aria-controls="collapseContent"
                      >
                        Read more&nbsp;
                        <i className="bi bi-caret-right-fill"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="ro d-flex align-items-stretch col-lg-4"
                style={{ marginTop: "5%" }}
              >
                <div
                  className="card"
                  style={{ "box-shadow": "0px 4px 4px rgb(0 0 0 / 15%)" }}
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
                      For reviewing a clinical manuscript
                    </h5>
                  </div>
                  <div
                    className="bg-image hover-overlay self-img ripple rounded-0"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      style={{ height: "80px" }}
                      className="img-fluid"
                      src={imge4}
                      alt="Card"
                    />
                    <Link to="#!">
                      <div
                        className="mask"
                        style={{
                          "background-color": "rgba(251, 251, 251, 0.15)",
                        }}
                      ></div>
                    </Link>
                  </div>
                  <div className="card-body">
                    <div className="author">
                      A clinically focused manuscript should supply the latest
                      research to make sound decisions for practice. As you
                      read, check to see if the author(s) is looking at a
                      clinical problem, rather ...
                    </div>
                    <div className="d-flex justify-content-between">
                      <Link
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
                        to="/for-reviewer/reviewing-clinical"
                        role="button"
                        aria-controls="collapseContent"
                      >
                        Read more&nbsp;
                        <i className="bi bi-caret-right-fill"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="ro d-flex align-items-stretch col-lg-4"
                style={{ marginTop: "5%" }}
              >
                <div
                  className="card"
                  style={{ "box-shadow": "0px 4px 4px rgb(0 0 0 / 15%)" }}
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
                      Working with editors
                    </h5>
                  </div>
                  <div
                    className="bg-image hover-overlay self-img ripple rounded-0"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      style={{ height: "80px" }}
                      className="img-fluid"
                      src={imge5}
                      alt="Card"
                    />
                    <Link to="#!">
                      <div
                        className="mask"
                        style={{
                          "background-color": "rgba(251, 251, 251, 0.15)",
                        }}
                      ></div>
                    </Link>
                  </div>
                  <div className="card-body">
                    <div className="author">
                      Editors rely on reviewers’ recommendations to help them
                      decide whether to accept or reject an article. This
                      section will help you understand exactly what it is that
                      editors are looking for...
                    </div>
                    <div className="d-flex justify-content-between">
                      <Link
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
                        to="/for-reviewer/work-editor"
                        role="button"
                        aria-controls="collapseContent"
                      >
                        Read more&nbsp;
                        <i className="bi bi-caret-right-fill"></i>
                      </Link>
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

export default Reviewer;
