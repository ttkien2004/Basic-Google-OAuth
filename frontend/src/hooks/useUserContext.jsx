import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const useUserContext = () => {
	const context = useContext(UserContext);
	if (!context) throw Error("Cannot use context");

	return context;
};
export default useUserContext;
