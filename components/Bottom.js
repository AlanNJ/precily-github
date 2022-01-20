import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { MdSecurityUpdate, MdUpdate } from "react-icons/md";
import { toast } from "react-toastify";

export const Bottom = (props) => {
	// dectalring our states
	const [content, setContent] = useState();
	const [post, setPost] = useState([]);
	const [currentPost, setCurrentPost] = useState(null);
	const [update, setUpdate] = useState(false);
	const [updatedPost, setUpdatedPost] = useState();

	useEffect(() => {
		getAllPost();
	}, []);

	//function to get list of all posts present in database
	const getAllPost = async () => {
		const response = await axios.get(
			"https://precily-dev-team.herokuapp.com/post/get-post"
		);
		setPost(response.data);
	};

	//fuction to add the repository in the database
	const addRepo = async (id) => {
		if (!content) {
			toast.error("Please Enter the name of the repo");
		} else {
			const data = await axios.post(
				"https://precily-dev-team.herokuapp.com/post/repo",
				{
					content,
				}
			);
			setContent("");
			getAllPost();
			toast.success("Repository Added Successfully");
		}
	};

	//function to delete the post on click
	const deletePost = async (id) => {
		const res = await axios.delete(
			`https://precily-dev-team.herokuapp.com/post/delete-post/${id}`
		);
		console.log(res.data);
		setPost([res.data]);
		toast.success("Repository Deleted Successfully");
		getAllPost();
	};

	//function to trigger which post to update
	const getPostToUpdate = async (id) => {
		const res = await axios.get(
			`https://precily-dev-team.herokuapp.com/post/get-single-post/${id}`
		);
		setUpdate(true);
		setCurrentPost(res.data.post);
	};

	//function to update the triggered post
	const updatePost = async (e, id) => {
		if (!updatedPost) {
			toast.error("please enter updated name");
		} else {
			e.preventDefault();
			const res = await axios.put(
				`https://precily-dev-team.herokuapp.com/post/update-post/${currentPost._id}`,
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
