import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Top from "../Top/Top";
import { useEffect } from "react";
function Open() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            Open Access Publishing: Guidelines for Authors | IJRES Journal
          </title>
          <link
            rel="canonical"
            href="https://ijresonline.com/for-authors/openaccess-author"
          />
          <meta
            name="title"
            content="Open Access Publishing: Guidelines for Authors | IJRES Journal"
          />
          <meta
            name="description"
            content="IJRES Journal&#39;s open access publishing page provides authors with
comprehensive guidelines for submitting their research manuscripts."
          />
          <meta
            name="keywords"
            content="Open access publishing, author guidelines, research manuscript, scholarly
publishing, open access policies, scientific publishing, IJRES Journal."
          />
          <meta property="og:type" content="Website" />
          <meta
            property="og:site_name"
            content="Seventh Sense Research Group"
          />
          <meta
            property="og:url"
            content="https://ijresonline.com/for-authors/openaccess-author"
          />
          <meta
            property="og:title"
            content="Open Access Publishing: Guidelines for Authors | IJRES Journal"
          />
          <meta
            property="og:description"
            content="IJRES Journal&#39;s open access publishing page provides authors
with comprehensive guidelines for submitting their research manuscripts."
          />
          <meta property="og:image" content="image url" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Open Access Publishing: Guidelines for Authors | IJRES Journal"
          />
          <meta
            name="twitter:description"
            content="IJRES Journal&#39;s open access publishing page provides authors
with comprehensive guidelines for submitting their research manuscripts."
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
              <h2>Open Access</h2>
            </div>

            <div className="resps" style={{ marginTop: "20px" }}>
              {" "}
              Per significant definitions of open access in the scientific
              literature (namely the Budapest, Berlin, and Bethesda
              declarations),
            </div>

            <div
              style={{ marginTop: "20px", fontWeight: "400", fontSize: "23px" }}
            >
              SSRG defines open access by the following conditions:
            </div>

            <div className="resps" style={{ marginTop: "20px" }}>
              Peer-reviewed literature is freely available without subscription
              or price barriers. Literature is immediately released in open
              access format (no embargo period). Published material can be
              re-used without obtaining permission as long as a correct citation
              to the original publication is given.
            </div>

            <div className="resps" style={{ marginTop: "20px" }}>
              "Reproduction is permitted for noncommercial purposes". From 2014
              SSRG International journals started to publish articles under the
              Creative Commons Attribution License external link and are now
              using the latest version of the{" "}
              <em>
                <a
                  style={{ color: "#19628d" }}
                  href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
                >
                  CC BY-NC-ND 4.0 license
                </a>
              </em>
              , which grants authors the most extensive rights.
            </div>

            <div className="resps" style={{ marginTop: "20px" }}>
              This means that all articles published in SSRG International
              journals, including data, graphics, and supplements, can be linked
              from external sources, scanned by search engines, re-used by text
              mining applications or websites, blogs, etc. free of charge under
              the sole condition of proper accreditation of the source and
              original publisher. SSRG believes that open access publishing
              fosters the exchange of research results amongst scientists from
              different disciplines, thus facilitating interdisciplinary
              research. Open access publishing also provides access to research
              results to researchers worldwide, including those from developing
              countries and an interested general public. Although SSRG
              publishes all of its journals under the open-access model, we
              believe that open access is an enriching part of the scholarly
              communication process that can and should co-exist with other
              forms of communication and publication, such as society-based
              publishing and conferencing activities.
            </div>

            <div className="resps" style={{ marginTop: "20px" }}>
              Advantages of Open Access for Authors the High Availability and
              Visibility of our open access articles is guaranteed through the
              free and unlimited accessibility of the publication over the
              Internet. Everyone can freely access and download the full text of
              all articles published with SSRG International Journals: readers
              of open access journals, i.e., other researchers, do not need to
              pay any subscription or pay-per-view charges to read articles
              published by SSRG International Journals. Open access publications
              are also more likely to be included in search engines and indexing
              databases.
            </div>

            <div className="resps" style={{ marginTop: "20px" }}>
              The Higher Citation Impact of open access articles results from
              their high publicity and availability. Open access publications
              are demonstrably more frequently cited.
            </div>

            <div className="resps" style={{ marginTop: "20px" }}>
              <p
                style={{
                  marginTop: "20px",
                  fontWeight: "400",
                  fontSize: "23px",
                }}
              >
                Lower Publishing Costs:
              </p>{" "}
              Open access publishers cover their costs for editorial handling
              and editing a paper by charging authors' institutes or research
              funding agencies.
            </div>

            <div className="resps" style={{ marginTop: "20px" }}>
              Faster Publication in SSRG's open access journals is achieved by
              online-only availability.
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Open;
