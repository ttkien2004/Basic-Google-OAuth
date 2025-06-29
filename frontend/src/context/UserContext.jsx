import React, { createContext, useReducer, useEffect } from "react";

export const UserContext = createContext();

//reducer
export const userReducer = (state, action) => {
	switch (action.type) {
		case "SET_USER":
			return { user: action.payload };
		default:
			return state;
	}
};
// context provider
export const UserContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(userReducer, {
		user: null,
	});
	useEffect(() => {
		const existed = localStorage.getItem("user");
		if (existed) {
			dispatch({ type: "SET_USER", payload: JSON.parse(existed) });
		}
	}, []);
	return (
		<UserContext.Provider value={{ ...state, dispatch }}>
			{children}
		</UserContext.Provider>
	);
};
