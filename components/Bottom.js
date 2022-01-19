import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { MdSecurityUpdate, MdUpdate } from "react-icons/md";
import { toast } from "react-toastify";

export const Bottom = (props) => {
	var count = 0;
	const [content, setContent] = useState();
	const [post, setPost] = useState([]);
	const [currentPost, setCurrentPost] = useState(null);
	const [update, setUpdate] = useState(false);
	const [updatedPost, setUpdatedPost] = useState();
	useEffect(() => {
		getAllPost();
	}, [post]);
	const getAllPost = async () => {
		const response = await axios.get(
			"https://precily-dev-team.herokuapp.com/post/get-post"
		);
		setPost(response.data);
	};
	const addRepo = async (id) => {
		if (!content) {
			toast.error("Please Enter the name of the repo");
		} else {
			const data = await axios.post("http://localhost:8000/post/repo", {
				content,
			});
			setContent("");
			getAllPost();
			toast.success("Repository Added Successfully");
		}
	};

	const deletePost = async (id) => {
		const res = await axios.delete(
			`http://localhost:8000/post/delete-post/${id}`
		);
		console.log(res.data);
		setPost([res.data]);
		toast.success("Repository Deleted Successfully");
	};
	const getPostToUpdate = async (id) => {
		const res = await axios.get(
			`http://localhost:8000/post/get-single-post/${id}`
		);
		setUpdate(true);
		setCurrentPost(res.data.post);
	};

	const updatePost = async (id) => {
		if (!updatedPost) {
			toast.error("please enter updated name");
		} else {
			const res = await axios.put(
				`http://localhost:8000/post/update-post/${currentPost._id}`,
				{ updatedPost }
			);
			console.log(res);
			setUpdate(false);
			getAllPost();
			MdSecurityUpdate("");

			toast.success("Repository Updated Successfully");
		}
	};
	return (
		<div className="bottom">
			{props.user && props.user.user && props.user.user.user && (
				<h1>Welcome back, {props.user.user.user.name}</h1>
			)}
			<h2>List of changes in Precily github main branch</h2>

			<input
				placeholder="Enter the repository"
				value={content}
				onChange={(e) => setContent(e.target.value)}
			/>
			<br />
			<button onClick={addRepo}>Add</button>
			{update && (
				<div className="update">
					{" "}
					<input
						value={updatedPost}
						onChange={(e) => setUpdatedPost(e.target.value)}
						placeholder="Enter Repo to update"
					/>
					<button onClick={updatePost}>Update</button>
					<span>or</span>
					<button className="cancel-button" onClick={(e) => setUpdate(false)}>
						Cancel
					</button>
				</div>
			)}

			{post !== null &&
				post.map((item) => (
					<div key={item._id} className="listings">
						<div>
							<h4 className="first-list-item">{item.content}</h4>
						</div>
						<div>
							<h4>{item.createdAt}</h4>
						</div>
						<div>
							<h4>{item.updatedAt}</h4>
						</div>

						<AiFillDelete
							onClick={() => deletePost(item._id)}
							className="delete"
						/>

						<MdUpdate
							onClick={() => getPostToUpdate(item._id)}
							className="update"
						></MdUpdate>
					</div>
				))}
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
export default connect(mapStateToProps, mapDispatchToProps)(Bottom);
