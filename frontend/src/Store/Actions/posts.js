import * as api from "../API/index.js";
import { FETCH_POSTS, CREATE_POST, UPDATE_POST, DELETE_POST, LIKE_POST } from "./actionTypes";

// Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: FETCH_POSTS, payload: data });
    }
    catch(error) {
        console.log(error.message);
    }

    // const action = { type: "FETCH_ALL", payload: [] }
    // dispatch(action);
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);    // This is making a POST API request to our backend server

        dispatch({ type: CREATE_POST, payload: data });
    }
    catch(error) {
        console.log(error.message);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: UPDATE_POST, payload: data });
    }
    catch(error) {
        console.log(error.message);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);

        dispatch({ type: LIKE_POST, payload: data });
    }
    catch(error) {
        console.log(error.message);
    }
} 