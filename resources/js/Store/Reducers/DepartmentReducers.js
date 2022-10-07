import {
    DEPARTMENT_CREATE_REQUEST,
    DEPARTMENT_CREATE_SUCCESS,
    DEPARTMENT_CREATE_FAIL,
    DEPARTMENT_CREATE_RESET,
    DEPARTMENT_LIST_SUCCESS,
    DEPARTMENT_LIST_FAIL,
    DEPARTMENT_LIST_REQUEST,
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

export const depertmentListReducer = (state = { departments: [] }, action) => {
    switch (action.type) {
        case DEPARTMENT_LIST_REQUEST:
            return { loading: true };
        case DEPARTMENT_LIST_SUCCESS:
            return { loading: false, departments: action.payload };
        case DEPARTMENT_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
