import React, { useState } from "react";
import CreateArticle from "../CreateArticle/CreateArticle";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

function Create() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("id");
    navigate("/admin-login");
  };
  return (
    <>
      <Sidebar />

      <CreateArticle />
    </>
  );
}

export default Create;
