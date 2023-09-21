import React from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import image1 from "../Images/Paper_Submission.jpg";
import image2 from "../Images/Topics.jpg";
import image3 from "../Images/Review_process.jpg";
import image4 from "../Images/Indexing.jpg";
import image5 from "../Images/Publication_Ethics.jpg";
import image6 from "../Images/APC.png";
import Top from "../Top/Top";

function Authorg() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Guidelines for authors - IJRES for Authors</title>
          <link
            rel="canonical"
            href="https://ijresonline.com/for-authors/author-guidelines"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="title"
            content="Guidelines for authors - IJRES for Authors"
          />
          <meta
            name="description"
            content="Learn about the author guidelines for submitting your research paper to
IJRES. Follow these instructions to ensure successful publication."
          />
          <meta
            name="keywords"
            content="author guidelines, ijres author guidelines, guide for authors, author
affiliation guidelines, guide author."
          />
          <meta property="og:type" content="Website" />
          <meta
            property="og:site_name"
            content="Seventh Sense Research Group"
          />
          <meta
            property="og:url"
            content="https://ijresonline.com/for-authors/author-guidelines"
          />
          <meta
            property="og:title"
            content="Guidelines for authors - IJRES for Authors"
          />
          <meta
            property="og:description"
            content=" Learn about the author guidelines for submitting your research
paper to IJRES. Follow these instructions to ensure successful publication. "
          />
          <meta property="og:image" content="image url" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Guidelines for authors - IJRES for Authors"
          />
          <meta
            name="twitter:description"
            content=" Learn about the author guidelines for submitting your research
paper to IJRES. Follow these instructions to ensure successful publication."
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
          <div  className="container" data-aos="fade-up">
            <div  className="row">
              <div
                className="col-lg-4 d-flex align-items-stretch"
                style={{  marginTop: "5%" }}
                // style={{ "max-width": "27.5rem", marginTop: "5%" }}
              >
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
                      Paper Submission
                    </h5>
                  </div>
                  <div
                    className="bg-image hover-overlay self-img ripple rounded-0"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      style={{ height: "80px" }}
                      className="img-fluid"
                      src={image1}
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
                      Respective authors should note that only original and
                      previously unpublished manuscripts will be considered.
                      Furthermore, simultaneous submissions are not acceptable.
                      Submission of a ...
                    </div>
                    <div className="d-flex justify-content-between">
                      <Link
                        to="/submission"
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
                        Read more&nbsp;
                        <i className="bi bi-caret-right-fill"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 d-flex align-items-stretch"
                style={{  marginTop: "5%" }}
                // style={{ "max-width": "27.5rem", marginTop: "5%" }}
              >
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
                      Topics
                    </h5>
                  </div>
                  <div
                    className="bg-image hover-overlay self-img ripple rounded-0"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      style={{ height: "80px" }}
                      className="img-fluid"
                      src={image2}
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
                      International Journal of Recent Engineering Science -
                      IJRES welcomes the original articles / review papers in
                      any discipline. Any Engineering, Technology,
                      Application-related....
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
                        to="/topics"
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
                  style={{  marginTop: "5%" }}
                className="col-lg-4 d-flex align-items-stretch"
                // style={{ "max-width": "27.5rem", marginTop: "5%" }}
              >
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
                      Review process
                    </h5>
                  </div>
                  <div
                    className="bg-image hover-overlay self-img ripple rounded-0"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      style={{ height: "80px" }}
                      className="img-fluid"
                      src={image3}
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
                      Seventh Sense Research Group® (IJRES) International
                      Journals follows a double-blind peer review process for an
                      effective evaluation method with our expert Editors'
                      involvement. These ...
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
                        to="/for-authors/reviewprocess"
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
                 className="col-lg-4 d-flex align-items-stretch"
                style={{  marginTop: "5%" }}
              >
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
                      Indexing
                    </h5>
                  </div>
                  <div
                    className="bg-image hover-overlay self-img ripple rounded-0"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      style={{ height: "80px" }}
                      className="img-fluid"
                      src={image4}
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
                      The articles accepted and published with International
                      Journal of Recent Engineering Science - IJRES are indexed
                      with the following academic databases and online...
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
                        to="/indexing"
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
                 className="col-lg-4 d-flex align-items-stretch"
                style={{  marginTop: "5%" }}
              >
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
                      Publication Ethics
                    </h5>
                  </div>
                  <div
                    className="bg-image hover-overlay self-img ripple rounded-0"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      style={{ height: "80px" }}
                      className="img-fluid"
                      src={image5}
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
                      Ethical standards for publication exist to ensure
                      high-quality scientific publications, public trust in
                      scientific findings, and that people receive credit for
                      their ideas. IJRES aims to ...
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
                        to="/publication-ethics"
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
               className="col-lg-4 d-flex align-items-stretch"
                style={{  marginTop: "5%" }}
              >
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
                      Article Processing Charges (APC)
                    </h5>
                  </div>
                  <div
                    className="bg-image hover-overlay self-img ripple rounded-0"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      style={{ height: "80px" }}
                      className="img-fluid"
                      src={image6}
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
                      International Journal of Recent Engineering Science -
                      IJRES do not charge for Submissions. There is no
                      Publication fee for publishing articles. All articles
                      published...
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
                        to="/for-authors/charges"
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

export default Authorg;
