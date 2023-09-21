import React, { useEffect, useState } from "react";
import EditArticleForm1 from "./EditArticleForm1";
import EditArticleForm2 from "./EditArticleForm2";
import EditArticleForm3 from "./EditArticleForm3";
import EditArticleForm4 from "./EditArticleForm4";
import axios from "axios";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

function EditArticle() {
  <HelmetProvider>
    <Helmet>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        crossorigin="anonymous"
      ></script>
      <script src="js/scripts.js"></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/umd/simple-datatables.min.js"
        crossorigin="anonymous"
      ></script>
      <script src="js/datatables-simple-demo.js"></script>
    </Helmet>
  </HelmetProvider>;

  const { id } = useParams();
  const [page, setpage] = useState(0);
  const [data, setdata] = useState({});
  const [dbdata, setdbdata] = useState({});

  useEffect(() => {
    loadData();
  }, []);

  let loadData = async () => {
    try {
      let articledata = await axios.get(
        `${process.env.REACT_APP_API_URL}/get/${id}`
      );

      setdata(articledata.data);

      setdbdata(articledata.data);
    } catch (error) {
      console.log(error);
    }
  };

  const pageDisplay = () => {
    if (page === 0) {
      return (
        <EditArticleForm1
          setdata={setdata}
          data={data}
          dbdata={dbdata}
          setpage={setpage}
        />
      );
    } else if (page === 1) {
      return (
        <EditArticleForm2
          setdata={setdata}
          data={data}
          dbdata={dbdata}
          setpage={setpage}
        />
      );
    } else if (page === 2) {
      return (
        <EditArticleForm3
          setdata={setdata}
          data={data}
          dbdata={dbdata}
          setpage={setpage}
        />
      );
    } else if (page === 3) {
      return (
        <EditArticleForm4
          setdata={setdata}
          data={data}
          dbdata={dbdata}
          setpage={setpage}
          loadData={loadData}
        />
      );
    }
  };
  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="inpform">{pageDisplay()}</div>
      </div>
    </>
  );
}

export default EditArticle;
