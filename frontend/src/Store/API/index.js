import axios from "axios";

const url = `http://localhost:${process.env.REACT_APP_CONNECTION_PORT}/posts`;

export const fetchPosts = () => axios.get(url);

// This is API call is for creating a new post when a POST request is sent through the form. `axios.post()` requires two 
// params: 1). The URL; 2). The data we're sending
export const createPost = (newPost) => axios.post(url, newPost);

//                                            `axios.patch(1. URL Pattern w/ ID, 2. The Updated Data)`         
export const updatePost = (id, updatedData) => axios.patch(`${url}/${id}`, updatedData);

// The API call for creating a like for the post with the specified ID. This would still be considered a PATCH request since we're
// updating a property for a post
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);