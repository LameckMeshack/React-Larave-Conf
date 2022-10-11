import React from "react";
import { Link } from "react-router-dom";
function EventCard({ id, name, created_by, category, desc }) {
    return (
        <div className="card-link">
            <article className="event-card">
                <img
                    className="event-image"
                    src="https://picsum.photos/300/200"
                />
                <div className="article-details">
                    <h4 className="event-category">{category}</h4>
                    <h3 className="event-title">{name}</h3>
                    <p className="event-description">{desc} </p>
                    <p className="event-author">Organizer: {created_by}</p>
                </div>
            </article>
        </div>
    );
}

export default EventCard;
