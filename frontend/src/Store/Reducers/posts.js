import { FETCH_POSTS, CREATE_POST, UPDATE_POST, DELETE_POST } from "../Actions/actionTypes";

const initialState = {
    posts: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POSTS:
            return action.payload;
        case CREATE_POST:
            return [...state.posts, action.payload];
        case UPDATE_POST:
            return state.posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case DELETE_POST:
            return state;
        default:
            return state;
    }
}