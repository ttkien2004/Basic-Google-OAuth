import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AuthForm from "./AuthForm";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Default from "./component/Default";
import Profile from "./component/Profile";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Default />}>
						<Route path="/login" element={<AuthForm />}></Route>
						<Route path="/profile" element={<Profile />}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
