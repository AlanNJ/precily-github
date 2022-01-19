import { EMPTY_USER, SET_USER, INITIAL_DATA } from "../actions/types";

const initialState = {
	user: null,
	token: "",
	login: false,
	page: false,
};
export const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				user: action.payload.user,
				token: action.payload.token,
				login: true,
			};
		case EMPTY_USER:
			return {
				...state,
				user: null,
				token: null,
				page: false,
			};
		case INITIAL_DATA:
			return {
				...state,
				user: action.payload,
				token: action.payload,
				page: true,
			};
		default:
			return state;
	}
	return;
};
