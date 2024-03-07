import axios from "axios";
import { deleteAllCookies, setCookie } from "../../utils/cookieHelper";
// This file is responsible for sending/receiving http requests

const AUTH_URL = `${process.env.REACT_APP_SERVER_URL}auth/`;

// Register User Service
const register = async (userData: object) => {
  const response = await axios.post(AUTH_URL + "register", userData);
  // If response.data is received, save to local storage
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// Logout User Service
const logout = () => {
  deleteAllCookies()
};

// Login User Service
const login = async (userData: object) => {
  const response: any = await axios.post(AUTH_URL + "login", userData);

  console.log(response);
  if (response) {
    const cookie = response.data.result.token;
    setCookie("token", cookie);
  }
  return response.data;
};

// Server availability check
// const checkServer = async () => {
//   const response = await axios.get(API_URL + "check");

//   return response.data;
// };

const authService = {
  register,
  logout,
  login,
  // checkServer,
};

export default authService;
