import axios from "axios";

const CONNECTION_PORT = process.env.REACT_APP_CONNECTION_PORT;

const url = `http://localhost:${CONNECTION_PORT}/posts`;

export const fetchPosts = () => axios.get(url);