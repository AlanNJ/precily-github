import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { connect } from "react-redux";
import { Modal } from "antd";
import Link from "next/link";
import { toast } from "react-toastify";

export const Register = (props) => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("gdgdgdgdgdg");
	const [choice, setChoice] = useState("");
	const [ok, setOk] = useState(false);
	const [loading, setLoading] = useState(false);
	const [logged, setLogged] = useState("");
	const router = useRouter();
	const loginUser = async () => {
		if (!name || !phone || !email || !password) {
			toast.error("Please fill all the forms");
		} else {
			const data = await axios.post(
				"https://precily-dev-team.herokuapp.com/register",
				{
					name,
					phone,
					email,
					password,
				}
			);
			toast.success("Registration successfull");
		}
	};
	useEffect(() => {
		if (props.user.user) {
			router.push("/home");
		}
	}, [props.user]);
	return (
		<div className="reg-container">
			<input
				type="text"
				placeholder="Name"
				className="input"
				onChange={(e) => setName(e.target.value)}
			/>
			name
			<input
				type="text"
				placeholder="Email"
				onChange={(e) => setEmail(e.target.value)}
			/>
			email
			<input
				type="text"
				placeholder="Password"
				onChange={(e) => setPassword(e.target.value)}
			/>
			password
			<input
				type="text"
				placeholder="Phone.no"
				onChange={(e) => setPhone(e.target.value)}
			/>
			phone
			<button type="submit" onClick={(e) => loginUser(e)}>
				Submit
			</button>
			<div>
				<Modal
					title="congratulations"
					visible={ok}
					onCancel={() => setOk(false)}
					footer={null}
				>
					<p>You have successfully registered</p>
					<Link href="/login">
						<a>Login</a>
					</Link>
				</Modal>
			</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Register);
