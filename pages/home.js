import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import axios from "axios";

import { getInitial } from "../actions";
import LeftSide from "../components/LeftSide";
import Main from "../components/Main";
import Bottom from "../components/Bottom";

export const home = (props) => {
	const [post, setPost] = useState([]);
	const router = useRouter();

	useEffect(() => {
		props.getInitial();
		getAllPost();
		if (props.user.user === null) {
			router.push("/login");
		}
	}, [post.length]);

	const getAllPost = async () => {
		const response = await axios.get("http://localhost:8000/post/get-post");
		setPost(response.data);
	};

	return (
		<>
			<div className="home-container">
				<div className="first-section">
					<LeftSide user={props.user} />
					<Main />
				</div>
				<h3>Developer Dashboard</h3>
				<Bottom post={post} getAllPost={getAllPost} />
			</div>
		</>
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
		user: state.allUsers,
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(home);
