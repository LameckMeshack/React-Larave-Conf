import {
    DEPARTMENT_CREATE_REQUEST,
    DEPARTMENT_CREATE_SUCCESS,
    DEPARTMENT_CREATE_FAIL,
    DEPARTMENT_CREATE_RESET,
} from "../Constants/DepartmentConstants";

export const departmentCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case DEPARTMENT_CREATE_REQUEST:
            return { loading: true };
        case DEPARTMENT_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                department: action.payload,
            };
        case DEPARTMENT_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case DEPARTMENT_CREATE_RESET:
            return {};
        default:
            return state;
    }
};
