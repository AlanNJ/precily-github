import React from "react";

export const LeftSide = (props) => {
	return (
		<div className="leftside">
			<h2>On a mission of being India's largest AI hub</h2>
			<img src="images/drone.svg" />
			<div className="card">
				<div className="profile-image"></div>
				{props.user && props.user.user && (
					<>
						{" "}
						<p>
							Welcome back, <b>{props.user.user.user.name}</b>
						</p>
						<p>Fullstack Developer</p>
						<p>Working since july 2021</p>
					</>
				)}
			</div>
			<h1>Go to developer Dashboard</h1>
		</div>
	);
};
export default LeftSide;
