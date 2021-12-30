import axios from "axios";

const url = `http://localhost:${process.env.REACT_APP_CONNECTION_PORT}/posts`;

export const fetchPosts = () => axios.get(url);

// This is API call is for creating a new post when a POST request is sent through the form. `axios.post()` requires two 
// params: 1). The URL of the server the DB is running on; 2). The data we're sending
export const createPost = (newPost) => axios.post(url, newPost);

// The API call for updating/editing an existing post. This type of request will be a PATCH request and we'll use the 
// `axios.patch()` func, which requires two params: 1). The URL of the server the DB is running on, plus we'll want to 
// append the ID to specify we're updating a post with the requested ID (Example: http://localhost:CONNECTION_PORT/posts/3); 
// 2). The Updated Data
export const updatePost = (id, updatedData) => axios.patch(`${url}/${id}`, updatedData);

// The API call for creating a like for the post with the specified ID. This would still be considered a PATCH request since we're
// updating a property for a post
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);

// The API call for making a delete request. All we'll need is the URL of the server our DB is running on and the ID of the post
// we wish to delete
export const deletePost = (id) => axios.delete(`${url}/${id}`);