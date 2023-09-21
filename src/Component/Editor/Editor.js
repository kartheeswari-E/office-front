import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import img1 from "../Images/special_Issue_1.png";
import img2 from "../Images/Editorial_work_flow.png";
import img3 from "../Images/Editorial_Board.png";
import img4 from "../Images/Review_Policy.png";
import img5 from "../Images/Editorial_work_flow.png";
import Top from "../Top/Top";

function Editor() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            For Editors: Submission Guidelines and Editorial Policies | IJRES
            Journal
          </title>
          <link rel="canonical" href="https://ijresonline.com/for-editors" />
          <meta
            name="title"
            content="For Editors: Submission Guidelines and Editorial Policies | IJRES Journal"
          />
          <meta
            name="description"
            content="Learn about the journal's policies and procedures for peer review,
editorial decision-making, and publication standards."
          />
          <meta
            name="keywords"
            content="submission guidelines, editorial policies, manuscript evaluation, peer
review, publication, scopus indexed journals, publishers, peer reviewed journals, open access journals."
          />
          <meta property="og:type" content="Website" />
          <meta
            property="og:site_name"
            content="Seventh Sense Research Group"
          />
          <meta
            property="og:url"
            content="https://ijresonline.com/for-editors"
          />
          <meta
            property="og:title"
            content="For Editors: Submission Guidelines and Editorial Policies | IJRES
Journal"
          />
          <meta
            property="og:description"
            content="Learn about the journal's policies and procedures for peer review,
editorial decision-making, and publication standards."
          />
          <meta property="og:image" content="image url" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="For Editors: Submission Guidelines and Editorial Policies | IJRES
Journal"
          />
          <meta
            name="twitter:description"
            content="Learn about the journal's policies and procedures for peer
review, editorial decision-making, and publication standards."
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
          style={{ padding: "10px 10px 30px 10px" }}
          id="services"
          className="services section-bg"
        >
          <div  className="container" data-aos="fade-up">
            <div  className="row">
              <div
                className="ro col-lg-4  d-flex align-items-stretch"
                style={{  marginTop: "5%" }}
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
                      Special Issues: An Overview
                    </h5>
                  </div>
                  <div
                    className="bg-image hover-overlay self-img ripple rounded-0"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      style={{ height: "80px" }}
                      className="img-fluid"
                      src={img1}
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
                      Special Issues are a key component of our journal
                      contents, focusing on emerging areas in the discipline, or
                      providing detailed analysis of a key research topic. They
                      are organized...
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
                        to="/for-editors/editors-special-issues"
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
                className="ro col-lg-4 d-flex align-items-stretch"
                style={{  marginTop: "5%" }}
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
                      Join as an Editor
                    </h5>
                  </div>
                  <div
                    className="bg-image hover-overlay self-img ripple rounded-0"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      style={{ height: "80px" }}
                      className="img-fluid"
                      src={img2}
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
                      Being on the editorial board or a reviewer of a journal is
                      truly productive, pleasant, and prestigious, which helps
                      add-on to the scientific world through the ways and
                      guidelines ...
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
                        to="/join-as-editor"
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
                className="ro col-lg-4 d-flex align-items-stretch"
                style={{  marginTop: "5%" }}
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
                      Board Members
                    </h5>
                  </div>
                  <div
                    className="bg-image hover-overlay self-img ripple rounded-0"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      style={{ height: "80px" }}
                      className="img-fluid"
                      src={img3}
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
                      Editor in Chief Prof. Dr. S. Nallusamy, Ph.D (Engg.),
                      Department of ACEE. Jadavpur University, Kolkata - 700
                      032, India. Dr. Mohd shukry abdul majid, Universiti
                      Malaysia Perlis, Malaysia ...
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
                        to="/editorial-board"
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
                className="ro col-lg-4 d-flex align-items-stretch"
                style={{  marginTop: "5%" }}
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
                      id="peers"
                      className="card-title font-weight-bold mb-2"
                    >
                      Peer Review Policy and Procedure (editor)
                    </h5>
                  </div>
                  <div
                    className="bg-image hover-overlay self-img ripple rounded-0"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      style={{ height: "80px" }}
                      className="img-fluid"
                      src={img4}
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
                className="ro col-lg-4 d-flex align-items-stretch"
                style={{  marginTop: "5%" }}
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
                      The Editorial Workflow
                    </h5>
                  </div>
                  <div
                    className="bg-image hover-overlay self-img ripple rounded-0"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      style={{ height: "80px" }}
                      className="img-fluid"
                      src={img5}
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
                      The corresponding or submitting author submits the paper
                      to the journal. This is usually via an online system such
                      as Scholar-One Manuscripts. Occasionally, journals may accept...
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
                        to="/for-editors/editorial-workflow"
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

export default Editor;
