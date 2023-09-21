import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Top from "../Top/Top";
import { useEffect } from "react";
function Work() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Editorial Workflow - IJRES Journal for Editors</title>
          <link
            rel="canonical"
            href="https://ijresonline.com/for-editors/editorial-workflow"
          />
          <meta
            name="title"
            content="Editorial Workflow - IJRES Journal for Editors"
          />
          <meta
            name="description"
            content="Find information on the submission process, peer-review, acceptance,
and publication. Get insights into the publishing policies and guidelines for authors and editors."
          />
          <meta
            name="keywords"
            content="editorial workflow, manuscript handling, peer review, publication
process, manuscript submission, editorial board, manuscript review, author guidelines, journal policies,
publication standards."
          />
          <meta property="og:type" content="Website" />
          <meta
            property="og:site_name"
            content="Seventh Sense Research Group"
          />
          <meta
            property="og:url"
            content="https://ijresonline.com/for-editors/editorial-workflow"
          />
          <meta
            property="og:title"
            content="Editorial Workflow - IJRES Journal for Editors"
          />
          <meta
            property="og:description"
            content="Find information on the submission process, peer-review,
acceptance, and publication. Get insights into the publishing policies and guidelines for authors and
editors."
          />
          <meta property="og:image" content="image url" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Editorial Workflow - IJRES Journal for Editors"
          />
          <meta
            name="twitter:description"
            content="Find information on the submission process, peer-review,
acceptance, and publication. Get insights into the publishing policies and guidelines for authors and
editors."
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
              <h2>The Editorial Workflow</h2>
            </div>

            <p className="resps">
              The editorial workflow can be broadly summarized into 10 steps.
            </p>
            <h5 className="r">1. Submission of Paper</h5>
            <p className="resps">
              The corresponding or submitting author submits the paper to the
              journal. This is usually via an online system such as Scholar-One
              Manuscripts. Occasionally, journals may accept submissions by
              email.
            </p>
            <h5 className="r">2. Editorial Office Assessment</h5>
            <p className="resps">
              The journal checks the paper’s composition and arrangement against
              the journal’s Author Guidelines to make sure it includes the
              required sections and stylizations. The quality of the paper is
              not assessed at this point.
            </p>
            <h5 className="r">3. Appraisal by the Editor-in-Chief (EIC)</h5>
            <p className="resps">
              The EIC checks that the paper is appropriate for the journal and
              is sufficiently original and interesting. If not, the paper may be
              rejected without being reviewed any further.
            </p>
            <h5 className="r">4. EIC Assigns an Associate Editor (AE)</h5>
            <p className="resps">
              Some journals have Associate Editors who handle the peer review.
              If they do, they would be assigned at this stage.
            </p>
            <h5 className="r">5. Invitation to Reviewers</h5>
            <p className="resps">
              The handling editor sends invitations to individuals he or she
              believes would be appropriate reviewers. As responses are
              received, further invitations are issued, if necessary, until the
              required number of acceptances is obtained – commonly this is 2,
              but there is some variation between journals.
            </p>
            <h5 className="r">6. Response to Invitations</h5>
            <p className="resps">
              Potential reviewers consider the invitation against their own
              expertise, conflicts of interest and availability. They then
              accept or decline. If possible, when declining, they might also
              suggest alternative reviewers.
            </p>
            <h5 className="r">7. Review is conducted</h5>
            <p className="resps">
              The reviewer sets time aside to read the paper several times. The
              first read is used to form an initial impression of the work. If
              major problems are found at this stage, the reviewer may feel
              comfortable rejecting the paper without further work. Otherwise
              they will read the paper several more times, taking notes so as to
              build a detailed point-by-point review. The review is then
              submitted to the journal, with a recommendation to accept or
              reject it – or else with a request for revision (usually flagged
              as either major or minor) before it is reconsidered.
            </p>
            <h5 className="r">8. Journal Evaluates the Reviews</h5>
            <p className="resps">
              The handling editor considers all the returned reviews before
              making an overall decision. If the reviews differ widely, the
              editor may invite an additional reviewer so as to get an extra
              opinion before making a decision.
            </p>
            <h5 className="r">9. The Decision is communicated</h5>
            <p className="resps">
              The editor sends a decision email to the author including any
              relevant reviewer comments. Whether the comments are anonymous or
              not will depend on the type of peer review that the journal
              operates.
            </p>
            <h5 className="r">10. Next Steps</h5>
            <p className="resps">
              If accepted, the paper is sent to production. If the article is
              rejected or sent back for either major or minor revision, the
              handling editor should include constructive comments from the
              reviewers to help the author improve the article. At this point,
              reviewers should also be sent an email or letter letting them know
              the outcome of their review. If the paper was sent back for
              revision, the reviewers should expect to receive a new version,
              unless they have opted out of further participation. However,
              where only minor changes were requested this follow-up review
              might be done by the handling editor.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Work;
