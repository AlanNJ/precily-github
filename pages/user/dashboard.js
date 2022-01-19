import React, { useState, useEffect } from "react";

export const dashboard = () => {
	const [post, setPost] = useState();
    const createPost = () => {
        
    }
	return (
		<div>
			<textarea onChange={(e) => setPost(e.target.value)}></textarea>
			<button onClick={createPost}>post</button>
		</div>
	);
};
export default dashboard;
