import React from "react";
import { useEffect } from "react";
import img1 from "../Images/book-ijcse.png";
import img2 from "../Images/book-ijece.png";
import img3 from "../Images/book-ijeee.png";
import img4 from "../Images/book-ijce.png";
import img5 from "../Images/book-ijme.png";
import img6 from "../Images/book-ijaes.png";
import img7 from "../Images/book-ijms.png";
import img8 from "../Images/book-ijems.png";
import img9 from "../Images/book-ijap.png";
import img10 from "../Images/book-ijhss.png";
import img11 from "../Images/book-ijac.png";
import img12 from "../Images/book-ijggs.png";
import img13 from "../Images/book-ijcot.jpg";
import img14 from "../Images/book-ijptt.jpg";
import img15 from "../Images/book-ijbtt.jpg";
import img16 from "../Images/book-ijctt.jpg";
import img17 from "../Images/book-ijmtt.jpg";
import img18 from "../Images/book-ijett.jpg";

import img19 from "../Images/book-ijie.png";
import img20 from "../Images/book-ijpte.png";
import img21 from "../Images/book-ijpbe.png";
import img22 from "../Images/book-ijnhs.png";
import img23 from "../Images/book-ijvsp.png";

import img24 from "../Images/book-ijmse.png";
import img25 from "../Images/book-ijte.png";
import img26 from "../Images/book-ijcms.png";
import img27 from "../Images/book-ijmca.png";
import img28 from "../Images/book-ijcer.png";
import img29 from "../Images/book-ijvs.png";
import img30 from "../Images/book-ijres.png";

import { Helmet, HelmetProvider } from "react-helmet-async";
import Top from "../Top/Top";
function Journal() {
  const data = [
    {
      img: `${img1}`,
      tittle:
        "SSRG International Journal of Computer Science and Engineering ( IJCSE )",
      Link: "https://www.internationaljournalssrg.org/IJCSE/index.html",
    },
    {
      img: `${img2}`,
      tittle:
        "SSRG International Journal of Electronics and Communication Engineering (IJECE)",
      Link: "https://www.internationaljournalssrg.org/IJECE/index.html",
    },
    {
      img: `${img3}`,
      tittle:
        "SSRG International Journal of Electrical and Electronics Engineering ( IJEEE )",
      Link: "https://www.internationaljournalssrg.org/IJEEE/index.html",
    },
    {
      img: `${img4}`,
      tittle: "SSRG International Journal of Civil Engineering ( IJCE )",
      Link: "https://www.internationaljournalssrg.org/IJCE/index.html",
    },
    {
      img: `${img5}`,
      tittle: "SSRG International Journal of Mechanical Engineering ( IJME )",
      Link: "https://www.internationaljournalssrg.org/IJME/index.html",
    },
    {
      img: `${img6}`,
      tittle:
        "SSRG International Journal of Agriculture & Environmental Science ( IJAES )",
      Link: "https://www.internationaljournalssrg.org/IJAES/index.html",
    },
    {
      img: `${img7}`,
      tittle: "SSRG International Journal of Medical Science ( IJMS )",
      Link: "https://www.internationaljournalssrg.org/IJMS/index.html",
    },
    {
      img: `${img8}`,
      tittle:
        "SSRG International Journal of Economics and Management Studies ( IJEMS )",
      Link: "https://www.internationaljournalssrg.org/IJEMS/index.html",
    },
    {
      img: `${img9}`,
      tittle: "SSRG International Journal of Applied Physics ( IJAP )",
      Link: "https://www.internationaljournalssrg.org/IJAP/index.html",
    },
    {
      img: `${img10}`,
      tittle:
        "SSRG International Journal of Humanities and Social Science ( IJHSS )",
      Link: "https://www.internationaljournalssrg.org/IJHSS/index.html",
    },
    {
      img: `${img11}`,
      tittle: "SSRG International Journal of Applied Chemistry ( IJAC )",
      Link: "https://www.internationaljournalssrg.org/IJAC/index.html",
    },
    {
      img: `${img12}`,
      tittle:
        "SSRG International Journal of Geoinformatics and Geological Science ( IJGGS )",
      Link: "https://www.internationaljournalssrg.org/IJGGS/index.html",
    },
    {
      img: `${img13}`,
      tittle: "International Journal of Computer Organization Trends ( IJCOT )",
      Link: "https://www.internationaljournalssrg.org/IJCOT/index.html",
    },
    {
      img: `${img14}`,
      tittle:
        "International Journal of P2P Network Trends and Technology ( IJPTT )",
      Link: "https://www.internationaljournalssrg.org/IJPTT/index.html",
    },
    {
      img: `${img15}`,
      tittle:
        "International Journal of Biotech Trends and Technology ( IJBTT )",
      Link: "https://www.internationaljournalssrg.org/IJBTT/index.html",
    },
    {
      img: `${img16}`,
      tittle:
        "International Journal of Computer Trends and Technology ( IJCTT )",
      Link: "https://www.internationaljournalssrg.org/IJCTT/index.html",
    },
    {
      img: `${img17}`,
      tittle:
        "International Journal of Mathematics Trends and Technology ( IJMTT )",
      Link: "https://www.internationaljournalssrg.org/IJMTT/index.html",
    },
    {
      img: `${img18}`,
      tittle:
        "International Journal of Engineering Trends and Technology ( IJETT )",
      Link: "https://www.internationaljournalssrg.org/IJETT/index.html",
    },
    {
      img: `${img19}`,
      tittle: "SSRG International Journal of Industrial Engineering ( IJIE )",
      Link: "https://www.internationaljournalssrg.org/IJIE/index.html",
    },
    {
      img: `${img20}`,
      tittle:
        "SSRG International Journal of Polymer and Textile Engineering ( IJPTE )",
      Link: "https://www.internationaljournalssrg.org/IJPTE/index.html",
    },
    {
      img: `${img21}`,
      tittle:
        "SSRG International Journal of Pharmacy and Biomedical Engineering (SSRG - IJPBE)",
      Link: "https://www.internationaljournalssrg.org/IJPBE/index.html",
    },
    {
      img: `${img22}`,
      tittle:
        "SSRG International Journal of Nursing and Health Science ( IJNHS )",
      Link: "https://www.internationaljournalssrg.org/IJNHS/index.html",
    },
    {
      img: `${img23}`,
      tittle:
        "SSRG International Journal of VLSI & Signal Processing ( IJVSP )",
      Link: "https://www.internationaljournalssrg.org/IJVSP/index.html",
    },
    {
      img: `${img24}`,
      tittle:
        "SSRG International Journal of Material Science and Engineering ( IJMSE )",
      Link: "https://www.internationaljournalssrg.org/IJMSE/index.html",
    },
    {
      img: `${img25}`,
      tittle: "SSRG International Journal of Thermal Engineering ( IJTE )",
      Link: "https://www.internationaljournalssrg.org/IJTE/index.html",
    },
    {
      img: `${img26}`,
      tittle:
        "SSRG International Journal of Communication and Media Science ( IJCMS )",
      Link: "https://www.internationaljournalssrg.org/IJCMS/index.html",
    },
    {
      img: `${img27}`,
      tittle:
        "SSRG International Journal of Mobile Computing and Application ( IJMCA )",
      Link: "https://www.internationaljournalssrg.org/IJMCA/index.html",
    },
    {
      img: `${img28}`,
      tittle:
        "SSRG International Journal of Chemical Engineering Research ( IJCER )",
      Link: "https://www.internationaljournalssrg.org/IJCER/index.html",
    },
    {
      img: `${img29}`,
      tittle: "SSRG International Journal of Veterinary Science ( IJVS )",
      Link: "https://www.internationaljournalssrg.org/IJVS/index.html",
    },
    {
      img: `${img30}`,
      tittle: "International Journal of Recent Engineering Science ( SSRG )",
      Link: "https://dev.ijresonline.com/",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link rel="stylesheet" href="/client/css/style.css" />
        </Helmet>
      </HelmetProvider>
      <div className="user-width">
        <Top />

        <div className="whole-journal-container section-bg">
          {data.map((user, i) => {
            return (
              <>
                <div className="img-container-journal">
                  <div className="card-img" id="menarr">
                    <img src={user.img} alt="..." />

                    <a
                      style={{
                        cursor: "pointer",
                        color: "rgb(13,109,147)",
                        marginTop: "20px",
                      }}
                      href={user.Link}
                      target="_blank"
                    >
                      {user.tittle}
                    </a>
                  </div>{" "}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Journal;
