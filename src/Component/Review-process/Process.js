import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Top from "../Top/Top";
import { useEffect } from "react";
function Process() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Review Process | For Authors | SSRG IJRES</title>
          <link
            rel="canonical"
            href="https://ijresonline.com/for-authors/review-process"
          />
          <meta
            name="title"
            content="Review Process | For Authors | SSRG IJRES"
          />
          <meta
            name="description"
            content="Discover the wide range of topics covered by IJRES Journal, a peer-
reviewed international journal dedicated to the latest research and advancements in recent engineering
science."
          />
          <meta
            name="keywords"
            content="engineering science, technology, peer-reviewed journal, international
journal, research, analysis, trends, algorithms, recent engineering science."
          />
          <meta property="og:type" content="Website" />
          <meta
            property="og:site_name"
            content="Seventh Sense Research Group"
          />
          <meta
            property="og:url"
            content="https://ijresonline.com/for-authors/review-process"
          />
          <meta
            property="og:title"
            content="Review Process | For Authors | SSRG IJRES"
          />
          <meta
            property="og:description"
            content="Discover the wide range of topics covered by IJRES Journal, a
peer-reviewed international journal dedicated to the latest research and advancements in recent engineering
science."
          />
          <meta property="og:image" content="image url" />
          <meta name="twitter:card" content="summary_large_image" />

          <meta
            name="twitter:description"
            content="Discover the wide range of topics covered by IJRES Journal, a
peer-reviewed international journal dedicated to the latest research and advancements in recent engineering
science."
          />
          <meta name="twitter:site" content="@sense_groups" />
          <meta
            name="twitter:title"
            content="Review Process | For Authors | SSRG IJRES"
          />
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
              <h2>Review process</h2>
            </div>
            <div className="resps">
              Seventh Sense Research Group® (SSRG) International Journals
              follows a double-blind peer review process for an effective
              evaluation method with our expert Editors' involvement. These
              individuals are senior personnel with in-depth content expertise
              who are responsible for journal content. Some journals in the
              portfolio have external Editors-in-Chief supported by in-house
              journal Editors.
            </div>

            <div
              style={{ marginTop: "20px", marginLeft: "40px" }}
              className="resps"
            >
              <i className="bi bi-caret-right-fill"></i>&nbsp; Our editorial team
              performs an initial appraisal of every submitted manuscript based
              on timeliness, the interest and importance of the topic, the use
              of the scientific method, the clarity of presentation (including
              the standard of English), and the relevance to readers.
            </div>
            <div style={{ marginLeft: "40px" }} className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; If the article is
              considered suitable to be sent to peer review, it will be reviewed
              by members of the journal's international Editorial Board and/or
              other specialists of equal repute.
            </div>
            <div style={{ marginLeft: "40px" }} className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; These individuals are
              recruited by the editorial team based on their expertise and
              standing in their field.
            </div>
            <div style={{ marginLeft: "40px" }} className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Reviewers are required
              to disclose potential conflicts of interest that may affect their
              ability to provide an unbiased review of an article.
            </div>
            <div style={{ marginLeft: "40px" }} className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Depending on the
              journal, the peer-review process may be single or double-blinded.
            </div>
            <div style={{ marginLeft: "40px" }} className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Peer Reviewers
              complete a referee report form and provide general comments to the
              journal Editor-in-Chief and both general and specific comments to
              the author(s).
            </div>
            <div style={{ marginLeft: "40px" }} className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Constructive comments
              that might help authors improve their work are passed anonymously
              (even if the paper is not ultimately accepted).
            </div>
            <div style={{ marginLeft: "40px" }} className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Revised manuscripts
              may be subject to further peer review if appropriate.
            </div>
            <div style={{ marginLeft: "40px" }} className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; The final decision on
              acceptability for publication lies with the journal expert
              Editor-in-Chief.
            </div>
            <div style={{ marginLeft: "40px" }} className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; If an article is not
              deemed suitable for publication in the journal to which it is
              submitted, our cascading process may be used to propose an
              alternative journal to consider the manuscript.
            </div>
            <div style={{ marginLeft: "40px" }} className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; This review process
              supports the publication of unbiased, scientifically accurate, and
              subject-relevant.
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Process;
