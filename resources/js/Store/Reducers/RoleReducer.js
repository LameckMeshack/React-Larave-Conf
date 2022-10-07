//role reducer
import {
    CREATE_ROLE_REQUEST,
    CREATE_ROLE_SUCCESS,
    CREATE_ROLE_FAIL,
    CREATE_ROLE_RESET,
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
