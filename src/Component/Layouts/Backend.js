import React from "react";
import { Outlet } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
function Backend() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"
          />

          <link
            rel="stylesheet"
            href="/plugins/fontawesome-free/css/all.min.css"
          />

          <link
            rel="stylesheet"
            href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
          />

          <link
            rel="stylesheet"
            href="/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css"
          />

          <link
            rel="stylesheet"
            href="plugins/icheck-bootstrap/icheck-bootstrap.min.css"
          />

          <link rel="stylesheet" href="/plugins/jqvmap/jqvmap.min.css" />

          <link rel="stylesheet" href="/dist/css/adminlte.min.css" />

          <link
            rel="stylesheet"
            href="/plugins/overlayScrollbars/css/OverlayScrollbars.min.css"
          />

          <link
            rel="stylesheet"
            href="/plugins/daterangepicker/daterangepicker.css"
          />

          <link
            rel="stylesheet"
            href="/plugins/summernote/summernote-bs4.min.css"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/style.min.css"
            rel="stylesheet"
          />

          <script
            src="https://use.fontawesome.com/releases/v6.3.0/js/all.js"
            crossorigin="anonymous"
          ></script>
          <link rel="stylesheet" href="/assets/css/adminstyle.css" />

          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
            crossorigin="anonymous"
          ></script>
          <script type="text/babel" src="/dist/js/demo.js"></script>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/umd/simple-datatables.min.js"
            crossorigin="anonymous"
          ></script>
          <script
            type="text/babel"
            src="/js/datatables-simple-demo.js"
          ></script>
        </Helmet>
      </HelmetProvider>

      <Outlet />
    </>
  );
}

export default Backend;
