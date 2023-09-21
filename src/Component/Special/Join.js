import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Top from "../Top/Top";
import { useEffect } from "react";
function Join() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Join the IJRES Journal Editorial Team as an Editor</title>
          <link rel="canonical" href="https://ijresonline.com/join-as-editor" />
          <meta
            name="title"
            content="Join the IJRES Journal Editorial Team as an Editor"
          />
          <meta
            name="description"
            content="The IJRES Journal invites qualified researchers to join its editorial team
as editors. As an editor, you will play a vital role in ensuring the quality and integrity of published
research."
          />

          <meta
            name="keywords"
            content="IJRES journal, editorial team, join as editor, qualifications, responsibilities,
benefits, chief editor, editorial team, academic editor, managing editors, guest editor, review editor, editor
team, research editors, journalistic editing, associate editor journal."
          />
          <meta property="og:type" content="Website" />
          <meta
            property="og:site_name"
            content="Seventh Sense Research Group"
          />
          <meta
            property="og:url"
            content="https://ijresonline.com/join-as-editor"
          />
          <meta
            property="og:title"
            content="Join the IJRES Journal Editorial Team as an Editor"
          />
          <meta
            property="og:description"
            content="The IJRES Journal invites qualified researchers to join its editorial
team as editors. As an editor, you will play a vital role in ensuring the quality and integrity of published
research."
          />
          <meta property="og:image" content="image url" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Join the IJRES Journal Editorial Team as an Editor"
          />
          <meta
            name="twitter:description"
            content="The IJRES Journal invites qualified researchers to join its
editorial team as editors. As an editor, you will play a vital role in ensuring the quality and integrity of
published research."
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
              <h2>Join as Editor</h2>
            </div>

            <p className="resps">
              The editorial Board Member is a key part of the International
              Journal of Recent Engineering Science - IJRES. The key role of a
              journal editor is to promote scholarship in the specialist field
              associated with the journal while also promoting the journal as
              the best journal to publish in. The editor will need to encourage
              new and established authors to submit articles and set up a
              reliable panel of expert reviewers. Editors are also responsible
              for offering feedback to reviewers when required and ensure that
              any feedback to authors is constructive.
            </p>
            <p className="resps">
              If you are interested in being an IJRES reviewer, may send the
              following information to the IJRES editor (
              <em>
                <a
                  style={{ color: "#19628d" }}
                  href="mailto:editor@ijresonline.com"
                >
                  editor@ijresonline.com
                </a>
              </em>
              ). You will receive an email shortly which lets you know whether
              you have been selected as an IJRES reviewer or not.
            </p>
            <p className="resps">
              Note: Ph.D. is the minimum requirement for applying editorial
              board.
            </p>
            <p className="resps">
              The reviewer should send the complete resume (mail to:
              <em>
                {" "}
                <a
                  style={{ color: "#19628d" }}
                  href="mailto:editor@ijresonline.com"
                >
                  editor@ijresonline.com
                </a>
              </em>
              ).
            </p>
            <p
              style={{ color: "#0d4c89", fontWeight: "bold" }}
              className="resp"
            >
              Resume should contain following information:
            </p>
            <p className="resps">Name:</p>
            <p className="resps">Your Photograph :</p>
            <p className="resps">Title (Mr/Mrs/Dr/Prof):</p>
            <p className="resps">Profession:</p>
            <p className="resps">Affiliation / Institution or Company:</p>
            <p className="resps">Country:</p>
            <p className="resps">Email:</p>
            <p className="resps">Telephone Number:</p>
            <p className="resps">
              The domain of research: (list your areas of expertise):
            </p>
            <p className="resps">List of Publications:</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Join;
