import { FETCH_FOLLOWERS_INPROGRESS } from "./followersActionsTypes";
import { FETCH_FOLLOWERS_SUCCESS } from "./followersActionsTypes";
import { FETCH_FOLLOWERS_ERROR } from "./followersActionsTypes";


export const fetchFollowersInProgress = () => {
    return {
        type: FETCH_FOLLOWERS_INPROGRESS
    };
};

export const fetchFollowersSuccess = followers => {
    return {
        type: FETCH_FOLLOWERS_SUCCESS,
        followers: followers
    };
};

export const fetchFollowersError = error => {
    return {
        type: FETCH_FOLLOWERS_ERROR,
        error: error
    };
};