import mongoose from "mongoose";

// Creates a Mongoose Schema. In MongoDB we can create NoSQL documents that will tend to always look different. With a 
// a Mongoose Schema, we can create some uniformity with our NoSQL documents. The `Schema()` functions accepts a single 
// param, which is a JS object
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],             // The square brackets (`[]`) specify an array, so here we'll have an array of Strings
    selectedFile: String,
    likeCount: {                // The curly brackets (`{}`) allow us to specify additional info for a specific field
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

// Once we have defined a Schema, we have to turn it into a Model. The `mongoose.model()` func accepts two params: 
// 1). a String of the model name, which is usually the same as the variable name; 2). a Schema. Using Mongoose's 
// `model()` func will allow us to run necessary commands like `find`, `create`, `delete`, and `update`
const PostMessage = mongoose.model("PostMessage", postSchema);

// Lastly, we'll need to export the Model so we can have access to it elsewhere inside the project
export default PostMessage;