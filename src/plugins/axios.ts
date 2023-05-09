/* eslint-disable @typescript-eslint/naming-convention */
import type { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';
import Cookies from 'js-cookie';

export const BASE_URL = import.meta.env.VITE_BASE_URL;

const config: AxiosRequestConfig = {
	baseURL: BASE_URL,
};

const appAxios = axios.create(config);

const interceptAxiosRequest = (request: InternalAxiosRequestConfig) => {
	const token = Cookies.get('token');

	if (token) {
		// const userInfo: LoginRes = JSON.parse(token);
		console.log("Token in Cookies: ", token);

		request.headers.Authorization = `Bearer ${token}`;
	}

	return request;
};

appAxios.interceptors.request.use(interceptAxiosRequest);
export default appAxios;