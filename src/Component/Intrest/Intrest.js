import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import Top from "../Top/Top";
import { useEffect } from "react";
function Intrest() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            IJRES Journal - Conflicts of Interest: Guidelines for Authors on
            Disclosure and Management
          </title>
          <link
            rel="canonical"
            href="https://ijresonline.com/for-authors/conflicts-of-interest"
          />
          <meta
            name="title"
            content="IJRES Journal - Conflicts of Interest: Guidelines for Authors on Disclosure and
Management"
          />
          <meta
            name="description"
            content="Review our guidelines for authors on disclosure and management of
conflicts of interest when submitting your research to IJRES Journal, a peer-reviewed international journal
focused on recent engineering science."
          />

          <meta
            name="keywords"
            content="conflicts of interest, conflict of interest in research, author guidelines,
research integrity, define conflict of interest, conflicts of interest policy, actual conflict of interest, guide
author, writer guidelsines, submission of articles, submission articles."
          />
          <meta property="og:type" content="Website" />
          <meta
            property="og:site_name"
            content="Seventh Sense Research Group"
          />
          <meta
            property="og:url"
            content="https://ijresonline.com/for-authors/conflicts-of-interest"
          />
          <meta
            property="og:title"
            content="IJRES Journal - Conflicts of Interest: Guidelines for Authors on Disclosure
and Management"
          />
          <meta
            property="og:description"
            content="Review our guidelines for authors on disclosure and management
of conflicts of interest when submitting your research to IJRES Journal, a peer-reviewed international journal
focused on recent engineering science."
          />
          <meta property="og:image" content="image url" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:description"
            content="Review our guidelines for authors on disclosure and
management of conflicts of interest when submitting your research to IJRES Journal, a peer-reviewed
international journal focused on recent engineering science."
          />
          <meta name="twitter:site" content="@sense_groups" />
          <meta
            name="twitter:title"
            content="IJRES Journal - Conflicts of Interest: Guidelines for Authors on
Disclosure and Management"
          />
          <meta name="twitter:url" content="https://twitter.com/sense_groups" />
          <meta name="twitter:image" content="image url" />
          <meta name="robots" content="index, follow" />
        </Helmet>
      </HelmetProvider>

      <div className="user-width">
        <Top />
        <section id="faq" className="faq section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Conflicts of interest</h2>
            </div>

            <p className="resps">
              Conflicts of interest (sometimes referred to as ‘competing
              interests’) occur when outside issues affect, or are perceived to
              affect, the neutrality or objectivity of research. This can happen
              at any stage in the research cycle, including during the
              experimentation phase, while a manuscript is being written, or
              during the process of turning a manuscript into a published
              article.
            </p>

            <p className="resps">
              Conflicts of interest do not always stop work from being published
              or prevent someone from being involved in the review process.
              However, they must be declared. A clear declaration of all
              possible conflicts – whether they actually had an influence or not
              – allows others to make informed decisions about the work and its
              review process.
            </p>

            <p className="resps">
              If conflicts of interest are found after publication, this may be
              embarrassing for the authors, the Editor and the journal. It may
              be necessary to publish a corrigendum or reassess the review
              process.
            </p>

            <div className="faq-list" style={{ marginTop: "30px" }}>
              <ul>
                <li data-aos="fade-up">
                  <i className="bx bi bi-diamond-half icon-help"></i>{" "}
                  <Link
                    style={{ color: "#19628d" }}
                    data-bs-toggle="collapse"
                    className="collapse collapsed"
                    data-bs-target="#faq-list-1"
                  >
                    Some common conflicts include
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </Link>
                  <div
                    id="faq-list-1"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p className="resps">
                      <i className="bi bi-caret-right-fill"></i>&nbsp; # Personal – a
                      pre-existing relationship induces an individual to act
                      inappropriately.
                    </p>
                    <p className="resps">
                      <i className="bi bi-caret-right-fill"></i>&nbsp; # Financial –
                      an individual receives payment relating to the subject of
                      the research, or from connected organizations.
                    </p>
                    <p className="resps">
                      <i className="bi bi-caret-right-fill"></i>&nbsp; # Intellectual
                      property – an individual puts undue emphasis on patents or
                      trademarks that they own, or are owned by their
                      organization.
                    </p>
                    <p className="resps">
                      <i className="bi bi-caret-right-fill"></i>&nbsp; # Affiliations
                      – an individual is employed by, or is a member of, an
                      organization with an interest in the outcome of the
                      research.
                    </p>
                    <p className="resps">
                      <i className="bi bi-caret-right-fill"></i>&nbsp; # Ideology –
                      an individual is influenced by beliefs or associations
                      relating to the subject of the research.
                    </p>
                    <p className="resps">
                      {" "}
                      You should carefully consider how these and other similar
                      topics may affect you, and how they could affect others
                      involved in the handling of the manuscript.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="faq-list">
              <ul>
                <li data-aos="fade-up">
                  <i className="bx bi bi-diamond-half icon-help"></i>{" "}
                  <Link
                    style={{ color: "#19628d" }}
                    data-bs-toggle="collapse"
                    className="collapse collapsed"
                    data-bs-target="#faq-list-3"
                  >
                    Authors<i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </Link>
                  <div
                    id="faq-list-3"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p className="resps">
                      Conflicts for authors are most often associated with the
                      risk of bias in a manuscript. As an author, if you have
                      any interest or association that could be seen to have
                      influenced your decision-making process, you should ensure
                      that it is declared at the time of submission. You may be
                      asked to make certain changes to your manuscript as a
                      result of your declaration.
                      <br />
                    </p>{" "}
                    <p className="resps">
                      These requests are not an accusation of impropriety. The
                      Editor or reviewer is helping you to protect your work
                      against potential criticisms. If you are in any doubt
                      about declaring a potential conflict, remember that if it
                      is revealed later – especially after publication – it
                      could cause more problems than simply declaring it at the
                      time of submission.
                      <br />
                    </p>{" "}
                    <p className="resps">
                      {" "}
                      Undeclared conflicts of interest could lead to a
                      corrigendum or, in the most serious cases, a retraction.
                      Whether or not you believe a conflict of interest exists,
                      you will be asked to include a statement in your
                      manuscript. If you believe no conflicts exist, you will be
                      asked to confirm this in writing.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="faq-list">
              <ul>
                <li data-aos="fade-up">
                  <i className="bx bi bi-diamond-half icon-help"></i>{" "}
                  <Link
                    style={{ color: "#19628d" }}
                    data-bs-toggle="collapse"
                    className="collapse collapsed"
                    data-bs-target="#faq-list-4"
                  >
                    Editors<i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </Link>
                  <div
                    id="faq-list-4"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p className="resps">
                      As a member of a journal’s Editorial Board, you need to be
                      very aware of the risk of conflicts when handling a
                      manuscript.
                    </p>

                    <p className="resps">
                      Firstly, you should assess your own potential conflicts.
                      If you have recently coauthored with the author of the
                      manuscript, you could be perceived to be influenced by
                      your relationship. Similarly, if you have recently shared
                      an affiliation or employment history with the author, it
                      could also be seen to be inappropriate for you to handle
                      their work. SSRG aims to avoid assigning papers to Editors
                      who might have conflicts, but we also expect our Editors
                      to declare any conflicts. If you believe a conflict
                      exists, you should refuse to handle the manuscript.
                    </p>

                    <p className="resps">
                      As a subject expert, the journal relies on your knowledge
                      of the discipline to assess any conflicts declared by a
                      submitting author. You are also uniquely placed to be able
                      to identify any undeclared conflicts that an author might
                      have. You should think about these factors when making a
                      recommendation on the manuscript.
                    </p>

                    <p className="resps">
                      You should also consider potential conflicts when
                      assigning the manuscript to reviewers. SSRG performs
                      conflict of interest checks on all reviewers before they
                      receive the manuscript for review, but you should also
                      rely on your knowledge of the sector to inform assignments
                      you make. Typically, you should not select a referee who:
                    </p>

                    <p className="resps">
                      <i className="bi bi-caret-right-fill"></i>&nbsp; works or has
                      recently worked at the same institution as the author or
                      authors; or.
                    </p>
                    <p className="resps">
                      <i className="bi bi-caret-right-fill"></i>&nbsp; has recently
                      coauthored a paper with the author or authors; or
                    </p>
                    <p className="resps">
                      <i className="bi bi-caret-right-fill"></i>&nbsp; has a recent
                      or current collaboration with the author.
                    </p>
                    <p className="resps">
                      <i className="bi bi-caret-right-fill"></i>&nbsp; # Affiliations
                      – an individual is employed by, or is a member of, an
                      organization with an interest in the outcome of the
                      research.
                    </p>
                    <p className="resps">
                      <i className="bi bi-caret-right-fill"></i>&nbsp; # Ideology –
                      an individual is influenced by beliefs or associations
                      relating to the subject of the research.
                    </p>
                    <p className="resps">
                      Discretion may be applied when publications are authored
                      by a consortium.
                    </p>

                    <p className="resps">
                      If you have concerns about a potential reviewer, consider
                      appointing someone else. If you believe a reviewer’s
                      recommendation on a manuscript was made to further their
                      own interests, you may tell the authors they do not need
                      to address that point.
                    </p>

                    <p className="resps">
                      We are aware that certain specialist areas may involve a
                      higher likelihood of association and overlap between
                      researchers. In some instances, you may be the best-placed
                      individual to act as Editor despite a connection with the
                      author or authors. In this case, you should inform your
                      SSRG editorial contact. They can then refer the case for
                      review by our Research Integrity team.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="faq-list">
              <ul>
                <li data-aos="fade-up">
                  <i className="bx bi bi-diamond-half icon-help"></i>{" "}
                  <Link
                    style={{ color: "#19628d" }}
                    data-bs-toggle="collapse"
                    className="collapse collapsed"
                    data-bs-target="#faq-list-2"
                  >
                    Reviewers<i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </Link>
                  <div
                    id="faq-list-2"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p className="resps">
                      By agreeing to peer review a manuscript you are providing
                      essential neutral assessment. As such, you should ensure
                      that you have no conflicts of interest that could be seen
                      to prevent you from acting in an impartial manner.
                    </p>

                    <p className="resps">
                      You should ensure that you have no recent association with
                      the author and that you have not previously coauthored
                      with them. You should also not have a recent shared
                      employment history.
                    </p>

                    <p className="resps">
                      SSRG operates a ‘double blind’ approach to peer review.
                      Your name will not be made available to the authors. This
                      allows you to provide honest, pertinent feedback.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Intrest;
