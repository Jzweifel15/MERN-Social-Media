import * as api from "../API/index.js";
import { FETCH_POSTS, CREATE_POST, UPDATE_POST, DELETE_POST, LIKE_POST } from "./actionTypes";

// Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();        // This is making a GET request to the server to fetch all existing posts

        dispatch({ type: FETCH_POSTS, payload: data });
    }
    catch(error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);    // This is making the POST API request to our backend server

        dispatch({ type: CREATE_POST, payload: data });
    }
    catch(error) {
        console.log(error.message);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);    // This is making the PATCH request to the server

        dispatch({ type: UPDATE_POST, payload: data });
    }
    catch(error) {
        console.log(error.message);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);        // Making a PATCH request to the server to add 1 to the like count

        dispatch({ type: LIKE_POST, payload: data });
    }
    catch(error) {
        console.log(error.message);
    }
} 

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);               // Making a DELETE request to the server to delete the specified post

        dispatch({ type: DELETE_POST, payload: id });
    }
    catch(error) {
        console.log(error.message);
    }
}