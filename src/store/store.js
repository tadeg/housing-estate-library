import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

const middlewares = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;

