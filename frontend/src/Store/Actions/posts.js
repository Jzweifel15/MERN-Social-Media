import * as api from "../API";

// Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: "FETCH_ALL", payload: data });
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

        dispatch({ type: "CREATE", payload: data });
    }
    catch(error) {
        console.log(error.message);
    }
}