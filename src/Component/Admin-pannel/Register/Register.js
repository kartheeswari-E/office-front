import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";

import YupPassword from "yup-password";
import Nav from "../Nav/Nav";
YupPassword(yup);

const formValidationschema = yup.object({
  name: yup.string().required("THIS IS REQUIRED"),
  email: yup.string().min(10, "Error").required("THIS IS REQUIRED"),
  password: yup
    .string()
    .password()
    .minLowercase(2)
    .min(
      8,
      "password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special"
    )
    .required("THIS IS REQUIRED"),
});

function Register() {
  const navigate = useNavigate();

  const { handleChange, handleBlur, errors, touched, values, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
      validationSchema: formValidationschema,
      onSubmit: (values) => {
        oldlist(values);
      },
    });

  const oldlist = async (values) => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/api/register`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then((res) => {
        if (res.status === 201) {
          window.alert("sucessfull registered");
          navigate("/admin-login");
        } else {
          window.alert("Email already exist");
          console.log(res.status);
        }
      });
    } catch (err) {
      console.log("error");
    }
  };

  return (
    <>
      <Nav />
      <form onSubmit={handleSubmit}>
        <MDBContainer
          fluid
          className="d-flex align-items-center justify-content-center bg-image"
        >
          <div className="mask gradient-custom-3"></div>
          <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
            <MDBCardBody className="px-5">
              <h2 className="text-uppercase text-center mb-5">
                Create an account
              </h2>
              <label>Name:</label>
              <MDBInput
                name="name"
                wrapperClass="mb-4"
                size="lg"
                id="form3"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                type="text"
                placeholder="Name"
                error={errors.name && touched.name}
                helperText={errors.name && touched.name ? errors.name : ""}
              />

              <label>Email:</label>
              <MDBInput
                wrapperClass="mb-4"
                size="lg"
                id="form2"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                type="email"
                placeholder="email"
                error={errors.email && touched.email}
                helperText={errors.email && touched.email ? errors.email : ""}
              />

              <label>Password:</label>
              <MDBInput
                wrapperClass="mb-4"
                size="lg"
                id="form3"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="password"
                error={errors.password && touched.password}
                helperText={
                  errors.password && touched.password ? errors.password : ""
                }
              />
              <MDBBtn
                type="submit"
                className="mb-4 w-100 gradient-custom-4"
                size="lg"
              >
                Register
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </form>
    </>
  );
}

export default Register;
