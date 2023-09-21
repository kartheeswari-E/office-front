import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Top from "../Top/Top";
import { useEffect } from "react";
function Clinical() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            Reviewing Clinical Research Articles - Guidelines for Reviewers |
            IJRES Journal
          </title>
          <link
            rel="canonical"
            href="https://ijresonline.com/for-reviewer/reviewing-clinical"
          />
          <meta
            name="title"
            content="Reviewing Clinical Research Articles - Guidelines for Reviewers | IJRES
Journal"
          />
          <meta
            name="description"
            content="Learn how to review clinical research articles with guidelines and
instructions provided by IJRES Journal. Ensure the quality and validity of clinical research with expert
reviews."
          />
          <meta
            name="keywords"
            content="Clinical review, Peer review process, Clinical research review, Journal
review guidelines, Manuscript review, Clinical study review, Reviewer instructions, Medical research review,
Clinical trial review, Reviewer guidelines."
          />
          <meta property="og:type" content="Website" />
          <meta
            property="og:site_name"
            content="Seventh Sense Research Group"
          />

          <meta
            property="og:url"
            content="https://ijresonline.com/for-reviewer/reviewing-clinical"
          />
          <meta
            property="og:title"
            content="Reviewing Clinical Research Articles - Guidelines for Reviewers | IJRES
Journal"
          />
          <meta
            property="og:description"
            content="Learn how to review clinical research articles with guidelines and
instructions provided by IJRES Journal. Ensure the quality and validity of clinical research with expert
reviews."
          />
          <meta property="og:image" content="image url" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Reviewing Clinical Research Articles - Guidelines for Reviewers | IJRES
Journal"
          />
          <meta
            name="twitter:description"
            content="Learn how to review clinical research articles with guidelines
and instructions provided by IJRES Journal. Ensure the quality and validity of clinical research with expert
reviews."
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
              <h2>For reviewing a clinical manuscript</h2>
            </div>

            <h5>1. Follow the basic principles of peer review</h5>
            <p className="resps">
              The basic tenets of peer review apply to all types of manuscripts,
              even those with a professional or practitioner target audience.
            </p>
            <h5>2. Keep the target audience in mind</h5>
            <p className="resps">
              A clinically focused manuscript should supply the latest research
              to make sound decisions for practice. As you read, check to see if
              the author(s) is looking at a clinical problem, rather than a
              research question, and assess the tone to see if it is
              straightforward and speaks to the clinician.
            </p>
            <p className="resps">
              You should also consider if the manuscript has citations to
              recent, relevant studies and diagrams or tables useful for
              clinical situations. Lastly, judge whether or not the discussion
              uses the findings to lead to a new understanding of clinical
              problems and/or therapies.
            </p>
            <h5>3. Look for a well-organized structure</h5>
            <p className="resps">
              Clinical practitioners are busy and the research they read needs
              to be organized. When you are reviewing the manuscript think about
              how appealing it is. Do you find it easy to identify the key
              points? Is it clear what areas are less important and can be
              skimmed over by a busy practitioner? Is the structure of the
              manuscript consistent with that of the journal?
            </p>
            <h5>4. Consider the application to professional practice</h5>
            <p className="resps">
              The manuscript you are reading should emphasize its potential
              impact on practice. A strong manuscript will include details on
              how the research or intervention could be implemented. An even
              stronger manuscript will also include information like clinically
              applicable screening tools and patient/consumer-friendly education
              sources.
            </p>
            <h5>5. Establish the elements of the case study</h5>
            <p className="resps">
              If a case study is included, only the essential elements should be
              presented. Case studies can be a useful way to introduce
              materials, but a clinician does not always have time to read a
              full case study. Look to see that the key details are presented
              and if other information has been included in figure or table
              format (i.e., laboratory values, chronology of key events,
              photographs, etc.).
            </p>
            <p className="resps">
              If the case study is a real patient, the patient and his/her
              family should not be identifiable. If the manuscript does not
              clearly state if the patient is real, your review should ask for
              clarification.
            </p>
            <h5>6. Watch out for conflicts of interest</h5>
            <p className="resps">
              Authors must disclose any conflicts of interest (COI) in the
              manuscripts. A COI could arise if an author is paid by a
              commercial entity to write the article, do the research, or
              compile the review. If a third party, writes an article that is
              submitted by another individual (sometimes referred to as
              “ghostwriting”), this must also be stated.
            </p>
            <p className="resps">
              A true conflict may not exist, but reviewers should be given all
              the disclosure information. If you feel that something is missing,
              tell the editor and mention it in your review. Further, if you
              feel that you have a potential conflict of interest with the
              manuscript, notify the editor immediately.
            </p>
            <h5>
              7. Confirm that human (or animal) participants were properly
              protected
            </h5>
            <p className="resps">
              All research must conform to the certain ethical standards that
              protect both human participants and experimental animals. The
              authors must include a statement to that effect in the manuscript,
              even when the institutional decision was to exempt the research
              from informed consent procedures. If the statement is missing,
              notify the editor as some journals will not accept research
              without this statement.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Clinical;
