import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

function View() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("id");
    navigate("/admin-login");
  };

  const { id } = useParams();
  const [view, setview] = useState(" ");

  const [data, setdata] = useState({});
  const [art, setart] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const styleObj = { lineHeight: "2rem" };

  let loadData = async () => {
    try {
      let articledata = await axios.get(
        `${process.env.REACT_APP_API_URL}/get/${id}`
      );

      setview(articledata.data);
      setdata(articledata.data.pdfdata);
      setart(articledata.data.article.toUpperCase());
    } catch (error) {
      console.log(error);
    }
  };
  console.log(view);
  console.log(data);

  return (
    <>
      <Sidebar />

      <section id="blog" className="blog section-bg">
        <article style={{ background: "white" }} className="entry entry-single">
          <h6 style={{ fontWeight: "bold" }}>Research Article | Open Access</h6>
          <p>
            Volume-{view.volume} | Issue-{view.issue} | {view.year} |{" "}
            {view.article} | DOI:
            <a
              style={{ color: "rgb(1, 98, 105)" }}
              target="_blank"
              href={view.doi}
            >
              10.14445/23497157/{art}
            </a>
          </p>

          <h2 className="entry-title">
            <Link to="">{view.heading}</Link>
          </h2>

          <div className="entry-meta">
            <ul className="entry-footer">
              <li
                style={{ marginTop: "20px" }}
                className="d-flex align-items-center"
              >
                {" "}
                <Link style={{ color: "#19628d", fontWeight: "500" }}>
                  {view.authors}{" "}
                </Link>
              </li>
            </ul>
          </div>

          <div className="entry-content">
          <article id="How-to-Cite" className="clients">
                      <div data-aos="fade-up">
                        <div id="center-dates-li" data-aos="fade-up">
                          {!view.received ? (
                            ""
                          ) : (
                            <div>
                              <div id="date">
                                <div className="calender-fix">
                                  {/* <img id='img-calci' src={calci} alt='...'/> */}
                                  <div
                                    style={{
                                      fontSize: "18px",
                                      color: "#19628d",
                                    }}
                                  >
                                    {" "}
                                    Received{" "}
                                  </div>
                                </div>
                                <p>
                                  <Moment format="D MMM YYYY" withTitle>
                                    {view.received}
                                  </Moment>
                                </p>
                              </div>
                            </div>
                          )}

                          {!view.revised ? (
                            ""
                          ) : (
                            <div>
                              <div id="date">
                                <div className="calender-fix">
                                  {/* <img id='img-calci' src={calci} alt='...'/> */}
                                  <div
                                    style={{
                                      fontSize: "18px",
                                      color: "#19628d",
                                    }}
                                  >
                                    {" "}
                                    Revised{" "}
                                  </div>
                                </div>
                                <p>
                                  <Moment format="D MMM YYYY" withTitle>
                                    {view.revised}
                                  </Moment>
                                </p>
                              </div>
                            </div>
                          )}

                          {!view.accepted ? (
                            ""
                          ) : (
                            <div>
                              <div id="date">
                                <div className="calender-fix">
                                  {/* <img id='img-calci' src={calci} alt='...'/> */}
                                  <div
                                    style={{
                                      fontSize: "18px",
                                      color: "#19628d",
                                    }}
                                  >
                                    {" "}
                                    Accepted
                                  </div>
                                </div>
                                <p>
                                  <Moment format="D MMM YYYY" withTitle>
                                    {view.accepted}
                                  </Moment>
                                </p>
                              </div>
                            </div>
                          )}
                          {!view.published ? (
                            ""
                          ) : (
                            <div>
                              <div id="dates">
                                <div className="calender-fix">
                                  {/* <img id='img-calci' src={calci} alt='...'/> */}
                                  <div
                                    style={{
                                      fontSize: "18px",
                                      color: "#19628d",
                                    }}
                                  >
                               
                                    Published
                                  </div>
                                </div>
                                <p id="s">
                                  <Moment format="D MMM YYYY" withTitle>
                                    {view.published}
                                  </Moment>
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </article>


            <div id="Abstract">
              <h3 className="entry-footer" style={{ paddingTop: "2%" }}>
                How to Cite?
              </h3>
              <p>
                {view.authors}, "{view.heading}",{" "}
                <em style={{ "font-style": "italic" }}>
                  International Journal of Recent Engineering Science
                </em>
                , vol. {view.volume}, no. {view.issue}, pp. {view.pstart}-
                {view.pend}, {view.year}.
                {!view.doi ? (
                  ""
                ) : (
                  <div>
                    {" "}
                    Crossref,{" "}
                    <Link
                      style={{ color: "rgb(1, 98, 105)" }}
                      target="_blank"
                      to={view.doi}
                    >
                      {view.doi}
                    </Link>{" "}
                  </div>
                )}
              </p>
            </div>
            <div id="Keywords">
              <h3>Abstract</h3>
              <p>{view.abstract}</p>
            </div>

            <div id="Reference">
              <h3>Keywords</h3>
              <p>{view.keywords} </p>
            </div>
            <div>
              <h3>References</h3>
              <div
                dangerouslySetInnerHTML={{ __html: view.reference }}
                style={styleObj}
              />
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default View;
