import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Default = () => {
	return (
		<div
			style={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<div
				style={{
					height: "80px",
					display: "flex",
					justifyContent: "end",
					alignItems: "center",
					paddingRight: "100px",
					boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
				}}
			>
				<Link to="/login">Đăng nhập/ Đăng ký</Link>
			</div>
			<Outlet />
			<div
				style={{
					marginTop: "auto",
					height: "80px",
					alignItems: "center",
					display: "flex",
					paddingLeft: "100px",
					boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
				}}
			>
				Footer
			</div>
		</div>
	);
};
export default Default;
