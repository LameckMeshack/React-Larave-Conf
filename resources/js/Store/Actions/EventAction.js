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
    EVENT_DETAILS_SUCCESS,
    EVENT_DETAILS_FAIL,
    EVENT_DETAILS_REQUEST,
} from "../Constants/EventConstants";

export const createEvent = (eventDetails) => async (dispatch, getState) => {
    dispatch({ type: EVENT_CREATE_REQUEST, payload: event });
    try {
        const { data } = await axios.post("/api/events", eventDetails);

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

//get single event
export const getSingleEvent = (id) => async (dispatch) => {
    dispatch({ type: EVENT_DETAILS_REQUEST });
    try {
        const { data } = await axios.get(`/api/events/${id}`);
        dispatch({ type: EVENT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: EVENT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
