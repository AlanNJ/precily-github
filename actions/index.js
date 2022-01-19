import axios from "axios";
import { toast } from "react-toastify";
import { EMPTY_USER, SET_USER, INITIAL_DATA } from "./types";
const setUser = (data) => {
	return {
		type: SET_USER,
		payload: data,
	};
};
const emptyData = () => {
	return {
		type: EMPTY_USER,
		payload: null,
	};
};
const getInitialData = (data) => {
	return {
		type: INITIAL_DATA,
		payload: data,
	};
};

export const getUser = (data) => {
	return (dispatch) => {
		try {
			axios
				.post("https://precily-dev-team.herokuapp.com/api/login", data)
				.then((res) => {
					console.log("hhhh", res, res.data.user);
					dispatch(setUser(res.data.user));
					//console.log(res.data);
					window.localStorage.setItem("login", JSON.stringify(res.data));
					toast.success("login successful");
				})
				.catch((err) => toast.error("No users found"));
		} catch (err) {
			console.log(err);
		}
	};
};
export const emptyUser = () => {
	console.log("hello");
	return (dispatch) => {
		localStorage.removeItem("login");
		dispatch(emptyData(null));
	};
};
export const getInitial = () => {
	return (dispatch) => {
		const data = window.localStorage.getItem("login");
		dispatch(getInitialData(JSON.parse(data)));
	};
};
