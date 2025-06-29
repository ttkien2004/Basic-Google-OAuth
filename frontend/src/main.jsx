import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import "primeicons/primeicons.css";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { UserContextProvider } from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<UserContextProvider>
			<PrimeReactProvider>
				<App />
			</PrimeReactProvider>
		</UserContextProvider>
	</React.StrictMode>
);
