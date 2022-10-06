import { combineReducers } from "redux";
import { userSigninReducer } from "./UserReducers";

export const rootReducer = combineReducers({
    userInfo: userSigninReducer,
});
