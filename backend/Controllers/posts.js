// Inside the `server/controllers` directory, we'll have a corresponding file for each file that we have in `server/routes`. This file's 
// purpose is to server as the handlers (the functions) for what happens when a specific route is called and for handling the specific 
// requests. This will keep the logic out of the `server/routes` files and keep them from getting too large.
import PostMessage from "../models/postMessage.js";

// It is a wise idea to use a try-catch block in each function in the event something goes wrong for the action, we can properly handle
// the error. Also, each function is an asynchronous action, therefore we'll need to add the keyword `async` in from the params list, as 
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
    const body = request.body;
    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        response.status(201).json(newPost);
    }
    catch(error) {
        response.status(409).json({ message: error.message });
    }
}