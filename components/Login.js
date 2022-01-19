import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../actions/index";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export const Login = (props) => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const router = useRouter();
	const data = { email, password };
	const loginUser = async (e) => {
		try {
			if (!email || !password) {
				toast.error("Please fill both fields");
			} else {
				props.getState(data);
			}
			e.preventDefault(e);

			console.log(data);
		} catch (err) {
			console.log(err);
		}
	};
	const [user, setUser] = useState({});
	useEffect(() => {
		if (props.user.user !== null) {
			setUser(props.user);
			router.push("/home");
		}
	}, [props.user]);
	return (
		<div className="reg-container">
			<input
				type="text"
				placeholder="Enter your email"
				onChange={(e) => setEmail(e.target.value)}
			/>
			Email
			<input
				type="text"
				placeholder="Enter your password"
				onChange={(e) => setPassword(e.target.value)}
			/>
			Password
			<button type="submit" onClick={(e) => loginUser(e)}>
				login
			</button>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => {
	return {
		getState: (data) => {
			dispatch(getUser(data));
		},
	};
};
const mapStateToProps = (state) => {
	return {
		user: state.allUsers,
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
//export default Login;
