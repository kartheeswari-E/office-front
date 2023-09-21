import React from "react";
import Top from "../Top/Top";
import { useEffect } from "react";
function Review() {
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
              <h2>Reviewing Registered Reports</h2>
            </div>
            <h4>Background</h4>
            <p className="resps">
              Registered Reports are a form of empirical article offered by a
              number of journals in which the methods and proposed analyses are
              pre-registered and reviewed prior to research being conducted.
              High quality protocols are then provisionally accepted for
              publication before data collection commences. This format is
              designed to minimize publication bias and research bias in
              hypothesis-driven research, while also allowing the flexibility to
              conduct exploratory (unregistered) analyses and report
              serendipitous findings.
            </p>
            <p className="resps">
              The review process for Registered Reports is divided into two
              stages. At Stage 1 (Study Design), reviewers assess study
              proposals before data are collected. At Stage 2 (Completed Study),
              reviewers consider the full study, including results and
              interpretation.
            </p>
            <h4>Guidelines for Reviewers</h4>
            <p className="resps">
              Stage 1 manuscripts will include only an Introduction, Methods
              (including proposed analyses), and Pilot Data (where applicable).
              In considering papers at Stage 1, reviewers will be asked to
              assess:
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp;The importance of the
              research question(s), for journals that normally include this as a
              criterion for acceptance.
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp;The logic, rationale,
              and plausibility of the proposed hypotheses.
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp;The soundness and
              feasibility of the methodology and analysis pipeline (including
              statistical power analysis where appropriate).
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp;Whether the clarity and
              degree of methodological detail is sufficient to exactly replicate
              the proposed experimental procedures and analysis pipeline.
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp;Whether the authors
              have pre-specified sufficient outcome-neutral tests for ensuring
              that the results obtained are able to test the stated hypotheses,
              including positive controls and quality checks.
            </p>
            <p className="resps">
              Following Stage 1: Study Design peer review, manuscripts will be
              accepted, offered the opportunity to revise, or rejected outright.
              Manuscripts that pass peer review will be issued an in principle
              acceptance (IPA), indicating that the article will be published
              pending successful completion of the study according to the
              pre-registered methods and analytic procedures, as well as a
              defensible and evidence-based interpretation of the results. Note,
              some journals may choose to publish the Stage 1 Study Design after
              it has received an IPA, in addition to the final Stage 2 completed
              study while other journals will publish only the final Stage 2
              article. Please check your journal's specific Registered Reports
              guidelines for further details.
            </p>
            <p className="resps">
              Following completion of the study, authors will complete the
              manuscript, including Results and Discussion sections. These Stage
              2: Completed Study manuscripts will more closely resemble a
              regular article format. The manuscript will then be returned to
              the reviewers, who will be asked to appraise:
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp;Whether the data are
              able to test the authors’ proposed hypotheses by satisfying the
              approved outcome-neutral conditions (such as quality checks,
              positive controls).
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp;Whether the
              Introduction, rationale and stated hypotheses are the same as the
              approved Stage 1 submission (required).
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp;Whether the authors
              adhered precisely to the registered experimental procedures.
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp;Whether any
              unregistered post hoc analyses added by the authors are justified,
              methodologically sound, and informative.
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp;Whether the authors’
              conclusions are justified given the data.
            </p>
            <p className="resps">
              Reviewers at Stage 2 may suggest that authors report additional
              post hoc tests on their data; however, authors are not obliged to
              do so unless such tests are necessary to satisfy one or more of
              the Stage 2 review criteria. Please note that editorial decisions
              will be based on adherence to the approved protocols and
              experimental design in Stage 1 and conclusions supported by data
              (even if they are negative findings) as opposed to novelty and
              perceived importance of results.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Review;
