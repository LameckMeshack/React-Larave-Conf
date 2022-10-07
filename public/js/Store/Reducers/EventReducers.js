import {
    EVENT_CREATE_REQUEST,
    EVENT_CREATE_SUCCESS,
    EVENT_CREATE_FAIL,
    EVENT_CREATE_RESET,
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
