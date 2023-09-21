import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Top from "../Top/Top";
import { useEffect } from "react";
function Public() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title> Author Instruction Guidelines | For Authors | SSRG</title>

          <link
            rel="canonical"
            href="https://ijresonline.com/publication-ethics"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="title"
            content="Author Instruction Guidelines | For Authors"
          />
          <meta
            name="description"
            content="How should authors submit their articles to SSRG? The Author
guidelines explain everything you need to know on this page"
          />
          <meta
            name="keywords"
            content="research guidelines, research guidelines for students, example of research
guidelines, guidelines for research paper, research process, research guidelines for students"
          />
          <meta property="og:type" content="Website" />
          <meta
            property="og:site_name"
            content="Seventh Sense Research Group"
          />
          <meta
            property="og:url"
            content="https://ijresonline.com/publication-ethics"
          />
          <meta
            property="og:title"
            content="Author Instruction Guidelines | For Authors"
          />
          <meta
            property="og:description"
            content=" How should authors submit their articles to SSRG? The Author
guidelines explain everything you need to know on this page "
          />
          <meta property="og:image" content="image url" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Author Instruction Guidelines | For Authors"
          />
          <meta
            name="twitter:description"
            content=" How should authors submit their articles to SSRG? The Author
guidelines explain everything you need to know on this page"
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
              <h2>Publication Ethics</h2>
            </div>

            <div className="resps" style={{ marginTop: "20px" }}>
              The authors must record their research results so that their
              analysis and review could be done before the publication and by
              other researchers for a reasonable period after publication.
              Fabrication of data like reporting results that were never
              conducted or deceive or intent to mislead is a form of scientific
              misconduct and regarded as highly unethical and, in some
              jurisdictions, may be illegal.
            </div>

            <div className="resps" style={{ marginTop: "20px" }}>
              The authors should submit their research papers in the journal’s
              précised format for each publication. The information provided by
              the authors should be concise, authentic, and give details of the
              research experiments performed. Authors should include recent
              research articles and bring in comparative analysis to support
              their research. However, in doing so, authors should rewrite the
              information in their own words and represent it in a form that
              supports their original research work. This information, used from
              competitors, other researchers, and partners, should be cited as
              references in the research papers. They should also cite
              publications that have been influential in determining the nature
              of the reported work.
            </div>

            <div className="resps" style={{ marginTop: "20px" }}>
              Authorship credit should be based on substantial contributions to
              conception and design, or acquisition of data, analysis, and
              interpretation of data; drafting the article or revising it
              critically for important intellectual content, and final approval
              of the version to be published. A citied author should meet all of
              these criteria. Individuals that made other contributions to the
              research like obtaining funds for the research, collecting
              important data and materials, or co-ordinating with the
              publication, are significant but do not qualify for authorship.
              These individuals can be acknowledged in the research papers. We
              highly discourage inappropriate authorship practices such as
              ‘ghost’ authors (individuals who qualify for authorship but are
              not listed) and ‘guest’ (or honorary) authors (individuals who are
              listed despite not qualifying for authorship, such as heads of the
              department not directly involved with research.)
            </div>

            <div className="resps" style={{ marginTop: "20px" }}>
              The source of funding for the research project, or the publication
              of the document should be stated. The author should declare that
              the submitted work and its essential substance have not previously
              been published and are not considered for publication elsewhere.
              If a primary research report has been published, the author should
              clearly state it and mention the advancement and new analyses or
              syntheses of data in the secondary research report. An overlap of
              about 10 percent is considered acceptable between such journals.
              Plagiarism is an unethical practice in the field of research and
              is completely unacceptable. Authors are required to state they are
              the copyright owners or have taken the copyright owners’
              permission before submitting the research report. Any breach of
              copyright is not acceptable. Besides journals, FCS also publishes
              Conference Proceedings for no fee. These are intended to serve the
              community to share the most recent work-in-progress in respective
              areas of research. Conference organizers have to declare that the
              proceedings will not be shared with or published in any other
              journal.
            </div>

            <div className="resps" style={{ marginTop: "20px" }}>
              The editor of a journal has complete authority and responsibility
              to accept or reject a submitted paper and is not influenced by the
              management or owners in any form. The editor may confer with the
              associate editor, co-editors, and peer-reviewers while making a
              decision. The editors should judge all submissions on their
              scientific merit and minimize the influence of other factors. The
              decision should be timely and fair irrespective of caste, culture,
              origin, gender, or citizenship of the author. Editors, authors,
              and peer reviewers have a responsibility to disclose interests
              that might appear to affect their ability to present or review
              data objectively. These include relevant financial (for example,
              patent ownership, stock ownership, consultancies, speaker’s fees),
              personal, political, intellectual, or religious interests. Editors
              and board members should, whenever these are relevant to the
              content being considered or published, declare their interests and
              affiliations. The editorial team should not disclose any
              information about a submitted paper under consideration other than
              to reviewers. Situations that may lead to conflicts of interest
              should be avoided.
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Public;
