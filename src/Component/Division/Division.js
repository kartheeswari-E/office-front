import React from "react";
import pen from "../Images/pen.svg";
import book from "../Images/book.svg";
import circle from "../Images/circle.svg";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
function Division() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <section
        id="featured-services"
        className="featured-services section-bg user-change"
      >
        <div className="row top33boxfull">
          <div className="col-lg-4 col-md-6">
            <div className="icon-box" id="box-right">
              <div className="icon">
                <img style={{ height: "74px" }} src={pen} alt="..." />
              </div>
              <h4 className="title">
                <Link href="">Call For Paper May 2023</Link>
              </h4>
              <p className="description">
                International Journal of Recent Engineering Science - IJRES
                welcomes the original ...
              </p>
              <button
                type="button"
                id="blink"
                style={{ background: "rgb(13, 109, 147)" }}
                className="btn  clr-for"
                onClick={() => navigate("/call-for-paper")}
              >
                Submit Now &nbsp;<i className="bi bi-caret-right-fill"></i>
              </button>
            </div>
          </div>
         
          <div className="col-lg-4 col-md-6 ">
            <div className="icon-box" id="box-right">
              <div className="icon">
                <img style={{ height: "74px" }} src={book} alt="..." />
              </div>
              <h4 className="title">
                <Link href="">Paper Submission</Link>
              </h4>
              <p className="description">
              Respective authors should note that only original and previously unpublished manuscripts...
              </p>


              <button
                type="button"
                style={{ background: "rgb(13, 109, 147)" }}
                className="btn  clr-for"
                id="blink"
                  onClick={() => navigate("/submission")} 
              >
              View Submission&nbsp;<i className="bi bi-caret-right-fill"></i>
              </button>
            </div>
          </div>

 <div className="col-lg-4 col-md-6">
            <div className="icon-box" id="box-right">
              <div className="icon">
                <img style={{ height: "74px" }} src={circle} alt="..." />
              </div>
              <h4 className="title">
                <Link href="">SSRG Journals</Link>
              </h4>
              <p className="description">
                Seventh Sense Research Group® (SSRG) is a registered independent
                Organization...
              </p>
              <button
                type="button"
                id="blink"
             onClick={() => navigate("/ssrg-journals")}
                style={{ background: "rgb(13, 109, 147)", right: "27px" }}
                className="btn  clr-for"
              >
               
                  View Journals
                {" "}
                &nbsp;<i className="bi bi-caret-right-fill"></i>
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Division;
