/** @format */


import axios from "axios";

const AuthUrl = axios.create({
	baseURL: "https://real-estate-backend.azurewebsites.net/v1",
	headers: { "Content-Type": "application/json" },
});


export const getCollections = async () => {
	return AuthUrl.get(`/collections/`);
};

export const getAuctions = async () => {
	return AuthUrl.get(`/auctions/`);
}