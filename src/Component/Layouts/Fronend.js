import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";

function Fronend() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
          <link rel="stylesheet" href="/assets/css/clientstyle.css" />

          <script src="/assets/vendor/aos/aos.js"></script>
          <script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
          <script src="/assets/vendor/swiper/swiper-bundle.min.js"></script>
          <script src="/assets/vendor/waypoints/noframework.waypoints.js"></script>
          <script src="/assets/vendor/php-email-form/validate.js"></script>
          <script src="/assets/js/main.js"></script>
        </Helmet>
      </HelmetProvider>

      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Fronend;
