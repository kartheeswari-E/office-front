import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import * as yup from "yup";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav/Nav";

function Email() {
  const formValidationschema = yup.object({
    email: yup.string().min(10, "err").required("This is Required"),
  });

  const navigate = useNavigate();

  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: formValidationschema,
    onSubmit: (values) => {
      verify(values);
    },
  });
  const verify = async (values) => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/api/password-reset`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then((res) => {
        if (res.status === 200) {
          window.alert("check yur email");
          navigate("/admin-login/api/password-reset/:id/:token");
        } else {
          console.log(res.status);
          window.alert("email  incorrect");
        }
      });
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <>
      <Nav />
      <div className="email-container">
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>Email</label>

            <TextField
              className="email-input"
              name="email"
              onChange={handleChange}
              value={values.email}
              type="email"
              placeholder="email"
            />
          </div>
          <div className="text-center text-md-start mt-4 pt-2">
            <MDBBtn className="email-btn" type="submit" size="sm">
              Enter
            </MDBBtn>
          </div>{" "}
        </form>
      </div>
    </>
  );
}

export default Email;
