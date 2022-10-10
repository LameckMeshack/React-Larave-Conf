import {
    CREATE_FREQUENCY_REQUEST,
    CREATE_FREQUENCY_SUCCESS,
    CREATE_FREQUENCY_FAIL,
    LIST_FREQUENCY_REQUEST,
    LIST_FREQUENCY_SUCCESS,
    LIST_FREQUENCY_FAIL,
} from "../Constants/FrequencyConstants";

export const createFrequency = (name) => async (dispatch) => {
    try {
        dispatch({
            type: CREATE_FREQUENCY_REQUEST,
        });

        // const {
        //     userLogin: { userInfo },
        // } = getState();

        // const config = {
        //     headers: {
        //         userInfo,
        //         "Content-Type": "application/json",
        //         Authorization: `Bearer ${userInfo.token}`,
        //     },
        // };

        const { data } = await axios.post(
            "/api/frequencies",
            (name = { name })
        );

        dispatch({
            type: CREATE_FREQUENCY_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CREATE_FREQUENCY_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

// // getting all the frequency
export const getFrequencies = () => async (dispatch) => {
    dispatch({ type: LIST_FREQUENCY_REQUEST });
    try {
        const { data } = await axios.get("/api/frequencies");
        dispatch({ type: LIST_FREQUENCY_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: LIST_FREQUENCY_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
