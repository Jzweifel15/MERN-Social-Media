import express from "express";

import { getPosts, createPost } from "../controllers/posts.js";    // importing our `server/controllers/posts.js` `getPosts` handler

const router = express.Router();

// This is the basic setup of a route. The `get()` func is used for making a GET request and takes two params: 1). The URL pattern;
// 2). A function to be executed if the GET request is successful - this func always accepts a `request` and `response` param
router.get("/", getPosts);

// The `post()` func is used for POST requests and accepts the same params as the `get()` func.
router.post("/", createPost);

// Will always need to export the whole `router` so that we can import and use it in our `server/index.js` file
export default router;