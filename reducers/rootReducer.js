import { combineReducers } from "redux";
import { loginReducer } from "./userReducer";

export const rootReducer = combineReducers({
	allUsers: loginReducer,
});
