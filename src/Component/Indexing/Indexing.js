import React, { useState } from "react";
import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Top from "../Top/Top";
function Indexing() {
  const [details, setdetails] = useState([]);
  useEffect(() => {
    getarticle();

    window.scrollTo(0, 0);
  }, []);

  const getarticle = () => {
    fetch(`${process.env.REACT_APP_API_URL}/api/allindex`)
      .then((data) => data.json())
      .then((answ) => setdetails(answ));
  };
  console.log(details);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>SSRG IJRES Indexing Lists</title>
          <link rel="canonical" href="https://ijresonline.com/indexing" />
          <meta name="title" content="SSRG IJRES Indexing Lists " />
          <meta
            name="description"
            content="SSRG International Journal of Recent Engineering Science are indexed
with the top famous academic databases and online libraries."
          />
          <meta
            name="keywords"
            content="scopus indexed journal, ugc approved journal, ugc listed journal, crossref
indexed journals, doi indexed journals, sci journals, clarivate journals, scimago journals, doaj journals, index
Copernicus journals"
          />
          <meta property="og:type" content="Website" />
          <meta
            property="og:site_name"
            content="Seventh Sense Research Group"
          />
          <meta property="og:url" content="https://ijresonline.com/indexing" />
          <meta property="og:title" content="SSRG IJRES Indexing Lists" />
          <meta
            property="og:description"
            content="SSRG International Journal of Recent Engineering Science are
indexed with the top famous academic databases and online libraries"
          />
          <meta property="og:image" content="image url" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="SSRG IJRES Indexing Lists" />
          <meta
            name="twitter:description"
            content="SSRG International Journal of Recent Engineering Science are
indexed with the top famous academic databases and online libraries"
          />
          <meta name="twitter:site" content="@sense_groups" />
          <meta name="twitter:url" content="https://twitter.com/sense_groups" />
          <meta name="twitter:image" content="image url" />
          <meta name="robots" content="index, follow" />
          <link rel="stylesheet" href="/assets/css/clientstyle.css" />
        </Helmet>
      </HelmetProvider>

      <div className="user-width">
        <Top />

        <section id="clients" className="clients section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Indexing</h2>
            </div>

            <div
              className="row no-gutters clients-wrap clearfix"
              data-aos="fade-up"
            >
              {details.map((index, i) => {
                return (
                  <div className="col-lg-3 col-md-4 col-6">
                    <div id="bxx" className="client-logo">
                      <a target="_blank" href={index.tags}>
                        <img
                          src={index.imageurl}
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Indexing;
