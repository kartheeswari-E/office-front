import React, { useEffect } from "react";
import Division from "../Division/Division";
import Card from "../Cards/Card";
import axios from "axios";
import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Top from "../Top/Top";
function Template() {
  useEffect(() => {
    getData();

    window.scrollTo(0, 0);
  }, []);

  const [data, setdata] = useState([]);

  let getData = async () => {
    try {
      let articledata = await axios.get(
        `${process.env.REACT_APP_API_URL}/allthree`
      );

      let getdata = await axios.get(
        `${process.env.REACT_APP_API_URL}/files?volume=${articledata.data[0].volume}&issue=${articledata.data[0].issue}`
      );

      setdata(getdata.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            International Journal of Recent Engineering Science | SSRG IJRES
          </title>
          <link rel="canonical" href="https://ijresonline.com/" />
          <meta
            name="title"
            content="International Journal of Recent Engineering Science | SSRG IJRES"
          />
          <meta
            name="description"
            content="IJRES Online is an international, peer-reviewed journal dedicated to publishing high-quality research in various fields of science and engineering."
          />
          <meta
            name="keywords"
            content="ijres, international journal of recent engineering science, journal of recent engineering science, engineering science and technology an international journal, fast publishing sci indexed journals in engineering, free publishing journal, free publishing engineering journal, data science and engineering journal, journal of engineering science"
          />
          <meta property="og:type" content="Website" />
          <meta
            property="og:site_name"
            content="Seventh Sense Research Group"
          />
          <meta property="og:url" content="https://ijresonline.com/" />
          <meta
            property="og:title"
            content="International Journal of Recent Engineering Science | SSRG IJRES"
          />
          <meta
            property="og:description"
            content="IJRES Online is an international, peer-reviewed journal dedicated to publishing high-quality research in various fields of science and engineering."
          />
          <meta property="og:image" content="image url" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:description"
            content="IJRES Online is an international, peer-reviewed journal dedicated to publishing high-quality research in various fields of science and engineering."
          />
          <meta name="twitter:site" content="@sense_groups" />
          <meta
            name="twitter:title"
            content="International Journal of Recent Engineering Science | SSRG IJRES"
          />
          <meta name="twitter:url" content="https://twitter.com/sense_groups" />
          <meta name="twitter:image" content="image url" />
          <meta name="robots" content="index" />
        </Helmet>
      </HelmetProvider>

      <div className="user-width">
        <Top/>
        <Division />
        <Card />
      </div>
    </>
  );
}

export default Template;
