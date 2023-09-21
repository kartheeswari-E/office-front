import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Top from "../Top/Top";
function Special() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            IJRES Journal - Editors' Special Issues: Call for Papers and
            Guidelines
          </title>
          <link
            rel="canonical"
            href="https://ijresonline.com/for-editors/editors-special-issues"
          />
          <meta
            name="title"
            content="IJRES Journal - Editors' Special Issues: Call for Papers and Guidelines"
          />
          <meta
            name="description"
            content="The guidelines for IJRES Journal Editors who are interested in
organizing and publishing a special issue."
          />
          <meta
            name="keywords"
            content="IJRES journal, editors, special issues, call for papers, editorial policy,
submission guidelines, peer review, publication, scholarly communication, research, recent science, science
technology, open access."
          />
          <meta property="og:type" content="Website" />
          <meta
            property="og:site_name"
            content="Seventh Sense Research Group"
          />
          <meta
            property="og:url"
            content="https://ijresonline.com/for-editors/editors-special-issues"
          />
          <meta
            property="og:title"
            content="IJRES Journal - Editors' Special Issues: Call for Papers and Guidelines"
          />
          <meta
            property="og:description"
            content="The guidelines for IJRES Journal Editors who are interested in
organizing and publishing a special issue."
          />
          <meta property="og:image" content="image url" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="IJRES Journal - Editors' Special Issues: Call for Papers and Guidelines"
          />
          <meta
            name="twitter:description"
            content="The guidelines for IJRES Journal Editors who are interested in
organizing and publishing a special issue."
          />
          <meta name="twitter:site" content="@sense_groups" />
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
              <h2>Special Issues: An Overview</h2>
            </div>

            <p className="resps">
              Special Issues are a key component of our journal contents,
              focusing on emerging areas in the discipline, or providing
              detailed analysis of a key research topic. They are organized by
              recognized experts in the area and attract articles of the highest
              quality. Special Issue proposals are welcome at any time during
              the year, and should be submitted to special.
              <em>
                {" "}
                <a
                  style={{ color: "#19628d" }}
                  href="mailto:queries@ssrgjournals.org"
                >
                  queries@ssrgjournals.org
                </a>
              </em>{" "}
            </p>
            <p className="resps">
              SSRG International Journals invites researchers, whose work is
              well-aligned with the aims and scope of one of our journals, to
              act as Lead Guest Editor for a Special Issue.
            </p>

            <p className="resps">
              Guest editing a Special Issue not only helps to promote research
              on the chosen topic, but also helps to establish the Lead Guest
              Editor as an authority on the subject. In addition, the Guest
              Editorial Team can write an Editorial and publish one review
              article.
            </p>

            <p className="resps">
              This guide sets out the steps involved in proposing, preparing and
              launching a Special Issue.
            </p>

            <div style={{ marginTop: "30px" }}>
              <div className="faq-list">
                <ul>
                  <li data-aos="fade-up">
                    <i className="bx bi bi-diamond-half icon-help"></i>{" "}
                    <Link
                      style={{ color: "#19628d" }}
                      data-bs-toggle="collapse"
                      className="collapse collapsed"
                      data-bs-target="#faq-list-16"
                    >
                      Concept Development
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </Link>
                    <div
                      id="faq-list-16"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p className="resps">
                        {" "}
                        As an expert in the field, SSRG International Journals
                        relies on the Lead Guest Editor’s specialist knowledge
                        to determine which topics warrant the thorough
                        investigation and analysis that a Special Issue entails.
                        The topic must be within the Lead Guest Editor’s area of
                        expertise, such that they feel confident when handling
                        manuscripts focused on the subject. It should also be in
                        keeping with the aims and scope of the journal.
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
                      data-bs-target="#faq-list-14"
                    >
                      creating a proposal
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </Link>
                    <div
                      id="faq-list-14"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p className="resps">
                        Once a topic is decided, the Lead Guest Editor is asked
                        to assemble a small team of Guest Editors, and prepare a
                        proposal. The Lead Guest Editor typically invites two to
                        four appropriately qualified Guest Editors to join the
                        Special Issue Editorial Team. These Guest Editors will
                        be responsible for handling the submitted manuscripts,
                        and managing the peer review process. Guest Editors
                        should work in an appropriate field, and have sufficient
                        time and capacity to handle manuscripts. The Lead Guest
                        Editor is responsible for contacting and confirming the
                        participation of Guest Editors. The proposal itself
                        takes the form of a draft Call for Papers, which should
                        include: The journal for which the Special Issue is
                        intended.
                      </p>

                      <p className="resps">
                        A suggested title for the Special Issue (should not
                        exceed 10 words).
                      </p>

                      <p className="resps">
                        Proposed Aims and Scope, giving an overview of the
                        Special Issue’s intended focus and a list of the topics
                        to be covered.
                      </p>

                      <p className="resps">
                        A list of two to four Guest Editors, each one including
                        their names, email addresses, affiliations, and a short
                        biography (one paragraph). You should also include your
                        own details here.
                      </p>

                      <p className="resps">A proposed timeline and schedule.</p>

                      <p className="resps">
                        When submitting a proposal, an explanation of
                      </p>
                      <p className="resps">
                        (i) why the subject is important and timely,
                      </p>
                      <p className="resps">
                        (ii) what communities are expected to contribute to the
                        Special issue, and
                      </p>
                      <p className="resps">
                        (iii) how the expertise of the Guest Editors is aligned
                        with the proposed topic of the Special Issue, should be
                        included.
                      </p>

                      <p className="resps">
                        When the proposal is ready, it should be sent to{" "}
                        <span style={{ color: "#19628d" }}>
                          queries@ssrgjournals.org
                        </span>{" "}
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
                      data-bs-target="#faq-list-13"
                    >
                      proposal validation
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </Link>
                    <div
                      id="faq-list-13"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p className="resps">
                        Once a proposal is submitted, SSRG Editorial Team begins
                        the validation process.
                      </p>

                      <p className="resps">
                        We will ensure that the Special Issue’s proposed Title,
                        Aims and Scope are broadly suitable for the selected
                        journal. We also ensure that the team of Guest Editors
                        is suitable.
                      </p>

                      <p className="resps">
                        This prevents conflicts of interest between team members
                        and the subject of the Special Issue. See our guide
                        ‘Managing Conflicts of Interest’ for more information.
                      </p>

                      <p className="resps">
                        SSRG International Journals Subject Analytics Team
                        assesses whether the proposal is likely to attract
                        sufficient submissions from researchers working in a
                        relevant field.
                      </p>

                      <p className="resps">
                        If the proposal requires amendments as a result of any
                        of these assessments, it must be reworked and
                        resubmitted. We may also ask you to recruit new Guest
                        Editors.
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
                      data-bs-target="#faq-list-12"
                    >
                      Editorial Board approval
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </Link>
                    <div
                      id="faq-list-12"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p className="resps">
                        The proposal is presented to the Editorial Board of the
                        journal for their consideration. The Editorial Board is
                        responsible for making the final decision on the
                        suitability of a Special Issue.
                      </p>
                      <p className="resps">
                        The assigned Editorial Board member may have comments or
                        concerns about the proposal which mean that amendments
                        have to be made. Providing the Editorial Board member is
                        satisfied, the proposal is approved.
                      </p>
                      <p className="resps">
                        The original Guest Editor assumes the role of Lead Guest
                        Editor for the Special Issue.
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
                      data-bs-target="#faq-list-11"
                    >
                      publishing and promoting the call for papers
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </Link>
                    <div
                      id="faq-list-11"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p className="resps">
                        The Call for Papers is published on the journal’s page
                        of internationaljournalssrg.org, appearing in the
                        ‘Special Issues’ section.
                      </p>

                      <p className="resps">
                        The Guest Editorial Team are encouraged to share the
                        Call for Papers widely. Promoting awareness early in the
                        process helps to ensure that the Special Issue receives
                        a sufficient number of high quality submissions.
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
                      data-bs-target="#faq-list-10"
                    >
                      managing submission and peer review
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </Link>
                    <div
                      id="faq-list-10"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p className="resps">
                        When manuscripts are submitted to the Special Issue,
                        they will be checked by the SSRG International Journals
                        Editorial Team to ensure that they are suitable for
                        consideration. Providing they meet these essential
                        checks, the manuscripts are sent to the Lead Guest
                        Editor.
                      </p>
                      <p className="resps">
                        The Lead Guest Editor assigns a Guest Editor to act as
                        handling Editor for that manuscript. Alternatively, they
                        may opt to personally act as handling Editor. The
                        handling Editor assesses the quality and relevance of
                        received manuscripts, ensuring that they are aligned
                        with the topic of the Special Issue.
                      </p>
                      <p className="resps">
                        Submissions to the Special Issue are processed in
                        exactly the same way as any other submissions to a SSRG
                        International journal. They are thoroughly assessed for
                        scientific rigour, and must go through full peer review
                        before they can be accepted for publication. See our
                        guide ‘Peer Review at SSRG International Journals for
                        more information.
                      </p>
                      <p className="resps">
                        Note that Guest Editors cannot act as reviewers for
                        manuscripts submitted to the Special Issue. If a Special
                        Issue fails to attract sufficient numbers of submissions
                        to be successful, all accepted articles will instead be
                        published in the regular section of the journal.
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
                      data-bs-target="#faq-list-9"
                    >
                      Contributions from the editorial team
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </Link>
                    <div
                      id="faq-list-9"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p className="resps">
                        Guest Editors are also able to submit manuscripts to be
                        considered for inclusion in the Special Issue. Note that
                        any manuscripts submitted by a member of the Guest
                        Editorial Team will be handled by an Editorial Board
                        member.
                      </p>
                      <p className="resps">
                        When the final manuscript has been accepted, the Guest
                        Editorial Team will be asked to produce a short
                        Editorial piece to be published as the opening of the
                        Special Issue. This Editorial should briefly highlight
                        the topics of each article in the Special Issue and
                        discuss the issue’s general focus. The Editorial’s title
                        should be the same as the Special Issue’s title. It
                        should also include the Guest Editorial Team’s current
                        affiliations and email addresses on the front page.
                      </p>
                      <p className="resps">
                        The Editorial should be co-authored by the entire Guest
                        Editorial Team and their names must be listed in the
                        same order as they appear in the Call for Papers. The
                        references of the Editorial papers must not include any
                        of the articles that make up the Special Issue.
                      </p>
                      <p className="resps">
                        There is no Article Processing Charge for the Editorial
                        as like as our normal submission. One review article
                        from the Guest Editorial Team is also eligible for a
                        total waiver. The final Special Issue may contain no
                        more than four articles (including the Editorial)
                        authored by members of the Guest Editorial Team.
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
                      data-bs-target="#faq-list-8"
                    >
                      publication and promotion
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </Link>
                    <div
                      id="faq-list-8"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p className="resps">
                        The Special Issue is published and made freely available
                        on dsjournal.com, as well as appearing in the relevant
                        databases and repositories, leading to the maximum
                        possible dissemination within the scientific community.
                        Special Issues can be viewed and downloaded on the
                        individual article level, but are also available in an
                        edited volume format as a single PDF published with a
                        custom cover.
                      </p>
                      <p className="resps">
                        We also ensure that the articles are added to the
                        appropriate abstracting and indexing services. See our
                        guide ‘Abstracting and Indexing at SSRG International
                        Journals for more information on this process.
                      </p>
                      <p className="resps">
                        Guest Editors are also encouraged to share and promote
                        the Special Issue.
                      </p>
                      <p className="resps">
                        A Special Issue’s impact, including the number of
                        readers, downloads and citations for each article can be
                        monitored by checking each article’s page. Articles in
                        Special Issues receive an average of 23% more citations
                        than regular articles.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Special;
