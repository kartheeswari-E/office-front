import React from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import ima1 from "../Images/Peer_Review_Policy_and_Procedure.jpg";
import ima2 from "../Images/Copyright_Infringement.jpg";
import ima3 from "../Images/Conflicts_of_interest.jpg";
import ima4 from "../Images/Correction_Policy.jpg";
import ima5 from "../Images/Copyright_and_Licensing_Policy.jpg";
import ima6 from "../Images/Open_Access.jpg";
import Top from "../Top/Top";
function Policy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>IJRES: Author Policies and Guidelines | SSRG IJRES</title>
          <link
            rel="canonical"
            href="https://ijresonline.com/for-authors/policies"
          />
          <meta
            name="title"
            content="IJRES: Author Policies and Guidelines | SSRG IJRES"
          />
          <meta
            name="description"
            content="Get familiar with the policies and guidelines for authors on IJRES.
  Ensure your research meets the standards and publish with confidence."
          />
          <meta
            name="keywords"
            content="journal policies, resources policy journal, public policy journals, journal of
  policy modeling, editorial policies, journal of health policy, research policy journal."
          />
          <meta property="og:type" content="Website" />
          <meta
            property="og:site_name"
            content="Seventh Sense Research Group"
          />
          <meta
            property="og:url"
            content="https://ijresonline.com/for-authors/policies"
          />
          <meta
            property="og:title"
            content="IJRES: Author Policies and Guidelines | SSRG IJRES"
          />
          <meta
            property="og:description"
            content="Get familiar with the policies and guidelines for authors on IJRES.
  Ensure your research meets the standards and publish with confidence."
          />
          <meta property="og:image" content="image url" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="IJRES: Author Policies and Guidelines | SSRG IJRES"
          />
          <meta
            name="twitter:description"
            content="Get familiar with the policies and guidelines for authors on
  IJRES. Ensure your research meets the standards and publish with confidence."
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
                      Peer Review Policy and Procedure
                    </h5>
                  </div>
                  <div
                    className="bg-image hover-overlay self-img ripple rounded-0"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      style={{ height: "80px" }}
                      className="img-fluid"
                      src={ima1}
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
                      The peer review process at IJRES strives to be
                      transparent, fair, thorough, and objective, periodically
                      revised, outlines the basic peer review process used by
                      the journal. The editor-in-chief...
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
                        to="/for-editors/review-policy"
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
                      Copyright Infringement
                    </h5>
                  </div>
                  <div
                    className="bg-image hover-overlay self-img ripple rounded-0"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      style={{ height: "80px" }}
                      className="img-fluid"
                      src={ima2}
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
                      Any claims of copyright infringement should be addressed
                      to the Editor at editor@ijresonline.com bearing the
                      subject line "Copyright Infringement". The claim must be
                      sufficed by...
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
                        to="/for-authors/copyrightinfringement"
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
                      Conflicts of interest
                    </h5>
                  </div>
                  <div
                    className="bg-image hover-overlay self-img ripple rounded-0"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      style={{ height: "80px" }}
                      className="img-fluid"
                      src={ima3}
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
                      Conflicts of interest (sometimes referred to as ‘competing
                      interests’) occur when outside issues affect, or are
                      perceived to affect, the neutrality or objectivity of
                      research. This can happen...
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
                        to="/for-authors/conflicts-of-interest"
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
                      Correction Policy
                    </h5>
                  </div>
                  <div
                    className="bg-image hover-overlay self-img ripple rounded-0"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      style={{ height: "80px" }}
                      className="img-fluid"
                      src={ima4}
                      alt="Card"
                    />
                    <Link to="">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </Link>
                  </div>
                  <div className="card-body">
                    <div className="author">
                      The version of an article which is published online is
                      considered the final and complete version. Even though it
                      is possible to correct this version, our policy (in common
                      with other...
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
                        to="/for-authors/correction-policy"
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
                      Copyright and Licensing Policy
                    </h5>
                  </div>
                  <div
                    className="bg-image hover-overlay self-img ripple rounded-0"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      style={{ height: "80px" }}
                      className="img-fluid"
                      src={ima5}
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
                      Copyright on any open access article published in IJRES
                      International is retained by the author(s). Authors grant
                      IJRES a license to publish the article and identify itself
                      as the original...
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
                        to="/for-authors/license-policy"
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
                style={{marginTop: "5%" }}
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
                      Open Access
                    </h5>
                  </div>
                  <div
                    className="bg-image hover-overlay self-img ripple rounded-0"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      style={{ height: "80px" }}
                      className="img-fluid"
                      src={ima6}
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
                      Per significant definitions of open access in the
                      scientific literature (namely the Budapest, Berlin, and
                      Bethesda declarations), IJRES defines open access by the
                      following conditions...
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
                        to="/for-authors/openaccess-author"
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

export default Policy;
