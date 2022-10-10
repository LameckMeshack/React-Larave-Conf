// events actions
import axios from "axios";
import { useContext } from "react";

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
        // const {
        //     userSignin: { userInfo },
        // } = getState();
        // const { data } = await axios.post(
        //     "/api/events",
        //     { eventDetails }
        // send form data in an axios post request
        const { data } = await axios.post("/api/events", eventDetails);

        // {
        //     name,
        //     description,
        //     start_date,
        //     lead_date,
        //     venue,
        //     department_id,
        //     frequency_id,

        //     category_id,
        //     activity_id,
        //     poster,
        //     created_by,
        // }

        // , {
        //     headers: {
        //         Authorization: `Bearer ${userInfo.token}`,
        //     },
        // }
        // );
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
        const { data } = await axios.get("/api/events");
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
