import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Threeshow({ view }) {
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);

  const [data, setdata] = useState([]);

  let getData = async () => {
    try {
      console.log(view);
      let getdata = await axios.get(
        `${process.env.REACT_APP_API_URL}/files?volume=${view[1].volume}&issue=${view[1].issue}`
      );

      setdata(getdata.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);

  return (
    <>
      <div className="user-width">
        <section id="faq" className="faq section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Current Issue</h2>
            </div>

            <div className="faq-list">
              <ul>
                <li data-aos="fade-up" data-aos-delay="100">
                  <i className="bx bi bi-diamond-half icon-help"></i>{" "}
                  <a
                    style={{ color: "rgb(1, 98, 105)" }}
                    data-bs-toggle="collapse"
                    className="collapse"
                    data-bs-target="#faq-list-1"
                  >
                    {" "}
                    {data.from} - {data.to} &nbsp;{data.year} Issue{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-1"
                    className="collapse show"
                    data-bs-parent=".faq-list"
                  >
                    <p
                      onClick={() =>
                        navigate(
                          `/archives/volume-${data.volume}/issue-${data.issue}`
                        )
                      }
                      style={{ cursor: "pointer" }}
                    >
                      Volume-{data.volume} Issue-{data.issue}
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

export default Threeshow;
