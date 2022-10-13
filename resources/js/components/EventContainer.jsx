import React, { useContext } from "react";
import EventCard from "./EventCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEventByDepartment, getEvents } from "../Store/Actions/EventAction";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";

function EventContainer() {
    const dispatch = useDispatch();
    // const  evnts =
    const eventList = useSelector((state) => state.eventList);
    const { loading, error, events } = eventList;
    console.log(events);

    const deptEvent = useSelector((state) => state.eventDept);
    const { loading: loadingDept, error: errorDept, evnts } = deptEvent;

    console.log("departments", evnts);

    const userInfo = useSelector((state) => state.userInfo.userInfo);
    const { user } = userInfo;
    console.log(user);

    let list = [];

    useEffect(() => {
        if (user.isAdmin) {
            dispatch(getEvents());
        } else {
            dispatch(getEventByDepartment(user.department_id));
            console.log("first");
        }
    }, []);

    // console.log(events);
    return (
        <div className=" events-container min-h-fit">
            <h2>Events</h2>
            <Link to="/addevent">
                <button className="btn bg-blue-700 btn-primary create-event-btn">
                    Create Event
                </button>
            </Link>

            <div className="event-cards ">
                {events && events.length > 0 ? (
                    events.map((event) => (
                        <Link key={event.id} to={`/events/${event.id}`}>
                            <EventCard
                                poster={event.poster}
                                desc={event.description}
                                name={event.name}
                                id={event.id}
                                category={event.category.name}
                                created_by={event.created_by?.name}
                                start_date={event.start_date}
                            />
                        </Link>
                    ))
                ) : (
                    <h1>No Events</h1>
                )}

                {evnts && evnts.length > 0
                    ? evnts.map((event) => (
                          <Link key={event.id} to={`/events/${event.id}`}>
                              <EventCard
                                  desc={event.description}
                                  name={event.name}
                                  id={event.id}
                                  category={event.category.name}
                                  created_by={event.created_by?.name}
                                  start_date={event.start_date}
                              />
                          </Link>
                      ))
                    : null}
            </div>
        </div>
    );
}

export default EventContainer;
