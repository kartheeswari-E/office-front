import React from "react";
import images from "../Images/background-img-left-r.jpg";
function Top() {
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
              id="height-for-carousels"
              src={images}
              className="d-block w-100"
              alt="..."
            />
            <div id="caro-heros">
              <p> International Journal of Recent Engineering Science</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Top;
