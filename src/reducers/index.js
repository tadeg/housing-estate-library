import { combineReducers } from "redux";
import workersReducer from "./workersReducer";
import followersReducer from "./followersReducers";

// import reducer2 from "./Reducer2";
// import reducer3 from "./Reducer3";

export default combineReducers ({
    workersReducer,
    followersReducer
    //reducer2,
    //reducer3
});