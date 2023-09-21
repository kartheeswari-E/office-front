import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import covers from "../Images/covers.jpg";
import imag1 from "../Images/IJRES-Open-access-journal.jpg";
import img2 from "../Images/google-scholar.png";
import img3 from "../Images/cross-ref.png";
import img4 from "../Images/ssrg-journals.png";
import "./Cards.css";
function Card() {
  const [details, setdetails] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    getarticle();
  }, []);

  const getarticle = () => {
    fetch(`${process.env.REACT_APP_API_URL}/allpost`)
      .then((data) => data.json())
      .then((answ) => setdetails(answ[0]));
  };
  console.log(details);

  const navigate = useNavigate();
  return (
    <>
<section id="constructions" style={{ backgroundColor: "rgb(229,238,219)"}} className="constructions section-bg ">
<div class="containerr" style={{"margin":"20px"}}>
  <div class="row g-4">
    <div style={{"marginRight":"20px"}} class=" card col-md-8 d-flex align-items-stretch">
     
    <h4
                  style={{
                    alignItems: "flex-start",
                    padding: "3% 0% 1% 3%",
                    fontWeight: "700",
                    color: "#0d6d93",
                  }}
                >
                  Aim and Scope
                </h4>
                <div className="row">
                 
                  <div className="col-xl-3">
                    <div className="card" style={{ border: "none" }}>
                      <img
                        className="card-img-top"
                        style={{
                          width: "100%",
                          objectFit: "contain",
                          height: "200px",
                        }}
                        src={covers}
                        alt="Card image cap"
                      />
                    </div>
                  </div>
                  <div className="col-xl-9 d-flex flex-start">
                    <div
                      className="card-body"
                      id="ab"
                      style={{ paddingTop: "0" }}
                    >
                      <p style={{ lineHeight: "36px", textAlign: "justify" }}>
                        The International Journal of Recent Engineering Science
                        - IJRES is an international, double-blind peer-reviewed
                        open access journal covering the full scope of
                        engineering research,
                        <span id="hide-media">
                          engineering science, engineering technology, and
                          engineering-related fields. The primary purpose of the
                          journal will be publishing high-quality original
                          articles that make a significant contribution to the
                          engineering research areas.
                        </span>{" "}
                        <span
                          onClick={() => navigate("/aim-and-scope")}
                          className="spans"
                        >
                          ....Read More
                        </span>
                      </p>
                    </div>
                  </div>
                </div>


    </div>
    <div style={{"padding":"0"}} class="col card d-flex align-items-stretch ">
    <div className="row " id="arrange">
                  <p className="Title">Journal Information</p>
                  <p className="Bgimg Bgimg">&nbsp;</p>
                  <div className="arr-again" style={{ marginTop: "10px" }}>
                    <div className="tcTitle">
                      <span className="left">Editor Chief </span>
                      <span className="right"> - {details.editorname}</span>
                    </div>
                    <div className="tcTitle">
                      <span className="left">Frequency</span>
                      <span className="right">
                        {" "}
                        - {details.frequency} issues per year
                      </span>
                    </div>
                    <div className="tcTitle">
                      <span className="left">Publisher</span>
                      <span className="right">
                        {" "}
                        - Seventh Sense Research Group®
                      </span>
                    </div>
                    <div className="tcTitle">
                      <span className="left">E-ISSN</span>
                      <span className="right"> - {details.eissn}</span>
                    </div>
                    <div className="tcTitle">
                      <span className="left">Language</span>
                      <span className="right"> - {details.lang}</span>
                    </div>
                  </div>
                </div>



    </div>



    <div style={{"marginRight":"20px"}}  data-aos="fade-up" data-aos-delay="75" class="col-md-8 card d-flex align-items-stretch">


      
      <div > <div className="heading">Abstracting and Indexing</div>
                <div style={{"padding-bottom":"86px"}} className="row  ">
                  <div className="display-size">
                    <Link>
                      <img className="pro-img" src={img2} alt="..." />
                    </Link>
                    <Link target="_blank" to="https://www.doi.org/">
                      <img className="pro-img" src={img3} alt="..." />
                    </Link>
                    <Link target="_blank" to="https://www.lib.berkeley.edu/">
                      <img className="pro-img" src={imag1} alt="..." />
                    </Link>

                    <Link
                      id="hide-media"
                      target="_blank"
                      to="http://www.internationaljournalssrg.org"
                    >
                      <img className="pro-img" src={img4} alt="..." />
                    </Link>
                  </div>
                </div>
             
                <button
                  type="button"
                  style={{ background: "rgb(13, 109, 147)", color: "white" }}
                  onClick={() => navigate("/indexing")}
                  className="btn change"
                >
                  View More &nbsp;<i className="bi bi-caret-right-fill"></i>
                </button></div>






    </div>
    <div style={{"padding":"0"}}  data-aos="fade-up" data-aos-delay="75" class="col card d-flex align-items-stretch">
           <div className="row " id="arrange">
                  <p className="Title">Journal Metrics</p>
                  <p className="Bgimg1 Bgimg1">&nbsp;</p>
                  <div className="arr-again" style={{ marginTop: "10px" }}>
                    <div className="tcTitle">
                      <span className="lefts">Acceptance Ratio</span>
                      <span className="rights"> - 11%</span>
                    </div>
                    <div className="tcTitle">
                      <span className="lefts">Submission to 1st decision</span>
                      <span className="rights"> - 15 Days</span>
                    </div>
                    <div className="tcTitle">
                      <span className="lefts">Acceptance to Publication</span>
                      <span className="rights"> - 10 Days</span>
                    </div>
                    <div className="tcTitle">
                      <span className="lefts">Country Coverage</span>
                      <span className="rights"> - 82</span>
                    </div>
                  </div>
                </div>
    </div>
  </div>
</div>
</section>
    </>
  );
}

export default Card;
