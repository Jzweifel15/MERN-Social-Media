import axios from "axios";

const CONNECTION_PORT = process.env.REACT_APP_CONNECTION_PORT;

const url = `http://localhost:${CONNECTION_PORT}/posts`;

export const fetchPosts = () => axios.get(url);

// This is API call is for creating a new post when a POST request is sent through the form. `axios.post()` requires two 
// params: 1). The URL; 2). The data we're sending
export const createPost = (newPost) => axios.post(url, newPost);