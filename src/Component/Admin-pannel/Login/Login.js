import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav/Nav";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const loginuser = () => {
    const data = {
      email: email,
      password: password,
    };
    fetch(`${process.env.REACT_APP_API_URL}/api/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        window.localStorage.setItem("id", data.email);
        alert("sucessfully logged in");
        navigate("/admin-login/dashboard");
        window.location.reload(false);
      } else {
        window.alert("Incorrect email  or password");
        console.log(res.status);
      }
    });
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossorigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
            integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
            crossorigin="anonymous"
          />

          <link rel="stylesheet" href="/assets/css/backstyle.css" />
        </Helmet>
      </HelmetProvider>

      <Nav />

      <div style={{ marginTop: "5%" }} class="container">
        <div class="d-flex justify-content-center h-100">
          <div style={{ background: "white", width: "441px" }} id="card">
            <div style={{ background: "white" }} class="card-header">
              <h3>Login</h3>
            </div>
            <div class="card-body">
              <form>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    style={{ margin: "0" }}
                    onChange={(event) => setemail(event.target.value)}
                    type="text"
                    class="form-control"
                    placeholder="email"
                  />
                </div>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    style={{ margin: "0" }}
                    onChange={(event) => setpassword(event.target.value)}
                    type="password"
                    class="form-control"
                    placeholder="password"
                  />
                </div>
                <div class="row align-items-center remember"></div>

                <div class="form-group">
                  <input
                    id="login_btn"
                    onClick={() => loginuser()}
                    type="button"
                    value="Login"
                    class="btn float-right "
                  />
                </div>
              </form>
            </div>
            <div style={{ background: "white" }} class="card-footer">
              {/* <div class="d-flex justify-content-center links">
					
				</div> */}
              <div class="d-flex justify-content-center">
                <Link
                  style={{ cursor: "pointer", color: " rgb(8, 160, 160)" }}
                  to="/admin-login/password-reset"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
