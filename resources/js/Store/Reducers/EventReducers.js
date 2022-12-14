import {
    EVENT_CREATE_REQUEST,
    EVENT_CREATE_SUCCESS,
    EVENT_CREATE_FAIL,
    EVENT_CREATE_RESET,
    EVENT_LIST_REQUEST,
    EVENT_LIST_SUCCESS,
    EVENT_LIST_FAIL,
    EVENT_DETAILS_SUCCESS,
    EVENT_DETAILS_FAIL,
    EVENT_DETAILS_REQUEST,
    EVENT_BY_DEPARTMENT_REQUEST,
    EVENT_BY_DEPARTMENT_SUCCESS,
    EVENT_BY_DEPARTMENT_FAIL,
} from "../Constants/EventConstants";

//event reducers
export const eventCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case EVENT_CREATE_REQUEST:
            return { loading: true };
        case EVENT_CREATE_SUCCESS:
            return { loading: false, success: true, event: action.payload };
        case EVENT_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case EVENT_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

// get all the events
export const eventListReducer = (state = { events: [] }, action) => {
    switch (action.type) {
        case EVENT_LIST_REQUEST:
            return { loading: true };
        case EVENT_LIST_SUCCESS:
            return { loading: false, events: action.payload };
        case EVENT_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

// get single event
export const eventDetailsReducer = (state = { event: {} }, action) => {
    switch (action.type) {
        case EVENT_DETAILS_REQUEST:
            return { loading: true };
        case EVENT_DETAILS_SUCCESS:
            return { loading: false, event: action.payload };
        case EVENT_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

// get event according to department
export const eventDepartmentReducer = (state = { envts: [] }, action) => {
    switch (action.type) {
        case EVENT_BY_DEPARTMENT_REQUEST:
            return { loading: true };
        case EVENT_BY_DEPARTMENT_SUCCESS:
            return { loading: false, envts: action.payload };
        case EVENT_BY_DEPARTMENT_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
