import React, { useState } from "react";
import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Top from "../Top/Top";
import b from "../Images/b.png";
function Issues() {
  useEffect(() => {
    loadData();

    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
const[state,setstate]=useState();
  const {volume, issue } = useParams();
  const [tabeldata, settabeldata] = useState([]);
  const [data, setdata] = useState(false);

  const vol = volume.split("-");
  const iss = issue.split("-");

  var storedvol = +vol[1];
  var storediss = +iss[1];

  console.log(storedvol, storediss);
  useEffect(() => {}, []);

  let loadData = async () => {
    try {
      let tabdata = await axios.get(
        `${process.env.REACT_APP_API_URL}/files/all?volume=${storedvol}&issue=${storediss}`
      );

      console.log(tabdata.data.data);
      settabeldata(tabdata.data.data);
      setstate(tabdata.data.data[0]);
      setdata(true);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(tabeldata);

  const groupByfrom = tabeldata.reduce((acc, article) => {
    (acc[article.from] = acc[article.from] || []).push(article);
    return acc;
  }, {});

  return (
    <>
      <HelmetProvider>
        <Helmet>
          {Object.keys(groupByfrom).map((fromKey) => {
            if (groupByfrom) {
              const fromData = groupByfrom[fromKey];
              return (
                <title>{`Volume-${storedvol} Issue-${storediss} ,${fromKey}-${fromData[0].to}`}</title>
              );
            }
          })}
          <link rel="canonical" to="https://ijresonline.com/current-issue" />
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
          <meta name="twitter:card" content="summary_large_image" />
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
          <meta name="twitter:image" content="image url" />
          <meta name="robots" content="index, follow" />
        </Helmet>
      </HelmetProvider>

      <div className="user-width">
        <Top />


        <section id="blog" className="blog section-bg">
      <div id="hi" className="cont" data-aos="fade-up">
      <div className="section-title">
              {Object.keys(groupByfrom).map((fromKey) => {
                if (groupByfrom) {
                  const fromData = groupByfrom[fromKey];
                  return (
                    <h2 className="section-change">
                      Volume - {storedvol} Issue - {storediss} , {fromKey} - {fromData[0].to}{" "}
                    </h2>
                  );
                }
              })}
            </div>
        <div className="row">

      <div id="book"  className="col-lg-3 ">

            <div className="sidebar" style={{"boxShadow":"none"}}>

              {/* <h3 style={{"fontSize":"30px"}} className="sidebar-title">Issues</h3> */}
 

              <h3 className="sidebar-title">Volume {storedvol}, Issue {storediss}</h3>

              <div className="sidebar-item categories">
                <ul>
                {Object.keys(groupByfrom).map((fromKey) => {
                if (groupByfrom) {
                  const fromData = groupByfrom[fromKey];
                  return (
                        <li><div>{fromKey}-
                   {fromData[0].to} {state.year}</div></li>
            
                  );
                }
              })}
              
                 
                </ul>
              </div>

              <h3 className="sidebar-title">Book Cover</h3>
              <div className="sidebar-item recent-posts">
               
                 <img src={b} alt="..."></img>
              </div>

    <p className="number">ISSN: 2349–7157</p>


            </div>

          </div>


          <div className="col-lg-9 ">

          {tabeldata.sort(function (a, b) {
          return a.pstart - b.pstart;
        }).map((user, i) => {
                const upper = user.article.toUpperCase();
                console.log(upper);
                return (
            <article style={{"borderBottom":"1px solid #dbdbdb","padding":"20px 0 10px 0","marginBottom":"0","boxShadow":"none"}} className="entry">

               <div className="entry-meta">
                <ul>
                <h6 style={{"fontSize":"15px"}}>
                        <i className="bi bi-file-earmark-fill"></i>Research
                        Article &nbsp; <i className="bi bi-diamond-half"></i>{" "}
                        {upper}
                      </h6>
                </ul>
              </div>

              <h6 className="entry-title">
                <Link style={{"fontSize":"20px" , color: " #19628d"}} to={`/archives/${user.article}`}>{user.heading}</Link>
              </h6>

             

              <div className="entry-content">
                <p style={{"marginBottom":"0"}}>
                {user.authors}</p>
            
              </div>

            </article>
                );
              })}


              
      
          </div>

    

        </div>

      </div>
    </section>




{/* 


        <section id="testimonials" className="testimonials section-bg">
          <div className="container">
            <div className="section-title">
              {Object.keys(groupByfrom).map((fromKey) => {
                if (groupByfrom) {
                  const fromData = groupByfrom[fromKey];
                  return (
                    <h4>
                      Volume-{storedvol} Issue-{storediss} ,{fromKey}-
                      {fromData[0].to}{" "}
                    </h4>
                  );
                }
              })}
            </div>
            <div className="row self-row">
              {tabeldata.map((user, i) => {
                const upper = user.article.toUpperCase();
                console.log(upper);
                return (
                  <div className="col-lg-12" data-aos="fade-up">
                    <div className="testimonial-item self-items">
                      <h4>
                        <i className="bi bi-file-earmark-fill"></i>Research
                        Article &nbsp; <i className="bi bi-diamond-half"></i>{" "}
                        {upper}
                      </h4>
                      <h3
                        style={{  }}
                        onClick={() => navigate(`/archives/${user.article}`)}
                      >
                        {user.heading}
                      </h3>
                      <p>{user.authors}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {!data ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            " "
          )}
        </section>


 */}


      </div>
    </>
  );
}

export default Issues;
