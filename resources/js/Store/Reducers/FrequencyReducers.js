import {
    CREATE_FREQUENCY_REQUEST,
    CREATE_FREQUENCY_SUCCESS,
    CREATE_FREQUENCY_FAIL,
    LIST_FREQUENCY_REQUEST,
    LIST_FREQUENCY_SUCCESS,
    LIST_FREQUENCY_FAIL,
} from "../Constants/FrequencyConstants";

export const frequencyCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_FREQUENCY_REQUEST:
            return { loading: true };
        case CREATE_FREQUENCY_SUCCESS:
            return { loading: false, success: true, frequency: action.payload };
        case CREATE_FREQUENCY_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const frequencyListReducer = (state = { frequencies: [] }, action) => {
    switch (action.type) {
        case LIST_FREQUENCY_REQUEST:
            return { loading: true, frequencies: [] };
        case LIST_FREQUENCY_SUCCESS:
            return {
                loading: false,
                frequencies: action.payload,
            };
        case LIST_FREQUENCY_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
