import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Top from "../Top/Top";
import { useEffect } from "react";
function Manuscript() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            IJRES Regular Manuscript Review Guidelines for Reviewers
          </title>
          <link
            rel="canonical"
            href="https://ijresonline.com/for-reviewer/review-reg"
          />
          <meta
            name="title"
            content="IJRES Regular Manuscript Review Guidelines for Reviewers"
          />
          <meta
            name="description"
            content="Learn about the regular manuscript review guidelines for reviewers of
the International Journal of Recent Engineering Science (IJRES). "
          />
          <meta
            name="keywords"
            content="reviewing registered reports, reviewing reports, registered reports
journals, peer review, manuscript review, guidelines for reviewers"
          />
          <meta property="og:type" content="Website" />
          <meta
            property="og:site_name"
            content="Seventh Sense Research Group"
          />
          <meta
            property="og:url"
            content="https://ijresonline.com/for-reviewer/review-reg"
          />
          <meta
            property="og:title"
            content="IJRES Regular Manuscript Review Guidelines for Reviewers"
          />
          <meta
            property="og:description"
            content="Learn about the regular manuscript review guidelines for
reviewers of the International Journal of Recent Engineering Science (IJRES). "
          />
          <meta property="og:image" content="image url" />
          <meta name="twitter:card" content="summary_large_image" />

          <meta
            name="twitter:title"
            content="IJRES Regular Manuscript Review Guidelines for Reviewers"
          />
          <meta
            name="twitter:description"
            content="Learn about the regular manuscript review guidelines for
reviewers of the International Journal of Recent Engineering Science (IJRES). "
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
              <h2>How to review revised manuscripts</h2>
            </div>

            <p className="resps">
              It is uncommon for a paper to be accepted for publication without
              changes – most papers are revised at least once in light of
              comments from reviewers and editors.
            </p>

            <p className="resps">When a revised paper is received:</p>

            <p className="resps">
              <i className="bi bi-caret-right-fill "></i>&nbsp; Minor changes will
              usually be assessed directly by the editor
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; If significant
              revisions were requested, the editor will usually return the
              manuscript to the original reviewers (unless they opted out of
              this)
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Rarely, the editor may
              invite comments from a new reviewer – the editor should explain
              why this fresh review is sought. It is important new reviewers
              respect previous review comments and the efforts the author has
              made to revise the paper
            </p>
            <p className="resps">
              Ideally, any significant changes should already have been
              requested in the original review – this subsequent review should
              be to ensure that the changes have been made, rather than for
              raising additional issues.
            </p>

            <p className="resps">
              Thus your review of a revised manuscript should be relatively
              quick and may only involve checking that certain requested actions
              have been done. Nevertheless, the aim of the review remains the
              same: to ensure the paper is of a publishable standard.
            </p>

            <p className="resps">
              Usually the editor will provide both the original decision letter
              and the author’s response to it. This will allow you to see what
              changes were requested – including any by the other reviewer – and
              how the author has responded to those changes.
            </p>

            <p className="resps">
              You should focus on how the author has changed the paper in light
              of their own response comments. Some journals require authors to
              highlight the changes in their revised manuscript, which
              simplifies this.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Manuscript;
