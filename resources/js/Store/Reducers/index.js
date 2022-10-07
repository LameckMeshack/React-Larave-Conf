import { combineReducers } from "redux";
import { userSigninReducer, userSignoutReducer } from "./UserReducers";
import { eventCreateReducer } from "./EventReducers";
import {
    departmentCreateReducer,
    depertmentListReducer,
} from "./DepartmentReducers";
import { roleCreateReducer, roleListReducer } from "./RoleReducer";
import { eventListReducer } from "./EventReducers";
import { activityCreateReducer, activityListReducer } from "./ActivityReducer";

export const rootReducer = combineReducers({
    //user
    userInfo: userSigninReducer,
    signout: userSignoutReducer,
    //event
    eventCreate: eventCreateReducer,
    eventList: eventListReducer,
    //department
    departmentCreate: departmentCreateReducer,
    departments: depertmentListReducer,
    // role
    roleCreate: roleCreateReducer,
    roles: roleListReducer,

    //activity
    activityCreate: activityCreateReducer,
    activityList: activityListReducer,
});
