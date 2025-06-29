import axiosClient from "../axiosConfig/axiosClient";
import axios from "axios";

const googleApi = {
	googleAuthService: async (credential) => {
		try {
			const res = await axiosClient.post("/auth/google", {
				token: credential,
			});

			if (res) {
				return {
					data: res.data,
				};
			}
		} catch (err) {
			throw err.response.data;
		}
	},
};
export default googleApi;
