//role reducer
import {
    CREATE_ROLE_REQUEST,
    CREATE_ROLE_SUCCESS,
    CREATE_ROLE_FAIL,
    CREATE_ROLE_RESET,
    LIST_ROLE_REQUEST,
    LIST_ROLE_SUCCESS,
    LIST_ROLE_FAIL,
} from "../Constants/RoleConstants";

export const roleCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_ROLE_REQUEST:
            return { loading: true };
        case CREATE_ROLE_SUCCESS:
            return { loading: false, success: true, role: action.payload };
        case CREATE_ROLE_FAIL:
            return { loading: false, error: action.payload };
        case CREATE_ROLE_RESET:
            return {};
        default:
            return state;
    }
};

//rol
export const roleListReducer = (state = { roles: [] }, action) => {
    switch (action.type) {
        case LIST_ROLE_REQUEST:
            return { loading: true };
        case LIST_ROLE_SUCCESS:
            return { loading: false, roles: action.payload };
        case LIST_ROLE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
