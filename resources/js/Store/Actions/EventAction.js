// events actions
import axios from "axios";
import {
    EVENT_CREATE_REQUEST,
    EVENT_CREATE_SUCCESS,
    EVENT_CREATE_FAIL,
    EVENT_CREATE_RESET,
    EVENT_LIST_REQUEST,
    EVENT_LIST_SUCCESS,
    EVENT_LIST_FAIL,
} from "../Constants/EventConstants";

export const createEvent = (eventDetails) => async (dispatch, getState) => {
    dispatch({ type: EVENT_CREATE_REQUEST, payload: event });
    try {
        const {
            userSignin: { userInfo },
        } = getState();
        const { data } = await axios.post("/api/events", event, {
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

// getting all the events
export const getEvents = () => async (dispatch) => {
    dispatch({ type: EVENT_LIST_REQUEST });
    try {
        const { data } = await Axios.get("/api/events");
        dispatch({ type: EVENT_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: EVENT_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
