import httpCommon from "./http-common";

const createUser = (newUserDetails) => {
  return httpCommon.http.post("/auth/public/register", newUserDetails);
};
const loginUser = (loginUserDetails) => {
  return httpCommon.http.post("/auth/public/login", loginUserDetails);
};
const logoutUser = () => {
  return httpCommon.http.get("/auth/public/logout");
};
const AuthenticationService = {
  createUser,
  loginUser,
  logoutUser,
};

export default AuthenticationService;
