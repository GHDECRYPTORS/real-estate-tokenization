/** @format */

import axios from "axios";
const backEndUrl = import.meta.env.VITE_BACKENDURL;

const AuthUrl = axios.create({
  baseURL: backEndUrl,
  headers: { "Content-Type": "application/json" },
});

export const getNonce = async (address: any) => {
  return AuthUrl.get(`/auth/nonce/${address}`);
};

export const postLogin = async (form: any) => {
  return AuthUrl.post(`auth/login/`, form);
};
