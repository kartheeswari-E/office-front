import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Top from "../Top/Top";
function Board() {
  const [tabeldata, settabeldata] = useState([]);

  useEffect(() => {
    loadData();
    window.scrollTo(0, 0);
  }, []);

  let loadData = async () => {
    try {
      let tabdata = await axios.get(
        `${process.env.REACT_APP_API_URL}/allauthor`
      );

      console.log(tabdata.data);
      settabeldata(tabdata.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            Editorial Board | International Journal of Recent Engineering
            Science
          </title>
          <link
            rel="canonical"
            href="https://ijresonline.com/editorial-board/ijres/for-editors/board-members"
          />
          <meta
            name="title"
            content="Editorial Board | International Journal of Recent Engineering Science"
          />
          <meta
            name="description"
            content="Editorial board of the IJRES consists of experts in various fields of
computer science and computer technology who provide guidance and support for the journal. "
          />
          <meta
            name="keywords"
            content="Editorial Board, International Journal, Engineering science, Engineering
trends, and Engineering technology, Peer-Reviewed Journal, Scientific Research, Academic Publishing,
Scholarly Articles, Journal Editors, Expertise, Quality Control."
          />
          <meta property="og:type" content="Website" />
          <meta
            property="og:site_name"
            content="Seventh Sense Research Group"
          />
          <meta
            property="og:url"
            content="https://ijresonline.com/editorial-board/ijres/for-editors/board-
members"
          />
          <meta
            property="og:title"
            content="Editorial Board | International Journal of Recent Engineering Science"
          />
          <meta
            property="og:description"
            content="Editorial board of the IJRES consists of experts in various fields of
computer science and computer technology who provide guidance and support for the journal. "
          />
          <meta property="og:image" content="image url" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Editorial Board | International Journal of Recent Engineering Science"
          />

          <meta
            name="twitter:description"
            content="Editorial board of the IJRES consists of experts in various fields
of computer science and computer technology who provide guidance and support for the journal. "
          />
          <meta name="twitter:site" content="@sense_groups" />
          <meta name="twitter:url" content="https://twitter.com/sense_groups" />
          <meta name="twitter:image" content="image url" />
          <meta name="robots" content="index, follow" />
        </Helmet>
      </HelmetProvider>

      <div className="user-width">
        <Top />
        <section id="faq" className="faq" style={{ background: "white" }}>
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Board Members</h2>
            </div>

            <div className="editorial-container1">
              <h4 className="heading-editor-in-cheif">Editor in Chief</h4>
              <p className="para-edit">
                <em style={{ color: "#19628d", fontWeight: "600" }}>
                  Prof. Dr. S. Nallusamy, Ph.D (Engg.),
                </em>
                Department of ACEE,
                <br />
                Jadavpur University,
                <br />
                Kolkata - 700 032, India.
              </p>
            </div>

            <div className="editorial-container2">
              <h4 className="heading-editor-in-cheif">Associate Editors</h4>
              <div className="rowd">
                <p className="aln-left">
                  <em style={{ color: "#19628d", fontWeight: "600" }}>
                    Dr. Mohd shukry abdul majid,
                  </em>
                  <br id="br" />
                  Professor,
                  <br />
                  Mechanical Engineering,
                  <br />
                  Universiti Malaysia Perlis, Malaysia.
                </p>

                <p className="aln-right">
                  <em style={{ color: "#19628d", fontWeight: "600" }}>
                    Dr. R. Surendiran
                  </em>
                  <br id="br" />
                  School of Information Science,
                  <br />
                  Annai College of Arts & Science,
                  <br />
                  Kumbakonam, India.
                </p>
              </div>

              <div className="rowd">
                <p id="rowa" className="aln-left">
                  <em style={{ color: "#19628d", fontWeight: "600" }}>
                    Dr. R. Kamatchi
                  </em>
                  <br id="br" />
                  Professor, Department of Computer Science Engineering, Amity
                  University,
                  <br />
                  Amity School of Engineering and Technology,
                  <br />
                  Amity University, Mumbai, India.
                </p>

                <p className="aln-right">
                  <em style={{ color: "#19628d", fontWeight: "600" }}>
                    Dr. Partha Sarathi Chakraborty,
                  </em>
                  <br id="br" />
                  Professor, Department of Adult and Continuing Education &
                  Extension,
                  <br />
                  Jadavpur university, India.
                </p>
              </div>
            </div>
            <div className="editorial-container3">
              <h4 className="heading-editor-in-cheif">
                Editorial Board Members
              </h4>
              <div className="rowd">
                <p className="aln-left">
                  <em style={{ color: "#19628d", fontWeight: "600" }}>
                    Dr. Adekunle Adefemi Adeyemi,
                  </em>
                  <br id="br" />
                  Associate Professor,
                  <br />
                  Department of Mechatronics,
                  <br />
                  Federal University, Oye Ekiti,
                  <br />
                  Ekiti State, Nigeria.
                </p>

                <p className="aln-right">
                  <em style={{ color: "#19628d", fontWeight: "600" }}>
                    Dr. Chuka E. Chinwuko,
                  </em>
                  <br id="br" />
                  Department of Indust. Prod. Engrn,
                  <br />
                  Nnamdi Azikiwe University,
                  <br />
                  Nigeria.
                </p>
              </div>
              <div className="rowd">
                <p className="aln-left">
                  <em style={{ color: "#19628d", fontWeight: "600" }}>
                    Dr. Nedal M. M. Turab
                  </em>
                  <br id="br" />
                  Professor, Department of Computer Science,
                  <br />
                  At Al-Israuniversity, Jordan.
                </p>

                <p className="aln-right">
                  <em style={{ color: "#19628d", fontWeight: "600" }}>
                    Dr. Manjaiah D. H
                  </em>
                  <br id="br" />
                  Professor & Chairman,
                  <br />
                  Department of Computer Science,
                  <br />
                  Mangalore University, Mangalore, India.
                </p>
              </div>
              <div className="rowd">
                <p className="aln-left">
                  <em style={{ color: "#19628d", fontWeight: "600" }}>
                    Dr. Himangshu bhusan baskey
                  </em>
                  <br id="br" />
                  Scientist,
                  <br />
                  Department of Electrical Engineering,
                  <br />
                  Defence Research & Development Organisation, India.
                </p>

                <p className="aln-right">
                  <em style={{ color: "#19628d", fontWeight: "600" }}>
                    Dr. Bijan Sarkar,
                  </em>
                  <br id="br" />
                  Professor & Department of Production Engineering,
                  <br />
                  Jadavpur University,
                  <br />
                  Kolkata, India.
                </p>
              </div>
              <div className="rowd">
                <p className="aln-left">
                  <em style={{ color: "#19628d", fontWeight: "600" }}>
                    Dr. Ahmed nabihzaki rashed
                  </em>
                  <br id="br" />
                  Professor in Electronic Engineering,
                  <br />
                  Menoufia University, Egypt.
                </p>

                <p className="aln-right">
                  <em style={{ color: "#19628d", fontWeight: "600" }}>
                    Dr. Şeref Doğuşcan Akbaş
                  </em>
                  <br id="br" />
                  Research Assistant,
                  <br />
                  Department of Civil Engineering Istanbul,
                  <br />
                  Yıldız Technical University, Turkey.
                </p>
              </div>
              <div className="rowd">
                <p className="aln-left">
                  <em style={{ color: "#19628d", fontWeight: "600" }}>
                    Dr. Galal Ali Hassaan
                  </em>
                  <br id="br" />
                  Faculty of Engineering,
                  <br />
                  Department of Mechanical Design & Production
                  <br />
                  Cairo University, Giza, Egypt.
                </p>

                <p className="aln-right">
                  <em style={{ color: "#19628d", fontWeight: "600" }}>
                    Prof. Dr. T. Kalpalatha Reddy
                  </em>
                  <br id="br" />
                  Department of Electronics and Computer Engineering,
                  <br />
                  Dr. MGR Educational and Research Institute,
                  <br />
                  Chennai, India.
                </p>
              </div>
              <div className="rowd">
                <p className="aln-left">
                  <em style={{ color: "#19628d", fontWeight: "600" }}>
                    Prof. M. Anand
                  </em>
                  <br id="br" />
                  Department of Electronics and Computer Engineering,
                  <br />
                  Dr. MGR Educational and Research Institute,
                  <br />
                  Chennai, India.
                </p>

                <p className="aln-right">
                  <em style={{ color: "#19628d", fontWeight: "600" }}>
                    Dr. Ahmed Nabih Zaki Rashed
                  </em>
                  <br id="br" />
                  Department of Electrical Engineering,
                  <br />
                  Menoufia University,
                  <br />
                  Egypt.
                </p>
              </div>
              <div className="rowd">
                <p className="aln-left">
                  <em style={{ color: "#19628d", fontWeight: "600" }}>
                    Prof. Dr. Debasis Mishra
                  </em>
                  <br id="br" />
                  Department of Electronics and Computer Engineering,
                  <br />
                  VSS University of Technology,
                  <br />
                  Sambalpur, India.
                </p>

                <p className="aln-right">
                  <em style={{ color: "#19628d", fontWeight: "600" }}>
                    Prof. Dr. D. Sobya
                  </em>
                  <br id="br" />
                  Department of Electronics and Computer Engineering,
                  <br />
                  RajaRajeswari College of Engineering,
                  <br />
                  Bengaluru, India.
                </p>
              </div>
              <div className="rowd">
                <p className="aln-left">
                  <em style={{ color: "#19628d", fontWeight: "600" }}>
                    Prof. Dr. Telagathoti Pitchaiah
                  </em>
                  <br />
                  Department of Electronics and Computer Engineering,
                  <br />
                  Vignan's Foundation for Science Technology and Research,
                  <br />
                  Guntur, India.
                </p>

                <p className="aln-right">
                  <em style={{ color: "#19628d", fontWeight: "600" }}>
                    Dr. K. Rachananjali
                  </em>
                  <br id="br" />
                  Department of Electrical Engineering,
                  <br />
                  Vignan's Foundation for Science Technology and Research,
                  <br />
                  Guntur, India.
                </p>
              </div>
              <div className="rowd">
                <p className="aln-left">
                  <em style={{ color: "#19628d", fontWeight: "600" }}>
                    Prof. Dr. A. L. Vallikannu
                  </em>
                  <br id="br" />
                  Department of Electronics and Computer Engineering,
                  <br />
                  Hindustan Institute of Technology and Science,
                  <br />
                  Chennai, India.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Board;
