import React, { useState } from "react";
import main from "../Images/main.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
function Navbar() {
  const [menu, setmenu] = useState(true);
  const navigate = useNavigate();
const[show,setshow]=useState(true);
const[show1,setshow1]=useState(false);
const[show2,setshow2]=useState(false);
const[show3,setshow3]=useState(false);
const[show5,setshow5]=useState(false);
const[show4,setshow4]=useState(false);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link rel="stylesheet" href="/assets/css/style.css" />
          <link
            rel="stylesheet"
            href="/assets/vendor/boxicons/css/boxicons.min.css"
          />
          <link
            rel="stylesheet"
            href="/assets/vendor/animate.css/animate.min.css "
          />

          <link
            rel="stylesheet"
            href="/assets/vendor/remixicon/remixicon.css"
          />
          <link
            rel="stylesheet"
            href="/assets/vendor/bootstrap/css/bootstrap-reboot.css "
          />
          <link
            rel="stylesheet"
            href="/assets/vendor/vendor/swiper/swiper-bundle.min.css"
          />
          <link
            rel="stylesheet"
            href="/assets/vendor/bootstrap-icons/bootstrap-icons.css"
          />
          <link rel="stylesheet" href="/public/assets/css/clientstyle.css" />

          <script src="/assets/vendor/aos/aos.js"></script>
          <script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
          <script src="/assets/vendor/swiper/swiper-bundle.min.js"></script>
          <script src="/assets/vendor/waypoints/noframework.waypoints.js"></script>
          <script src="/assets/vendor/php-email-form/validate.js"></script>
          <script src="/assets/js/main.js"></script>
        </Helmet>
      </HelmetProvider>

      <header id="header" className="fixed-top">
        <div className="container-fluid d-flex align-items-center">
          <img
            onClick={() => navigate("/")}
            className="images-logo"
            src={main}
            alt="..."
          />
          <h1 className="logo me-auto"></h1>

          <nav
            id="navbar"
            className={
              menu
                ? "navbar order-last order-lg-0 "
                : "navbar order-last order-lg-0 navbar-mobile"
            }
          >
            <ul>
              <li onClick={() =>{setmenu(true)
              setshow(true)
              setshow1(false)
              setshow5(false)
              setshow2(false)
              setshow3(false)
              setshow4(false)}}>
                <Link to="/" className={show?"active":"no"}>
                  Home
                </Link>
              </li>

              <li onClick={() =>{setshow(false)
              setshow1(true)
              setshow2(false)
              setshow3(false)
              setshow5(false)
              setshow4(false)}} className="dropdown">
                <Link className={show1?"active":"no"}  >
                  <span>Article</span> <i className="bi bi-chevron-down"></i>
                </Link>
                <ul>
                  <li onClick={() => setmenu(true)}>
                    <Link to="/current-issue">Current Issue</Link>
                  </li>
                  <li onClick={() => setmenu(true)}>
                    <Link to="/archives">Archives</Link>
                  </li>
                </ul>
              </li>

              <li onClick={() =>{setmenu(true)
              setshow3(true)
              setshow1(false)
              setshow5(false)
              setshow2(false)
              setshow(false)
              setshow4(false)}} className="dropdown">
                <Link  className={show3?"active":"no"}  to="/for-authors">
                  <span>Author</span>
                  <i className="bi bi-chevron-down"></i>
                </Link>
                <ul onClick={() => setmenu(true)}>
                  <li>
                    <Link to="/for-authors/author-guidelines">
                      Author Guidelines
                    </Link>
                  </li>
                  <li>
                    <Link to="/for-authors/policies">Policies</Link>
                  </li>
                  <li>
                    <Link to="/for-authors/downloads">Downloads</Link>
                  </li>
                </ul>
              </li>
              <li onClick={() =>{setmenu(true)
              setshow4(true)
              setshow1(false)
              setshow2(false)
              setshow5(false)
              setshow3(false)
              setshow(false)}}>
                <Link  className={show4?"active":"no"} to="/for-editors">Editor</Link>
              </li>
              <li onClick={() =>{setmenu(true)
              setshow2(true)
              setshow1(false)
              setshow5(false)
              setshow(false)
              setshow3(false)
              setshow4(false)}}>
                <Link  className={show2?"active":"no"} to="/for-reviewer">Reviewer</Link>
              </li>
              <li onClick={() =>{setmenu(true)
              setshow5(true)
              setshow1(false)
              setshow2(false)
              setshow(false)
              setshow3(false)
              setshow4(false)}}>
                <Link className={show5?"active":"no"}  to="/search">
                  <div
                    style={{ fontSize: "19px" }}
                    className="bi bi-search"
                  ></div>
                </Link>
              </li>
            </ul>
            <i
              onClick={() => setmenu(!menu)}
              className={
                menu ? " bi-list mobile-nav-toggle" : "bi-x mobile-nav-toggle "
              }
            ></i>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
