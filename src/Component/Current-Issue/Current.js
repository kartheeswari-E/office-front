import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Top from "../Top/Top";
import logo from '../Images/logo192.png'
import images from '../Images/ssrg_international_journal_of_-Recent_Engineering_Science_new.webp'
import b from "../Images/b.png";
function Current() {
  const navigate = useNavigate();
  useEffect(() => {
    getData();

    window.scrollTo(0, 0);
  }, []);

  const [data, setdata] = useState(null);
  const [datas, setdatas] = useState(null);

  let getData = async () => {
    try {
      let articledata = await axios.get(
        `${process.env.REACT_APP_API_URL}/allthree`
      );

      let getdata = await axios.get(
        `${process.env.REACT_APP_API_URL}/files?volume=${articledata.data[0].volume}&issue=${articledata.data[0].issue}`
      );

      setdata(getdata.data.data[0]);
      setdatas(getdata.data.data)

    } catch (error) {
      console.log(error);
    }
  };

  console.log(datas);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Current Issue - IJRES Online | SSRG IJRES </title>
          <link rel="canonical" href="https://ijresonline.com/current-issue" />
          <meta
            name="title"
            content="Current Issue - IJRES Online | SSRG IJRES"
          />
          <meta
            name="description"
            content="Explore the latest research in science and engineering fields with IJRES
Online's current issue. Access high-quality articles from leading experts."
          />
          <meta
            name="keywords"
            content="Current Issue, recent journals in engineering science Trends, IJRES ,
engineering science trends journal, open access engineering science trends journals, current issue in science
engineering, recent research topic in Engineering Science."
          />
          <meta property="og:type" content="Website" />
          <meta
            property="og:site_name"
            content="Seventh Sense Research Group"
          />
          <meta
            property="og:url"
            content="https://ijresonline.com/current-issue"
          />
          <meta
            property="og:title"
            content="Current Issue - IJRES Online | SSRG IJRES"
          />
          <meta
            property="og:description"
            content="Explore the latest research in science and engineering fields with
IJRES Online's current issue. Access high-quality articles from leading experts."
          />
          <meta property="og:image" content="image url" />
          <meta name="twitter:card" content={images} />
          <meta
            name="twitter:title"
            content="Current Issue - IJRES Online | SSRG IJRES "
          />
          <meta
            name="twitter:description"
            content="Explore the latest research in science and engineering fields
with IJRES Online's current issue. Access high-quality articles from leading experts."
          />
          <meta name="twitter:site" content="@sense_groups" />
          <meta name="twitter:url" content="https://twitter.com/sense_groups" />
          <meta name="twitter:image" content={images} />
          <meta name="robots" content="index, follow" />
        </Helmet>
      </HelmetProvider>

      <div className="user-width">
        <Top />
        <section id="faq" className="faq section-bg">
          
      
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Current Issue</h2>
            </div>




  <div className="block-container">
    <div className="blk1-container">
      <a className="blk-heading" id="b"> International Journal of Recent Engineering Science</a>
   {data ? (  <div> <div className="blk-details">vol.{data.volume} . issue.{data.issue} | {data.from} - {data.to} | {data.year}</div>
      <div onClick={() =>
                          navigate(
                            `/archives/volume-${data.volume}/issue-${data.issue}`
                          )
                        } className="blk-line-button">View this issue</div>
                        </div>  ) : (
//             <div id="spin" class="d-flex justify-content-center">
//             <div class="lg-spin">
//   <div class="spinner-border" role="status">
//     <span class="sr-only">Loading...</span>
//   </div>
// </div> 
                   
//            </div>
<div id="box">
  <img src={logo} alt="logo" style={{"width":"120px", "height":"120px"}}/>
</div>
            )}
    </div>
    <div className="blk1-container">
      <img src={b} alt="..."></img>
    </div>
  </div>

          


          </div>
        </section>
      </div>
    </>
  );
}

export default Current;
