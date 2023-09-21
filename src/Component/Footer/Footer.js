import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-6 footer-links">
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/for-authors/author-guidelines">
                      Authors Guidelines
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/submission">Paper Submission</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/for-authors/charges">APC</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/articles">Articles</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/for-authors/downloads">Downloads</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/for-authors/openaccess-author">Open Access</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/publication-ethics">Publication Ethics</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/for-authors/copyrightinfringement">
                      Copyrights Infringement
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <ul>
                  {" "}
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/ssrg-journals">Journals</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                  <h3 id="footer-flw-us">Follow Us </h3>
                  <Link
                    target="_blank"
                    to="https://twitter.com/sense_groups"
                    className="twitter"
                  >
                    <i className="bx bxl-twitter"></i>
                  </Link>
                  <Link
                    target="_blank"
                    to="https://www.facebook.com/SeventhSenseResearchGroup"
                    className="facebook"
                  >
                    <i className="bx bxl-facebook"></i>
                  </Link>
                  <Link
                    target="_blank"
                    to="https://www.instagram.com/seventhsenseresearch/"
                    className="instagram"
                  >
                    <i className="bx bxl-instagram"></i>
                  </Link>
                  <Link
                    target="_blank"
                    to="https://www.linkedin.com/in/seventh-sense-research-group/"
                    className="linkedin"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-4">
          <div id="al">
            <div className="copyright">
              Copyright © 2023
              <strong>
                <span> Seventh Sense Research Group®</span>
              </strong>
              . All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
      {/* <ScrollToTop smooth color='rgb(0, 157, 221)'component={<div style={{fontSize:'25px',color:'#fff'}}></div>} /> */}
      <ScrollToTop
        smooth
        color="#94c045"
        style={{ background: "rgb(0, 157, 221)" }}
        component={
          <div style={{ fontSize: "25px", color: "#fff" }}>
            <i className="bi bi-arrow-up-short"></i>
          </div>
        }
        viewBox="0 0 256 256"
      />
    </>
  );
}

export default Footer;
