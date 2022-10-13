import {
    ACTIVITY_CREATE_REQUEST,
    ACTIVITY_CREATE_SUCCESS,
    ACTIVITY_CREATE_FAIL,
    ACTIVITY_CREATE_RESET,
    ACTIVITY_LIST_REQUEST,
    ACTIVITY_LIST_SUCCESS,
    ACTIVITY_LIST_FAIL,
} from "../Constants/ActivityConstants";

// create avtivity

export const createActivity = (activity) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ACTIVITY_CREATE_REQUEST,
        });

        // const {
        //     userLogin: { userInfo },
        // } = getState();

        // const config = {
        //     headers: {
        //         "Content-Type": "application/json",
        //         Authorization: `Bearer ${userInfo.token}`,
        //     },
        // };

        const { data } = await axios.post(
            `/api/activities`,
            activity
            // config
        );

        dispatch({
            type: ACTIVITY_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ACTIVITY_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

// getting all the activities
export const getActivities = () => async (dispatch) => {
    dispatch({ type: ACTIVITY_LIST_REQUEST });
    try {
        const { data } = await axios.get("/api/activities");
        dispatch({ type: ACTIVITY_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: ACTIVITY_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
