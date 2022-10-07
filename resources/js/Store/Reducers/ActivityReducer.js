import {
    ACTIVITY_CREATE_REQUEST,
    ACTIVITY_CREATE_SUCCESS,
    ACTIVITY_CREATE_FAIL,
    ACTIVITY_CREATE_RESET,
    ACTIVITY_LIST_REQUEST,
    ACTIVITY_LIST_SUCCESS,
    ACTIVITY_LIST_FAIL,
} from "../Constants/ActivityConstants";

export const activityCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTIVITY_CREATE_REQUEST:
            return { loading: true };
        case ACTIVITY_CREATE_SUCCESS:
            return { loading: false, success: true, activity: action.payload };
        case ACTIVITY_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case ACTIVITY_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

export const activityListReducer = (state = { activities: [] }, action) => {
    switch (action.type) {
        case ACTIVITY_LIST_REQUEST:
            return { loading: true };
        case ACTIVITY_LIST_SUCCESS:
            return { loading: false, activities: action.payload };
        case ACTIVITY_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
