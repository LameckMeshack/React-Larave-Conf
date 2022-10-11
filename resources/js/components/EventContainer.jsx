import React, { useContext } from "react";
import EventCard from "./EventCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../Store/Actions/EventAction";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";

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
            <h2>Events</h2>
            <Link to="/addevent">
                <button className="btn bg-blue-700 btn-primary create-event-btn">
                    Create Event
                </button>
            </Link>

            <div className="event-cards">
                {events && events.length > 0 ? (
                    events.map((event) => (
                        <Link key={event.id} to={`/events/${event.id}`}>
                            <EventCard
                                desc={event.description}
                                name={event.name}
                                id={event.id}
                                // get  category from category table using event.category_id
                                category={event.category_id}
                                // get user name from the  user table using event.created_by
                                created_by={event.created_by}
                                // created_by={event.created_by}
                            />
                        </Link>
                    ))
                ) : (
                    <h1>No Events</h1>
                )}
            </div>
        </div>
    );
}

export default EventContainer;
