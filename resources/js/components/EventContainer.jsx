import React, { useContext } from "react";
import EventCard from "./EventCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../Store/Actions/EventAction";
import { AuthContext } from "../Context/AuthContext";

function EventContainer() {
    const dispatch = useDispatch();
    const eventList = useSelector((state) => state.eventList);
    const { loading, error, events } = eventList;
    // destructure events
    // const { events: envt } = events;
    console.log(events);

    const user = useSelector((state) => state.userInfo.userInfo);
    console.log(user);

    useEffect(() => {
        dispatch(getEvents());
    }, []);
    console.log(events);
    return (
        <div className=" events-container">
            {/* <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard /> */}
            {events && events.length > 0 ? (
                events.map((event) => <EventCard />)
            ) : (
                <h1>No Events</h1>
            )}
        </div>
    );
}

export default EventContainer;
