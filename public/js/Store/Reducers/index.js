import { combineReducers } from "redux";
import { userSigninReducer } from "./UserReducers";
import { eventCreateReducer } from "./EventReducers";

export const rootReducer = combineReducers({
    //user
    userInfo: userSigninReducer,
    //event
    eventCreate: eventCreateReducer,
});
