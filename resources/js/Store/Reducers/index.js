import { combineReducers } from "redux";
import { userSigninReducer, userSignoutReducer } from "./UserReducers";
import { eventCreateReducer, eventDetailsReducer } from "./EventReducers";
import {
    departmentCreateReducer,
    depertmentListReducer,
} from "./DepartmentReducers";
import { roleCreateReducer, roleListReducer } from "./RoleReducer";
import { eventListReducer } from "./EventReducers";
import { activityCreateReducer, activityListReducer } from "./ActivityReducer";
import {
    frequencyCreateReducer,
    frequencyListReducer,
} from "./FrequencyReducers";
import { categoryCreateReducer, categoryListReducer } from "./CategoryReducers";

export const rootReducer = combineReducers({
    //user
    userInfo: userSigninReducer,
    signout: userSignoutReducer,
    //event
    eventCreate: eventCreateReducer,
    eventList: eventListReducer,
    event: eventDetailsReducer,
    //department
    departmentCreate: departmentCreateReducer,
    departments: depertmentListReducer,
    // role
    roleCreate: roleCreateReducer,
    roles: roleListReducer,
    //activity
    activityCreate: activityCreateReducer,
    activityList: activityListReducer,
    //frequency
    frequencyCreate: frequencyCreateReducer,
    frequencyList: frequencyListReducer,
    //category
    categoryCreate: categoryCreateReducer,
    categoryList: categoryListReducer,
});
