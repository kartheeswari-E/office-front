import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Top from '../Top/Top';
import logo from '../Images/logo192.png'
import images from '../Images/ssrg_international_journal_of_-Recent_Engineering_Science_new.webp'

function Archieves() {

  const [details, setdetails] = useState([]);
  const [data, setdata] = useState(false);
  const navigate = useNavigate();

  
    useEffect(()=>{getarticle()
    
    window.scrollTo(0, 0);}
  ,[]);
  
    const getarticle = () => {
   fetch(`${process.env.REACT_APP_API_URL}/allarticle`)
            .then((data) => data.json())
            .then((answ) => {setdetails(answ)
            setdata(true)}); 
           
                   }
                   console.log(details);

     const groupByYear = details.reduce((acc, article) => {
                    (acc[article.year] = acc[article.year] || []).push(article);
                    return acc;
                  
                  }, {});


       return<>


<HelmetProvider>
    <Helmet>

 <title>Archives | International Journal of Recent Engineering Science</title>
<link rel="canonical" href="https://ijresonline.com/archives"/>
<meta name="title" content="Archives | International Journal of Recent Engineering Science"/>
<meta name="description" content="Discover past research in science and engineering fields with IJRES
Online's archives. Access a wealth of high-quality articles from leading experts."/>
<meta name="keywords" content="Archives, regular issue of science engineering, engineering science
research topics, engineering trends project topics, advanced research in science engineering trends,
engineering science research paper, international journal of recent engineering science."/>
<meta property="og:type" content="Website"/>
<meta property="og:site_name" content="Seventh Sense Research Group"/>
<meta property="og:url" content="https://ijresonline.com/archives"/>
<meta property="og:title" content="Archives | International Journal of Recent Engineering Science"/>
<meta property="og:description" content="Discover past research in science and engineering fields with
IJRES Online's archives. Access a wealth of high-quality articles from leading experts."/>

<meta property="og:image" content={images}/>

<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Archives | International Journal of Recent Engineering Science"/>
<meta name="twitter:description" content="Discover past research in science and engineering fields with
IJRES Online's archives. Access a wealth of high-quality articles from leading experts."/>
<meta name="twitter:site" content="@sense_groups"/>
<meta name="twitter:url" content="https://twitter.com/sense_groups"/>

<meta name="twitter:image" content={images}/>

<meta name="robots" content="index, follow"/>

</Helmet>
</HelmetProvider>

<div className='user-width'>
<Top/>
<section id="faq" className="faq section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Archives</h2>
        </div>

        <div className="faq-list">
          <ul>
{Object.keys(groupByYear)
      .sort(function (a, b) {
          return b - a;
        }).map((yearKey,index) => {
        const yearData = groupByYear[yearKey];
        const groupByIssue = yearData.reduce((acc, article) => {
          (acc[article.issue] = acc[article.issue] || []).push(article);
    
          return acc;
        }, {});
    
 return (

            <li key={yearKey} data-aos="fade-up">

            <i style={{"color":"rgb(0,157,221)"}} class="bx bi bi-clock-history icon-help"></i><Link style={{"color": "#19628d"}} data-bs-toggle="collapse" className="collapse collapsed" data-bs-target={`#fas-${index+1}`}> &nbsp; {yearKey} - Issues <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></Link>
              
            {Object.keys(groupByIssue).map((issueKey) => {
              const issueData = groupByIssue[issueKey];
              console.log(issueData);
               return (
              <div style={{"fontSize":"17px","fontWeight":"500","marginLeft":"3%"}} key={issueKey} id={`fas-${index+1}`} className="collapse" data-bs-parent=".faq-list">
                <p style={{"cursor":"pointer","marginTop":"1%"}} onClick={()=>
                  {
                    navigate(`/archives/volume-${issueData[0].volume}/issue-${issueKey}`)
                    }
                  }>
                Volume-{issueData[0].volume} - Issue-{issueKey}
                </p>
                {issueData.map((data, index) => {
                    return (
                      <span key={index}>
                      </span>
                    );
                  })}
              </div>

               )

                })}
            </li>
 )
              })
            }
          </ul>
        </div>
 </div>

 {!data ?<div id="box">
  <img src={logo} alt="logo" style={{"width":"120px", "height":"120px"}}/>
</div> : " "}
    </section>

</div>
   
  </>
}

export default Archieves
