//Department actions
import axios from "axios";
import {
    DEPARTMENT_CREATE_REQUEST,
    DEPARTMENT_CREATE_SUCCESS,
    DEPARTMENT_CREATE_FAIL,
    DEPARTMENT_CREATE_RESET,
    DEPARTMENT_LIST_REQUEST,
    DEPARTMENT_LIST_SUCCESS,
    DEPARTMENT_LIST_FAIL,
} from "../Constants/DepartmentConstants";

// export const createDepartment =
//     (departmentDetails) => async (dispatch, getState) => {
//         dispatch({
//             type: DEPARTMENT_CREATE_REQUEST,
//             payload: departmentDetails,
//         });
//         try {
//             // const {
//             //     userSignin: { userInfo },
//             // } = getState();
//             const { data } = await axios.post(
//                 "/api/departments",
//                 departmentDetails
//                 // {
//                 //     headers: {
//                 //         Authorization: `Bearer ${userInfo.token}`,
//                 //     },
//                 // }
//             );
//             dispatch({
//                 type: DEPARTMENT_CREATE_SUCCESS,
//                 payload: data.department,
//             });
//         } catch (error) {
//             dispatch({
//                 type: DEPARTMENT_CREATE_FAIL,
//                 payload:
//                     error.response && error.response.data.message
//                         ? error.response.data.message
//                         : error.message,
//             });
//         }
//     };

export const createDepartment = (departmentDetails) => async (dispatch) => {
    try {
        dispatch({
            type: DEPARTMENT_CREATE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                userInfo,
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.post(
            "/api/departments",
            departmentDetails,
            config
        );

        dispatch({
            type: DEPARTMENT_CREATE_SUCCESS,
            payload: data,
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

// getting all department

export const getDepartments = () => async (dispatch) => {
    dispatch({ type: DEPARTMENT_LIST_REQUEST });
    try {
        const { data } = await axios.get("/api/departments");
        dispatch({ type: DEPARTMENT_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: DEPARTMENT_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
