import React from "react";
import EventCard from "./EventCard";

function EventContainer() {
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
