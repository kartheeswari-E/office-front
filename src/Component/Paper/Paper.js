import React from "react";
import Hero from "../Hero/Hero";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Top from "../Top/Top";
function Paper() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            Preparation Guidelines for Paper Submission | SSRG International
            Journals
          </title>
          <link rel="canonical" href="https://ijresonline.com/submission" />
          <meta
            name="title"
            content="Preparation Guidelines for Paper Submission | SSRG IJRES"
          />
          <meta
            name="description"
            content="Each journal has a set of individual Paper Submission guidelines which
provide advice on how to prepare your paper for submission."
          />
          <meta
            name="keywords"
            content="paper submission, paper submission in ssrg, journal publication free of
charge, research paper submission, research paper submission guidelines, research paper submission
process, research paper presentation, journal submission process, journal submission, international journal
submission, paper submission process, journal submission guidelines, manuscript submission guidelines."
          />
          <meta property="og:type" content="Website" />
          <meta
            property="og:site_name"
            content="Seventh Sense Research Group"
          />
          <meta
            property="og:url"
            content="https://ijresonline.com/submission"
          />
          <meta
            property="og:title"
            content="Preparation Guidelines for Paper Submission | SSRG IJRES"
          />
          <meta
            property="og:description"
            content="Each journal has a set of individual Paper Submission guidelines
which provide advice on how to prepare your paper for submission."
          />
          <meta property="og:image" content="image url" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:description"
            content="Each journal has a set of individual Paper Submission guidelines
which provide advice on how to prepare your paper for submission."
          />
          <meta name="twitter:site" content="@sense_groups" />
          <meta
            name="twitter:title"
            content="Preparation Guidelines for Paper Submission | SSRG IJRES"
          />
          <meta name="twitter:url" content="https://twitter.com/sense_groups" />
          <meta name="twitter:image" content="image url" />
          <meta name="robots" content="index, follow" />
        </Helmet>
      </HelmetProvider>

      <div className="user-width">
        <Top />

        <section id="faq" className="faq section-bg">
          <div className="containeer" data-aos="fade-up">
            <div className="section-title">
              <h2>Paper Submission</h2>
            </div>

            <div className="paper">
              <p>
                <span className="span">Submit Your article:</span>
                <a
                  style={{ fontWeight: "bold", color: "black" }}
                  href="mailto:editor@ijresonline.com"
                >
                  &nbsp;editor@ijresonline.com
                </a>{" "}
              </p>

              <p className="resp">
                Respective authors should note that only original and previously
                unpublished manuscripts will be considered. Furthermore,
                simultaneous submissions are not acceptable. Submission of a
                manuscript is interpreted as a certification statement that no
                part of the manuscript is copyrighted by any other publication
                or under review by any other formal publication. It is the
                primary responsibility of the author to obtain proper permission
                for the use of any copyrighted materials in the manuscript
                before the submission of the manuscript to IJRES.
              </p>

              <h4 className="step-head">Step by step guideline for authors</h4>
              <p className="resp">
                IJRES publishes original research articles, reviews and short
                communications. Short communications must address a question of
                particular interest and reach a definitive conclusion.
              </p>
            </div>

            <div style={{ marginTop: "3%" }}>
              <div className="faq-list">
                <ul>
                  <li data-aos="fade-up">
                    <i className="bx bi bi-diamond-half icon-help"></i>{" "}
                    <Link
                      style={{ color: "#19628d" }}
                      data-bs-toggle="collapse"
                      className="collapse collapsed"
                      data-bs-target="#faq-list-5"
                    >
                      {" "}
                      Manuscript submission
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </Link>
                    <div
                      id="faq-list-5"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p className="resps">
                        Submission of a manuscript implies: that the work
                        described has not been published before; that it is not
                        under consideration for publication anywhere else; that
                        its publication has been approved by all co-authors, if
                        any, as well as by the responsible authorities – tacitly
                        or explicitly – at the institute where the work has been
                        carried out. The publisher will not be held legally
                        responsible should there be any claims for compensation.
                      </p>
                      <p style={{"fontWeight":"bold"}}>Permissions</p>
                      <p className="resps">
                        Authors wishing to include figures, tables, or text
                        passages that have already been published elsewhere are
                        required to obtain permission from the copyright
                        owner(s) for both the print and online format and to
                        include evidence that such permission has been granted
                        when submitting their papers. Any material received
                        without such evidence will be assumed to originate from
                        the authors.
                      </p>
                      <p style={{"fontWeight":"bold"}}>Submission</p>
                      <p className="resps">
                        Please mail your manuscript [in .docx format/ IJRES
                        template] and supporting files tothe email id:{" "}
                        <span style={{ fontWeight: "bold" }}>
                          editor@ijresonline.com
                        </span>
                      </p>
                      <p style={{"fontWeight":"bold"}}>Important notes:</p>

                      <p className="resps">
                      <i class="bi bi-caret-right-fill"></i>&nbsp; In case
                        authors are encouraged to resubmit a revised version of
                        their manuscript, they are required to mark all changes
                        (e.g. using the track changes functionality of their
                        word processing program or by colored text) and the
                        revised version must be accompanied by a cover letter
                        including an itemized response to the reviewer's
                        comments.
                      </p>
                      <p className="resps">
                      <i class="bi bi-caret-right-fill"></i>&nbsp; A submission
                        to IJRES generally implies that materials described in
                        the manuscript (e.g. seeds, genetic stocks, vectors,
                        antibodies) should be freely available to any researcher
                        wishing to use them for non-commercial purposes. Authors
                        are expected to comply with requests for materials
                        within 60 days after receipt of the request. Where
                        appropriate, requestors should be prepared to cover
                        reasonable costs of the request. Furthermore,
                        availability of the materials may be subject to an
                        institutional Material Transfer Agreement that limits
                        their use to non-profit research purposes.
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
                      data-bs-target="#faq-list-1"
                    >
                      {" "}
                      Author contribution statement
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </Link>
                    <div
                      id="faq-list-1"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p className="resps">
                        Authors must provide a short description of the
                        contributions made by each listed author (please use
                        initials). This will be published in a separate section
                        in front of the Acknowledgments.
                      </p>
                      <p className="resps">
                        <span style={{ fontWeight: "bold" }}>For example:</span>{" "}
                        AM and DB conceived and designed research. AM and BB
                        conducted experiments. GR contributed new reagents or
                        analytical tools. AM and GR analyzed data. AM wrote the
                        manuscript. All authors read and approved the
                        manuscript.
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
                      data-bs-target="#faq-list"
                    >
                      {" "}
                      Title page<i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </Link>
                    <div
                      id="faq-list"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p>The title page should include:</p>
                      <p className="resps">
                        {" "}
                        <i className="bi bi-caret-right-fill"></i>&nbsp;The full
                        first name, middle initial, and last name of the
                        author(s)
                        <br />
                        <i className="bi bi-caret-right-fill"></i>&nbsp; A concise
                        and informative title; avoid use of undefined
                        abbreviations Please limit the title to 180 characters
                        (including spaces).
                        <br />
                        <i className="bi bi-caret-right-fill"></i>&nbsp; The
                        affiliation(s) and address(es) of all author(s)
                        <br />
                        <i className="bi bi-caret-right-fill"></i>&nbsp; The e-mail
                        address, telephone and fax numbers of the corresponding
                        author
                        <br />
                        <i className="bi bi-caret-right-fill"></i>&nbsp; It is
                        desired that you use your institutional e-mail address
                        for correspondence.
                      </p>
                      <p className="resps">
                        Please provide an abstract of up to 250 words. The
                        abstract should be broadly based to appeal to the
                        general readership of IJRES. Avoid use of undefined
                        abbreviations or unspecified references. Conclude with a
                        sentence on how this work advanced the state of the art
                        in the field.
                      </p>
                      <p style={{"fontWeight":"bold"}}>Keywords</p>
                      <p className="resps">
                        Please provide 4 to 6 keywords, which can be used for
                        indexing purposes. Avoid use of words already appearing
                        in the title of the paper.
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
                      {" "}
                      Text<i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </Link>
                    <div
                      id="faq-list-2"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p>Text Formatting</p>

                      <p className="resps">
                        Manuscripts should be submitted in Word.
                        <p className="resps">
                          <i className="bi bi-caret-right-fill"></i>&nbsp; Use a
                          normal, plain font (e.g., 10-point Times Roman) for
                          text.
                        </p>
                        <p className="resps">
                          <i className="bi bi-caret-right-fill"></i>&nbsp; Use
                          italics for emphasis.
                        </p>
                        <p className="resps">
                          <i className="bi bi-caret-right-fill"></i>&nbsp; Use the
                          automatic page numbering function to number the pages.
                        </p>
                        <p className="resps">
                          <i className="bi bi-caret-right-fill"></i>&nbsp; Do not use
                          field functions.
                        </p>
                        <p className="resps">
                          <i className="bi bi-caret-right-fill"></i>&nbsp; Use tab
                          stops or other commands for indents, not the space
                          bar.
                        </p>
                        <p className="resps">
                          <i className="bi bi-caret-right-fill"></i>&nbsp; Use the
                          table function, not spreadsheets, to make tables.
                        </p>
                        <p className="resps">
                          <i className="bi bi-caret-right-fill"></i>&nbsp; Use the
                          equation editor or MathType for equations.
                        </p>
                        <p className="resps">
                          <i className="bi bi-caret-right-fill"></i>&nbsp; Save your
                          file in docx format (Word 2007 or higher) or doc
                          format (older Word versions).
                        </p>
                      </p>
                      <p className="resps">
                        Manuscripts with mathematical content can also be
                        submitted in LaTeX.
                      </p>

                      <p style={{"fontWeight":"bold"}}>Headings</p>
                      <p className="resps">
                        Please use no more than three levels of displayed
                        headings.
                      </p>

                      <p style={{"fontWeight":"bold"}}>Abbreviations</p>
                      <p className="resps">
                        Abbreviations should be defined at first mention and
                        used consistently thereafter.
                      </p>

                      <p style={{"fontWeight":"bold"}}>Footnotes</p>
                      <p className="resps">
                        Footnotes can be used to give additional information,
                        which may include the citation of a reference included
                        in the reference list. They should not consist solely of
                        a reference citation, and they should never include the
                        bibliographic details of a reference. They should also
                        not contain any figures or tables.
                      </p>

                      <p className="resps">
                        Footnotes to the text are numbered consecutively; those
                        to tables should be indicated by superscript lower-case
                        letters (or asterisks for significance values and other
                        statistical data). Footnotes to the title or the authors
                        of the article are not given reference symbols.
                      </p>

                      <p className="resps">
                        Always use footnotes instead of endnotes.
                      </p>

                      <p style={{"fontWeight":"bold"}}>Acknowledgments</p>
                      <p className="resps">
                        Acknowledgments of people, grants, funds, etc. should be
                        placed in a separate section on the title page. The
                        names of funding organizations should be written in
                        full. IJRES list of units, symbols and abbreviations
                        Please follow the link to IJRES list of units, symbols
                        and abbreviations in plant sciences.{" "}
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
                      {" "}
                      Scientific style
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </Link>
                    <div
                      id="faq-list-3"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p className="resps">
                        Genus and species names should be in italics.
                      </p>

                      <p className="resps">
                        Authors must deposit new nucleotide sequences to GenBank
                        prior to submitting a paper for publication in IJRES. An
                        accession number must be given in the manuscript for new
                        genomic DNA, complementary DNA, RNA and other nucleotide
                        sequences discussed in the manuscript.
                      </p>

                      <p style={{"fontWeight":"bold"}}>Statistical analysis of the results:</p>
                      <p className="resps">
                        Authors must indicate, in a subsection at the end of the
                        Materials and Methods section, the reproducibility, or
                        statistical significance of the results, especially as
                        it pertains to figures where error bars are not
                        indicated (e.g. images, blots).
                      </p>

                      <p style={{"fontWeight":"bold"}}>Use of antibodies:</p>
                      <p className="resps">
                        Please provide the antibody product code, if
                        commercially available antibodies have been used.
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
                      {" "}
                      References<i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </Link>
                    <div
                      id="faq-list-4"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p style={{"fontWeight":"bold"}}>Citation</p>
                      <p className="resps">
                        Cite references in the text by name and year in
                        parentheses. Some examples:
                      </p>

                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Negotiation
                        research spans many disciplines (Thompson 1990).
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; This result
                        was later contradicted by Becker and Seligman (1996).
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; This effect
                        has been widely studied (Abbott 1991; Barakat et al.
                        1995a, b; Kelso and Smith 1998; Medvec et al. 1999,
                        2000).
                      </p>
                      <p style={{"fontWeight":"bold"}}>Reference list</p>
                      <p className="resps">
                        The list of references should only include works that
                        are cited in the text and that have been published or
                        accepted for publication. Personal communications and
                        unpublished works should only be mentioned in the text.
                        Do not use footnotes or endnotes as a substitute for a
                        reference list.
                      </p>

                      <p className="resps">
                        Reference list entries should be alphabetized by the
                        last names of the first author of each work. Order
                        multi-author publications of the same first author
                        alphabetically with respect to second, third, etc.
                        author. Publications of exactly the same author(s) must
                        be ordered chronologically.
                      </p>

                      <p>
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Journal
                        article
                      </p>
                      <p className="resps">
                        Gamelin FX, Baquet G, Berthoin S, Thevenet D, Nourry C,
                        Nottin S, Bosquet L (2009) Effect of high intensity
                        intermittent training on heart rate variability in
                        prepubescent children. Eur J ApplPhysiol 105:731-738.
                        https://doi.org/10.1007/s00421-008-0955-8
                      </p>

                      <p className="resps">
                        Ideally, the names of all authors should be provided,
                        but the usage of “et al” in long author lists will also
                        be accepted: Smith J, Jones M Jr, Houghton L et al
                        (1999) Future of health insurance. N Engl J Med
                        965:325–329
                      </p>

                      <p>
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Article by
                        DOI
                      </p>
                      <p className="resps">
                        Slifka MK, Whitton JL (2000) Clinical implications of
                        dysregulated cytokine production. J Mol Med.
                        https://doi.org/10.1007/s001090000086
                      </p>

                      <p>
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Book
                      </p>
                      <p className="resps">
                        South J, Blass B (2001) The future of modern genomics.
                        Blackwell, London
                      </p>

                      <p>
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Book chapter
                      </p>
                      <p className="resps">
                        Brown B, Aaron M (2001) The politics of nature. In:
                        Smith J (ed) The rise of modern genomics, 3rd edn.
                        Wiley, New York, pp 230-257
                      </p>

                      <p>
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Online
                        document
                      </p>
                      <p className="resps">
                        Cartwright J (2007) Big stars have weather too. IOP
                        Publishing PhysicsWeb.
                        http://physicsweb.org/articles/news/11/6/16/1. Accessed
                        26 June 2007
                      </p>

                      <p>
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Dissertation
                      </p>
                      <p className="resps">
                        Trent JW (1975) Experimental acute renal failure.
                        Dissertation, University of California Always use the
                        standard abbreviation of a journal’s name according to
                        the ISSN List of Title Word Abbreviations, see
                      </p>

                      <a
                        style={{
                          color: "blue",
                          cursor: "pointer",
                          marginTop: "2%",
                        }}
                        target="_blank"
                        href="https://www.issn.org/services/online-services/access-to-the-ltwa/"
                      >
                        <i className="bi bi-caret-right-fill"></i>&nbsp; ISSN LTWA
                      </a>
                      <p className="resps">
                        If you are unsure, please use the full journal title.
                      </p>

                      <p style={{"fontWeight":"bold"}}>Important note:</p>
                      <p className="resps">
                        Ideally, the names of all authors should be provided,
                        but the usage of “et al” in long author lists with more
                        than 15 authors will also be accepted. Please always
                        give a minimum of three authors:
                      </p>

                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Smith J,
                        Jones M Jr, Houghton L et al (1999) Future of health
                        insurance. N Engl J Med 965:325–329
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
                      className="collapse"
                      data-bs-target="#faq-list-6"
                    >
                      {" "}
                      Tables<i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </Link>
                    <div
                      id="faq-list-6"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p style={{ listStyleType: "circle" }}>
                        <p>
                          {" "}
                          All tables are to be numbered using Arabic numerals.
                        </p>
                        <p className="resps">
                          <i className="bi bi-caret-right-fill"></i>&nbsp; Tables
                          should always be cited in text in consecutive
                          numerical order.
                        </p>
                        <p className="resps">
                          <i className="bi bi-caret-right-fill"></i>&nbsp; For each
                          table, please supply a table caption (title)
                          explaining the components of the table.
                        </p>
                        <p className="resps">
                          <i className="bi bi-caret-right-fill"></i>&nbsp; Identify
                          any previously published material by giving the
                          original source in the form of a reference at the end
                          of the table caption.
                        </p>
                        <p className="resps">
                          <i className="bi bi-caret-right-fill"></i>&nbsp; Footnotes
                          to tables should be indicated by superscript
                          lower-case letters (or asterisks for significance
                          values and other statistical data) and included
                          beneath the table body.
                        </p>
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
                      data-bs-target="#faq-list-7"
                    >
                      {" "}
                      Artwork<i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </Link>
                    <div
                      id="faq-list-7"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p className="resps">
                        For the best quality final product, it is highly
                        recommended that you submit all of your artwork –
                        photographs, line drawings, etc. – in an electronic
                        format. Your art will then be produced to the highest
                        standards with the greatest accuracy to detail. The
                        published work will directly reflect the quality of the
                        artwork provided.
                      </p>

                      <p style={{"fontWeight":"bold"}}>Electronic Figure Submission</p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Supply all
                        figures electronically.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Indicate
                        what graphics program was used to create the artwork.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; For vector
                        graphics, the preferred format is EPS; for halftones,
                        please use TIFF format. MS Office files are also
                        acceptable.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Vector
                        graphics containing fonts must have the fonts embedded
                        in the files.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Name your
                        figure files with "Fig" and the figure number, e.g.,
                        Fig1.eps.
                      </p>
                      <p style={{"fontWeight":"bold"}}>Line Art</p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Definition:
                        Black and white graphic with no shading.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Do not use
                        faint lines and/or lettering and check that all lines
                        and lettering within the figures are legible at final
                        size.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; All lines
                        should be at least 0.1 mm (0.3 pt) wide.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Scanned line
                        drawings and line drawings in bitmap format should have
                        a minimum resolution of 1200 dpi.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Vector
                        graphics containing fonts must have the fonts embedded
                        in the files.
                      </p>
                      <p style={{"fontWeight":"bold"}}>Halftone Art</p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp;Definition:
                        Photographs, drawings, or paintings with fine shading,
                        etc.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp;If any
                        magnification is used in the photographs, indicate this
                        by using scale bars within the figures themselves.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp;Halftones
                        should have a minimum resolution of 300 dpi.
                      </p>
                      <p style={{"fontWeight":"bold"}}>Combination Art</p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp;Definition: a
                        combination of halftone and line art, e.g., halftones
                        containing line drawing, extensive lettering, color
                        diagrams, etc.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp;Combination
                        artwork should have a minimum resolution of 600 dpi.
                      </p>
                      <p style={{"fontWeight":"bold"}}>Color Art</p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp;Color art is
                        free of charge for print and online publication.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp;Color
                        illustrations should be submitted as RGB.
                      </p>
                      <p style={{"fontWeight":"bold"}}>Figure Lettering</p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp;To add
                        lettering, it is best to use Helvetica or Arial (sans
                        serif fonts).
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp;Keep
                        lettering consistently sized throughout your final-sized
                        artwork, usually about 2–3 mm (8–12 pt).
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp;Variance of
                        type size within an illustration should be minimal,
                        e.g., do not use 8-pt type on an axis and 20-pt type for
                        the axis label.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp;Avoid effects
                        such as shading, outline letters, etc.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp;Do not
                        include titles or captions within your illustrations.
                      </p>
                      <p style={{"fontWeight":"bold"}}>Figure Numbering</p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp;All figures
                        are to be numbered using Arabic numerals.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp;Figures
                        should always be cited in text in consecutive numerical
                        order.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp;Figure parts
                        should be denoted by lowercase letters (a, b, c, etc.).
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp;If an
                        appendix appears in your article and it contains one or
                        more figures, continue the consecutive numbering of the
                        main text. Do not number the appendix figures, "A1, A2,
                        A3, etc." Figures in online appendices (Electronic
                        Supplementary Material) should, however, be numbered
                        separately.
                      </p>
                      <p style={{"fontWeight":"bold"}}>Figure Captions</p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp;Each figure
                        should have a concise caption describing accurately what
                        the figure depicts. Include the captions in the text
                        file of the manuscript, not in the figure file.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp;Figure
                        captions begin with the term Fig. in bold type, followed
                        by the figure number, also in bold type.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp;No
                        punctuation is to be included after the number, nor is
                        any punctuation to be placed at the end of the caption.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp;Identify all
                        elements found in the figure in the figure caption; and
                        use boxes, circles, etc., as coordinate points in
                        graphs.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp;Identify
                        previously published material by giving the original
                        source in the form of a reference citation at the end of
                        the figure caption.
                      </p>
                      <p style={{"fontWeight":"bold"}}>Figure Placement and Size</p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; When
                        preparing your figures, size figures to fit in the
                        column width.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; For most
                        journals the figures should be 39 mm, 84 mm, 129 mm, or
                        174 mm wide and not higher than 234 mm.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; For books
                        and book-sized journals, the figures should be 80 mm or
                        122 mm wide and not higher than 198 mm.
                      </p>
                      <p style={{"fontWeight":"bold"}}>Permissions</p>
                      <p className="resps">
                        {" "}
                        If you include figures that have already been published
                        elsewhere, you must obtain permission from the copyright
                        owner(s) for both the print and online format. Please be
                        aware that some publishers do not grant electronic
                        rights for free and that IJRES will not be able to
                        refund any costs that may have occurred to receive these
                        permissions. In such cases, material from other sources
                        should be used.
                      </p>

                      <p style={{"fontWeight":"bold"}}>Accessibility</p>
                      <p className="resps">
                        {" "}
                        In order to give people of all abilities and
                        disabilities access to the content of your figures,
                        please make sure that
                      </p>

                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; All figures
                        have descriptive captions (blind users could then use a
                        text-to-speech software or a text-to-Braille hardware)
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Patterns are
                        used instead of or in addition to colors for conveying
                        information (color-blind users would then be able to
                        distinguish the visual elements)
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Any figure
                        lettering has a contrast ratio of at least 4.5:1
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
                      {" "}
                      Electronic Supplementary Material
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </Link>
                    <div
                      id="faq-list-8"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p className="resps">
                        IJRES accepts electronic multimedia files (animations,
                        movies, audio, etc.) and other supplementary files to be
                        published online along with an article or a book
                        chapter. This feature can add dimension to the author's
                        article, as certain information cannot be printed or is
                        more convenient in electronic form.
                      </p>

                      <p className="resps">
                        Before submitting research datasets as electronic
                        supplementary material. We encourage research data to be
                        archived in data repositories wherever possible.
                      </p>

                      <p style={{"fontWeight":"bold"}}>Submission</p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Supply all
                        supplementary material in standard file formats.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Please
                        include in each file the following information: article
                        title, journal name, author names; affiliation and
                        e-mail address of the corresponding author.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; To
                        accommodate user downloads, please keep in mind that
                        larger-sized files may require very long download times
                        and that some users may experience other problems during
                        downloading.
                      </p>
                      <p style={{"fontWeight":"bold"}}>Audio, Video, and Animations</p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Aspect
                        ratio: 16:9 or 4:3
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Maximum file
                        size: 25 GB
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Minimum
                        video duration: 1 sec
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Supported
                        file formats: avi, wmv, mp4, mov, m2p, mp2, mpg, mpeg,
                        flv, mxf, mts, m4v, 3gp
                      </p>
                      <p style={{"fontWeight":"bold"}}>Text and Presentations</p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Submit your
                        material in PDF format; .doc or .ppt files are not
                        suitable for long-term viability.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; A collection
                        of figures may also be combined in a PDF file.
                      </p>
                      <p style={{"fontWeight":"bold"}}>Spreadsheets</p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Spreadsheets
                        should be submitted as .csv or .xlsx files (MS Excel).
                      </p>
                      <p style={{"fontWeight":"bold"}}>Specialized Formats</p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp;Spreadsheets
                        should be submitted as .csv or .xlsx files (MS Excel).
                      </p>
                      <p style={{"fontWeight":"bold"}}>Collecting Multiple Files</p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp;It is
                        possible to collect multiple files in a .zip or .gz
                        file.
                      </p>
                      <p style={{"fontWeight":"bold"}}>Numbering</p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp;If supplying
                        any supplementary material, the text must make specific
                        mention of the material as a citation, similar to that
                        of figures and tables.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp;Refer to the
                        supplementary files as “Online Resource”, e.g., "... as
                        shown in the animation (Online Resource 3)", “...
                        additional data are given in Online Resource 4”.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp;Name the
                        files consecutively, e.g. “ESM_3.mpg”, “ESM_4.pdf”.
                      </p>
                      <p style={{"fontWeight":"bold"}}>Captions</p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp;For each
                        supplementary material, please supply a concise caption
                        describing the content of the file.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp;Processing of
                        supplementary files
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp;Electronic
                        supplementary material will be published as received
                        from the author without any conversion, editing, or
                        reformatting.
                      </p>
                      <p style={{"fontWeight":"bold"}}>Accessibility</p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp;In order to
                        give people of all abilities and disabilities access to
                        the content of your supplementary files, please make
                        sure that
                      </p>

                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp;The
                        manuscript contains a descriptive caption for each
                        supplementary material
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp;Video files
                        do not contain anything that flashes more than three
                        times per second (so that users prone to seizures caused
                        by such effects are not put at risk)
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="faq-list">
                <ul>
                  <li data-aos="fade-up">
                    <i className="bx bi bi-diamond-half icon-help"></i>
                    <Link
                      style={{ color: "#19628d" }}
                      data-bs-toggle="collapse"
                      className="collapse collapsed"
                      data-bs-target="#faq-list-9"
                    >
                      {" "}
                      Policy on Gene Expression Measurements
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </Link>
                    <div
                      id="faq-list-9"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p className="resps">
                        IJRES will not publish manuscripts in which the
                        functional significance of changes in gene expression is
                        based on transcript data alone. It is essential to
                        provide supporting evidence for any such interpretation,
                        for example by providing measurement of changes in the
                        corresponding proteins or relevant physiological data.
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
                      {" "}
                      Ethical responsibilities of authors
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </Link>
                    <div
                      id="faq-list-10"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p className="resps">
                        This journal is committed to upholding the integrity of
                        the scientific record. As a member of the Committee on
                        Publication Ethics (COPE) the journal will follow the
                        COPE guidelines on how to deal with potential acts of
                        misconduct.
                      </p>

                      <p className="resps">
                        Authors should refrain from misrepresenting research
                        results which could damage the trust in the journal, the
                        professionalism of scientific authorship, and ultimately
                        the entire scientific endeavour. Maintaining integrity
                        of the research and its presentation can be achieved by
                        following the rules of good scientific practice, which
                        include:
                      </p>

                      <p>
                        The manuscript has not been submitted to more than one
                        journal for simultaneous consideration.
                      </p>

                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; The
                        manuscript has not been published previously (partly or
                        in full), unless the new work concerns an expansion of
                        previous work (please provide transparency on the re-use
                        of material to avoid the hint of text-recycling
                        (“self-plagiarism”)).
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; A single
                        study is not split up into several parts to increase the
                        quantity of submissions and submitted to various
                        journals or to one journal over time (e.g.
                        “salami-publishing”).
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; No data have
                        been fabricated or manipulated (including images) to
                        support your conclusions
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; No data,
                        text, or theories by others are presented as if they
                        were the author’s own (“plagiarism”). Proper
                        acknowledgements to other works must be given (this
                        includes material that is closely copied (near
                        verbatim), summarized and/or paraphrased), quotation
                        marks are used for verbatim copying of material, and
                        permissions are secured for material that is
                        copyrighted.
                      </p>
                      <p>
                        Important note: the journal may use software to screen
                        for plagiarism.
                      </p>

                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Consent to
                        submit has been received explicitly from all co-authors,
                        as well as from the responsible authorities - tacitly or
                        explicitly - at the institute/organization where the
                        work has been carried out, before the work is submitted.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Authors
                        whose names appear on the submission have contributed
                        sufficiently to the scientific work and therefore share
                        collective responsibility and accountability for the
                        results.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Authors are
                        strongly advised to ensure the correct author group,
                        corresponding author, and order of authors at
                        submission. Changes of authorship or in the order of
                        authors are not accepted after acceptance of a
                        manuscript.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Adding
                        and/or deleting authors and/or changing the order of
                        authors at revision stage may be justifiably warranted.
                        A letter must accompany the revised manuscript to
                        explain the reason for the change(s) and the
                        contribution role(s) of the added and/or deleted
                        author(s). Further documentation may be required to
                        support your request.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Requests for
                        addition or removal of authors as a result of authorship
                        disputes after acceptance are honored after formal
                        notification by the institute or independent body and/or
                        when there is agreement between all authors.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Upon request
                        authors should be prepared to send relevant
                        documentation or data in order to verify the validity of
                        the results. This could be in the form of raw data,
                        samples, records, etc. Sensitive information in the form
                        of confidential proprietary data is excluded.
                      </p>
                      <p className="resps">
                        If there is a suspicion of misconduct, the journal will
                        carry out an investigation following the COPE
                        guidelines. If, after investigation, the allegation
                        seems to raise valid concerns, the accused author will
                        be contacted and given an opportunity to address the
                        issue. If misconduct has been established beyond
                        reasonable doubt, this may result in the
                        Editor-in-Chief’s implementation of the following
                        measures, including, but not limited to:
                      </p>

                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; If the
                        article is still under consideration, it may be rejected
                        and returned to the author.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; If the
                        article has already been published online, depending on
                        the nature and severity of the infraction, either an
                        erratum will be placed with the article or in severe
                        cases complete retraction of the article will occur. The
                        reason must be given in the published erratum or
                        retraction note. Please note that retraction means that
                        the paper is maintained on the platform, watermarked
                        "retracted" and explanation for the retraction is
                        provided in a note linked to the watermarked article.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; The author’s
                        institution may be informed.
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
                      {" "}
                      Compliance with ethical standards
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </Link>
                    <div
                      id="faq-list-11"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p className="resps">
                        To ensure objectivity and transparency in research and
                        to ensure that accepted principles of ethical and
                        professional conduct have been followed, authors should
                        include information regarding sources of funding,
                        potential conflicts of interest (financial or
                        non-financial), informed consent if the research
                        involved human participants, and a statement on welfare
                        of animals if the research involved animals.
                      </p>

                      <p>
                        Authors should include the following statements (if
                        applicable) in a separate section entitled “Compliance
                        with Ethical Standards” when submitting a paper:
                      </p>

                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Disclosure
                        of potential conflicts of interest
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Research
                        involving Human Participants and/or Animals
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Informed
                        consent
                      </p>
                      <p className="resps">
                        Please note that standards could vary slightly per
                        journal dependent on their peer review policies (i.e.
                        single or double blind peer review) as well as per
                        journal subject discipline. Before submitting your
                        article check the instructions following this section
                        carefully.
                      </p>

                      <p className="resps">
                        The corresponding author should be prepared to collect
                        documentation of compliance with ethical standards and
                        send if requested during peer review or after
                        publication.
                      </p>

                      <p className="resps">
                        The Editors reserve the right to reject manuscripts that
                        do not comply with the above-mentioned guidelines. The
                        author will be held responsible for false statements or
                        failure to fulfill the above-mentioned guidelines.
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
                      {" "}
                      Disclosure of potential conflicts of interest
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </Link>
                    <div
                      id="faq-list-12"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p className="resps">
                        Authors must disclose all relationships or interests
                        that could have direct or potential influence or impart
                        bias on the work. Although an author may not feel there
                        is any conflict, disclosure of relationships and
                        interests provides a more complete and transparent
                        process, leading to an accurate and objective assessment
                        of the work. Awareness of a real or perceived conflicts
                        of interest is a perspective to which the readers are
                        entitled. This is not meant to imply that a financial
                        relationship with an organization that sponsored the
                        research or compensation received for consultancy work
                        is inappropriate. Examples of potential conflicts of
                        interests that are directly or indirectly related to the
                        research may include but are not limited to the
                        following:
                      </p>

                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Research
                        grants from funding agencies (please give the research
                        funder and the grant number)
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Honoraria
                        for speaking at symposia
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Financial
                        support for attending symposia
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Financial
                        support for educational programs
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Employment
                        or consultation
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Support from
                        a project sponsor
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Position on
                        advisory board or board of directors or other type of
                        management relationships
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Multiple
                        affiliations
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Financial
                        relationships, for example equity ownership or
                        investment interest
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Intellectual
                        property rights (e.g. patents, copyrights and royalties
                        from such rights)
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Holdings of
                        spouse and/or children that may have financial interest
                        in the work
                      </p>
                      <p className="resps">
                        In addition, interests that go beyond financial
                        interests and compensation (non-financial interests)
                        that may be important to readers should be disclosed.
                        These may include but are not limited to personal
                        relationships or competing interests directly or
                        indirectly tied to this research, or professional
                        interests or personal beliefs that may influence your
                        research.
                      </p>

                      <p className="resps">
                        The corresponding author should be prepared to collect
                        documentation of compliance with ethical standards and
                        send if requested during peer review or after
                        publication.
                      </p>

                      <p className="resps">
                        The corresponding author will include a summary
                        statement in the text of the manuscript in a separate
                        section before the reference list, that reflects what is
                        recorded in the potential conflict of interest
                        disclosure form(s). See below examples of disclosures:
                      </p>

                      <p className="resps">
                        Funding: This study was funded by X (grant number X).
                      </p>

                      <p className="resps">
                        Conflict of Interest: Author A has received research
                        grants from Company A. Author B has received a speaker
                        honorarium from Company X and owns stock in Company Y.
                        Author C is a member of committee Z.
                      </p>

                      <p className="resps">
                        If no conflict exists, the authors should state:
                      </p>

                      <p className="resps">
                        Conflict of Interest: The authors declare that they have
                        no conflict of interest.
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
                      data-bs-target="#faq-list-15"
                    >
                      {" "}
                      Research data policy
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </Link>
                    <div
                      id="faq-list-15"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p className="resps">
                        A submission to the journal implies that materials
                        described in the manuscript, including all relevant raw
                        data, will be freely available to any researcher wishing
                        to use them for non-commercial purposes, without
                        breaching participant confidentiality.
                      </p>

                      <p className="resps">
                        The journal strongly encourages that all datasets on
                        which the conclusions of the paper rely should be
                        available to readers. We encourage authors to ensure
                        that their datasets are either deposited in publicly
                        available repositories (where available and appropriate)
                        or presented in the main manuscript or additional
                        supporting files whenever possible General repositories
                        - for all types of research data - such as figshare and
                        Dryad may be used where appropriate.
                      </p>

                      <p className="resps">
                        Datasets that are assigned digital object identifiers
                        (DOIs) by a data repository may be cited in the
                        reference list. Data citations should include the
                        minimum information recommended by DataCite: authors,
                        title, publisher (repository name), identifier.
                      </p>

                      <p className="resps">
                        Where a widely established research community
                        expectation for data archiving in public repositories
                        exists, submission to a community-endorsed, public
                        repository is mandatory. Persistent identifiers (such as
                        DOIs and accession numbers) for relevant datasets must
                        be provided in the paper
                      </p>

                      <p>
                        For the following types of data set, submission to a
                        community-endorsed, public repository is mandatory:
                      </p>

                      <div className="table-responsive">
                        <table
                          style={{ margin: "40px", width: "95%" }}
                          className="table table-striped"
                        >
                          <tbody>
                            <tr>
                              <td>Mandatory deposition</td>
                              <td>Suitable repositories</td>
                            </tr>
                            <tr>
                              <td>Protein sequences</td>
                              <td>Uniprot</td>
                            </tr>
                            <tr>
                              <td>DNA and RNA sequences</td>
                              <td>
                                Genbank
                                <br />
                                DNA DataBank of Japan (DDBJ)
                                <br />
                                EMBL Nucleotide Sequence Database (ENA)
                              </td>
                            </tr>
                            <tr>
                              <td>DNA and RNA sequencing data</td>
                              <td>
                                NCBI Trace Archive
                                <br />
                                NCBI Sequence Read Archive (SRA)
                              </td>
                            </tr>
                            <tr>
                              <td>Genetic polymorphisms</td>
                              <td>
                                dbSNP
                                <br />
                                dbVar
                                <br />
                                European Variation Archive (EVA)
                              </td>
                            </tr>
                            <tr>
                              <td>Linked genotype and phenotype data</td>
                              <td>
                                dbGAP
                                <br />
                                The European Genome-phenome Archive (EGA)
                              </td>
                            </tr>
                            <tr>
                              <td>Macromolecular structure</td>
                              <td>
                                Worldwide Protein Data Bank (wwPDB)
                                <br />
                                Biological Magnetic Resonance Data Bank (BMRB)
                                <br />
                                Electron Microscopy Data Bank (EMDB)
                              </td>
                            </tr>
                            <tr>
                              <td>Microarray data (must be MIAME compliant)</td>
                              <td>
                                Gene Expression Omnibus (GEO) ArrayExpress
                              </td>
                            </tr>
                            <tr>
                              <td>Crystallographic data for small molecules</td>
                              <td>Cambridge Structural Database</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p style={{"fontWeight":"bold"}}>Data availability</p>
                      <p className="resps">
                        The journal encourages authors to provide a statement of
                        Data availability in their article. Data availability
                        statements should include information on where data
                        supporting the results reported in the article can be
                        found, including, where applicable, hyperlinks to
                        publicly archived datasets analysed or generated during
                        the study. Data availability statements can also
                        indicate whether data are available on request from the
                        authors and where no data are available, if appropriate.
                      </p>

                      <p>
                        Data Availability statements can take one of the
                        following forms (or a combination of more than one if
                        required for multiple datasets):
                      </p>

                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; The datasets
                        generated during and/or analysed during the current
                        study are available in the [NAME] repository,
                        [PERSISTENT WEB LINK TO DATASETS]
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; The datasets
                        generated during and/or analysed during the current
                        study are not publicly available due [REASON WHY DATA
                        ARE NOT PUBLIC] but are available from the corresponding
                        author on reasonable request.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; The datasets
                        generated during and/or analysed during the current
                        study are available from the corresponding author on
                        reasonable request.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; Data sharing
                        not applicable to this article as no datasets were
                        generated or analysed during the current study.
                      </p>
                      <p className="resps">
                        <i className="bi bi-caret-right-fill"></i>&nbsp; All data
                        generated or analysed during this study are included in
                        this published article [and its supplementary
                        information files].
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
                      {" "}
                      After acceptance
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </Link>
                    <div
                      id="faq-list-13"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p className="resps">
                        Upon acceptance of your article you will receive a link
                        through mail where you can sign the Copyright Transfer
                        Statement and send it back to editor.
                      </p>

                      <p className="resps">
                        Once this procedure has been completed, your article
                        will be processed and you will receive the proofs.
                      </p>

                      <p style={{"fontWeight":"bold"}}>Copyright transfer</p>
                      <p className="resps">
                        Authors will be asked to transfer copyright of the
                        article to the Publisher (or grant the Publisher
                        exclusive publication and dissemination rights). This
                        will ensure the widest possible protection and
                        dissemination of information under copyright laws.
                      </p>

                      <p style={{"fontWeight":"bold"}}>Offprints</p>
                      <p className="resps">
                        Offprints can be ordered by the corresponding author.
                      </p>

                      <p style={{"fontWeight":"bold"}}>Color illustrations</p>
                      <p className="resps">
                        Publication of color illustrations is free of charge.
                      </p>

                      <p style={{"fontWeight":"bold"}}>Proof reading</p>
                      <p className="resps">
                        The purpose of the proof is to check for typesetting or
                        conversion errors and the completeness and accuracy of
                        the text, tables and figures. Substantial changes in
                        content, e.g., new results, corrected values, title and
                        authorship, are not allowed without the approval of the
                        Editor.
                      </p>

                      <p className="resps">
                        After online publication, further changes can only be
                        made in the form of an Erratum, which will be
                        hyperlinked to the article.
                      </p>

                      <p style={{"fontWeight":"bold"}}>Online First</p>
                      <p className="resps">
                        The article will be published online after receipt of
                        the corrected proofs. This is the official first
                        publication citable with the DOI. After release of the
                        printed version, the paper can also be cited by issue
                        and page numbers.
                      </p>

                      <p style={{"fontWeight":"bold"}}>Copyright and license term – CC BY</p>
                      <p className="resps">
                        Open Choice articles do not require transfer of
                        copyright as the copyright remains with the author. In
                        opting for open access, the author(s) agree to publish
                        the article under the Creative Commons Attribution
                        License.
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
                      {" "}
                      Refund Policy
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </Link>
                    <div
                      id="faq-list-14"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p className="resps">
                        Authors need to agree with our Refund Policy before
                        payment of the article processing charge.
                      </p>

                      <p className="resps">
                        An author (he/she) is given sufficient time to decide
                        whether to accept the article processing charges for
                        publication of the manuscript in our journal (i.e., not
                        at submission but after the time of acceptance of the
                        article). Once the author(s) accepts the article
                        processing charges, the respective journal of SSRG®
                        initiates the production process for the revised
                        manuscript. Therefore, no refund or cancellation will be
                        considered after the completion of payment and final
                        publication of the submitted manuscript.
                      </p>

                      <p className="resps">
                        Any kind of refund will not be issued if the author
                        wants to withdraw/retract his/her paper from any SSRG®
                        journals after completion of payment and after the final
                        publication. After payment and publication, if the
                        author wishes to withdraw his/her paper for revision and
                        resubmission, then no refund will be provided from
                        SSRG®. No refunds or cancellation of debts will be
                        issued if the paper is removed due to Copyright
                        Infringement Claims.
                      </p>

                      <p className="resps">
                        Any query regarding Refund or cancellation contact :{" "}
                        <em style={{ fontWeight: "500" }}>
                          queries@ssrgjournals.org
                        </em>
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

export default Paper;
