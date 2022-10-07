//Department actions
import {
    DEPARTMENT_CREATE_REQUEST,
    DEPARTMENT_CREATE_SUCCESS,
    DEPARTMENT_CREATE_FAIL,
    DEPARTMENT_CREATE_RESET,
} from "../Constants/DepartmentConstants";

export const createDepartment =
    (departmentDetails) => async (dispatch, getState) => {
        dispatch({
            type: DEPARTMENT_CREATE_REQUEST,
            payload: departmentDetails,
        });
        try {
            const {
                userSignin: { userInfo },
            } = getState();
            const { data } = await Axios.post(
                "/api/departments",
                departmentDetails,
                {
                    headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                    },
                }
            );
            dispatch({
                type: DEPARTMENT_CREATE_SUCCESS,
                payload: data.department,
            });
        } catch (error) {
            dispatch({
                type: DEPARTMENT_CREATE_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    };
