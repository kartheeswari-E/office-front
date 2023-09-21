import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Top from "../Top/Top";
import { useEffect } from "react";
function Copy1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            IJRES Journal License Policy: Copyright and Creative Commons License
          </title>
          <link
            rel="canonical"
            href="https://IJRESjournal.org/for-authors/license-policy"
          />
          <meta
            name="title"
            content="IJRES Journal License Policy: Copyright and Creative Commons License"
          />
          <meta
            name="description"
            content="The IJRES Journal license policy page provides detailed information on
copyright and Creative Commons licensing options for authors publishing with the journal."
          />
          <meta
            name="keywords"
            content="IJRES Journal, license policy, copyright, Creative Commons, licensing
options, research publishing."
          />
          <meta property="og:type" content="Website" />
          <meta
            property="og:site_name"
            content="Seventh Sense Research Group"
          />
          <meta
            property="og:url"
            content="https://IJRESjournal.org/for-authors/license-policy"
          />
          <meta
            property="og:title"
            content="IJRES Journal License Policy: Copyright and Creative Commons
License"
          />
          <meta
            property="og:description"
            content="The IJRES Journal license policy page provides detailed
information on copyright and Creative Commons licensing options for authors publishing with the journal."
          />
          <meta property="og:image" content="image url" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="IJRES Journal License Policy: Copyright and Creative Commons
License"
          />
          <meta
            name="twitter:description"
            content="The IJRES Journal license policy page provides detailed
information on copyright and Creative Commons licensing options for authors publishing with the journal."
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
              <h2>Copyright and Licensing Policy</h2>
            </div>
            <p>
              <a
                href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
                rel="license"
              >
                <img
                  src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png"
                  alt="Creative Commons License"
                  style={{ "border-width": "0" }}
                />
              </a>
            </p>

            <div
              style={{ marginTop: "10px", color: " #8491b7" }}
              className="resps"
            >
              SSRG site and its metadata are licensed under CC-BY-NC-ND
            </div>
            <div
              style={{ marginTop: "20px", fontWeight: "400", fontSize: "23px" }}
            >
              Attribution-NonCommercial CC BY-NC-ND 4.0
            </div>
            <div style={{ marginTop: "20px" }} className="resps">
              Copyright on any open access article published in SSRG
              International is retained by the author(s). Authors grant SSRG a
              license to publish the article and identify itself as the original
              publisher. Authors also grant any third party the right to use the
              article freely as long as its integrity is maintained and its
              original authors, citation details and publisher are identified.
            </div>

            <div
              style={{ marginTop: "20px", fontWeight: "400", fontSize: "23px" }}
            >
              Creative Commons License
            </div>
            <div style={{ marginTop: "20px" }} className="resps">
              SSRG International Journals publishes open access articles under a
              Attribution-NonCommercial-No Derivatives 4.0 International{" "}
              <em>
                <a
                  style={{ color: "#19628d" }}
                  href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
                >
                  (CC BY-NC-ND 4.0)
                </a>
              </em>{" "}
              . This license permits user to freely share (copy, distribute and
              transmit) and adapt the contribution including for commercial
              purposes, as long as the author is properly attributed.
            </div>

            <div
              style={{ marginTop: "20px", fontWeight: "400", fontSize: "23px" }}
            >
              Publishing Rights
            </div>
            <div style={{ marginTop: "20px" }} className="resps">
              SSRG allows its author(s) to retain publishing rights without
              restrictions.
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Copy1;
