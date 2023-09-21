import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Top from "../Top/Top";
import { useEffect } from "react";
function Step() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            Expert Reviewer Guidelines: Step-by-Step | International Journal of
            Recent Engineering Science
          </title>

          <link
            rel="canonical"
            href="https://ijresonline.com/for-reviewer/step-by-step-reviewer"
          />
          <meta
            name="title"
            content="Expert Reviewer Guidelines: Step-by-Step | International Journal of Recent
Engineering Science"
          />
          <meta
            name="description"
            content="For reviewers to ensure high-quality manuscript review in the
International Journal of Recent Engineering Science."
          />
          <meta
            name="keywords"
            content="paper review, paper review process in ijres, paper review steps in ssrg,
journal publication free of charge, research paper review, research paper review guidelines, research paper
review process, journal reviewer process, journal review guide, international journal reviewer, paper review
process, journal reviewer guidelines, manuscript reviewer guidelines"
          />
          <meta property="og:type" content="Website" />
          <meta
            property="og:site_name"
            content="Seventh Sense Research Group"
          />
          <meta
            property="og:url"
            content="https://ijresonline.com/for-reviewer/step-by-step-reviewer"
          />
          <meta
            property="og:title"
            content="Expert Reviewer Guidelines: Step-by-Step | International Journal of
Recent Engineering Science"
          />
          <meta
            property="og:description"
            content="For reviewers to ensure high-quality manuscript review in the
International Journal of Recent Engineering Science."
          />
          <meta property="og:image" content="image url" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Expert Reviewer Guidelines: Step-by-Step | International Journal of
Recent Engineering Science"
          />
          <meta
            name="twitter:description"
            content="For reviewers to ensure high-quality manuscript review in the
International Journal of Recent Engineering Science."
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
              <h2>Step by step guide to reviewers</h2>
            </div>
            <p className="resps">
              When you receive an invitation to peer review, you should be sent
              a copy of the paper's abstract to help you decide whether you wish
              to do the review. Try to respond to invitations promptly - it will
              prevent delays. It is also important at this stage to declare any
              potential Conflict of Interest.
            </p>

            <h5> Overview of the Review Report Format</h5>
            <p className="resps">
              The structure of the review report varies between journals. Some
              follow an informal structure, while others have a more formal
              approach.
            </p>

            <h5>Informal Structure</h5>
            <p className="resps">
              Many journals don't provide criteria for reviews beyond asking for
              your 'analysis of merits'. In this case, you may wish to
              familiarize yourself with examples of other reviews done for the
              journal, which the editor should be able to provide or, as you
              gain experience, rely on your own evolving style.
            </p>

            <h5>Formal Structure</h5>
            <p className="resps">
              Other journals require a more formal approach. Sometimes they will
              ask you to address specific questions in your review via a
              questionnaire. Or they might want you to rate the manuscript on
              various attributes using a scorecard. Often you can't see these
              until you log in to submit your review. So when you agree to the
              work, it's worth checking for any journal-specific guidelines and
              requirements. If there are formal guidelines, let them direct the
              structure of your review.
            </p>
            <h5>In Both Cases</h5>
            <p className="resps">
              Whether specifically required by the reporting format or not, you
              should expect to compile comments to authors and possibly
              confidential ones to editors only.
            </p>
            <h5>The First Read-Through</h5>
            <p className="resps">
              Following the invitation to review, when you'll have received the
              article abstract, you should already understand the aims, key data
              and conclusions of the manuscript. If you don't, make a note now
              that you need to feedback on how to improve those sections.
            </p>
            <p className="resps">
              The first read-through is a skim-read. It will help you form an
              initial impression of the paper and get a sense of whether your
              eventual recommendation will be to accept or reject the paper.
            </p>
            <h5>First Read Considerations</h5>
            <p className="resps">
              Keep a pen and paper handy when skim-reading.
            </p>

            <p className="resps">
              Try to bear in mind the following questions - they'll help you
              form your overall impression:
            </p>

            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; What is the main
              question addressed by the research? Is it relevant and
              interesting?
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; How original is the
              topic? What does it add to the subject area compared with other
              published material?
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Are the conclusions
              consistent with the evidence and arguments presented? Do they
              address the main question posed?
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; If the author is
              disagreeing significantly with the current academic consensus, do
              they have a substantial case? If not, what would be required to
              make their case credible?
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; If the paper includes
              tables or figures, what do they add to the paper? Do they aid
              understanding or are they superfluous?
            </p>
            <h5>Spotting Potential Major Flaws</h5>
            <p className="resps">
              While you should read the whole paper, making the right choice of
              what to read first can save time by flagging major problems early
              on.
            </p>

            <h5>Examples of possibly major flaws include:</h5>
            <p className="resps">
              {" "}
              <i className="bi bi-caret-right-fill"></i>&nbsp; Drawing a conclusion
              that is contradicted by the author's own statistical or
              qualitative evidence
            </p>
            <p className="resps">
              {" "}
              <i className="bi bi-caret-right-fill"></i>&nbsp; The use of a
              discredited method
            </p>
            <p className="resps">
              {" "}
              <i className="bi bi-caret-right-fill"></i>&nbsp; Ignoring a process
              that is known to have a strong influence on the area under study
            </p>
            <p className="resps">
              If experimental design features prominently in the paper, first
              check that the methodology is sound - if not, this is likely to be
              a major flaw
            </p>

            <h5>You might examine:</h5>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; The sampling in
              analytical papers
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; The sufficient use of
              control experiments
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; The precision of
              process data
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; The regularity of
              sampling in time-dependent studies
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; The validity of
              questions, the use of a detailed methodology and the data analysis
              being done systematically (in qualitative research)
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; That qualitative
              research extends beyond the author's opinions, with sufficient
              descriptive elements and appropriate quotes from interviews or
              focus groups
            </p>
            <h5>Major Flaws in Information</h5>
            <p className="resps">
              If methodology is less of an issue, it's often a good idea to look
              at the data tables, figures or images first. Especially in science
              research, it's all about the information gathered. If there are
              critical flaws in this, it's very likely the manuscript will need
              to be rejected. Such issues include:
            </p>

            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Insufficient data
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Statistically
              non-significant variations
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Unclear data tables
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Contradictory data
              that either are not self-consistent or disagree with the
              conclusions
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Confirmatory data that
              adds little, if anything, to current understanding - unless strong
              arguments for such repetition are made
            </p>
            <p className="resps">
              If you find a major problem, note your reasoning and clear
              supporting evidence (including citations).
            </p>

            <h5>Concluding the First Reading</h5>
            <p className="resps">
              After the initial read and using your notes, including those of
              any major flaws you found, draft the first two paragraphs of your
              review - the first summarizing the research question addressed and
              the second the contribution of the work. If the journal has a
              prescribed reporting format, this draft will still help you
              compose your thoughts.
            </p>

            <h5>The First Paragraph</h5>
            <p className="resps">
              This should state the main question addressed by the research and
              summarize the goals, approaches, and conclusions of the paper. It
              should:
            </p>
            <p className="resps">
              {" "}
              <i className="bi bi-caret-right-fill"></i>&nbsp; Help the editor
              properly contextualize the research and add weight to your
              judgement
            </p>
            <p className="resps">
              {" "}
              <i className="bi bi-caret-right-fill"></i>&nbsp; Show the author what
              key messages are conveyed to the reader, so they can be sure they
              are achieving what they set out to do
            </p>
            <p className="resps">
              {" "}
              <i className="bi bi-caret-right-fill"></i>&nbsp; Focus on successful
              aspects of the paper so the author gets a sense of what they've
              done well
            </p>
            <h5>The Second Paragraph</h5>
            <p className="resps">
              This should provide a conceptual overview of the contribution of
              the research. So consider:
            </p>

            <p className="resps">
              {" "}
              <i className="bi bi-caret-right-fill"></i>&nbsp; Is the paper's premise
              interesting and important?
            </p>
            <p className="resps">
              {" "}
              <i className="bi bi-caret-right-fill"></i>&nbsp; Are the methods used
              appropriate?
            </p>
            <p className="resps">
              {" "}
              <i className="bi bi-caret-right-fill"></i>&nbsp; Do the data support
              the conclusions?
            </p>
            <p className="resps">
              After drafting these two paragraphs, you should be in a position
              to decide whether this manuscript is seriously flawed and should
              be rejected (see the next section). Or whether it is publishable
              in principle and merits a detailed, careful read through.
            </p>
            <h5>Rejection after the First Reading</h5>
            <p className="resps">
              Even if you are coming to the opinion that an article has serious
              flaws, make sure you read the whole paper. This is very important
              because you may find some really positive aspects that can be
              communicated to the author. This could help them with future
              submissions.
            </p>

            <p className="resps">
              A full read-through will also make sure that any initial concerns
              are indeed correct and fair. After all, you need the context of
              the whole paper before deciding to reject. If you still intend to
              recommend rejection, see the section "When recommending
              rejection."
            </p>

            <h5>Before Starting the Second Read-Through</h5>
            <p className="resps">
              Once the paper has passed your first read and you've decided the
              article is publishable in principle, one purpose of the second,
              detailed read-through is to help prepare the manuscript for
              publication. Of course, you may still decide to reject it
              following a second reading.
            </p>

            <p className="resps">
              The benchmark for acceptance is whether the manuscript makes a
              useful contribution to the knowledge base or understanding of the
              subject matter. It need not be fully complete research - it may be
              an interim paper. After all research is an incomplete, on-going
              project by its nature. The detailed read-through should take no
              more than an hour for the moderately experienced reviewer.
            </p>

            <h5>Preparation</h5>
            <p className="resps">To save time and simplify the review:</p>

            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Don't rely solely upon
              inserting comments on the manuscript document - make separate
              notes
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Try to group similar
              concerns or praise together
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; If using a review
              program to note directly onto the manuscript, still try grouping
              the concerns and praise in separate notes - it helps later
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Note line numbers of
              text upon which your notes are based - this helps you find items
              again and also aids those reading your review
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Keep images, graphs
              and data tables in clear view - either print them off or have them
              in view on a second computer monitor or window
            </p>
            <p className="resps">
              Now that you have completed your preparations, you're ready to
              spend an hour or so reading carefully through the manuscript.
            </p>

            <h5>Doing the Second Read-Through</h5>
            <p className="resps">
              As you're reading through the manuscript for a second time, you'll
              need to keep in mind the argument's construction, the clarity of
              the language and content.
            </p>

            <p className="resps">
              With regard to the argument’s construction, you should identify:
            </p>

            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Any places where the
              meaning is unclear or ambiguous
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Any factual errors
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Any invalid arguments
            </p>
            <p className="resps">You may also wish to consider:</p>

            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Does the title
              properly reflect the subject of the paper?
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Does the abstract
              provide an accessible summary of the paper?
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Do the keywords
              accurately reflect the content?
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Is the paper an
              appropriate length?
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Are the key messages
              short, accurate and clear?
            </p>
            <h5>Check the Language</h5>
            <p className="resps">
              Not every submission is well written. Part of your role is to make
              sure that the text’s meaning is clear.
            </p>

            <p className="resps">
              If the article is difficult to understand, you should have
              rejected it already. However, if the language is poor but you
              understand the core message, see if you can suggest improvements
              to fix the problem:
            </p>

            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Are there certain
              aspects that could be communicated better, such as parts of the
              discussion?
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Should the authors
              consider resubmitting to the same journal after language
              improvements?
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Would you consider
              looking at the paper again once these issues are dealt with?
            </p>
            <h5>On Grammar and Punctuation</h5>
            <p className="resps">
              Your primary role is judging the research content. Don't spend
              time polishing grammar or spelling. Editors will make sure that
              the text is at a high standard before publication. However, if you
              spot grammatical errors that affect clarity of meaning, then it's
              important to highlight these. Expect to suggest such amendments -
              it's rare for a manuscript to pass review with no corrections.
            </p>

            <p className="resps">
              The Second Read-Through: Section by Section Guidance
            </p>

            <h5>1. The Introduction</h5>
            <p className="resps">A well-written introduction:</p>

            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Sets out the argument
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Summarizes recent
              research related to the topic
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Highlights gaps in
              current understanding or conflicts in current knowledge
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Establishes the
              originality of the research aims by demonstrating the need for
              investigations in the topic area
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Gives a clear idea of
              the target readership, why the research was carried out and the
              novelty and topicality of the manuscript
            </p>
            <h5>Originality and Topicality</h5>
            <p className="resps">
              Originality and topicality can only be established in the light of
              recent authoritative research. For example, it's impossible to
              argue that there is a conflict in current understanding by
              referencing articles that are 10 years old.
            </p>

            <p className="resps">
              Authors may make the case that a topic hasn't been investigated in
              several years and that new research is required. This point is
              only valid if researchers can point to recent developments in data
              gathering techniques or to research in indirectly related fields
              that suggest the topic needs revisiting. Clearly, authors can only
              do this by referencing recent literature. Obviously, where older
              research is seminal or where aspects of the methodology rely upon
              it, then it is perfectly appropriate for authors to cite some
              older papers.
            </p>

            <p className="resps">
              <span style={{ fontWeight: "bold" }}>Aims</span> It's common for
              the introduction to end by stating the research aims. By this
              point you should already have a good impression of them - if the
              explicit aims come as a surprise, then the introduction needs
              improvement.
            </p>

            <h5>2. Materials and Methods</h5>

            <p className="resps">
              Academic research should be replicable, repeatable and robust -
              and follow best practice.
            </p>
            <p className="resps">Replicable Research</p>
            <p className="resps">This makes sufficient use of:</p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Control experiments
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Repeated analyses
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Repeated experiments
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Sampling
            </p>
            <p className="resps">
              These are used to make sure observed trends are not due to chance
              and that the same experiment could be repeated by other
              researchers - and result in the same outcome. Statistical analyses
              will not be sound if methods are not replicable. Where research is
              not replicable, the paper should be recommended for rejection.
            </p>
            <h5>Repeatable Methods</h5>
            <p className="resps">
              These give enough detail so that other researchers are able to
              carry out the same research. For example, equipment used or
              sampling methods should all be described in detail so that others
              could follow the same steps. Where methods are not detailed
              enough, it's usual to ask for the methods section to be revised.
            </p>
            <p className="resps">Robust Research</p>
            <p className="resps">
              This has enough data points to make sure the data are reliable. If
              there are insufficient data, it might be appropriate to recommend
              revision. You should also consider whether there is any in-built
              bias not nullified by the control experiments.
            </p>
            <p className="resps">Best Practice</p>
            <h5>During these checks you should keep in mind best practice:</h5>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Standard guidelines
              were followed (e.g. the CONSORT Statement for reporting randomized
              trials)
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; The health and safety
              of all participants in the study was not compromised
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Ethical standards were
              maintained
            </p>
            <p className="resps">
              If the research fails to reach relevant best practice standards,
              it's usual to recommend rejection. What's more, you don't then
              need to read any further.
            </p>
            <h5>3. Results and Discussion</h5>
            <p className="resps">
              This section should tell a coherent story - What happened? What
              was discovered or confirmed?
            </p>
            <p className="resps">
              Certain patterns of good reporting need to be followed by the
              author:
            </p>
            <p className="resps">
              {" "}
              <i className="bi bi-caret-right-fill"></i>&nbsp; They should start by
              describing in simple terms what the data show
            </p>
            <p className="resps">
              {" "}
              <i className="bi bi-caret-right-fill"></i>&nbsp; They should make
              reference to statistical analyses, such as significance or
              goodness of fit
            </p>
            <p className="resps">
              {" "}
              <i className="bi bi-caret-right-fill"></i>&nbsp; Once described, they
              should evaluate the trends observed and explain the significance
              of the results to wider understanding. This can only be done by
              referencing published research
            </p>
            <p className="resps">
              {" "}
              <i className="bi bi-caret-right-fill"></i>&nbsp; The outcome should be
              a critical analysis of the data collected
            </p>
            <p className="resps">
              Discussion should always, at some point, gather all the
              information together into a single whole. Authors should describe
              and discuss the overall story formed. If there are gaps or
              inconsistencies in the story, they should address these and
              suggest ways future research might confirm the findings or take
              the research forward.
            </p>
            <h5>4. Conclusions</h5>
            <p className="resps">
              This section is usually no more than a few paragraphs and may be
              presented as part of the results and discussion, or in a separate
              section. The conclusions should reflect upon the aims - whether
              they were achieved or not - and, just like the aims, should not be
              surprising. If the conclusions are not evidence-based, it's
              appropriate to ask for them to be re-written.
            </p>
            <h5>5. Information Gathered: Images, Graphs and Data Tables</h5>
            <p className="resps">
              If you find yourself looking at a piece of information from which
              you cannot discern a story, then you should ask for improvements
              in presentation. This could be an issue with titles, labels,
              statistical notation or image quality.
            </p>
            <p className="resps">
              Where information is clear, you should check that:
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; The results seem
              plausible, in case there is an error in data gathering
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; The trends you can see
              support the paper's discussion and conclusions
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; There are sufficient
              data. For example, in studies carried out over time are there
              sufficient data points to support the trends described by the
              author?
            </p>
            <p className="resps">
              You should also check whether images have been edited or
              manipulated to emphasize the story they tell. This may be
              appropriate but only if authors report on how the image has been
              edited (e.g. by highlighting certain parts of an image).
            </p>
            <p className="resps">
              Where you feel that an image has been edited or manipulated
              without explanation, you should highlight this in a confidential
              comment to the editor in your report.
            </p>
            <h5>6. List of References</h5>
            <p className="resps">
              You will need to check referencing for accuracy, adequacy and
              balance.
            </p>
            <h5>Accuracy</h5>
            <p className="resps">
              Where a cited article is central to the author's argument, you
              should check the accuracy and format of the reference - and bear
              in mind different subject areas may use citations differently.
              Otherwise, it's the editor’s role to exhaustively check the
              reference section for accuracy and format.
            </p>
            <h5>Adequacy</h5>
            <p className="resps">
              You should consider if the referencing is adequate:
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Are important parts of
              the argument poorly supported?
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Are there published
              studies that show similar or dissimilar trends that should be
              discussed?
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; If a manuscript only
              uses half the citations typical in its field, this may be an
              indicator that referencing should be improved - but don't be
              guided solely by quantity
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; References should be
              relevant, recent and readily retrievable
            </p>
            <h5>Balance</h5>
            <p className="resps">
              Check for a well-balanced list of references that is:
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Helpful to the reader
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Fair to competing
              authors
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Not over-reliant on
              self-citation
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Gives due recognition
              to the initial discoveries and related work that led to the work
              under assessment
            </p>
            <p className="resps">
              You should be able to evaluate whether the article meets the
              criteria for balanced referencing without looking up every
              reference.
            </p>
            <h5>7. Plagiarism</h5>
            <p className="resps">
              By now you will have a deep understanding of the paper's content -
              and you may have some concerns about plagiarism.
            </p>
            <h5>Identified Concern</h5>
            <p className="resps">
              If you find - or already knew of - a very similar paper, this may
              be because the author overlooked it in their own literature
              search. Or it may be because it is very recent or published in a
              journal slightly outside their usual field.
            </p>
            <p className="resps">
              You may feel you can advise the author how to emphasize the novel
              aspects of their own study, so as to better differentiate it from
              similar research. If so, you may ask the author to discuss their
              aims and results, or modify their conclusions, in light of the
              similar article. Of course, the research similarities may be so
              great that they render the work unoriginal and you have no choice
              but to recommend rejection.
            </p>
            <h5>Suspected Concern</h5>
            <p className="resps">
              If you suspect plagiarism, including self-plagiarism, but cannot
              recall or locate exactly what is being plagiarized, notify the
              editor of your suspicion and ask for guidance. Most editors have
              access to software that can check for plagiarism.
            </p>
            <p className="resps">
              Editors are not out to police every paper, but when plagiarism is
              discovered during peer review it can be properly addressed ahead
              of publication. If plagiarism is discovered only after
              publication, the consequences are worse for both authors and
              readers, because a retraction may be necessary.
            </p>
            <p className="resps">
              For detailed guidelines see COPE's Ethical guidelines for
              reviewers.
            </p>
            <h5>8. Search Engine Optimization (SEO)</h5>
            <p className="resps">
              After the detailed read-through, you will be in a position to
              advise whether the title, abstract and key words are optimized for
              search purposes. In order to be effective, good SEO terms will
              reflect the aims of the research.
            </p>
            <p className="resps">
              A clear title and abstract will improve the paper's search engine
              rankings and will influence whether the user finds and then
              decides to navigate to the main article. The title should contain
              the relevant SEO terms early on. This has a major effect on the
              impact of a paper, since it helps it appear in search results. A
              poor abstract can then lose the reader's interest and undo the
              benefit of an effective title - whilst the paper's abstract may
              appear in search results, the potential reader may go no further.
            </p>
            <p className="resps">
              So ask yourself, while the abstract may have seemed adequate
              during earlier checks, does it:
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Do justice to the
              manuscript in this context?
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Highlight important
              findings sufficiently?
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Present the most
              interesting data?
            </p>
            <h5>How to Structure Your Report</h5>
            <p className="resps">
              If there is a formal report format, remember to follow it. This
              will often comprise a range of questions followed by comment
              sections. Try to answer all the questions. They are there because
              the editor felt that they are important. If you're following an
              informal report format you could structure your report in three
              sections: summary, major issues, minor issues.
            </p>
            <h5>Summary</h5>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Give positive feedback
              first. Authors are more likely to read your review if you do so.
              But don't overdo it if you will be recommending rejection
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Briefly summarize what
              the paper is about and what the findings are
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Try to put the
              findings of the paper into the context of the existing literature
              and current knowledge
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Indicate the
              significance of the work and if it is novel or mainly confirmatory
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Indicate the work's
              strengths, its quality and completeness
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; State any major flaws
              or weaknesses and note any special considerations. For example, if
              previously held theories are being overlooked
            </p>
            <h5>Major Issues</h5>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Are there any major
              flaws? State what they are and what the severity of their impact
              is on the paper
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Has similar work
              already been published without the authors acknowledging this?
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Are the authors
              presenting findings that challenge current thinking? Is the
              evidence they present strong enough to prove their case? Have they
              cited all the relevant work that would contradict their thinking
              and addressed it appropriately?
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; If major revisions are
              required, try to indicate clearly what they are
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Are there any major
              presentational problems? Are figures & tables, language and
              manuscript structure all clear enough for you to accurately assess
              the work?
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Are there any ethical
              issues? If you are unsure it may be better to disclose these in
              the confidential comments section
            </p>
            <h5>Minor Issues</h5>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Are there places where
              meaning is ambiguous? How can this be corrected?
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Are the correct
              references cited? If not, which should be cited instead/also? Are
              citations excessive, limited, or biased?
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Are there any factual,
              numerical or unit errors? If so, what are they?
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Are all tables and
              figures appropriate, sufficient, and correctly labelled? If not,
              say which are not
            </p>
            <h5>On Presentation and Style</h5>
            <p className="resps">
              {" "}
              Your review should ultimately help the author improve their
              article. So be polite, honest and clear. You should also try to be
              objective and constructive, not subjective and destructive.
            </p>
            <p className="resps">You should also:</p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Write clearly and so
              you can be understood by people whose first language is not
              English
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Avoid complex or
              unusual words, especially ones that would even confuse native
              speakers
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Number your points and
              refer to page and line numbers in the manuscript when making
              specific comments
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; If you have been asked
              to only comment on specific parts or aspects of the manuscript,
              you should indicate clearly which these are
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Treat the author's
              work the way you would like your own to be treated
            </p>
            <h5>Criticisms & Confidential Comments to Editors</h5>
            <p className="resps">
              Most journals give reviewers the option to provide some
              confidential comments to editors. Often this is where editors will
              want reviewers to state their recommendation - see the next
              section - but otherwise this area is best reserved for
              communicating malpractice such as suspected plagiarism, fraud,
              unattributed work, unethical procedures, duplicate publication,
              bias or other conflicts of interest.
            </p>
            <p className="resps">
              However, this doesn't give reviewers permission to 'backstab' the
              author. Authors can't see this feedback and are unable to give
              their side of the story unless the editor asks them to. So in the
              spirit of fairness, write comments to editors as though authors
              might read them too.
            </p>
            <h5>The Recommendation</h5>
            <p className="resps">
              Most journals give reviewers the option to provide some
              confidential comments to editors. Often this is where editors will
              want reviewers to state their recommendation, but otherwise this
              area is best reserved for communicating malpractice such as
              suspected plagiarism, fraud, unattributed work, unethical
              procedures, duplicate publication, bias or other conflicts of
              interest.
            </p>
            <p className="resps">
              Reviewers should check the preferences of individual journals as
              to where they want review decisions to be stated. In particular,
              bear in mind that some journals will not want the recommendation
              included in any comments to authors, as this can cause editors
              difficulty later for more advice about working with editors.
            </p>
            <p className="resps">
              You will normally be asked to indicate your recommendation (e.g.
              accept, reject, revise and resubmit, etc.) from a fixed-choice
              list and then to enter your comments into a separate text box.
            </p>
            <h5>Recommending Acceptance</h5>
            <p className="resps">
              If you're recommending acceptance, give details outlining why, and
              if there are any areas that could be improved. Don't just give a
              short, cursory remark such as 'great, accept'.
            </p>
            <h5>Recommending Revision</h5>
            <p className="resps">
              Where improvements are needed, a recommendation for major or minor
              revision is typical. You may also choose to state whether you opt
              in or out of the post-revision review too. If recommending
              revision, state specific changes you feel need to be made. The
              author can then reply to each point in turn.
            </p>
            <p className="resps">
              Some journals offer the option to recommend rejection with the
              possibility of resubmission – this is most relevant where
              substantial, major revision is necessary.
            </p>
            <h5>Recommending Rejection</h5>
            <p className="resps">
              If recommending rejection or major revision, state this clearly in
              your review.
            </p>
            <p className="resps">When Recommending Rejection</p>
            <p className="resps">
              Where manuscripts have serious flaws you should not spend any time
              polishing the review you've drafted or give detailed advice on
              presentation.
            </p>
            <p className="resps">
              In your recommendations for the author, you should:
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Give constructive
              feedback describing ways that they could improve the research
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Keep the focus on the
              research and not the author. This is an extremely important part
              of your job as a reviewer
            </p>
            <p className="resps">
              <i className="bi bi-caret-right-fill"></i>&nbsp; Avoid making critical
              confidential comments to the editor while being polite and
              encouraging to the author - the latter may not understand why
              their manuscript has been rejected. Also, they won't get feedback
              on how to improve their research and it could trigger an appeal
            </p>
            <p className="resps">
              Remember to give constructive criticism even if recommending
              rejection. This helps developing researchers improve their work
              and explains to the editor why you felt the manuscript should not
              be published.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Step;
