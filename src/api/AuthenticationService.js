import http from "./http-common";

const createUser = (newUserDetails) => {
  return http.post("/auth/register", newUserDetails);
};
const loginUser = (loginUserDetails) => {
  return http.post("/auth/login", loginUserDetails);
};
const logoutUser = () => {
  return http.get("/auth/logout");
};
const AuthenticationService = {
  createUser,
  loginUser,
  logoutUser,
};

export default AuthenticationService;
