import { combineReducers } from "redux";
import workersReducer from "./workersReducer";
import followersReducer from "./followersReducers";
import loginReducer from "./loginReducer";
import messageBagReducer from "./messageBagReducer";
// import reducer2 from "./Reducer2";
// import reducer3 from "./Reducer3";

export default combineReducers ({
    workersReducer,
    followersReducer,
    loginReducer,
    messageBagReducer
    //reducer2,
    //reducer3
});