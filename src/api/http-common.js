import axios from "axios";

const authToken = localStorage.getItem("token");

// Public Axios instance (without authentication)
const http = axios.create({
  baseURL: "http://localhost:8080",
  headers: { "Content-Type": "application/json" },
});

// Private Axios instance (with authentication)
const httpPrivate = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    Authorization: `Bearer ${authToken}`,
    "Content-Type": "application/json",
  },
});

const httpCommon = {
  http,
  httpPrivate,
};

export default httpCommon;
