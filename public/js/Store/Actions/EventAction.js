// events actions
import {
    EVENT_CREATE_REQUEST,
    EVENT_CREATE_SUCCESS,
    EVENT_CREATE_FAIL,
    EVENT_CREATE_RESET,
} from "../Constants/EventConstants";

export const createEvent = (eventDetails) => async (dispatch, getState) => {
    dispatch({ type: EVENT_CREATE_REQUEST, payload: event });
    try {
        const {
            userSignin: { userInfo },
        } = getState();
        const { data } = await Axios.post("/api/events", event, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        });
        dispatch({ type: EVENT_CREATE_SUCCESS, payload: data.event });
    } catch (error) {
        dispatch({
            type: EVENT_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
