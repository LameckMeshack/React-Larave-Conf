import { combineReducers } from "redux";
import { userSigninReducer } from "./UserReducers";
import { eventCreateReducer } from "./EventReducers";
import { departmentCreateReducer } from "./DepartmentReducers";
import { roleCreateReducer } from "./RoleReducer";
import { eventListReducer } from "./EventReducers";

export const rootReducer = combineReducers({
    //user
    userInfo: userSigninReducer,
    //event
    eventCreate: eventCreateReducer,
    eventList: eventListReducer,
    //department
    departmentCreate: departmentCreateReducer,
    // role
    roleCreate: roleCreateReducer,
});
