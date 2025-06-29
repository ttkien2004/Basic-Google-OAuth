import axios from "axios";

const axiosClient = axios.create({
	baseURL: "/api",
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
});

axiosClient.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("token");
		try {
			const tokenString = token ? JSON.parse(token) : null;
			if (tokenString) {
				config.headers.Authorization = `Bearer ${tokenString}`;
			}
		} catch (e) {}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);
export default axiosClient;
