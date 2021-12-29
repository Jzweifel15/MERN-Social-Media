import express from "express";

import { getPosts, createPost, updatePost, likePost, deletePost } from "../controllers/posts.js";    // importing our `server/controllers/posts.js` `getPosts` handler

const router = express.Router();

// This is the basic setup of a route. The `get()` func is used for making a GET request and takes two params: 1). The URL pattern;
// 2). A function to be executed if the GET request is successful - this func always accepts a `request` and `response` param
router.get("/", getPosts);

// The `post()` func is used for POST requests and accepts the same params as the `get()` func.
router.post("/", createPost);

// The `patch()` func is used for updating existing data found in the DB. It takes a single URL pattern, which will usually
// be `/:id` which the `:` indicates the URL pattern is dynamic and the `id` portion will be the unique ID of the data we're 
// trying to update, and the second param is a func we want to be called/performed when a PATCH request is made
router.patch("/:id", updatePost);
router.patch("/:id/likePost", likePost);

// The `delete()` func is used for deleting existing data found in the DB. It simply takes a URL pattern, which will typically
// be a single ID and a func we want to be called/performed when a DELETE request is made
router.delete("/:id", deletePost);

// Will always need to export the whole `router` so that we can import and use it in our `server/index.js` file
export default router;