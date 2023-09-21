import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Last.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import axios from "axios";
import Moment from "react-moment";
import Top from "../Top/Top";
import images from '../Images/ssrg_international_journal_of_-Recent_Engineering_Science_new.webp'
function Last() {
  useEffect(() => {
    loadData();

    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

  const navigate = useNavigate();

  const [view, setview] = useState(" ");
  const[author, setauthor] = useState([]);
  const [data, setdata] = useState({});
  const [art, setart] = useState("");


  const styleObj = { lineHeight: "2rem", textAlign: "left" };

  let loadData = async () => {
    try {
      let articledata = await axios.get(
        `${process.env.REACT_APP_API_URL}/get/${id}`
      );
setauthor(articledata.data.authors.split(','));
      setview(articledata.data);
      setdata(articledata.data.pdfdata);
      setart(articledata.data.article.toUpperCase());
    } catch (error) {
      console.log(error);
    
    }
  };
  console.log(view);
  console.log(data);
  console.log(author);
  return (
    <>
      <HelmetProvider>
        <Helmet>
 <title>{`${view.heading}`}</title>
        <meta charSet="utf-8"/>
<meta name="viewport" content="width=device-width"/>
<meta name="robots" content="index"/>
{
  author.map((author)=>{
    return(
    <meta name="Author" content={`${author}`}/>
    ) 
    })
}
<meta name="title" content={`${view.heading}`}/>
<meta name="description" content={`${view.abstract}`} />
<meta name="keywords" content={`${view.keywords}`} />
<meta name="rights" content="Copyright IJRES"/>
<meta property="og:url" content={`https:/ijresonline.com/archives/${view.article}`}/>
<meta property="og:site_name" content="Seventh Sense Research Group"/>
<meta property="og:title" content={`${view.heading}`}/>
<meta property="og:type" content="website"/>
<meta property="og:description" content={`${view.abstract}`}/>
<meta property="og:image:type" content="image/webp"/>
<meta name="og:image" content="Journal OG Image URL"/>
<meta name="twitter:card" content={images}/>
<meta name="twitter:site" content="@sense_groups"/>
<meta name="twitter:description" content={`${view.heading}`}/>
<meta name="twitter:title" content={`${view.heading}`}/>
<meta name="twitter:image" content={images}/>
<meta name="twitter:url" content="https://twitter.com/sense_groups"/>
{
  author.map((author)=>{
    return(
  <meta name="authors" content={`${author}`}/> 
    ) 
    })
}
<meta name="citation_title" content={`${view.heading}`}/>
<meta name="citation_journal_title" content={`${view.heading}`}/>
<meta name="citation_publisher" content="SSRG International Journal"/>

{
  author.map((author)=>{
    return(
       <meta name="citation_author" content={`${author}`}/>
    ) 
    })
}
<meta name="citation_volume" content={`${view.volume}`}/>
<meta name="citation_year" content={`${view.year}`}/>
<meta name="citation_date" content={`${view.published}`}/>
<meta name="citation_online_date" content={`${view.published}`}/>
<meta name="citation_doi" content={`${view.doi}`}/>
<meta name="citation_issn" content="2349-7157"/>
<meta name="citation_abstract" content={`${view.abstract}`}/>
<meta name="citation_pdf_url" content={`${view.destination}`}/>
<meta name="citation_language" content="English" />


        </Helmet>
      </HelmetProvider>

      <div className="user-width">
        <Top />
        <section id="blog" className="blog section-bg">
          <div className="self-container" data-aos="fade-up">
            <div className="row gy-4">
              <div id="hh" className="col-lg-3">
                <div
                  className="sidebar section-bg"
                  style={{ margin: "0", background: "white" }}
                >
                  <div className="sidebar-item recent-posts">
                    <div className="page">On This Page</div>

                    <div className="post-item clearfix">
                      <div
                        className="gap"
                        style={{
                          borderBottom: "1px solid rgb(240, 240, 240)",
                          padding: "20px",
                          color: "black",
                        }}
                      >
                        <a
                          style={{ color: "black", fontWeight: "500" }}
                          href="#How-to-Cite"
                        >
                          &nbsp;How to Cite?
                        </a>
                        <i className="bi bi-arrow-right-circle"></i>
                      </div>
                    </div>
                    <div className="post-item clearfix">
                      <div
                        className="gap"
                        style={{
                          borderBottom: "1px solid rgb(240, 240, 240)",
                          padding: "20px",
                        }}
                      >
                        <a
                          style={{ color: "black", fontWeight: "500" }}
                          href="#Abstract"
                        >
                          &nbsp;Abstract
                        </a>
                        <i className="bi bi-arrow-right-circle"></i>
                      </div>
                    </div>
                    <div className="post-item clearfix">
                      <div
                        className="gap"
                        style={{
                          borderBottom: "1px solid rgb(240, 240, 240)",
                          padding: "20px",
                        }}
                      >
                        <a
                          style={{ color: "black", fontWeight: "500" }}
                          href="#Keywords"
                        >
                          &nbsp;Keywords
                        </a>
                        <i className="bi bi-arrow-right-circle"></i>
                      </div>
                    </div>
                    <div className="post-item clearfix">
                      <div
                        className="gap"
                        style={{
                          borderBottom: "1px solid rgb(240, 240, 240)",
                          padding: "20px",
                        }}
                      >
                        <a
                          style={{ color: "black", fontWeight: "500" }}
                          href="#Reference"
                        >
                          &nbsp;Reference
                        </a>
                        <i className="bi bi-arrow-right-circle"></i>
                      </div>
                    </div>
                    <div className="post-item clearfix">
                      <div
                        className="gap"
                        style={{
                          borderBottom: "1px solid white",
                          padding: "20px",
                        }}
                      >
                        <a
                          style={{ color: "black", fontWeight: "500" }}
                          target="_blank"
                          href={`/uploads/Volume-${view.volume}/Issue-${view.issue}/${data.originalname}`}
                        >
                          {/* <i className="bi bi-file-earmark-pdf"></i> */}
                          &nbsp; Download Pdf
                        </a>
                        <i className="bi bi-download"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-9 entries">
                <article
                  style={{ background: "white" }}
                  className="entry entry-single"
                >
                  <h6 style={{ fontWeight: "bold" }}>
                    Research Article | Open Access
                  </h6>
                  <p>
                    Volume-{view.volume} | Issue-{view.issue} | {view.year} |{" "}
                    {art} | DOI:
                    <a
                      style={{ color: "rgb(25, 98, 141)" }}
                      target="_blank"
                      href={view.doi}
                    >
                      10.14445/23497157/{art}
                    </a> <span className="hg"> | <a style={{"color":"rgb(25, 98, 141)","fontWeight":"700"}} target="_blank"
                          href={`/uploads/Volume-${view.volume}/Issue-${view.issue}/${data.originalname}`}>Download pdf</a></span>
                  </p>

                  <h2 className="entry-title">
                    <Link to="">{view.heading}</Link>
                  </h2>

                  <div className="entry-meta">
                    <ul className="entry-footer" id="rem">
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
                        , vol. {view.volume}, no. {view.issue}, pp.{" "}
                        {view.pstart}-{view.pend}, {view.year}.
                        {!view.doi ? (
                          ""
                        ) : (
                          <span>
                            {" "}
                            Crossref,{" "}
                            <Link
                              style={{ color: "rgb(25, 98, 141)" }}
                              target="_blank"
                              to={view.doi}
                            >
                              {view.doi}
                            </Link>{" "}
                          </span>
                         
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
                        className="refere"
                        dangerouslySetInnerHTML={{ __html: view.reference }}
                        style={styleObj}
                      />
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Last;
