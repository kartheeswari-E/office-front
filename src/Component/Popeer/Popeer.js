import React from "react";
import Top from "../Top/Top";
import { useEffect } from "react";
function Popeer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="user-width">
        <Top />
        <section id="faq" className="faq" style={{ background: "white" }}>
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Peer Review Policy and Procedure</h2>
            </div>

            <p className="resps">
              The peer review process at SSRG strives to be transparent, fair,
              thorough, and objective, periodically revised, outlines the basic
              peer review process used by the journal.
            </p>
            <p className="resps">
              The editor-in-chief appoints individuals to serve on the editorial
              board; the majority of editorial board members serve as decision
              editors, responsible for managing the peer review process of
              submitted manuscripts. (There are also several special editors on
              the board who do not serve as decision editors, but instead manage
              other aspects of the journal.) Candidates are selected based on
              expertise in a specific field, geographic and topic distribution,
              nomination by existing editorial board members, and other factors.
              Editors serve three-year terms, with reappointment to a second
              term being expected but not guaranteed, and a third term being at
              the discretion of the editor-in-chief based on outstanding
              performance. Performance characteristics of the members of the
              editorial board will be assessed periodically, and will contribute
              to reappointment decisions. General performance data, such as the
              number of manuscripts handled, may be made available to the
              editorial board as a whole, to allow for individual editors to
              judge their performance against others; more detailed performance
              data, such as the number of successful appeals, will be kept
              confidential.
            </p>
            <p className="resps">
              Peer reviewers for the journal are also selected by the
              editor-in-chief. In general, a candidate should have a minimum of
              two peer-reviewed research papers published for which he or she
              served as first or second author.
            </p>
            <p className="resps">
              The decision editors routinely assess all reviews for quality,
              assigning a score (1-4 scale) for each review. Both ratings of
              quality and other performance characteristics (e.g. timeliness of
              reviews, and number of review invitations accepted, declined, and
              ignored) will be assessed periodically, and reviewers whose
              performance is inadequate will not be reappointed.
            </p>
            <p className="resps">
              The peer-review process is double-blinded: the identity of the
              peer reviewers is not revealed to the authors, and the identity of
              the authors is not revealed to the reviewers, as long as the
              authors have adequately removed all identifying information from
              the manuscript. It is the responsibility of the authors to ensure
              adequate removal of such identifying information prior to
              manuscript submission. Authors may suggest both decision editors
              and peer reviewers, but there is no obligation on the part of the
              journal to accept these suggestions.
            </p>
            <p className="resps">
              A submitted manuscript is a confidential communication, and peer
              reviewers must not retain, share, or copy it unless approved by
              the decision editor, e.g. for the purpose of getting confidential
              input from a colleague; such colleague must also be bound by the
              same level of confidentiality. If an author appeals an editor's
              decision, the appeal will be reviewed by the editor-in-chief, who
              may consult with one or more senior editors, and may discuss the
              appeal with the decision editor who handled the manuscript. The
              editor-in-chief may choose to affirm the initial decision, or
              allow the authors to resubmit the manuscript for another peer
              review, with a different decision editor and different peer
              reviewers. Other courses of action may be appropriate, based on
              the manuscript involved.
            </p>
            <p className="resps">
              If a published paper is subsequently found to have errors or major
              flaws, an erratum notice or other notification of the problem will
              be published in the journal as soon as feasible.
            </p>
            <p className="resps">
              Concerns about misconduct in the peer review or publication
              process will be handled by the journal to the extent possible;
              however, the employer of an involved individual, a granting
              agency, or a regulatory body may need to perform a more
              comprehensive review of alleged misconduct. It is not the
              journal's role to sanction one or more individuals, beyond
              potential publication of findings as they relate to the scientific
              record; such sanction is the purview of an employer, granting
              agency, or regulatory body.
            </p>
            <p className="resps">
              Allegations of misconduct will initially be reviewed by the
              editor-in-chief, and will begin with a written communication to
              all involved parties conveying the allegation and requesting
              information. The editor in-chief may confidentially consult other
              editors, outside technical experts (with blinding of the identity
              of the individuals), or others as appropriate. At least one senior
              associate editor will assist in each such investigation. SSRG
              subscribes to the concepts promulgated by the Committee on
              Publication Ethics (COPE), and the COPE flowcharts will guide
              investigation and resolution of allegations of misconduct,
              including redundant/duplicate publication, plagiarism, fabricated
              data, reviewer misconduct, complaints against editors, and other
              ethical problems with submitted manuscripts.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Popeer;
