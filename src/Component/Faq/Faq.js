import React from "react";
import { Link } from "react-router-dom";
import Top from "../Top/Top";
import { useEffect } from "react";
function Faq() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="user-width">
        <Top />
        <section id="faq" className="faq section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>IJRES - FAQ</h2>
            </div>

            <div className="faq-list">
              <ul>
                <li data-aos="fade-up">
                  <i className="bx bi bi-diamond-half icon-help"></i>{" "}
                  <Link
                    style={{ color: "#19628d" }}
                    data-bs-toggle="collapse"
                    className="collapse collapsed"
                    data-bs-target="#faq-list-1"
                  >
                    {" "}
                    Do I need to submit the copyright form along with the
                    manuscript? <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </Link>
                  <div
                    style={{
                      fontSize: "17px",
                      fontWeight: "400",
                      marginLeft: "3%",
                    }}
                    id="faq-list-1"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Copyright forms shall be accepted by IJRES only if the
                      submission is accepted for publication.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="faq-list">
              <ul>
                <li data-aos="fade-up">
                  <i className="bx bi bi-diamond-half icon-help"></i>{" "}
                  <Link
                    style={{ color: "#19628d" }}
                    data-bs-toggle="collapse"
                    className="collapse collapsed"
                    data-bs-target="#faq-list-2"
                  >
                    My paper exceeds ten pages!{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </Link>
                  <div
                    style={{
                      fontSize: "17px",
                      fontWeight: "400",
                      marginLeft: "3%",
                    }}
                    id="faq-list-2"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      IJRES policies allow the publication of a normal paper may
                      contain up to 4 authors and 15 pages. However, depending
                      upon the research’s merit, appropriate relaxations are
                      granted by the IJRES editorial panels.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="faq-list">
              <ul>
                <li data-aos="fade-up">
                  <i className="bx bi bi-diamond-half icon-help"></i>{" "}
                  <Link
                    style={{ color: "#19628d" }}
                    data-bs-toggle="collapse"
                    className="collapse collapsed"
                    data-bs-target="#faq-list-3"
                  >
                    {" "}
                    I have not received any IJRES notification even after ten
                    days of submission!{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </Link>
                  <div
                    style={{
                      fontSize: "17px",
                      fontWeight: "400",
                      marginLeft: "3%",
                    }}
                    id="faq-list-3"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Depending on your spam filter settings, the notification
                      email may be directed to your spam folder rather than your
                      inbox. If this is not the case, we request you to escalate
                      the issue to editor@ijresonline.com. You shall be informed
                      of the status within 24 hours.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="faq-list">
              <ul>
                <li data-aos="fade-up">
                  <i className="bx bi bi-diamond-half icon-help"></i>{" "}
                  <Link
                    style={{ color: "#19628d" }}
                    data-bs-toggle="collapse"
                    className="collapse collapsed"
                    data-bs-target="#faq-list-4"
                  >
                    {" "}
                    How to correct an experimental data in my published paper?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </Link>
                  <div
                    style={{
                      fontSize: "17px",
                      fontWeight: "400",
                      marginLeft: "3%",
                    }}
                    id="faq-list-4"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Contact the editorial team at editor@ijresonline.com.
                      Mention the changes and provide the revised manuscript.
                      The revised manuscript shall be published as per the
                      editor’s suggestion.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="faq-list">
              <ul>
                <li data-aos="fade-up">
                  <i className="bx bi bi-diamond-half icon-help"></i>{" "}
                  <Link
                    style={{ color: "#19628d" }}
                    data-bs-toggle="collapse"
                    className="collapse collapsed"
                    data-bs-target="#faq-list-5"
                  >
                    {" "}
                    How much time to complete a review?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </Link>
                  <div
                    style={{
                      fontSize: "17px",
                      fontWeight: "400",
                      marginLeft: "3%",
                    }}
                    id="faq-list-5"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Each submission undergoes detailed review by appointed
                      domain experts and peer-reviews by domain peers. Results
                      will send as soon as possible after completion of the
                      review process.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="faq-list">
              <ul>
                <li data-aos="fade-up">
                  <i className="bx bi bi-diamond-half icon-help"></i>{" "}
                  <Link
                    style={{ color: "#19628d" }}
                    data-bs-toggle="collapse"
                    className="collapse collapsed"
                    data-bs-target="#faq-list-6"
                  >
                    {" "}
                    How do I submit the paper?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </Link>
                  <div
                    style={{
                      fontSize: "17px",
                      fontWeight: "400",
                      marginLeft: "3%",
                    }}
                    id="faq-list-6"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      The researcher needs to email the paper to
                      editor@ijresonline.com. Editorial support staffs shall
                      acknowledge the receipt of the manuscript within 24 hours.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Faq;
