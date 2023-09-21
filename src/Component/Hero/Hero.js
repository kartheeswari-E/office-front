import React from "react";
import image from "../Images/banner.jpg";
import images from "../Images/background-img-left-r.jpg";
import d from "../Images/3d.png";
import { useNavigate } from "react-router-dom";
function Hero({ data }) {
  const navigate = useNavigate();
  console.log(data);
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              id="height-for-carousel"
              style={{ opacity: "0.8" }}
              src={images}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption" id="caro-hero">
              <div className="two">
                {/* <img style={{ height: "350px" }} src={d}></img> */}
                <div>
                  {" "}
                  <p> International Journal of Recent Engineering Science</p>
                  {/* <div style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "rgb(0,100,140)",
                    }}>CURRENT ISSUE</div> */}
                  {/* <div
                    style={{
                      fontSize: "25px",
                      fontWeight: "600",
                      color: "rgb(0,100,140)",
                    }}
                    className="volume-hero"
                  >
                    Volume {data.volume}, Issue {data.issue}{" "}
                  </div>
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "rgb(0,100,140)",
                    }}
                    className="month-hero"
                  >
                    {data.from}-{data.to} {data.year}
                  </div>
                  <button
                    type="button"
                    style={{
                      color: "white",
                      width: "100px",
                      marginTop: "20px",
                      fontWeight: "bold",
                      border: "1px solid #c3c3c3",
                      background: "RGB(13 109 147)",
                    }}
                    className="btn"
                    onClick={() => navigate("/current-issue")}
                  >
                    View &nbsp;<i className="bi bi-caret-right-fill"></i>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="carousel-item">
            <img
              id="height-for-carousel"
              style={{ opacity: "0.2" }}
              src={image}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption" id="caro-hero">
              <div className="two">
                <img style={{ height: "350px" }} src={d}></img>
                <div>
                  {" "}
                  <p> International Journal of Recent Engineering Science</p>
                  <div
                    style={{
                      fontSize: "25px",
                      fontWeight: "600",
                      color: "rgb(0,100,140)",
                    }}
                    className="volume-hero"
                  >
                    Volume {data.volume}, Issue {data.issue}{" "}
                  </div>
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "rgb(0,100,140)",
                    }}
                    className="month-hero"
                  >
                    {data.from}-{data.to} {data.year}
                  </div>
                  <button
                    type="button"
                    style={{
                      color: "white",
                      marginTop: "10px",
                      fontWeight: "bold",
                      border: "1px solid white",
                      background: "RGB(13 109 147)",
                    }}
                    className="btn"
                    onClick={() => navigate("/current-issue")}
                  >
                    View &nbsp;<i className="bi bi-caret-right-fill"></i>
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
    </>
  );
}

export default Hero;
