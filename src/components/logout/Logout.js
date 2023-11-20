import React, { useEffect } from "react";
import AuthenticationService from "../../api/AuthenticationService";
import { useNavigate } from "react-router-dom";

const Logout = ({ setUsername, setAuthorities }) => {
  let navigate = useNavigate();
  useEffect(() => {
    AuthenticationService.logoutUser()
      .then(() => {
        localStorage.removeItem("email");
        localStorage.removeItem("token");
        localStorage.removeItem("authorities");
        setAuthorities("");
        setUsername("");
        navigate("/");
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return <div></div>;
};

export default Logout;
