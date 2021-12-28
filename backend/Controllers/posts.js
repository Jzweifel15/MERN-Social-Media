import express from "express";
import mongoose from "mongoose";

// Inside the `server/controllers` directory, we'll have a corresponding file for each file that we have in `server/routes`. This file's 
// purpose is to server as the handlers (the functions) for what happens when a specific route is called and for handling the specific 
// requests. This will keep the logic out of the `server/routes` files and keep them from getting too large.
import PostMessage from "../models/postMessage.js";

const router = express.Router();

// It is a wise idea to use a try-catch block in each function in the event something goes wrong for the action, we can properly handle
// the error. Also, each function is an asynchronous action, therefore we'll need to add the keyword `async` in front of the params list, as 
// well as add the keyword `await` in front of the CRUD functions that our model(s) will have access to through Mongoose
export const getPosts = async (request, response) => {
    try {
        const postMessages = await PostMessage.find();
        console.log(postMessages);

        response.status(200).json(postMessages);
    }
    catch(error) {
        response.status(404).json({ message: error.message });
    }
}

export const createPost = async (request, response) => {
    const { title, message, selectedFile, creator, tags } = request.body;
    const newPost = new PostMessage({ title, message, selectedFile, creator, tags });

    try {
        await newPost.save();

        response.status(201).json(newPost);
    }
    catch(error) {
        response.status(409).json({ message: error.message });
    }
}

export const updatePost = async (request, response) => {
    const { id: _id } = request.params;
    const post = request.body;      // It is in the `request.body` that we're recieving the updates from the Form

    if(!mongoose.Types.ObjectId.isValid(_id)) return response.status(404).send(`No post with that ID: ${_id}`);     // Checks if the `_id` is valid
    
    // If the ID is valid, the asynchronous `findByIdAndUpdate()` method is called. The method takes _ params: 1). The id (_id); 
    // 2). The updated data (in this case, post, which we need to spread with the _id); 3). The value `{ new: true }` so that we 
    // can actually receive the updated version of the post. Also, since it's an async func, the `await` keyword needs to go infront of it
    const updatedPost = { ...post, _id }
    await PostMessage.findByIdAndUpdate(_id, updatedPost, { new: true });

    response.json(updatedPost);
}

export const likePost = async (request, response) => {
    const { id: _id } = request.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return response.status(404).send(`No post with that ID: ${_id}`);

    const post = await PostMessage.findById(_id);
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { likeCount: post.likeCount + 1 }, { new: true });

    response.json(updatedPost);
}

export default router;