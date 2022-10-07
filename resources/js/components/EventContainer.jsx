import React from "react";
import EventCard from "./EventCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../Store/Actions/EventAction";

function EventContainer() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getEvents);
    }, []);

    return (
        <div className=" events-container">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
        </div>
    );
}

export default EventContainer;
