import React, { useEffect } from "react";
import AuthenticationService from "../../api/AuthenticationService";
import { useNavigate } from "react-router-dom";

const Logout = ({ setUsername, setAuthorities }) => {
  // Get the navigate function from react-router-dom
  let navigate = useNavigate();
  // useEffect hook runs when the component mounts
  useEffect(() => {
    // Call the logoutUser method from AuthenticationService
    AuthenticationService.logoutUser()
      .then(() => {
        // Remove items from localStorage and update state variables
        localStorage.removeItem("email");
        localStorage.removeItem("token");
        localStorage.removeItem("authorities");
        setAuthorities("");
        setUsername("");
        // Navigate to the home page ("/") after successful logout
        navigate("/");
      })
      .catch((e) => {
        // Log any errors that occur during the logout process
        console.error(e);
      });
  }, []); // The empty dependency array ensures that this effect runs only once on mount

  // The component renders an empty div, as it is primarily focused on the side effect of logging out
  return <div></div>;
};

export default Logout;
