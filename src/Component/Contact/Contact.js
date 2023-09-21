import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Top from "../Top/Top";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rcfsyj8",
        "template_x17y39t",
        form.current,
        "e1pUhbMThjPrd4gKG"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert("message send successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="user-width">
        <Top />
        <section id="faq" className="faq section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>IJRES - contact us</h2>
            </div>

            <div className="contact2" id="contact">
              <div className="container">
                <div className="row contact-container ">
                  <div className="col-lg-12">
                    <div className="card card-shadow border-0 mb-4">
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="contact-wrap w-100 p-lg-5 p-4">
                            <h3 className="mb-4">Send us a message</h3>
                            <div
                              id="form-message-warning"
                              className="mb-4"
                            ></div>
                            <div id="form-message-success" className="mb-4">
                              Your message was sent, thank you!
                            </div>
                            <form
                              ref={form}
                              onSubmit={sendEmail}
                              method="POST"
                              id="contactForm"
                              name="contactForm"
                              className="contactForm"
                            >
                              <div className="row" id="yes">
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="name"
                                      id="name"
                                      placeholder="Name"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <input
                                      type="email"
                                      className="form-control"
                                      name="email"
                                      id="email"
                                      placeholder="Email"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="subject"
                                      id="subject"
                                      placeholder="Subject"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <textarea
                                      name="message"
                                      className="form-control"
                                      id="message"
                                      cols="30"
                                      rows="6"
                                      placeholder="Message"
                                    ></textarea>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <input
                                      type="submit"
                                      value="Send Message"
                                      className="btn btn-primary"
                                    />
                                    <div className="submitting"></div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>

                        <div
                          className="col-lg-4 bg-image"
                          style={{
                            "background-image":
                              "url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/1.jpg)",
                          }}
                        >
                          <div className="info-wrap  img">
                            <h3>Contact us</h3>
                            <div className="detail-box p-4">
                              <h5
                                style={{ color: "black" }}
                                className=" font-weight-light mb-3"
                              >
                                {" "}
                                Head Office:
                              </h5>
                              <p
                                style={{ color: "white", fontWeight: "500" }}
                                className=" op-7"
                              >
                                Seventh Sense Research Group®
                                <br />
                                No. 10/140, General bazaar,
                                <br />
                                Thennur, Trichy-17, India.
                              </p>

                              <h5
                                style={{ color: "black" }}
                                className=" font-weight-light mb-3"
                              >
                                {" "}
                                Supporting Wings:{" "}
                              </h5>
                              <p
                                style={{ color: "white", fontWeight: "500" }}
                                className="text-white op-7"
                              >
                                Seventh Sense Research Group®
                                <br />
                                4th Street, Anna Nagar West, Chennai, India.
                                <br />
                                Seventh Sense Research Group®
                                <br />
                                lafayatte State, lousiana ,USA.
                              </p>

                              <h5
                                style={{ color: "black" }}
                                className=" font-weight-light mb-3 mt-4"
                              >
                                Contact Number:
                              </h5>
                              <p
                                style={{ color: "white", fontWeight: "500" }}
                                className="text-white op-7"
                              >
                                ( Important and Emergency Issues only )<br />
                                IJRES Relationship Manager
                                <br />
                                Call / WhatsApp / SMS : +91 - 8110000962
                                <br />
                                Call / WhatsApp / SMS : +91 - 8110000960
                                <br />
                                ( Call between 10 am to 8 pm )<br />
                                http://www.ijresonline.com
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
