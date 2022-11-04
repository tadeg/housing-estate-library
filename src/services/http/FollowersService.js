import routes from "./../../api";
import {
    fetchFollowersInProgress,
    fetchFollowersSuccess,
    fetchFollowersError
} from "../../actions/followersActions";

const fetchAllFollowers = () => {

    return dispatch => {
        dispatch(fetchFollowersInProgress());
        fetch(routes.server + routes.route.api.followers.get)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw res.error;
                }
                dispatch(fetchFollowersSuccess(res.data));
                return res.followers;
            })
            .catch(error => {
                dispatch(fetchFollowersError(error));
            });
    }
};
 
export default fetchAllFollowers;
