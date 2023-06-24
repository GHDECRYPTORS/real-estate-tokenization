/** @format */

import axios from "axios";

const AuthUrl = axios.create({
	baseURL: "https://real-estate-backend.azurewebsites.net/v1",
	headers: { "Content-Type": "application/json" },
});

export const getNonce = async (address: any) => {
	return AuthUrl.get(`/auth/nonce/${address}`);
};

export const postLogin = async (form: any) => {
	return AuthUrl.post(`auth/login/`, form);
};