import {
    FETCH_FOLLOWERS_INPROGRESS,
    FETCH_FOLLOWERS_SUCCESS,
    FETCH_FOLLOWERS_ERROR
} from "../actions/followersActionsTypes";

const initialState = {
    inprogress: false,
    error: null,
    followers: []
};


const followersReducer = (state = initialState, action) => {

    if (action.type === FETCH_FOLLOWERS_INPROGRESS) {
        return {
            ...state,
            inprogress: true
        };
    }

    else if (action.type === FETCH_FOLLOWERS_SUCCESS) {
        return {
            ...state,
            inprogress: false,
            followers: action.followers
        };
    }

    else if (action.type === FETCH_FOLLOWERS_ERROR) {
        return {
            ...state,
            inprogress: false,
            error: action.error
        };
    }
    return state;
};

export default followersReducer;
