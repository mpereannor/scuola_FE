import axios from "axios";
const registerUrl = 'http://localhost:7000/'


export const Axios = () => {
  return axios.create({
    headers: {
      "Content-Type": "application/json",
    },
    baseURL: registerUrl,
    // baseURL: process.env.REACT_APP_API_BASE_URL,
  });
};

export const axiosWithAuth = () => {
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token") || "",
    },
    baseURL: process.env.REACT_APP_API_BASE_URL,
  });
};
