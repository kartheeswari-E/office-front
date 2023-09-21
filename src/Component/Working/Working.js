import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Top from "../Top/Top";
import { useEffect } from "react";
function Working() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Work with the Editor - IJRES Journal</title>
          <link
            rel="canonical"
            href="https://ijresonline.com/for-reviewer/work-editor"
          />
          <meta name="title" content="Work with the Editor - IJRES Journal" />
          <meta
            name="description"
            content="Interested in becoming a work editor for the International Journal of
Recent Engineering Science (IJRES)"
          />
          <meta
            name="keywords"
            content="journal reviewers, journal review, article review, scholarly journal,
accounting review, double blind peer review, open journal, peer review journal, journal article review, blind
peer review."
          />
          <meta property="og:type" content="Website" />
          <meta
            property="og:site_name"
            content="Seventh Sense Research Group"
          />
          <meta
            property="og:url"
            content="https://ijresonline.com/for-reviewer/work-editor"
          />
          <meta
            property="og:title"
            content="Work with the Editor - IJRES Journal"
          />
          <meta
            property="og:description"
            content="Interested in becoming a work editor for the International Journal
of Recent Engineering Science (IJRES)"
          />
          <meta property="og:image" content="image url" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Work with the Editor - IJRES Journal"
          />
          <meta
            name="twitter:description"
            content="Interested in becoming a work editor for the International
Journal of Recent Engineering Science (IJRES)"
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
              <h2>Working with editors</h2>
            </div>

            <p className="resps">
              Editors rely on reviewers’ recommendations to help them decide
              whether to accept or reject an article. This section will help you
              understand exactly what it is that editors are looking for from a
              good peer review.
            </p>
            <h5>Your Expertise</h5>
            <p className="resps">
              When an editor invites you to review, they will mention if there
              is a particular aspect of the paper that they would like you to
              look at. This is because sometimes editors may invite reviewers
              with expertise in certain areas, e.g., the methodology or the
              statistics used in the study – even if they know you don’t work in
              the subject area of the manuscript. If that is the case, it’s good
              practice to state at the beginning of the review that you will
              only be commenting on that aspect of the paper.
            </p>
            <p className="resps">
              If you’re not sure why you were asked to review a paper, ask the
              editor who invited you to review. Editors prefer that you contact
              them with questions, rather than you not respond or not complete
              the review.
            </p>
            <h5>The Role of Your Recommendation</h5>
            <p className="resps">
              It’s down to the editors to make a decision about the paper. This
              will be based on your recommendation and comments, and their own
              reading. It is worth repeating that the editor’s decision will not
              always match yours, so you should not mention it in comments to
              the author.
            </p>
            <h5>Comments to Editors and Authors</h5>
            <p className="resps">
              The editor not only uses reviewer comments to help make a
              decision. They will often refer to them in their decision letter.
            </p>
            <p className="resps">
              With this in mind, it’s helpful to editors if you:
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Number your comments.
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Are clear about which
              points are absolutely critical if the paper is given an
              opportunity for revision.
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Suggest how authors
              can address any concerns raised.
            </p>
            <p className="resps">
              Specific recommendations for correcting flaws are very welcome by
              editors and useful to authors.
            </p>
            <p className="resps">
              Remember, it’s especially important that your comments match your
              recommendation. If you’re recommending that the paper be rejected,
              your comments should clearly state what the problems are and they
              should not be excessively positive or seem to contradict your
              recommendation.
            </p>
            <p className="resps">
              It can put the editor in an awkward position if they are seen to
              disagree with your recommendation or your comments.
            </p>
            <p className="resps">
              Keep in mind that comments to editors should only be used for
              notes that you don’t want the authors to see. Anything that is
              important for the authors to know should be in comments to the
              authors, not the comments to the editors.
            </p>
            <p className="resps">
              Once the editor has made a decision and the author has been
              notified, you will normally receive a copy of the letter that will
              include any other reviewers’ comments.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Working;
