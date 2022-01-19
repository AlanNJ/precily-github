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
	const [content, setContent] = useState();
	const [post, setPost] = useState([]);
	const [currentPost, setCurrentPost] = useState(null);
	const [update, setUpdate] = useState(false);
	const [updatedPost, setUpdatedPost] = useState();
	const router = useRouter();
	useEffect(() => {
		props.getInitial();
		getAllPost();
		if (props.user.user === null) {
			router.push("/login");
		}
	}, [post.length]);
	const addRepo = async (id) => {
		const data = await axios.post("http://localhost:8000/post/repo", {
			content,
		});
		getAllPost();
	};
	const getAllPost = async () => {
		const response = await axios.get("http://localhost:8000/post/get-post");
		setPost(response.data);
	};
	const deletePost = async (id) => {
		const res = await axios.delete(
			`http://localhost:8000/post/delete-post/${id}`
		);
		console.log(res.data);
		setPost([res.data]);
	};
	const getPostToUpdate = async (id) => {
		const res = await axios.get(
			`http://localhost:8000/post/get-single-post/${id}`
		);
		setUpdate(true);
		setCurrentPost(res.data.post);
	};

	const updatePost = async (id) => {
		const res = await axios.put(
			`http://localhost:8000/post/update-post/${currentPost._id}`,
			{ updatedPost }
		);
		console.log(res);
		setUpdate(false);
		getAllPost();
	};
	//console.log(props.user.user._id);
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
