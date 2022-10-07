import {
    CREATE_ROLE_REQUEST,
    CREATE_ROLE_SUCCESS,
    CREATE_ROLE_FAIL,
    CREATE_ROLE_RESET,
} from "../Constants/RoleConstants";

//role craetion action

export const createRoleAction = (role) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CREATE_ROLE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.post("/api/roles", role, config);

        dispatch({
            type: CREATE_ROLE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CREATE_ROLE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
