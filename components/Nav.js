import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { emptyUser, getInitial } from "../actions";
import { BsDashSquare } from "react-icons/bs";
import ScrollTo, { scrollIntoView } from "react-scroll-into-view";

export const Nav = (props) => {
	const router = useRouter();
	useEffect(() => {
		props.getInitial();
	}, [props.user && props.user.user && props.user.user.user]);
	console.log();
	const emptyUser = () => {
		props.emptyUser();
		router.push("/login");
	};
	const register = () => {
		router.push("/");
	};
	const login = () => {
		router.push("/login");
	};
	//console.log(props.user.user);

	return (
		<div className="navbar">
			{props.user && props.user.user ? (
				<>
					<li>Precily</li>
					<ScrollTo selector=".listings">
						<li>Dashboard</li>
					</ScrollTo>

					<li onClick={emptyUser}>logout</li>
				</>
			) : (
				<>
					<li onClick={login}>Login</li>
					<li onClick={register}>Register</li>
				</>
			)}
		</div>
	);
};
const mapDispatchToProps = (dispatch) => {
	return {
		getState: (data) => {
			dispatch(getUser(data));
		},
		getInitial: () => {
			dispatch(getInitial());
		},
		emptyUser: () => {
			dispatch(emptyUser());
		},
	};
};
const mapStateToProps = (state) => {
	return {
		user: state.allUsers.user,
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
