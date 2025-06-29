import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Image } from "primereact/image";
import { useEffect } from "react";
import { useState } from "react";
import useUserContext from "../hooks/useUserContext";

const Profile = () => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [picture, setPicture] = useState("");
	const { user, dispatch } = useUserContext();
	useEffect(() => {
		console.log(user);
		if (user) {
			setEmail(user.email);
			setName(user.name);
			setPicture(user.picture);
			console.log(user.picture);
		}
	}, [user]);
	return (
		<div style={{ flex: "1" }}>
			<Card>
				<Image
					src={picture}
					alt="Avatar"
					width="100%"
					height="100%"
					preview
					style={{ borderRadius: "50%", border: "1px solid red" }}
				/>
				<div>
					<label htmlFor="email">Email:</label>
					<InputText value={email} id="email" readOnly></InputText>
				</div>
				<div>
					<label htmlFor="name">Name:</label>
					<InputText value={name} id="name" readOnly></InputText>
				</div>
			</Card>
		</div>
	);
};
export default Profile;
