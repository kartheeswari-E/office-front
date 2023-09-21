import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="navbar text-warning navbar-light bg-info">
        <Link id="nb" className="navbar-brand " to="#">
          &nbsp;IJRES Admin-Page
        </Link>
      </nav>
    </>
  );
}

export default Nav;
