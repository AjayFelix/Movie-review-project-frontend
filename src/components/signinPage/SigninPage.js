import Button from "react-bootstrap/Button";
import "./SigninPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthenticationService from "../../api/AuthenticationService";

const SigninPage = () => {
  let navigate = useNavigate();
  const initialValues = { userName: "", email: "", password: "" };
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

    if (Object.keys(formErrors).length === 0 && isSubmitted) {
      createUser(formValues);
    }
  };
  const createUser = (data) => {
    AuthenticationService.createUser(data)
      .then((response) => {
        console.log(response.data);
        navigate("/login");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const validateForm = (formValues) => {
    const errors = {};
    if (!formValues.userName) errors.userName = "UserName is required";
    if (!formValues.email) errors.email = "Email is required";
    if (!formValues.password) errors.password = "Password is required";
    return errors;
  };
  return (
    <div className="global-container">
      <div className="card signup-form">
        <div className="card-body">
          <h1 className="card-title text-center">REGISTER</h1>
          <div className="card-text">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputUserName1">User Name</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="exampleInputUserName1"
                  name="userName"
                  value={formValues.userName}
                  onChange={handleChange}
                />
                <b style={{ color: "red" }}>{formErrors.userName}</b>
              </div>
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
                  Sign Up
                </Button>
              </div>
              <div className="signup">
                If You Have An Account
                <p>
                  <Link to="/login"> click to login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
