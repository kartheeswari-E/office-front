import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Top from "../Top/Top";
import logo from '../Images/logo192.png'
function Search() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  const navigate = useNavigate();
  const [query, setquery] = useState({
    type: "all",
    search: "",
  });
  const [data, setdata] = useState([]);
  const [valid, setvalid] = useState("");

  console.log(query);

  let handlesubmit = async (e) => {
    e.preventDefault();
    try {
      let searchdata = await axios.get(
        `${process.env.REACT_APP_API_URL}/search?key=${query.search}&type=${query.type}`
      );
      setdata(searchdata.data.data);
      setvalid(searchdata.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  function getHighlightedText(text, higlight) {
    var parts = text.split(new RegExp(`(${higlight})`, "gi"));
    return parts.map((part, index) => (
      <span key={index}>
        {part.toLowerCase() === higlight.toLowerCase() ? (
          <b style={{ backgroundColor: "#e8bb49" }}>{part}</b>
        ) : (
          part
        )}
      </span>
    ));
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            Search | International Journal of Recent Engineering Science
          </title>
          <link
            rel="canonical"
            href="https://ijresonline.com/editorial-board/ijres/for-editors/board-members"
          />
          <meta
            name="title"
            content="Editorial Board | International Journal of Recent Engineering Science"
          />
          <meta
            name="description"
            content="Editorial board of the IJRES consists of experts in various fields of
computer science and computer technology who provide guidance and support for the journal. "
          />
          <meta
            name="keywords"
            content="Editorial Board, International Journal, Engineering science, Engineering
trends, and Engineering technology, Peer-Reviewed Journal, Scientific Research, Academic Publishing,
Scholarly Articles, Journal Editors, Expertise, Quality Control."
          />
          <meta property="og:type" content="Website" />
          <meta
            property="og:site_name"
            content="Seventh Sense Research Group"
          />
          <meta
            property="og:url"
            content="https://ijresonline.com/editorial-board/ijres/for-editors/board-
members"
          />
          <meta
            property="og:title"
            content="Editorial Board | International Journal of Recent Engineering Science"
          />
          <meta
            property="og:description"
            content="Editorial board of the IJRES consists of experts in various fields of
computer science and computer technology who provide guidance and support for the journal. "
          />
          <meta property="og:image" content="image url" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Editorial Board | International Journal of Recent Engineering Science"
          />

          <meta
            name="twitter:description"
            content="Editorial board of the IJRES consists of experts in various fields
of computer science and computer technology who provide guidance and support for the journal. "
          />
          <meta name="twitter:site" content="@sense_groups" />
          <meta name="twitter:url" content="https://twitter.com/sense_groups" />
          <meta name="twitter:image" content="image url" />
          <meta name="robots" content="index, follow" />
        </Helmet>
      </HelmetProvider>

      <div className="user-width">
        <Top />
        <section id="faq" className="faq section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Search</h2>
            </div>



            <form  onSubmit={handlesubmit}>
<div  className="row gy-4">
 <div className="col-lg-10 col-md-12 col-sm-12">
 <input
                  type="text"
                  placeholder="Search..."
                  className="searchwithbut"
                  name="search"
                  onChange={(e) => {
                    setquery({ ...query, [e.target.name]: e.target.value });
                  }}
                />
 </div>
 <div className="col-lg-2 col-md-12 col-sm-12"> 
              <select
                name="type"
                className="butselect"
                onChange={(e) => {
                  setquery({ ...query, [e.target.name]: e.target.value });
                }}
              >
                <option name="select">--Select--</option>
                <option name="all">All</option>
                <option name="article">Article</option>
                <option name="heading">Title</option>
                <option name="abstract">Abstract</option>
                <option name="authors">Authors</option>
                <option name="keywords">Keywords</option>
              </select></div>
<div id="btn" className="col-lg-12">
<button type="submit" className="but">
                  Search
                </button> 
</div>

<section style={{"padding":"0"}} id="testimonials" className="testimonials section-bg">
              <div className="container">
                <div className="row self-row">
                  {data
                    ? data.map((article, index) => {
                        return (
                          <div className="col-lg-12" data-aos="fade-up">
                            <div className="testimonial-item self-items">
                              <h4>
                                <i className="bi bi-file-earmark-fill"></i>{" "}
                                Research Article &nbsp;{" "}
                                <i className="bi bi-diamond-half"></i>{" "}
                                {getHighlightedText(
                                  `${article.article}`,
                                  query.search
                                )}
                              </h4>
                              <h3
                                style={{ color: " #19628d" }}
                                onClick={() =>
                                  navigate(`/archives/${article.article}`)
                                }
                              >
                                {getHighlightedText(
                                  `${article.heading}`,
                                  query.search
                                )}
                              </h3>

                              <p>
                                {getHighlightedText(
                                  `${article.authors}`,
                                  query.search
                                )}
                              </p>
                            </div>
                          </div>
                        );
                      })
                    :
                    <div id="box">
                    <img src={logo} alt="logo" style={{"width":"120px", "height":"120px"}}/>
                  </div>
                }
                    
                </div>
              </div>
            </section>
            
{valid !== "" ? <div>{valid}</div> :""}
              </div>
            </form>


           
          </div>
        </section>
      </div>
    </>
  );
}
     
export default Search;





       {/* <form id="search-combine" onSubmit={handlesubmit}>





              <div>
              <select
                name="type"
                className="butselect"
                onChange={(e) => {
                  setquery({ ...query, [e.target.name]: e.target.value });
                }}
              >
                <option name="select">--Select--</option>
                <option name="all">all</option>
                <option name="article">article</option>
                <option name="heading">heading</option>
                <option name="abstract">abstract</option>
                <option name="authors">authors</option>
                <option name="keywords">keywords</option>
              </select>
                <input
                  type="text"
                  placeholder="Search..."
                  className="searchwithbut"
                  name="search"
                  onChange={(e) => {
                    setquery({ ...query, [e.target.name]: e.target.value });
                  }}
                />
                <button type="submit" className="but">
                  Search
                </button>

                {valid !== "" ? <div>{valid}</div> : null}
              </div>
            </form> */}