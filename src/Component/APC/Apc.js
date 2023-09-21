import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Top from "../Top/Top";
import { useEffect } from "react";
function Apc() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Article Processing Charges | For Authors | SSRG IJRES</title>
          <link
            rel="canonical"
            href="https://ijresonline.com/for-authors/charges"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="title"
            content="Article Processing Charges | For Authors | SSRG IJRES"
          />
          <meta
            name="description"
            content="Recent Engineering Science Article Processing Charges. All articles
published in SSRG International Journals are published in full open access. An article processing charge (APC)
applies to papers accepted after peer review."
          />
          <meta
            name="keywords"
            content="article processing charges, apc journal, free article processing charges
journals, processing charges, apc open access, apc article processing charge, apc journal meaning, apc
charges, article processing fee, apc of journal."
          />
          <meta property="og:type" content="Website" />
          <meta
            property="og:site_name"
            content="Seventh Sense Research Group"
          />
          <meta
            property="og:url"
            content="https://ijresonline.com/for-authors/charges"
          />

          <meta
            property="og:title"
            content="Article Processing Charges | For Authors | SSRG IJRES"
          />
          <meta
            property="og:description"
            content=" Recent Engineering Science Article Processing Charges. All
articles published in SSRG International Journals are published in full open access. An article processing
charge (APC) applies to papers accepted after peer review. "
          />
          <meta property="og:image" content="image url" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Article Processing Charges | For Authors | SSRG IJRES"
          />
          <meta
            name="twitter:description"
            content=" Recent Engineering Science Article Processing Charges. All
articles published in SSRG International Journals are published in full open access. An article processing
charge (APC) applies to papers accepted after peer review."
          />
          <meta name="twitter:site" content="@sense_groups" />
          <meta name="twitter:url" content="https://twitter.com/sense_groups" />
          <meta name="twitter:image" content="image url" />
          <meta name="robots" content="index, follow" />
        </Helmet>
      </HelmetProvider>

      <div className="user-width">
        <Top />
        <section id="faq" className="faq " style={{ background: "white" }}>
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Article Processing Charges (APC)</h2>
            </div>
            <div className="resps">
              {" "}
              Unlike traditional publishers, Open Access publishers – like SSRG
              – do not generate revenue from selling subscriptions. Instead, we
              make all of our articles freely available. Other Open Access
              publishers charges an Article Processing Charge (APC) once an
              article is accepted for publication to cover the costs of taking a
              manuscript and turning it into a finished article. But our SSRG
              claims fee for publishing. For more information on the principles
              of Open Access and how they apply to SSRG, please see{" "}
              <span
                style={{ color: "rgb(14,76,137)", cursor: "pointer" }}
                onClick={() => navigate("/for-authors/openaccess-author")}
              >
                {" "}
                What is Open Access Publishing?
              </span>
              .
            </div>

            <div className="resps">
              When a manuscript is submitted, it is processed through the many
              different departments at SSRG:
            </div>

            <div
              className="resps"
              style={{ marginTop: "20px", marginLeft: "40px" }}
            >
              <i className="bi bi-caret-right-fill"></i>&nbsp; The Editorial
              Screening team, who perform initial technical and ethical checks.
            </div>
            <div
              className="resps"
              style={{ marginTop: "20px", marginLeft: "40px" }}
            >
              <i className="bi bi-caret-right-fill"></i>&nbsp; The Editorial team,
              who are responsible for coordinating the review process with the
              journal’s academic Editorial Board – see peer review at SSRG for
              more information.
            </div>
            <div
              className="resps"
              style={{ marginTop: "20px", marginLeft: "40px" }}
            >
              <i className="bi bi-caret-right-fill"></i>&nbsp; The Production team,
              who convert the manuscript to a professionally typeset article and
              a well-structured XML.
            </div>
            <div
              className="resps"
              style={{ marginTop: "20px", marginLeft: "40px" }}
            >
              <i className="bi bi-caret-right-fill"></i>&nbsp; The Proofing team, who
              coordinate the proofing process through SSRG Online Proofing
              System (OPS).
            </div>
            <div
              className="resps"
              style={{ marginTop: "20px", marginLeft: "40px" }}
            >
              <i className="bi bi-caret-right-fill"></i>&nbsp; The Editorial Quality
              Assurance team, who perform a final check to ensure that the
              manuscript and its review process adhere to the journal’s
              guidelines and policies.
            </div>
            <div
              className="resps"
              style={{ marginTop: "20px", marginLeft: "40px" }}
            >
              <i className="bi bi-caret-right-fill"></i>&nbsp; The Indexing teams
              that liaise with all major index services.
            </div>
            <div
              className="resps"
              style={{ marginTop: "20px", marginLeft: "40px" }}
            >
              <i className="bi bi-caret-right-fill"></i>&nbsp; The Support teams, who
              answer any questions throughout the publishing process.
            </div>
            <div className="resps" style={{ marginTop: "20px" }}>
              These teams work with our marketing, communications, and technical
              teams to ensure your article receives the attention it deserves. A
              portion of all APCs are reinvested into the technical systems that
              support these services; ensuring that the publishing process
              continues to be as easy as possible.
            </div>

            <div className="resps" style={{ marginTop: "20px" }}>
              We hope that this page has helped you understand them in more
              detail, but please do contact us with any questions you might
              have.
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Apc;
