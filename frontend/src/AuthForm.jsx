import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
import axiosClient from "./axiosConfig/axiosClient";
import googleApi from "./services/GoogleServices";
import { useNavigate } from "react-router-dom";
import useUserContext from "./hooks/useUserContext";

const AuthForm = () => {
	// console.log(clientId);
	// console.log(console.log("Current origin:", window.location.origin))
	// console.log("Current origin:", window.location.origin);
	const navigate = useNavigate();
	const { user, dispatch } = useUserContext();
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flex: "1",
			}}
		>
			<GoogleOAuthProvider clientId={clientId}>
				<Card
					style={{
						width: "500px",
						height: "300px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
					}}
				>
					<h3 style={{ display: "flex", justifyContent: "center" }}>
						Basic Google Login
					</h3>
					<div>
						<GoogleLogin
							onSuccess={async (response) => {
								try {
									const res = await googleApi.googleAuthService(
										response.credential
									);
									console.log("Login success:", res.data);
									dispatch({ type: "SET_USER", payload: res.data.existed });
									localStorage.setItem(
										"user",
										JSON.stringify(res.data.existed)
									);
									navigate("/profile");
								} catch (err) {
									console.error("Login error:", err); // sẽ hiển thị rõ lý do (401 hay gì)
								}
							}}
							onError={() => {
								console.log("Failed to login");
							}}
						></GoogleLogin>
					</div>

					{/* <Button label="Sign in with Google" text raised icon="pi pi-google" /> */}
				</Card>
			</GoogleOAuthProvider>
		</div>
	);
};
export default AuthForm;
