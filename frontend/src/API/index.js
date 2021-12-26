import axios from "axios";
import { config } from "dotenv";

// A function from the `dotenv` package. Used for finding the environment variables inside the .env file
config({ path: "../.env" });

const url = `http://localhost:${process.env.CONNECTION_PORT}/posts`;

export const fetchPosts = () => axios.get(url);