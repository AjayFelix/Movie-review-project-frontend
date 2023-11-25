import http from "./http-common";

const createUser = (newUserDetails) => {
  return http.post("/auth/public/register", newUserDetails);
};
const loginUser = (loginUserDetails) => {
  return http.post("/auth/public/login", loginUserDetails);
};
const logoutUser = () => {
  return http.get("/auth/public/logout");
};
const AuthenticationService = {
  createUser,
  loginUser,
  logoutUser,
};

export default AuthenticationService;
