import React from "react";
import { Link } from "react-router-dom";
function EventCard({
    id,
    name,
    created_by,
    category,
    desc,
    start_date,
    poster,
}) {
    return (
        <div className="card-link bg-green-700 ">
            <article className="event-card bg-green-100 ">
                <img
                    className="event-image"
                    // src="https://picsum.photos/300/200"
                    src={`../../uploads/posters/${poster}`}
                />
                <div className="article-details">
                    <h4 className="event-category">{category}</h4>
                    <h3 className="event-title">{name}</h3>
                    <p className="event-description">{desc} </p>
                    <p className="event-author">Organizer: {created_by}</p>
                    {/* date */}
                    <small>{start_date}</small>
                </div>
            </article>
        </div>
    );
}

export default EventCard;
