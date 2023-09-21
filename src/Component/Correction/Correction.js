import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Top from "../Top/Top";
import { useEffect } from "react";
function Correction() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            Correction Policy: Guidelines for Authors | IJRES Journal
          </title>
          <link
            rel="canonical"
            href="https://ijresonline.com/for-authors/correction-policy"
          />
          <meta
            name="title"
            content="Correction Policy: Guidelines for Authors | IJRES Journal"
          />
          <meta
            name="description"
            content="The correction policy page of International Journal of Recent
Engineering Science (IJRES) outlines the guidelines for authors who need to make corrections to their
published work."
          />
          <meta
            name="keywords"
            content="correction policy, author guidelines, published research, research
accuracy, journal publication, research publication, published research papers, research paper publication,
research and publication ethics, free publication journals, author manuscript, peer reviewed publications."
          />
          <meta property="og:type" content="Website" />
          <meta
            property="og:site_name"
            content="Seventh Sense Research Group"
          />
          <meta
            property="og:url"
            content="https://ijresonline.com/for-authors/correction-policy"
          />
          <meta
            property="og:title"
            content="Correction Policy: Guidelines for Authors | IJRES Journal"
          />
          <meta
            property="og:description"
            content="The correction policy page of International Journal of Recent
Engineering Science (IJRES) outlines the guidelines for authors who need to make corrections to their
published work."
          />

          <meta property="og:image" content="image url" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Correction Policy: Guidelines for Authors | IJRES Journal"
          />
          <meta
            name="twitter:description"
            content="The correction policy page of International Journal of Recent
Engineering Science (IJRES) outlines the guidelines for authors who need to make corrections to their
published work."
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
              <h2>Correction Policy</h2>
            </div>

            <div className="resps">
              The version of an article which is published online is considered
              the final and complete version. Even though it is possible to
              correct this version, our policy (in common with other publishers)
              is not to do so, except in very limited circumstances. We are only
              able to correct typographical errors in the following: author
              names, affiliations, articles titles, and abstracts and keywords.
              In such cases, an erratum or corrigendum would be necessary as
              well (see below), so that there is a record to explain the
              difference between the online and print versions. We can publish a
              correction to your article if there is a serious error, for
              example with regard to scientific accuracy, or if your reputation
              or that of the journal would be affected. We do not publish
              corrections that do not affect the contribution in a material way
              or significantly impair the reader's understanding of the
              contribution (such as a spelling mistake or a grammatical error).
            </div>

            <div className="resps" style={{ marginTop: "20px" }}>
              Send an email to
            </div>
            <a
              style={{ color: "#19628d", fontWeight: "600" }}
              href="mailto:editor@ijresonline.com"
              className="resps"
            >
              editor@ijresonline.com
            </a>
            <div className="resps">if you need any changes to be effected.</div>

            <div
              style={{ marginTop: "20px", fontWeight: "400", fontSize: "23px" }}
            >
              Errata
            </div>
            <div className="resps" style={{ marginTop: "20px" }}>
              An erratum will be used if an important error has been introduced
              during the production of the journal article (one that affects the
              publication record, the scientific integrity of the paper, the
              reputation of the authors or of the journal), including errors of
              omission such as failure to make factual proof corrections
              requested by authors within the deadline provided by the journal
              and within journal policy.
            </div>

            <div className="resps" style={{ marginTop: "20px" }}>
              We do not publish errata for typing errors except where an
              apparently simple error is significant (for example, an incorrect
              unit). A significant error in a figure or table is corrected by
              publication of a new corrected figure or table as an erratum. The
              figure or table is republished only if the editor considers it
              necessary.
            </div>

            <div
              style={{ marginTop: "20px", fontWeight: "400", fontSize: "23px" }}
            >
              Corrigenda
            </div>
            <div className="resps" style={{ marginTop: "20px" }}>
              A corrigendum is a notification of an important error made by the
              authors of the article. All authors must sign corrigenda submitted
              for publication. In cases where co-authors disagree, the editors
              will take advice from independent peer-reviewers and impose the
              appropriate amendment, noting the dissenting author(s) in the text
              of the published version.
            </div>

            <div
              style={{ marginTop: "20px", fontWeight: "400", fontSize: "23px" }}
            >
              Addenda
            </div>
            <div className="resps" style={{ marginTop: "20px" }}>
              An addendum is a notification of a peer-reviewed addition of
              information to a paper, for example in response to a reader's
              request for clarification. Addenda do not contradict the original
              publication, but if the author inadvertently omitted significant
              information available at the time, this material can be published
              as an addendum after peer review. Addenda are published only
              rarely and only when the editors decide that the addendum is
              crucial to the reader's understanding of a significant part of the
              published contribution.
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Correction;
