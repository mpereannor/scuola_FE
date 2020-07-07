import axios from "axios";
import Cookies from 'js-cookie'
const baseURL = 'http://localhost:7000/'


export const Axios = () => {
  return axios.create({
    headers: {
        // Authorization: `HOLDER ${cookie}`,
        Accept: 'application/json',
        // Cookie: 'token',
      "Content-Type": "application/json",
    },
    // withCredentials: true,
    baseURL,
    // baseURL: process.env.REACT_APP_API_BASE_URL,
  });
};

export const axiosWithAuth = () => {
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Origin': '*',
      Cookie: Cookies.get('token'),
      Authorization: Cookies.get('token') || ''
    },
    // withCredentials: true,
    // credentials: 'same-origin',
    baseURL
  });
};
