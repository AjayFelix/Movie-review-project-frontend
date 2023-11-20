import React, { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthenticationService from "../../api/AuthenticationService";

const LoginPage = ({ setUsername, setAuthorities }) => {
  let navigate = useNavigate();
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(formValues));
    setIsSubmitted(true);

    console.log(formValues);
    console.log(formErrors.email);
    console.log(formErrors.password);

    if (Object.keys(formErrors).length === 0 && isSubmitted)
      AuthenticateUser(formValues);
  };

  const validateForm = (formValues) => {
    const errors = {};
    if (!formValues.email) errors.email = "Email is required";
    if (!formValues.password) errors.password = "Password is required";
    return errors;
  };

  function parseJWT(tokenObject) {
    console.log(tokenObject);
    if (!tokenObject || !tokenObject.token) {
      return;
    }
    const base64Url = tokenObject.token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  }

  const AuthenticateUser = (data) => {
    AuthenticationService.loginUser(data)
      .then((response) => {
        let token = response.data;

        console.log(token);

        let userData = parseJWT(token);

        localStorage.setItem("token", token.token);
        localStorage.setItem("email", userData.sub);
        localStorage.setItem("authorities", userData.role[0].authority);
        setUsername(userData.sub);
        setAuthorities(userData.role[0].authority);
        navigate("/");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="global-container">
      <div className="card login-form">
        <div className="card-body">
          <h1 className="card-title text-center">LOGIN</h1>
          <div className="card-text">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email Address</label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  id="exampleInputEmail1"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                <b style={{ color: "red" }}>{formErrors.email}</b>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  id="exampleInputPassword1"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                />
                <b style={{ color: "red" }}>{formErrors.password}</b>
              </div>
              <div className="button">
                <Button type="submit" variant="outline-info" className="me-2">
                  Login
                </Button>
              </div>
              <div className="signup">
                Don't have an account yet?
                <p>
                  <Link to="/Register"> Create One</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
